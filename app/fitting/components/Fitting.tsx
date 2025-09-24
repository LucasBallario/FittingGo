'use client'
import React, { useState } from 'react'
import StepHeader from './StepHeader'
import StepPersonal from './StepPersonal'
import StepPreferences from './StepPreferences'
import StepType from './StepType'
import StepSwing from './StepSwing'
import Results from './Results'
import FittingNav from './FittingNav'


export default function Fitting() {
    const [currentStep, setCurrentStep] = useState(0)

 const steps = [
        { id: 0, label: "Club type", component: StepType },
        { id: 1, label: "Personal data", component: StepPersonal },
        { id: 2, label: "Swing information", component: StepSwing },
        { id: 3, label: "Preferences", component: StepPreferences },
        { id: 4, label: "Results", component: Results },
    ]

    const StepComponent = steps[currentStep].component

    const goNext = () => {
        if (currentStep < steps.length -1) {
            setCurrentStep(currentStep + 1)
        }
    }
    const goBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1)
        }
    }

    

    const [formData,setFormData] = useState(
          {
            type: null,
            handicap: null,
            swingSpeed: null,
            preferences: {},
            age: null,
            height: null,
            hand: null
          }
    ) 
      
    const disableNext = 
    (currentStep === 0 && !formData.type) ||
    (currentStep === 1 && (
    !formData.age ||
    !formData.handicap ||
    !formData.height ||
    !formData.hand
    ));
   

  return (
    <div>
        <StepHeader
        currentStep={currentStep}
        totalSteps={steps.length}
        label={steps[currentStep].label}
        />

        <StepComponent 
        formData={formData}
        setFormData={setFormData}
        />

        <FittingNav 
        disableNext={disableNext}
        currentStep={currentStep}
        totalSteps={steps.length}
        onNext={goNext}
        onBack={goBack}
        />
    </div>
  )
}
