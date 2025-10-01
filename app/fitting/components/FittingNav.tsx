import React from 'react'

export default function FittingNav({disableNext, onNext,onBack, currentStep,totalSteps}) {
  return (
    <div className='m-6'>

      <button className={
          currentStep === 0
            ? "bg-gray-300 text-gray-500 cursor-not-allowed px-6 py-2 rounded"
            : "bg-slate-200 text-black hover:bg-slate-300 px-6 py-2 rounded"
          }
        disabled={currentStep=== 0}
        onClick={onBack}>
          Back
      </button>


      <button className={
          disableNext
            ? "bg-gray-300 text-gray-500 cursor-not-allowed px-6 py-2 rounded"
            : "bg-green-600 text-white hover:bg-green-700 px-6 py-2 rounded"
          }
      onClick={onNext} disabled={disableNext}>
        Next
      </button>
      
    </div>
  )
}
