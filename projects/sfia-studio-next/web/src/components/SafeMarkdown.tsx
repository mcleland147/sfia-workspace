"use client";

/**
 * Minimal safe Markdown renderer — escapes HTML, no raw HTML/script execution.
 * Supports headings, lists, code fences, inline code, bold/italic, links, tables.
 */

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function safeHref(href: string): string | null {
  const t = href.trim();
  if (/^(https?:|mailto:|#|\/)/i.test(t) && !/^(javascript|data):/i.test(t)) return t;
  return null;
}

function inlineFormat(text: string): string {
  let s = escapeHtml(text);
  s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
  s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "<em>$1</em>");
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label, href) => {
    const h = safeHref(String(href));
    if (!h) return escapeHtml(String(label));
    return `<a href="${escapeHtml(h)}" rel="noopener noreferrer" target="_blank">${escapeHtml(String(label))}</a>`;
  });
  return s;
}

function renderMarkdown(md: string): string {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const out: string[] = [];
  let i = 0;
  let inCode = false;
  let codeBuf: string[] = [];
  let listBuf: string[] = [];
  let listOrdered = false;
  let tableBuf: string[][] = [];

  function flushList() {
    if (!listBuf.length) return;
    const tag = listOrdered ? "ol" : "ul";
    out.push(`<${tag}>${listBuf.map((li) => `<li>${inlineFormat(li)}</li>`).join("")}</${tag}>`);
    listBuf = [];
  }

  function flushTable() {
    if (tableBuf.length < 2) {
      for (const row of tableBuf) out.push(`<p>${inlineFormat(row.join(" | "))}</p>`);
      tableBuf = [];
      return;
    }
    const head = tableBuf[0];
    const body = tableBuf.slice(2); // skip separator
    out.push(
      "<table><thead><tr>" +
        head.map((c) => `<th>${inlineFormat(c.trim())}</th>`).join("") +
        "</tr></thead><tbody>" +
        body
          .map(
            (row) =>
              "<tr>" + row.map((c) => `<td>${inlineFormat(c.trim())}</td>`).join("") + "</tr>",
          )
          .join("") +
        "</tbody></table>",
    );
    tableBuf = [];
  }

  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("```")) {
      flushList();
      flushTable();
      if (inCode) {
        out.push(`<pre><code>${escapeHtml(codeBuf.join("\n"))}</code></pre>`);
        codeBuf = [];
        inCode = false;
      } else {
        inCode = true;
      }
      i++;
      continue;
    }
    if (inCode) {
      codeBuf.push(line);
      i++;
      continue;
    }

    if (/^\|.+\|$/.test(line.trim())) {
      flushList();
      tableBuf.push(line.trim().slice(1, -1).split("|"));
      i++;
      continue;
    }
    if (tableBuf.length) flushTable();

    const ul = line.match(/^[-*]\s+(.*)$/);
    const ol = line.match(/^\d+\.\s+(.*)$/);
    if (ul || ol) {
      if (listBuf.length && listOrdered !== Boolean(ol)) flushList();
      listOrdered = Boolean(ol);
      listBuf.push((ul?.[1] ?? ol?.[1] ?? "").trim());
      i++;
      continue;
    }
    flushList();

    if (/^---+$/.test(line.trim())) {
      out.push("<hr/>");
      i++;
      continue;
    }
    const h = line.match(/^(#{1,3})\s+(.*)$/);
    if (h) {
      const level = h[1].length;
      out.push(`<h${level}>${inlineFormat(h[2])}</h${level}>`);
      i++;
      continue;
    }
    if (!line.trim()) {
      out.push("");
      i++;
      continue;
    }
    out.push(`<p>${inlineFormat(line)}</p>`);
    i++;
  }
  flushList();
  flushTable();
  if (inCode) out.push(`<pre><code>${escapeHtml(codeBuf.join("\n"))}</code></pre>`);
  return out.join("\n");
}

export function SafeMarkdown({ content, className }: { content: string; className?: string }) {
  const html = renderMarkdown(content || "");
  return (
    <div
      className={`safe-md text-sm leading-relaxed ${className ?? ""}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
