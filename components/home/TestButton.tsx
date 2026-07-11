import Image from "next/image";
import { RefObject } from "react";

type TestButtonProps = {
  testButtonRef: RefObject<HTMLImageElement | null>,
  testBackgroundRef: RefObject<HTMLElement | null>,
  testTlRef: RefObject<gsap.core.Timeline | null>,
}

function TestButton({ 
  testButtonRef, 
  testBackgroundRef,
  testTlRef,
}: TestButtonProps) {

  const handleMouseEnter = () => {
    testTlRef.current?.play();
  }

  const handleMouseLeave = () => {
    testTlRef.current?.reverse();
  }

  return (
    <figure 
      className="absolute -right-36 w-150.5 h-150.5"
      ref={testBackgroundRef} >
      <Image 
        src='/rectangle-right.svg'
        alt="Left rectangle"
        fill
        className="z-0 object-contain" />

      <button 
        className="absolute z-10 top-1/2 left-1/2 -translate-1/2 flex items-center justify-between gap-2 text-[14px]" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} >
        <span>TAKE TEST</span>
        <Image
          src='/arrow-button.svg'
          alt='Arrow button'
          width={20}
          height={20}
          style={{
            height: 'auto',
          }}
          className='w-10 rotate-180'
          ref={testButtonRef} />
      </button>
    </figure>
  )
}

export default TestButton