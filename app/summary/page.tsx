import DemographicsStats from "@/components/summary/DemographicsStats"
import SummaryHero from "@/components/summary/SummaryHero"

function SummaryPage() {
  return (
    <main className="w-full mt-18 relative flex flex-col">
      <SummaryHero />
      <DemographicsStats />
    </main>
  )
}

export default SummaryPage