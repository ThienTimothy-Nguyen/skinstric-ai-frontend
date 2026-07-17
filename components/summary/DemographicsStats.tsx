"use client";

function DemographicsStats() {
  return (
    <section className="global-container">
      <div className="row grid md:grid-cols-[1.5fr_8.5fr_3.15fr] gap-4 mt-10 mb-40 md:gap-4 pb-0 md:pb-0 md:mb-0">
        <div className="bg-white-100 space-y-3 md:flex md:flex-col h-[62%] font-medium">
          <div className="p-3 cursor-pointer  bg-[#F3F3F4] flex-1 flex flex-col justify-between hover:bg-[#E1E1E2] border-t">
            East asian <br />
            RACE
          </div>
          <div className="p-3 cursor-pointer  bg-[#F3F3F4] flex-1 flex flex-col justify-between hover:bg-[#E1E1E2] border-t">
            70+ <br />
            AGE
          </div>
          <div className="p-3 cursor-pointer  bg-[#F3F3F4] flex-1 flex flex-col justify-between hover:bg-[#E1E1E2] border-t">
            Female <br />
            SEX
          </div>
        </div>
      </div>
    </section>
  )
}

export default DemographicsStats