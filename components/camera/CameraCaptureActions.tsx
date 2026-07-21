import Image from "next/image";

type CameraCaptureActionsProps = {
  error: string | null;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
};

function CameraCaptureActions({ error, videoRef, canvasRef }: CameraCaptureActionsProps) {
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

      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 flex items-center space-x-3">
        <span className="font-semibold text-sm tracking-tight leading-3.5 text-[#FCFCFC] hidden sm:block">TAKE PICTURE</span>
        <button className="transform hover:scale-105 transition-transform ease-in-out duration-200">
          <Image
            src="/camera-button.svg"
            alt="Camera button"
            width={20}
            height={20}
            style={{ height: "auto" }}
            className="w-16"
          />
        </button>
      </div>
    </section>
  );
}

export default CameraCaptureActions;
