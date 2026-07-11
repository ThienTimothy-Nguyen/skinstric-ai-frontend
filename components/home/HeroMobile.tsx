import HeroDescription from './HeroDescription';
import HeroMobileButton from './HeroMobileButton';

function HeroMobile() {
  return (
    <section className="relative min-h-screen flex lg:hidden flex-col justify-center items-center gap-2 md:gap-4">
      <h1 className="text-[46px] md:text-[60px] text-center max-w-80 text-[#1A1B1C] font-[350] tracking-tighter leading-none relative z-10">
        Sophisticated skincare
      </h1>

      <HeroDescription />

      <HeroMobileButton />

      <div className='w-72 h-72 md:w-87.5 md:h-87.5 border border-dotted border-[#A0A4AB] rotate-45 absolute top-1/2 left-1/2 translate-x-[-52%] -translate-y-1/2 z-0'></div>

      <div className='w-85 h-85 md:w-105 md:h-105 border border-dotted border-[#A0A4AB] rotate-45 absolute top-1/2 left-1/2 translate-x-[-52%] -translate-y-1/2 z-0'></div>
    </section>
  )
}

export default HeroMobile