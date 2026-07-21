"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import DiamondBackground from '../animation/DiamondBackground';
import { useRouter } from 'next/navigation';
import { useResultLoading } from '@/store/ResultLoadingStore';
import FaceUploadLoading from './FaceUploadLoading';
import { analyzeImage } from '@/lib/api';

function FaceUpload() {
  const [errorMessage, setErrorMessage] = useState("");
  const confirmCameraAccess = useResultLoading(state => state.confirmCameraAccess);
  const faceUploadLoading = useResultLoading(state => state.faceUploadLoading);
  const setFaceUploadLoading = useResultLoading(state => state.setFaceUploadLoading);
  const router = useRouter();

  useEffect(() => {
    setFaceUploadLoading(false);
  }, [setFaceUploadLoading])

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result;

        if (typeof result !== "string") {
          return reject(new Error("Unable to read image"));
        }

        const base64 = result.split(",")[1];

        if (!base64) {
          return reject(new Error("Unable to extract Base64 image"));
        }

        return resolve(base64);
      };

      reader.onerror = () => {
        return reject(reader.error ?? new Error("Unable to read image"));
      };

      reader.onabort = () => {
        return reject(new Error("Image upload was canceled"));
      };

      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const imgFile = e.target.files?.[0];

    if (!imgFile) return;

    setFaceUploadLoading(true);

    setErrorMessage("");

    try {
      const imgBase64 = await fileToBase64(imgFile);
      const userImageData = await analyzeImage(imgBase64);

      localStorage.setItem("userImageData", JSON.stringify(userImageData.data));

      router.push("/select");
    } catch (error) {
      console.error(error);

      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };

  if (faceUploadLoading) {
    return (
      <FaceUploadLoading />
    )
  }

  return (
    <section className="min-h-[30vh] md:min-h-screen w-1/2 overflow-visible relative flex justify-center items-center">
      <DiamondBackground 
        smallScreenDiamondSize={240}
        mediumScreenDiamondSize={240}
        largeScreenDiamondSize={386} />

      <div className={`relative ${confirmCameraAccess && "opacity-50"}`}>
        <input 
          disabled={confirmCameraAccess}
          id='file-upload'
          type="file"
          className='sr-only'
          accept='image/*'
          onChange={async (e) => handleFileChange(e)}
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
            className={`w-26 md:w-34 ${!confirmCameraAccess && "hover:scale-110 transition-all duration-500 ease-in-out"}`} />
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
          ACCESS GALLERY <br />
          {
            !errorMessage && 
            <span className='text-red-500 absolute left-0'>
              {errorMessage}
            </span>
          }
        </span> 
      </div>
    </section>
  )
}

export default FaceUpload