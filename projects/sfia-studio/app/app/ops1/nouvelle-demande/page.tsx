import { NouvelleDemandePageClient } from "@/features/nouvelle-demande/NouvelleDemandePageClient";

/** Legacy OPS1 session surface — preserved during D1-C1 intake cutover. */
export default function Ops1NouvelleDemandePage() {
  return <NouvelleDemandePageClient />;
}
