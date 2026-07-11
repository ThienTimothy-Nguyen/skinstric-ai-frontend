import Image from "next/image";

function HeroMobileButton() {
  return (
    <button className='text-[9px] md:text-[12px] font-bold flex items-center justify-between gap-2 cursor-pointer z-10'>
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
    </button>
  )
}

export default HeroMobileButton