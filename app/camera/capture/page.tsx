"use client";

import CameraCaptureActions from "@/components/camera/CameraCaptureActions";
import CameraInstructions from "@/components/camera/CameraInstructions";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function CapturePage() {
  const streamRef = useRef<MediaStream | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const validateCameraPermission = async () => {
      try {
        if (!navigator.mediaDevices?.getUserMedia) {
          setError("Camera is not supported in this browser");
          router.replace("/result");
          return;
        };

        try {
          const permission = await navigator.permissions.query({
            name: "camera" as PermissionName,
          });

          if (permission.state === "prompt") {
            router.replace("/camera");
            return;
          }

          if (permission.state === "denied") {
            setError("Camera permission is required to take a selfie.");
            return;
          }
        } catch {
          // Ignore unsupported Permissions API and continue.
        }

        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });

        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch {
        setError("Unable to access the camera");
      }
    }

    validateCameraPermission();
    

    return () => {
      if(!streamRef.current) return;

      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  }, [router])

  return (
    <main className="min-h-screen w-full relative">
      <CameraCaptureActions 
        error={error} 
        videoRef={videoRef} 
        canvasRef={canvasRef} />
      <CameraInstructions textColor="white" />
    </main>
  );
}

export default CapturePage