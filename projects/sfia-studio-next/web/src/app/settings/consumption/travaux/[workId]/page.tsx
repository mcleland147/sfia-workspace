import { FinOpsWorkDetailPanel } from "@/components/finops/FinOpsWorkDetailPanel";

export default async function FinOpsWorkDetailPage({
  params,
}: {
  params: Promise<{ workId: string }>;
}) {
  const { workId } = await params;
  return <FinOpsWorkDetailPanel workId={workId} />;
}