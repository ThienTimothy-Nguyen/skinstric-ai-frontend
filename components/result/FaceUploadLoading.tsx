import React from 'react'
import LoadingCircles from '../animation/LoadingCircles'
import DiamondBackground from '../animation/DiamondBackground'

function FaceUploadLoading() {
  return (
    <div className="flex flex-col justify-between items-center gap-10">
      <DiamondBackground 
        smallScreenDiamondSize={320}
        mediumScreenDiamondSize={400}
        largeScreenDiamondSize={560} />
      <span className="text-lg text-gray-500 tracking-wider">
        PREPARING YOUR ANALYSIS
      </span>
      <LoadingCircles />
    </div>
  )
}

export default FaceUploadLoading