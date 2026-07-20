"use client";
import { DemographicSelections, DemographicSelectionValue, DemographicType, UserImageData } from "@/types/demographic";
import { useEffect, useState } from "react";

type CircleProgressBarProps = {
  userData: UserImageData | null;
  currentSelectedType: DemographicType;
  demographicSelections: DemographicSelections | null;
};

const CIRCLE_RADIUS = 197;
const CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

function getParentDemographicType(
  userData: UserImageData,
  targetDemographic: DemographicSelectionValue,
): DemographicType | undefined {
  return (Object.keys(userData) as DemographicType[]).find(
    (key) => targetDemographic in userData[key],
  );
}

function CircleProgressBar({
  userData,
  currentSelectedType,
  demographicSelections,
}: CircleProgressBarProps) {
  const [circleOffset, setCircleOffset] = useState(0);
  const [percentVal, setPercentVal] = useState(0);

  useEffect(() => {
    if (!userData || !currentSelectedType || !demographicSelections) return;

    const targetDemographic = demographicSelections[currentSelectedType];
    if (!targetDemographic) return;

    const parentKey = getParentDemographicType(userData, targetDemographic);
    if (!parentKey) return;

    const rawPercent = userData[parentKey][
      targetDemographic as keyof UserImageData[typeof parentKey]
    ];
    const rounded = Math.round(rawPercent * 100);

    setPercentVal(rounded);
    setCircleOffset(((100 - rounded) / 100) * CIRCUMFERENCE);
  }, [userData, currentSelectedType, demographicSelections]);

  return (
    <div className="relative bg-gray-100 p-4 flex flex-col items-center md:items-end justify-center md:min-h-112 md:border-t">
      <span className="hidden md:block md:absolute text-[40px] left-5 top-2">WHITE</span>
      <div className="relative w-full max-w-[384px] aspect-square mb-4 md:right-5 md:bottom-2">
        <div className="w-full h-full max-h-96 relative flex justify-center items-center mt-4">
          <div className="w-100 h-100 rounded-[50%] bg-gray-300 p-[7.25px] relative z-1 shadow-md">
            <div className="w-96.5 h-96.5 rounded-[50%] bg-gray-100 relative z-1 flex justify-center items-center">
              <span className="text-3xl md:text-[40px] font-normal">{percentVal}%</span>
            </div>
          </div>
          <svg
            width="420px"
            height="420px"
            xmlns="http://www.w3.org/2000/svg"
            className="-rotate-90 absolute z-10 -top-4.75 -left-4"
          >
            <circle
              cx="208"
              cy="208"
              r={CIRCLE_RADIUS}
              className="progress-circle transition-discrete duration-700 ease-in-out"
              style={
                {
                  "--circumference": CIRCUMFERENCE,
                  "--dash-offset": circleOffset,
                } as React.CSSProperties
              }
            />
          </svg>
        </div>
      </div>
      <span className="md:absolute text-xs text-[#A0A4AB] md:text-sm lg:text-base font-normal mb-1 mt-5 md:mt-0 leading-6 md:bottom-[-15%] md:left-[22%] lg:left-[30%] xl:left-[40%] 2xl:left-[45%]">
        If A.I. estimate is wrong, select the correct one.
      </span>
    </div>
  );
}

export default CircleProgressBar;
