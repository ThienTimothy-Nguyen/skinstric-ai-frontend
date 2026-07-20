"use client";

import { DemographicSelections, DemographicType, UserImageData } from "@/types/demographic";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type DemographicsBreakdownProps = {
  userData: UserImageData | null;
  currentSelectedType: DemographicType;
  demographicSelections: DemographicSelections | null;
  setDemographicSelections: Dispatch<SetStateAction<DemographicSelections | null>>;
}

function DemographicsBreakdown({ 
  userData,
  currentSelectedType,
  demographicSelections,
  setDemographicSelections,
}: DemographicsBreakdownProps) {
  const [demographicDetails, setDemographicDetails] = useState<UserImageData[keyof UserImageData] | null>(null);

  useEffect(() => {
    if (!userData || !currentSelectedType) return

    setDemographicDetails(userData[currentSelectedType]);
  }, [currentSelectedType, userData])

  if (!demographicDetails || !demographicSelections) return;

  return (
    <div className="bg-gray-100 pt-4 pb-4 md:border-t">
      <div className="space-y-0">
        <div className="flex justify-between px-4 text-base leading-6 tracking-tight font-medium mb-2">
          <h4>RACE</h4>
          <h4 className="">A.I. CONFIDENCE</h4>
        </div>
        <ul>
          {
            Object.entries(demographicDetails).map(([demographic, rawPercent]) => (
            <li 
              key={demographic} 
              className=""
            >
              <button 
                className={`flex items-center justify-between h-12 px-4 cursor-pointer w-full transition-none ${demographicSelections[currentSelectedType] === demographic ? "bg-black text-white hover:opacity-90" : "hover:bg-[#E1E1E2]"}`}
                onClick={() => setDemographicSelections((prev) => {
                  if (!prev) return null;

                  return {
                    ...prev,
                    [currentSelectedType]: demographic,
                  } 
                })}
              >
                <div className="flex items-center gap-3">
                  <Image 
                    src={`${demographicSelections[currentSelectedType] === demographic ? "/radio-button.svg" : "/diamond-button.svg"}`} 
                    alt={`${demographicSelections[currentSelectedType] === demographic ? "Radio button" : "Diamond button"}`}
                    width={20}
                    height={20}
                    style={{
                      height: "auto",
                    }} 
                    className="text-black w-4"
                  />
                  <span className="text-base capitalize text-start">{demographic}</span>
                </div>
                <span className="font-normal text-base leading-6 tracking-tight">
                  {Math.round(rawPercent * 100)}%
                </span>
              </button>
            </li>))
          }
        </ul>
        
      </div>
    </div>
  );
}

export default DemographicsBreakdown