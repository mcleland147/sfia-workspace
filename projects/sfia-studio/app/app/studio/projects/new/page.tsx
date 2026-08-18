import {
  NewProjectIntentionPage,
  ProductShell,
} from "@/features/pre-m6-product-ui";

export default function CreateStudioProjectPage() {
  return (
    <ProductShell activeNav="new">
      <NewProjectIntentionPage />
    </ProductShell>
  );
}
