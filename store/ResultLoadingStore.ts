import { create } from "zustand";

type ResultLoadingProps = {
  faceUploadLoading: boolean;
  setFaceUploadLoading: (isLoading: boolean) => void;
}

export const useResultLoading = create<ResultLoadingProps>((set) => ({
  faceUploadLoading: false,
  setFaceUploadLoading: (isLoading) => set({faceUploadLoading: isLoading}),
}))