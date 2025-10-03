import React from 'react'

type StepHeaderProps = {
  currentStep: number;
  totalSteps: number;
  label: string;
};

export default function StepHeader({ currentStep, totalSteps, label }: StepHeaderProps) {
  return (
    <div>
      <h1 className="text-4xl font-bold">
        Fitting<span className="text-5xl text-green-700">G</span>o
      </h1>
    </div>
  )
}
