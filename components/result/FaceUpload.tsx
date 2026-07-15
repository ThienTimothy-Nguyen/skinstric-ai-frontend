"use client";
import React from 'react';
import Image from 'next/image';
import DiamondBackground from '../global/DiamondBackground';
import { useImageFileStore } from '@/store/ImageFileStore';

function FaceUpload() {
  const setImgFileBase64 = useImageFileStore(state => state.setImgFileBase64);


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imgFile = e.target.files?.[0];

    if (!imgFile) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result;
      

      if (typeof result === 'string') {
        const imgBase64 = result.split(",")[1];
        setImgFileBase64(imgBase64)
      }
    }

    reader.readAsDataURL(imgFile)
  }

  return (
    <section className="min-h-[30vh] md:min-h-screen w-1/2 overflow-visible relative flex justify-center items-center">
      <DiamondBackground 
        smallScreenDiamondSize={240}
        mediumScreenDiamondSize={240}
        largeScreenDiamondSize={386} />

      <div className='relative'>
        <input 
          id='file-upload'
          type="file"
          className='sr-only'
          accept='image/*'
          onChange={(e) => handleFileChange(e)}
         />
        <label htmlFor='file-upload'>
          <Image 
            src="/gallery.svg"
            alt='Camera icon'
            loading='eager'
            width={20}
            height={20}
            style={{
              height: "auto",
            }}
            className='w-26 md:w-34 hover:scale-110 transition-all duration-500 ease-in-out' />
        </label>

        <Image 
          src="/line.svg"
          alt='line'
          loading='eager'
          width={20}
          height={20}
          style={{
            height: "auto",
          }}
          className='w-18 rotate-180 hidden md:block md:bottom-[-20%] left-[-36%] absolute' />
          
        <span
          className='bottom-[-44%] left-[-6%] md:bottom-[-48%] md:left-[-138%] text-[12px] md:text-[14px] font-400 text-end absolute whitespace-nowrap leading-6'>
          ALLOW A.I. <br/>
          TO SCAN YOUR FACE
        </span> 
      </div>
    </section>
  )
}

export default FaceUpload