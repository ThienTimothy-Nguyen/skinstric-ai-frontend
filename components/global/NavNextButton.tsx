import Link from "next/link";
import Image from "next/image";
import { useUserActionAuthStore } from "@/store/UserActionAuthStore";

type NavNextButtonProps = {
  nextStep: {
    pathName: string,
    nextButton: string | null,
  },
  currentStep: {
    pathName: string,
    nextButton: string | null,
  }
}

function NavNextButton({ nextStep, currentStep }: NavNextButtonProps) {
  const userSaved = useUserActionAuthStore(state => state.userSaved);

  if (currentStep.pathName === '/testing' && !userSaved) return

  return (
    <Link
      href={nextStep.pathName}
      className="flex justify-between items-center gap-4 group" >

      <span className="hidden md:block text-sm font-semibold">{currentStep.nextButton}</span>

      <Image
        src='/arrow-button.svg'
        alt="Arrow button"
        width={20}
        height={20}
        loading="eager"
        style={{
          height: 'auto',
        }}
        className="hidden md:block w-14.5 rotate-180 group-hover:scale-110 transition-transform duration-400 ease-in-out" />

      <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] md:hidden">
        <span className="-rotate-45 text-xs font-semibold md:hidden">
          {
            currentStep.nextButton === "GET SUMMARY" ? "SUM" : currentStep.nextButton
          }
        </span>
      </div>
    </Link>
  )
}

export default NavNextButton