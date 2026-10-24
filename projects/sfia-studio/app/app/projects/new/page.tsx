import { redirectLegacyGenericEntryToStudioIfExclusive } from "@/lib/d1/legacyNavigation";
import { NewProjectForm } from "@/features/d1/NewProjectForm";

export default function NewProjectPage() {
  redirectLegacyGenericEntryToStudioIfExclusive();
  return <NewProjectForm />;
}
