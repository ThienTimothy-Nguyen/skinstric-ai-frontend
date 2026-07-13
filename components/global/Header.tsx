import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="global-container bg-transparent absolute top-0 left-0 w-full z-1000">
      <div className="row flex justify-between items-center">
        <div className="text-sm flex justify-between items-center">
          <Link href={'/'}>
            <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors px-4 py-2 font-semibold text-[10.5px] line-clamp-4 leading-4 text-[#1A1B1C]">
              SKINSTRIC
            </span>
          </Link>
          <figure className="flex justify-between items-center gap-1 text-[#1a1b1c83] text-opacity-70 font-semibold text-[10px]">
            <Image 
              src='/left-bracket.webp'
              alt="Left bracket"
              width={20}
              height={20}
              style={{
                height: 'auto',
              }}
              className='w-1' />
            <span className="text-gray-500 font-semibold">
              INTRO
            </span>
            <Image 
              src='/right-bracket.webp'
              alt="Left bracket"
              width={20}
              height={20}
              style={{
                height: "auto",
              }}
              className="w-1" />
          </figure>
            
        </div>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-colors  disabled:pointer-events-none text-primary-foreground shadow hover:bg-primary/90 px-3.75 py-2.5 scale-[0.8] text-[#FCFCFC] text-[10.5px] bg-[#1A1B1C] leading-4 cursor-default">
          ENTER CODE
        </button>
      </div>
    </header>
  )
}

export default Header