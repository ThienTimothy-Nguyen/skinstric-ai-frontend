"use client";
import Image from "next/image";
import { RefObject } from "react";

type ReviewAIButtonProps = {
  reviewAIBackgroundRef: RefObject<HTMLElement | null>,
  reviewTlRef: RefObject<gsap.core.Timeline | null>,
}

function ReviewAIButton({
  reviewAIBackgroundRef,
  reviewTlRef, 
}: ReviewAIButtonProps) {
  
  const handleMouseEnter = () => {
    reviewTlRef.current?.play();
  }

  const handleMouseLeave = () => {
    reviewTlRef.current?.reverse();
  }

  return (
    <figure 
      className="absolute -left-36 w-150.5 h-150.5"
      ref={reviewAIBackgroundRef}>
      <Image 
        src='/rectangle-left.svg'
        alt="Left rectangle"
        fill
        className="z-0 object-contain" />
        
      <button 
        className="absolute z-10 top-1/2 left-1/2 -translate-1/2 flex items-center justify-between gap-2 text-[14px] cursor-not-allowed group" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} >
        <Image
          src='/arrow-button.svg'
          alt='Arrow button'
          width={20}
          height={20}
          style={{
            height: 'auto',
          }}
          className='w-10 motion-safe:group-hover:scale-110 transition-transform duration-400 ease-in-out' />
          <span>DISCOVER A.I.</span>
      </button>
    </figure>
  )
}

export default ReviewAIButton