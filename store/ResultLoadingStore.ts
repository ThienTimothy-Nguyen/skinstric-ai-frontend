import { create } from "zustand";

type ResultLoadingProps = {
  faceUploadLoading: boolean;
  confirmCameraAccess: boolean;
  setFaceUploadLoading: (isLoading: boolean) => void;
  setConfirmCameraAccess: (isConfirming: boolean) => void;
}

export const useResultLoading = create<ResultLoadingProps>((set) => ({
  faceUploadLoading: false,
  confirmCameraAccess: false,
  setFaceUploadLoading: (isLoading) => set({faceUploadLoading: isLoading}),
  setConfirmCameraAccess: (isConfirming) => set({ confirmCameraAccess: isConfirming }),
}))