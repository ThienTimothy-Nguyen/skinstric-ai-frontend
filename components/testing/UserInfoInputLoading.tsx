"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function UserInfoInputLoading() {
  useGSAP(() => {
    const loadingCircles = gsap.utils.toArray<HTMLElement>(".loading-circle");
    
    loadingCircles.forEach((circle, i) => {
      gsap.to(
      circle, 
        {
          y: -6,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay: i * 0.2
        }
      )})
    }, [])

  return (
    <div className="flex flex-col justify-between items-center gap-10">
      <span className="text-lg text-gray-500 tracking-wider">
        Processing submission
      </span>
      <div className='flex justify-between items-center gap-3'>
        {
          new Array(3).fill(0).map((_, i) => (
            <div 
              key={i}
              className='bg-gray-400 w-2 h-2 rounded-[50%] loading-circle'></div>
          ))
        }
      </div>
    </div>
  )
}

export default UserInfoInputLoading