import { ProductShell, ProjectsPage } from "@/features/pre-m6-product-ui";

export default function StudioHomePage() {
  return (
    <ProductShell activeNav="projects">
      <ProjectsPage />
    </ProductShell>
  );
}
