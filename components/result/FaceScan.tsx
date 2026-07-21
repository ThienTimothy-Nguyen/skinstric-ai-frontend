"use client";
import Image from 'next/image';
import DiamondBackground from '../animation/DiamondBackground';
import { useResultLoading } from '@/store/ResultLoadingStore';
import Link from 'next/link';

function FaceScan() {
  const faceUploadLoading = useResultLoading(state => state.faceUploadLoading);
  const confirmCameraAccess = useResultLoading(state => state.confirmCameraAccess);
  const setConfirmCameraAccess = useResultLoading(state => state.setConfirmCameraAccess);

  if(faceUploadLoading) return null;

  return (
    <section className="min-h-[30vh] md:min-h-screen w-1/2 overflow-visible relative flex flex-col justify-center items-center">
      <DiamondBackground 
        smallScreenDiamondSize={240}
        mediumScreenDiamondSize={240}
        largeScreenDiamondSize={386} />
      
      {confirmCameraAccess && <div className='absolute md:top-[43%] md:left-90 w-88 z-50'>
        <div className='bg-[#1A1B1C] pt-4 pb-2'>
          <h2 className='text-[#FCFCFC] text-base font-semibold mb-12 leading-6 pl-4'>
            ALLOW A.I. TO ACCESS YOUR CAMERA
          </h2>
          <div className='flex mt-4 border-t border-[#FCFCFC] pt-2'>
            <button 
              className='px-7 md:translate-x-45 text-[#fcfcfca1] font-normal text-sm leading-4 tracking-tight cursor-pointer hover:text-gray-500'
              onClick={() => setConfirmCameraAccess(false)}>
              DENY
            </button>
            <Link 
              href="/camera"
              className='px-5 md:translate-x-45 text-[#FCFCFC] font-semibold text-sm leading-4 tracking-tight cursor-pointer hover:text-gray-300'>
              ALLOW
            </Link>
          </div>
        </div>
      </div>}

      <div className='relative'>
        <button
          onClick={() => setConfirmCameraAccess(true)}>
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