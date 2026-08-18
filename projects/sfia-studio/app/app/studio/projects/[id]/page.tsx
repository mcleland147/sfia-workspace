import {
  ProductShell,
  ProjectWorkspacePage,
} from "@/features/pre-m6-product-ui";

interface StudioProjectRouteProps {
  params: Promise<{ id: string }>;
}

export default async function StudioProjectRoute({
  params,
}: StudioProjectRouteProps) {
  const { id } = await params;
  const projectId = decodeURIComponent(id);

  return (
    <ProductShell
      activeNav="current"
      currentProjectHref={`/studio/projects/${encodeURIComponent(projectId)}`}
    >
      <ProjectWorkspacePage projectId={projectId} />
    </ProductShell>
  );
}
