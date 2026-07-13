"use client";

import { useUserActionAuthStore } from "@/store/UserActionAuthStore";
import { Dispatch, SetStateAction, useState } from "react";

type UserInfoInputFormProps = {
  setLoading: Dispatch<SetStateAction<boolean>>,
}

function UserInfoInputForm({ setLoading }: UserInfoInputFormProps) {
  const [userName, setUserName] = useState('');
  const [userCity, setUserCity] = useState('');
  const [step, setStep] = useState<'enterName' | 'enterCity'>('enterName');
  const setUserSaved = useUserActionAuthStore(state => state.setUserSaved);

  const submitUserInfo = async () => {
  const name = localStorage.getItem('name');
  const location = localStorage.getItem('location');

  const response = await fetch(
    'https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne', 
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        location,
      }),
    }
  );

    if (!response.ok) {
      throw new Error("Failed to save user info")
    };

    const data = await response.json();

    return data;
  }

  const handleSubmit = async () => {
    if (step === "enterName") {
      if (!userName.trim()) return;

      localStorage.setItem("name", userName);
      setStep("enterCity");
      return;
    }

    if (step === "enterCity") {
      if (!userCity.trim()) return;

      localStorage.setItem("location", userCity);

      setLoading(true);
      const data = await submitUserInfo();
      setLoading(false);

      if(!data) return;
      
      setUserSaved(true);
    }
  };

  return (
    <div className="flex flex-col justify-between items-center gap-2">
      <p className="text-sm text-gray-400 tracking-wider uppercase">CLICK TO TYPE</p>
      <form onSubmit={
        async (e) => {
          e.preventDefault()
          await handleSubmit()
        }
      }>
        <input 
          key={step}
          type="text"
          value={step === "enterName" ? userName : userCity}
          placeholder={
            step === "enterName" ?
            "Introduce Yourself" : 
            "Where are you from?"
          }
          onChange={(e) => {
            if (!/^[A-Za-z\s]*$/.test(e.target.value)) {
              return
            };

            if (step === "enterName") setUserName(e.target.value.trim());
            if (step === "enterCity") setUserCity(e.target.value.trim());
          }}
          autoComplete="off"
          autoFocus
          className="text-5xl sm:text-6xl font-normal text-center bg-transparent border-b border-black focus:outline-none appearance-none w-93 sm:w-108 pt-1 tracking-[-0.07em] leading-16 text-[#1A1B1C]" 
        />
        <button
          type="submit"
          className="sr-only"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default UserInfoInputForm