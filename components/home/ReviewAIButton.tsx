import Image from "next/image";

function ReviewAIButton() {
  return (
    <figure className="absolute -left-36 w-150.5 h-150.5">
      <Image 
        src='/rectangle-left.svg'
        alt="Left rectangle"
        fill
        className="z-0" />
      <button className="absolute z-10 top-1/2 left-1/2 -translate-1/2">
        <Image 
          src='/button-review.svg'
          alt="View AI button"
          width={152}
          height={152} />
      </button>
    </figure>
  )
}

export default ReviewAIButton