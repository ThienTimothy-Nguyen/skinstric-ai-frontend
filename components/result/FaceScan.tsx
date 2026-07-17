"use client";
import Image from 'next/image';
import DiamondBackground from '../animation/DiamondBackground';
import { useResultLoading } from '@/store/ResultLoadingStore';

function FaceScan() {
  const faceUploadLoading = useResultLoading(state => state.faceUploadLoading);

  if(faceUploadLoading) return null;

  return (
    <section className="min-h-[30vh] md:min-h-screen w-1/2 overflow-visible relative flex flex-col justify-center items-center">
      <DiamondBackground 
        smallScreenDiamondSize={240}
        mediumScreenDiamondSize={240}
        largeScreenDiamondSize={386} />

      <div className='relative'>
        <button>
          <Image 
          src="/camera.svg"
          alt='Camera icon'
          loading='eager'
          width={20}
          height={20}
          style={{
            height: "auto",
          }}
          className='w-26 md:w-34 hover:scale-110 transition-all duration-500 ease-in-out' />
        </button>

        <Image 
          src="/line.svg"
          alt='line'
          loading='eager'
          width={20}
          height={20}
          style={{
            height: "auto",
          }}
          className='w-18 hidden md:block md:top-[-24%] right-[-36%] absolute' />

        <span
          className='bottom-[-44%] left-[-6%] md:bottom-full md:left-[142%] text-[12px] md:text-[14px] whitespace-nowrap font-400 text-start absolute leading-6'>
          ALLOW A.I. <br/>
          TO SCAN YOUR FACE
        </span> 
      </div>
    </section>
  )
}

export default FaceScan