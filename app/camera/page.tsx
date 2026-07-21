"use client";
import Image from "next/image";
import DiamondBackground from "@/components/animation/DiamondBackground";
import CameraInstructions from "@/components/camera/CameraInstructions";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function CameraPage() {
  const router = useRouter();

  useEffect(() => {
    const prepareCamera = async () => {
      try {
        if (!navigator.mediaDevices?.getUserMedia) {
          alert("Camera is not supported in this browser.");
          router.replace("/result");
          return;
        };

        const stream = await navigator.mediaDevices.getUserMedia({
          video: true, 
          audio: false,
        });

        stream.getTracks().forEach((track) => track.stop());

        router.replace("/camera/capture");
      } catch {
        alert("Camera permission is required to take a selfie.");
        router.replace("/result")
      }
    }

    prepareCamera()
  }, [router])

  return (
    <main className="min-h-screen w-full relative">
      <DiamondBackground 
        smallScreenDiamondSize={240}
        mediumScreenDiamondSize={240}
        largeScreenDiamondSize={386} />

      <figure className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col justify-between items-center">
        <Image 
        src="/camera.svg"
        alt='Camera icon'
        loading='eager'
        width={20}
        height={20}
        style={{
          height: "auto",
        }}
        className='w-26 md:w-34 zoom-in-out transition-all duration-500 ease-in-out' />

        <span className="absolute -bottom-10 whitespace-nowrap text-sm font-semibold uppercase animate-pulse">Setting up camera ...</span>
      </figure>

      <CameraInstructions textColor="black" />

    </main>
  )
}

export default CameraPage