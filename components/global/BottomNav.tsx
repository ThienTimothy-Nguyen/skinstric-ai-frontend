"use client";
import { usePathname } from "next/navigation";
import NavBackButton from "./NavBackButton";
import NavNextButton from "./NavNextButton";

function BottomNav() {
  const pathName= usePathname();

  const steps = [
    {
      pathName: '/',
      nextButton: null,
    },
    {
      pathName: '/testing',
      nextButton: 'PROCEED',

    },
    {
      pathName: '/result',
      nextButton: 'GET SUMMARY',
    },
    {
      pathName: '/camera/capture',
      nextButton: 'GET SUMMARY',
    },
    {
      pathName: '/summary',
      nextButton: 'HOME',
    },
  ];

  const currentIndex = steps.findIndex(step => step.pathName === pathName);
  const currentStep = steps[currentIndex] ?? '/';
  const prevStep = steps[currentIndex - 1] ?? '/';
  const nextStep = steps[(currentIndex + 1) % steps.length];

  if (
    currentIndex === -1 ||
    currentStep.pathName === '/'
  ) return

  return (
    <nav className="w-full px-8 md:px-0 absolute bottom-[16%] md:bottom-2 left-0 global-container bg-transparent">
      <div className="row flex justify-between items-center">
        <NavBackButton prevStep={prevStep} />
        <NavNextButton 
          nextStep={nextStep}
          currentStep={currentStep}/>
      </div>
    </nav>
  )
}

export default BottomNav