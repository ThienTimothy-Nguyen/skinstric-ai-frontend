"use client";

import { Dispatch, RefObject, SetStateAction } from "react";
import { analyzeImage } from "@/lib/api";
import { useRouter } from "next/navigation";

type CameraRetakeActionsProps = {
  videoRef: RefObject<HTMLVideoElement | null>;
  imgBase64: string | null;
  photoAnalyzeLoading: boolean;
  setPhotoAnalyzeLoading: Dispatch<SetStateAction<boolean>>;
  setIsPhotoTaken: Dispatch<SetStateAction<boolean>>;
  setImgBase64: Dispatch<SetStateAction<string | null>>;
}

function CameraRetakeActions({
  videoRef,
  imgBase64,
  photoAnalyzeLoading,
  setPhotoAnalyzeLoading,
  setIsPhotoTaken,
  setImgBase64,
}: CameraRetakeActionsProps) {

  const router = useRouter();

  const handleRetake = () => {
    if (!videoRef.current) return;

    videoRef.current.play()
    setImgBase64(null);
    setIsPhotoTaken(false);
  }

  const usePhoto = async () => {
    if (typeof imgBase64 !== "string") return;

    setPhotoAnalyzeLoading(true);
    try {
      const userImageData = await analyzeImage(imgBase64);
      localStorage.setItem("userImageData", JSON.stringify(userImageData.data));

      router.push("/select");
    } catch (error) {
      console.error(error);
    } finally {
      setPhotoAnalyzeLoading(false);
    }
  }
 
  return (
    <div className="min-h-screen w-full relative">
      <div className="absolute text-sm leading-6 uppercase text-[#FCFCFC] top-40 left-1/2 -translate-x-1/2">GREAT SHOT!</div>
      <div className="absolute bottom-40 sm:bottom-16 left-0 right-0 flex flex-col items-center">
        <h2 className="text-lg font-semibold mb-5 md:mb-7 text-[#FCFCFC] drop-shadow-md">Preview</h2>
        <div className="flex justify-center space-x-6 relative z-1000">
          <button 
            className="px-4 py-1 bg-gray-200 text-gray-800 cursor-pointer hover:bg-gray-300 shadow-md text-sm"
            onClick={handleRetake}
            disabled={photoAnalyzeLoading}
          >
            Retake
          </button>
          <button 
            className="px-6 py-2 bg-[#1A1B1C] text-[#FCFCFC] cursor-pointer hover:bg-gray-800 shadow-md text-sm"
            onClick={usePhoto}
            disabled={photoAnalyzeLoading}
          >
            {
              !photoAnalyzeLoading ?
              "Use This Photo" :
              "Uploading ..."
            }
            
          </button>
        </div>
      </div>
    </div>
  )
}

export default CameraRetakeActions