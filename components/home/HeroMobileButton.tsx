import Image from "next/image";
import Link from "next/link";

function HeroMobileButton() {
  return (
    <Link 
      href={'/testing'}
      className='text-[9px] md:text-[12px] font-bold flex items-center justify-between gap-2 z-10 motion-safe:hover:scale-110 transition-transform duration-400'>
      <span>ENTER EXPERIENCE</span>
      <Image
        src='/arrow-button.svg'
        alt='Arrow button'
        width={20}
        height={20}
        style={{
          height: 'auto',
        }}
        className='rotate-180 w-6 md:w-8' />
    </Link>
  )
}

export default HeroMobileButton