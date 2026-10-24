import { notFound } from "next/navigation";
import { getProject, listProjectAudit } from "@/lib/d1/commands";
import { D1Error } from "@/lib/d1/errors";
import { denyLegacyProjectDeepLinkIfExclusive } from "@/lib/d1/legacyNavigation";
import { ProjectCockpitView } from "@/features/d1/ProjectCockpitView";

export const dynamic = "force-dynamic";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // D4 Option A: historical deep links are unavailable under OA-exclusive —
  // never map proj-* → prj:* and never open D1 to "find" a substitute.
  denyLegacyProjectDeepLinkIfExclusive();

  const { id } = await params;
  try {
    const project = getProject(id);
    const audit = listProjectAudit(id);
    return <ProjectCockpitView project={project} audit={audit} />;
  } catch (error) {
    if (error instanceof D1Error && error.code === "NOT_FOUND") {
      notFound();
    }
    throw error;
  }
}
