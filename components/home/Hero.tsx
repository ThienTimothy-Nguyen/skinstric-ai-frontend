import HeroDescription from "./HeroDescription";
import ReviewAIButton from "./ReviewAIButton";
import TestButton from "./TestButton";

function Hero() {
  return (
    <section className="row h-full flex justify-center items-center">
      <ReviewAIButton />

      <h1 className="text-[60px] text-center max-w-80 md:max-w-132 text-[#1A1B1C] lg:text-[100px] font-[350] tracking-tighter leading-none relative z-10">
        Sophisticated skincare
      </h1>

      <TestButton />

      <HeroDescription />
    </section>
  )
}

export default Hero