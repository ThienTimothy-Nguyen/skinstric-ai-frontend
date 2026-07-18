import { DemographicSelections, UserImageData } from "@/types/demographic";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type DemographicsBreakdownProps = {
  userData: UserImageData | null,
  setDemographicSelections: Dispatch<SetStateAction<DemographicSelections | null>>
}

function DemographicsBreakdown({ 
  userData,
  setDemographicSelections,
}: DemographicsBreakdownProps) {
  return (
    <div className="bg-gray-100 pt-4 pb-4 md:border-t">
      <div className="space-y-0">
        <div className="flex justify-between px-4 text-base leading-6 tracking-tight font-medium mb-2">
          <h4>RACE</h4>
          <h4 className="">A.I. CONFIDENCE</h4>
        </div>
        {
          new Array(6).fill(0).map((_,i) => (
          <div key={i} className="flex items-center justify-between h-12 hover:bg-[#E1E1E2] px-4 cursor-pointer ">
            <div className="flex items-center gap-2">
              <Image 
                src="/diamond-button.svg" 
                alt="Diamond button"
                width={20}
                height={20}
                style={{
                  height: "auto",
                }} 
                className="text-black w-4"
              />
              <span>0-2</span>
            </div>
            <span className="font-normal text-base leading-6 tracking-tight">
              0%
            </span>
          </div>))
        }
      </div>
    </div>
  )
}

export default DemographicsBreakdown