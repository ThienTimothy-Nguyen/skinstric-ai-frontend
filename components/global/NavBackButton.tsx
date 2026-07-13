import Link from "next/link";
import Image from "next/image";

type NavBackButtonProps = {
  prevStep: {
    pathName: string,
    nextButton: string | null,
  }
}

function NavBackButton({ prevStep }: NavBackButtonProps) {
  return (
    <Link
      href={prevStep.pathName}
      className="flex justify-between items-center gap-4 group" >
      <Image
        src='/arrow-button.svg'
        alt="Arrow button"
        width={20}
        height={20}
        loading="eager"
        style={{
          height: 'auto',
        }}
        className="hidden md:block w-14.5 group-hover:scale-110 transition-transform duration-400 ease-in-out" />
      <span className="hidden md:block text-sm font-semibold">BACK</span>

      <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] md:hidden">
        <span className="-rotate-45 text-xs font-semibold md:hidden">BACK</span>
      </div>
    </Link>
  )
}

export default NavBackButton