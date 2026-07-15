import { create } from "zustand";

type ImageFileStoreProps = {
  imgFileBase64: string,
  setImgFileBase64: (base64: string) => void,
}

export const useImageFileStore = create<ImageFileStoreProps>((set) => ({
  imgFileBase64: "",
  setImgFileBase64: (imgBase64) => set({ imgFileBase64: imgBase64 }),
}))