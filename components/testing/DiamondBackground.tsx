"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function DiamondBackground() {
  useGSAP(() => {
    const diamonds = gsap.utils.toArray<HTMLElement>('.diamond');
    const durations = [36, 42, 48];

    diamonds.forEach((diamond, index) => {
      gsap.to(diamond, {
        rotation: 360,
        duration: durations[index],
        repeat: -1,
        ease: 'none',
      })
    })
  }, [])

  return (
    <section className="">
      <Image 
        src='/large-diamond.svg'
        alt="Large diamond"
        width={100}
        height={100}
        style={{
          height: 'auto',
        }} 
        loading="eager"
        className="absolute w-140 md:w-200 top-1/2 left-1/2 -translate-1/2 diamond"/>
      <Image 
        src='/medium-diamond.svg'
        alt="Medium diamond"
        width={100}
        height={100}
        style={{
          height: 'auto',
        }} 
        loading="eager"
        className="absolute w-120 md:w-180 top-1/2 left-1/2 -translate-1/2 diamond"/>
      <Image 
        src='/small-diamond.svg'
        alt="Small diamond"
        width={100}
        height={100}
        style={{
          height: 'auto',
        }} 
        loading="eager"
        className="absolute w-100 md:w-160 top-1/2 left-1/2 -translate-1/2 diamond"/>
    </section>
  )
}

export default DiamondBackground