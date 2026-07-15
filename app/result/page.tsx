import FaceScan from "@/components/result/FaceScan";
import FaceUpload from "@/components/result/FaceUpload";

function ResultPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden relative flex flex-col md:flex-row justify-center items-center">
      <span className="absolute top-16 left-9 text-left font-semibold text-xs">TO START ANALYSIS</span>
      <FaceScan />
      <FaceUpload />
    </main>
  )
}

export default ResultPage