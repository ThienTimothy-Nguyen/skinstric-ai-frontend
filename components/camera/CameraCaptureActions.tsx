import Image from "next/image";
import { RefObject, useState } from "react";
import CameraInstructions from "./CameraInstructions";
import CameraRetakeActions from "./CameraRetakeActions";
import LoadingCircles from "../animation/LoadingCircles";

type CameraCaptureActionsProps = {
  error: string | null;
  videoRef: RefObject<HTMLVideoElement | null>;
  canvasRef: RefObject<HTMLCanvasElement | null>;
};

function CameraCaptureActions({ 
  error, 
  videoRef, 
  canvasRef,
}: CameraCaptureActionsProps) {
  
  const [isPhotoTaken, setIsPhotoTaken] = useState(false);
  const [imgBase64, setImgBase64] = useState<string | null>(null);
  const [photoAnalyzeLoading, setPhotoAnalyzeLoading] = useState(false);

  const takePhoto = async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d");
    if (!context) return;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageDataUrl = canvas.toDataURL("image/jpeg", 0.9);
    if(typeof imageDataUrl === "string") {
      const base64 = imageDataUrl.split(",")[1];
      setImgBase64(base64)

      setIsPhotoTaken(true);
      video.pause();
    } else {
      alert("Something went wrong while taking your photo.")
    }
  }

  return (
    <section>
      {error ? (
        <div className="absolute top-32 left-1/2 -translate-x-1/2 text-center text-red-500 bg-red-200 rounded-lg w-52 py-1">
          {error}
        </div>
      ) : (
        <div>
          <video
            className="absolute w-full h-full object-cover "
            ref={videoRef}
            autoPlay
            playsInline
            muted
          />
          <canvas ref={canvasRef} className="hidden" />
        </div>
      )}

      {
        !photoAnalyzeLoading ?

        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 flex items-center space-x-3">
          <span className="font-semibold text-sm tracking-tight leading-3.5 text-[#FCFCFC] hidden sm:block">TAKE PICTURE</span>
          <button 
            className={`transition-transform ease-in-out duration-200 ${!isPhotoTaken ? "hover:scale-105" : "cursor-not-allowed"}`}
            onClick={() => takePhoto()}
            disabled={isPhotoTaken}>
            <Image
              src="/camera-button.svg"
              alt="Camera button"
              width={20}
              height={20}
              style={{ height: "auto" }}
              className="w-16"
            />
          </button>
        </div> :

        <div className="absolute top-1/2 left-1/2 -translate-1/2 z-20 flex flex-col justify-between items-center text-lg bg-gray-100 opacity-60 gap-6 py-10 px-10 rounded-xl">
          <span>ANALYZING IMAGE ...</span>
          <LoadingCircles />
        </div>
      }
      

      {
        isPhotoTaken ? 

        <CameraRetakeActions
          videoRef={videoRef}
          imgBase64={imgBase64}
          setIsPhotoTaken={setIsPhotoTaken}
          setImgBase64={setImgBase64} 
          photoAnalyzeLoading={photoAnalyzeLoading}
          setPhotoAnalyzeLoading={setPhotoAnalyzeLoading}
        /> :

        <CameraInstructions textColor="white" />
      }
    </section>
  );
}

export default CameraCaptureActions;
