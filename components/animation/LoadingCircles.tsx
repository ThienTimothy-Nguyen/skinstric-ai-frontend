import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function LoadingCircles() {
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
    <div className='flex justify-between items-center gap-3'>
      {
        new Array(3).fill(0).map((_, i) => (
          <div 
            key={i}
            className='bg-gray-400 w-2 h-2 rounded-[50%] loading-circle'></div>
        ))
      }
    </div>
  )
}

export default LoadingCircles