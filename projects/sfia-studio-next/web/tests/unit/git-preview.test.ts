import { beforeEach, describe, expect, it } from "vitest";
import {
  buildPreviewAvailable,
  buildPreviewUnavailable,
  extensionLabelFromPath,
  resolveGitFileOpenUrl,
} from "@/domains/integrations/git-preview";
import { permalinkOrNull, buildGitFilePermalink } from "@/domains/integrations/resource-service";
import {
  getScriptedGitHubProvider,
  resetScriptedStore,
} from "@/domains/integrations/scripted-github-provider";

describe("git-preview — PREVIEW capability helpers", () => {
  it("extensionLabelFromPath is display-only and safe", () => {
    expect(extensionLabelFromPath("docs/a.pdf")).toBe("PDF");
    expect(extensionLabelFromPath("x.DOCX")).toBe("DOCX");
    expect(extensionLabelFromPath("noext")).toBe("");
    expect(extensionLabelFromPath(".hidden")).toBe("");
    expect(extensionLabelFromPath("a.verylongextensionname")).toBe("");
  });

  it("PREVIEW-04/05/06 — unavailable motifs are dynamic, not PDF-hardcoded", () => {
    const pdf = buildPreviewUnavailable("Diagramme.pdf", "BINARY_CONTENT");
    expect(pdf.title).toBe("Aperçu indisponible");
    expect(pdf.motifLabel).toBe("PDF · FICHIER BINAIRE");
    expect(pdf.formatLabel).toBe("FICHIER PDF");
    expect(pdf.message).toContain("ne peut pas être affiché");

    const docx = buildPreviewUnavailable("DAT.docx", "BINARY_CONTENT");
    expect(docx.motifLabel).toBe("DOCX · FICHIER BINAIRE");
    expect(docx.motifLabel).not.toContain("PDF");

    const zip = buildPreviewUnavailable("archive.zip", "BINARY_CONTENT");
    expect(zip.motifLabel).toBe("ZIP · FICHIER BINAIRE");

    const unknown = buildPreviewUnavailable("blob_no_ext", "BINARY_CONTENT");
    expect(unknown.motifLabel).toBe("FICHIER BINAIRE");
  });

  it("PREVIEW-07 — too_large and encoding motifs", () => {
    const large = buildPreviewUnavailable("big.bin", "FILE_TOO_LARGE");
    expect(large.reason).toBe("FILE_TOO_LARGE");
    expect(large.motifLabel).toContain("TROP VOLUMINEUX");
    expect(large.message).toContain("limite d’aperçu");

    const enc = buildPreviewUnavailable("weird.dat", "UNSUPPORTED_ENCODING");
    expect(enc.motifLabel).toContain("ENCODAGE");
  });

  it("compatible renderers remain available", () => {
    expect(buildPreviewAvailable("markdown")).toEqual({
      available: true,
      renderer: "markdown",
    });
    expect(buildPreviewAvailable("text")).toEqual({
      available: true,
      renderer: "text",
    });
  });

  it("PREVIEW-09 — openUrl prefers permalink; never uses blobSha", () => {
    const commit = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    const blob = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
    const permalink = permalinkOrNull({
      fullName: "mcleland147/chantiers360",
      commitSha: commit,
      commitShaVerified: true,
      blobSha: blob,
      path: "Diagramme BPMN_BatiNova.pdf",
    });
    expect(permalink).toBe(
      buildGitFilePermalink(
        "mcleland147/chantiers360",
        commit,
        "Diagramme BPMN_BatiNova.pdf",
      ),
    );
    expect(permalink).not.toContain(blob);

    const viaPermalink = resolveGitFileOpenUrl({
      fullName: "mcleland147/chantiers360",
      path: "Diagramme BPMN_BatiNova.pdf",
      requestedRef: "main",
      permalink,
      blobSha: blob,
    });
    expect(viaPermalink.kind).toBe("permalink");
    expect(viaPermalink.href).toBe(permalink);
    expect(viaPermalink.evolvingRef).toBe(false);

    const browse = resolveGitFileOpenUrl({
      fullName: "mcleland147/chantiers360",
      path: "docs/a.docx",
      requestedRef: "main",
      permalink: null,
      blobSha: blob,
    });
    expect(browse.kind).toBe("ref_browse");
    expect(browse.evolvingRef).toBe(true);
    expect(browse.href).toContain("/blob/main/");
    expect(browse.href).toContain("docs/a.docx");
    expect(browse.href).not.toContain(blob);

    const refuseBlobAsRef = resolveGitFileOpenUrl({
      fullName: "mcleland147/chantiers360",
      path: "x.pdf",
      requestedRef: blob,
      permalink: null,
      blobSha: blob,
    });
    expect(refuseBlobAsRef.kind).toBe("none");
    expect(refuseBlobAsRef.href).toBeNull();
  });
});

describe("SCRIPTED binary → preview unavailable (not access error)", () => {
  beforeEach(() => {
    resetScriptedStore();
  });

  it("PREVIEW-04 — BINARY: content yields contentKind binary for any extension", async () => {
    const provider = getScriptedGitHubProvider();
    const pilotId = "pilot-preview-bin";
    const fullName = "acme/docs-projet";
    await provider.putFileContents({
      pilotId,
      fullName,
      path: "Diagramme.pdf",
      branch: "main",
      content: "BINARY:pdf-bytes",
      message: "add pdf",
    });
    const tip = await provider.getRefSha(pilotId, fullName, "main");
    const pdf = await provider.getFileContent(pilotId, fullName, "Diagramme.pdf", "main");
    expect(pdf.contentKind).toBe("binary");
    expect(pdf.content).toBe("");
    const preview = buildPreviewUnavailable("Diagramme.pdf", "BINARY_CONTENT");
    expect(preview.available).toBe(false);
    expect(preview.motifLabel).toBe("PDF · FICHIER BINAIRE");
    expect(pdf.sha.toLowerCase()).not.toBe(tip.toLowerCase());
  });

  it("PREVIEW-02 — text remains readable when content is UTF-8 text", async () => {
    const provider = getScriptedGitHubProvider();
    const pilotId = "pilot-preview-txt";
    const fullName = "acme/docs-projet";
    await provider.putFileContents({
      pilotId,
      fullName,
      path: "notes.txt",
      branch: "main",
      content: "hello text\n",
      message: "add txt",
    });
    const txt = await provider.getFileContent(pilotId, fullName, "notes.txt", "main");
    expect(txt.contentKind).toBe("text");
    expect(txt.content).toContain("hello");
    expect(buildPreviewAvailable("text").available).toBe(true);
  });
});
