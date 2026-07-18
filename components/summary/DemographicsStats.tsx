"use client";
import { useEffect, useState } from "react";
import CircleProgressBar from "./CircleProgressBar";
import DemographicsBreakdown from "./DemographicsBreakdown";
import { useRouter } from "next/navigation";
import { DemographicSelections, DemographicType, UserImageData } from "@/types/demographic";

function DemographicsStats() {
  const [userData, setUserData] = useState<UserImageData | null>(null);
  const [demographicTypes, setDemographicTypes] =
  useState<DemographicType[] | null>(null);
  const [demographicSelections, setDemographicSelections] = useState<DemographicSelections | null>(null);
  const [demographicShow, setDemographicShow] = useState<DemographicSelections[DemographicType] | null>(null);
  const [currentSelectedType, setCurrentSelectedtype] = useState<DemographicType>("race");
  const router = useRouter();

  const getTopDemographicSelection = <T extends DemographicType>(
    userData: UserImageData,
    demographicType: T
  ): keyof UserImageData[T] => {

  const entries = Object.entries(userData[demographicType]) as [
    keyof UserImageData[T],
    number
  ][];

  const topSelection = entries.reduce((top, current) => {
    return current[1] > top[1] ? current : top;
  });

  return topSelection[0];
};

  useEffect(() => {
    const userImageData = localStorage.getItem("userImageData")

    // redirect to result page if no data is found
    if(!userImageData) {
      alert("Unable to process image, please upload a new photo.");
      router.push("/result");
      return
    }

    const userParsedData = JSON.parse(userImageData) as UserImageData;
    
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUserData(userParsedData)

    setDemographicTypes(Object.keys(userParsedData) as DemographicType[]);

    // initialize A.I. most confident data
    setDemographicSelections({
      race: getTopDemographicSelection(userParsedData, "race"),
      age: getTopDemographicSelection(userParsedData, "age"),
      gender: getTopDemographicSelection(userParsedData, "gender"),
    });

    // initialize demographic data shown on circle progress bar
    setDemographicShow(getTopDemographicSelection(userParsedData, "race"));

  }, [router]);

  return (
    <section className="global-container">

      <div className="row grid md:grid-cols-[1.5fr_8.5fr_3.15fr] gap-4 mt-10 mb-40 md:gap-4 pb-0 md:pb-0 md:mb-0">
        <ul className="bg-white-100 space-y-3 md:flex md:flex-col h-[62%] font-medium">
          {demographicTypes?.map(type => (
            <li 
              key={type}
              onClick={() => setCurrentSelectedtype(type)}
              className={`p-3 cursor-pointer  bg-[#F3F3F4] flex-1 flex flex-col justify-between hover:bg-[#E1E1E2] border-t capitalize ${currentSelectedType === type && "text-white bg-black hover:bg-black"}`}>
              {demographicSelections?.[type]}
              <span className="uppercase">{type}</span>
            </li>
          ))}
        </ul>

        <CircleProgressBar 
          userData={userData}
          demographicShow={demographicShow} />

        <DemographicsBreakdown 
          userData={userData}
          setDemographicSelections={setDemographicSelections} />

      </div>
    </section>
  )
}

export default DemographicsStats