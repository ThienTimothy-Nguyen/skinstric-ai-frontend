import DiamondBackground from "@/components/testing/DiamondBackground";
import UserInfoInput from "@/components/testing/UserInfoInput";


function TestingPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden relative flex justify-center items-center">
      <span className="absolute top-16 left-9 text-left font-semibold text-xs">TO START ANALYSIS</span>
      <DiamondBackground />
      <UserInfoInput />
    </main>
  )
}

export default TestingPage