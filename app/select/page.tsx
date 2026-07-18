import SelectOptions from "@/components/select/SelectOptions";


function SelectPage() {
  return(
    <main className="min-h-screen w-full overflow-hidden relative flex justify-center items-center">
      <span className="absolute flex flex-col gap-1 top-18 left-9 text-left font-semibold text-[16px] sm:text-md">
        A.I. ANALYSIS
        <span className="text-[12px] sm:text-sm font-normal leading-6">
          A.I. HAS ESTIMATED THE FOLLOWING.<br />
          FIX ESTIMATED INFORMATION IF NEEDED.
        </span>
      </span>
      <SelectOptions />
    </main>
  );
}

export default SelectPage;