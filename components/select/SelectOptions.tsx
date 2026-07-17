"use client";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

function SelectOptions() {
  const diamondRef = useRef(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const router = useRouter();

  useEffect(() => {
    return () => {
      tweenRef.current?.kill();
      tweenRef.current = null;
    }
  }, [])

  const userOptions: Option[] = [
    "DEMOGRAPHICS",
    "SKIN TYPE DETAILS",
    "COSMETIC CONCERNS",
    "WEATHER",
  ];

  const animationOptions = {
    "DEMOGRAPHICS": {
      scale: 1.2,
      opacity: 0.7,
    },
    "SKIN TYPE DETAILS": {
      scale: 1.4,
      opacity: 0.5,
    },
    "COSMETIC CONCERNS": {
      scale: 1.4,
      opacity: 0.5,
    },
    "WEATHER": {
      scale: 1.6,
      opacity: 0.2,
    },
  }

  type Option = keyof typeof animationOptions;

  const createDiamondAnimation = (option: Option) => {
    if (!diamondRef.current) return;

    tweenRef.current?.kill();

    tweenRef.current = gsap.fromTo(diamondRef.current, 
      {
        scale: 1,
        opacity: 0, 
      }, 
      {
        ...animationOptions[option],
        duration: 0.2,
        ease: "power2.out",
      }
    )
  }

  const reverseThenPlay = (option: Option) => {
    if (!tweenRef.current || tweenRef.current?.progress() === 0) {
      createDiamondAnimation(option)
      return
    }

    tweenRef.current?.eventCallback("onReverseComplete", 
      () => {
        createDiamondAnimation(option);
        tweenRef.current?.eventCallback("onReverseComplete", null)
      }
    )

    tweenRef.current.reverse();
  }

  

  return (
    <ul className="grid grid-cols-2 gap-2 rotate-45 shadow-2xs">
      <div 
        className="absolute top-1/2 left-1/2 aspect-square w-80 -translate-x-1/2 -translate-y-1/2 bg-transparent spread-dotted-border -z-1 opacity-0"
        ref={diamondRef}
      >

      </div>
      {userOptions.map(option => (
        <li 
          key={option}
          className={`bg-gray-100 aspect-square flex justify-center items-center w-26 sm:w-[153.88px] text-sm sm:text-[16px] text-center font-semibold hover:scale-105 hover:bg-gray-300 transition-transform duration-300 ease-in-out ${option === "DEMOGRAPHICS" ? 'cursor-pointer' : 'cursor-not-allowed'}`}
          onMouseEnter={() => reverseThenPlay(option)}
          onMouseLeave={() => {
            tweenRef.current?.reverse();
          }}
          onClick={() => {
            if (option === "DEMOGRAPHICS") router.push('/summary')
          }}
        >
          <span className="-rotate-45">
            {option}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default SelectOptions