import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="global-container">
      <div className="row flex justify-between items-center">
        <div className="text-sm flex justify-between items-center">
          <Link href={'/'}>
            <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors px-4 py-2 font-semibold text-xs line-clamp-4 leading-4 text-[#1A1B1C] z-1000">SKINSTRIC</span>
          </Link>
          <figure className="flex justify-between items-center gap-2 text-[#1a1b1c83] text-opacity-70 font-semibold text-xs">
            <Image 
              src='/left-bracket.webp'
              alt="Left bracket"
              width={4}
              height={8} />
            <span className="text-gray-500 font-semibold">
              INTRO
            </span>
            <Image 
              src='/right-bracket.webp'
              alt="Left bracket"
              width={4}
              height={8} />
          </figure>
            
        </div>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-colors  disabled:pointer-events-none text-primary-foreground shadow hover:bg-primary/90 px-4 py-2 mx-4 scale-[0.8] text-[#FCFCFC] text-[10px] bg-[#1A1B1C] leading-4 cursor-default">
          ENTER CODE
        </button>
      </div>
    </header>
  )
}

export default Header