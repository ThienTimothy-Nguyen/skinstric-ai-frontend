"use client"
import { useRef } from "react";
import HeroDescription from "./HeroDescription";
import ReviewAIButton from "./ReviewAIButton";
import TestButton from "./TestButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function HeroDesktop() {
  const reviewAIButtonRef = useRef<HTMLImageElement | null>(null);
  const testButtonRef = useRef<HTMLImageElement | null>(null);
  const reviewAIBackgroundRef = useRef<HTMLElement | null>(null);
  const testBackgroundRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const reviewTlRef = useRef<gsap.core.Timeline | null>(null);
  const testTlRef = useRef<gsap.core.Timeline | null>(null);
  
  useGSAP(() => {
    if (!titleRef.current || 
        !testBackgroundRef.current ||
        !reviewAIBackgroundRef.current ||
        !testButtonRef.current ||
        !reviewAIButtonRef.current) return;

    const titleLines = titleRef.current.querySelectorAll("[data-title-line]");

    reviewTlRef.current = gsap
      .timeline({paused: true})
      .to(reviewAIButtonRef.current, {
        scale: 1.1,
        duration: 0.8,
        ease: 'power2.inOut',
      })
      .to(
        titleRef.current, 
        {
          x: '22vw',
          duration: 0.8,
          ease: 'power2.inOut',
        },
        "<")
      .to(
        titleLines,
        {
          x: (_index, target) => {
            const titleWidth = titleRef.current!.offsetWidth;
            const lineWidth = (target as HTMLElement).offsetWidth;
            return (titleWidth - lineWidth) / 2;
          },
          duration: 0.8,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        testBackgroundRef.current, 
        {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        },
        "<")

    testTlRef.current = gsap
      .timeline({paused:true})
      .to(testButtonRef.current, {
        scale: 1.1,
        duration: 0.8,
        ease: 'power2.inOut',
      })
      .to(
        titleRef.current, 
        {
          x: '-22vw',
          duration: 0.8,
          ease: 'power2.inOut',
        },
        "<")
      .to(
        titleLines,
        {
          x: (_index, target) => {
            const titleWidth = titleRef.current!.offsetWidth;
            const lineWidth = (target as HTMLElement).offsetWidth;
            return -(titleWidth - lineWidth) / 2;
          },
          duration: 0.8,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        reviewAIBackgroundRef.current, 
        {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out'
        },
        "<")
  },[])

  return (
    <section className="relative hidden min-h-screen w-full lg:flex items-center justify-center overflow-hidden">
      <ReviewAIButton
        reviewAIButtonRef={reviewAIButtonRef}
        reviewAIBackgroundRef={reviewAIBackgroundRef}
        reviewTlRef={reviewTlRef} />

      <h1 
        className="text-[60px] text-center max-w-132 text-[#1A1B1C] lg:text-[100px] font-[350] tracking-tighter leading-none relative z-10"
        ref={titleRef}
      >
        <span data-title-line className="block w-fit mx-auto">Sophisticated</span>
        <span data-title-line className="block w-fit mx-auto">skincare</span>
      </h1>

      <TestButton 
        testButtonRef = {testButtonRef}
        testBackgroundRef={testBackgroundRef}
        testTlRef={testTlRef} />

      <HeroDescription />
    </section>
  )
}

export default HeroDesktop