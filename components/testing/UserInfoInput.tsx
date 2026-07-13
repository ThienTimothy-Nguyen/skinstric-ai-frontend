"use client";
import { useUserActionAuthStore } from "@/store/UserActionAuthStore";
import { useEffect, useState } from "react";
import UserInfoInputLoading from "./UserInfoInputLoading";
import UserInfoInputForm from "./UserInfoInputForm";

function UserInfoInput() {
  const [loading, setLoading] = useState(false);
  const userSaved = useUserActionAuthStore(state => state.userSaved);
  const setUserSaved = useUserActionAuthStore(state => state.setUserSaved);

  useEffect(() => {
    setUserSaved(false)
  }, [setUserSaved])

  return (
    <section className="relative flex flex-col items-center justify-center w-full h-full">

      {
        (!userSaved && !loading) ?
        
        <UserInfoInputForm 
          setLoading={setLoading} />

         :

        (
          (!userSaved && loading) ? 

          <UserInfoInputLoading /> :

          <div className="flex flex-col justify-between items-center gap-4">
            <h1 className="text-2xl font-normal text-[#1A1B1C] tracking-wide">
              Thank you!
            </h1>
            <h2 className="text-lg text-gray-600">
              Proceed for the next step
            </h2>
          </div>
        )
      }
      
    </section>
  )
}

export default UserInfoInput