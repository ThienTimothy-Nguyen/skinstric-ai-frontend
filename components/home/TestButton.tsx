import Image from "next/image";

function TestButton() {
  return (
    <figure className="absolute -right-36 w-150.5 h-150.5">
      <Image 
        src='/rectangle-right.svg'
        alt="Left rectangle"
        fill
        className="z-0" />
      <button className="absolute z-10 top-1/2 left-1/2 -translate-1/2">
        <Image 
          src='/button-test.svg'
          alt="View AI button"
          width={136}
          height={136} />
      </button>
    </figure>
  )
}

export default TestButton