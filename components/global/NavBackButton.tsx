import Link from "next/link";
import Image from "next/image";

type NavBackButtonProps = {
  prevStep: {
    pathName: string,
    nextButton: string | null,
  }
  currentStep: {
    pathName: string,
    nextButton: string | null,
  }
}

function NavBackButton({ 
  prevStep,
  currentStep 
}: NavBackButtonProps) {

  return (
    <Link
      href={prevStep.pathName}
      className="flex justify-between items-center gap-4 group" >
      <Image
        src={currentStep.pathName === "/camera/capture" ? "/arrow-button-white.svg" : "/arrow-button.svg"}
        alt="Arrow button"
        width={20}
        height={20}
        loading="eager"
        style={{
          height: 'auto',
        }}
        className="hidden md:block w-14.5 group-hover:scale-110 transition-transform duration-400 ease-in-out" />
      <span className="hidden md:block text-sm font-semibold">BACK</span>

      <div className={`relative w-12 h-12 flex items-center justify-center border rotate-45 scale-[1] md:hidden ${currentStep.pathName === "/camera/capture" ? "border-white" : "border-[#1A1B1C]"}`}>
        <span className="-rotate-45 text-xs font-semibold md:hidden">BACK</span>
      </div>
    </Link>
  )
}

export default NavBackButton