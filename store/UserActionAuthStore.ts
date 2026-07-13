import { create } from "zustand";

type UserActionAuthStoreProps = {
  userSaved: boolean,
  setUserSaved: (saved: boolean) => void,
}

export const useUserActionAuthStore = create<UserActionAuthStoreProps>((set) => ({
  userSaved: false,
  setUserSaved: (saved) => set({userSaved: saved})
}))