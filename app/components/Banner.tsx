import React from 'react'
import Brands from './Brands'
export default function banner() {
  const benefits = [
    {
      
      title: "Personalized fitting",
      description: "Precise analysis adapted to your swing and playing style",
    },
    {
      title: "100% Online",
      description: "From the comfort of your home, without appointments or waiting",
    },
    {
      title: "Certified Professionals",
      description: "Fitting experts with years of experience",
    },
    {
      title: "Extensive selection of clubs",
      description: "We have brands and models of all types"
    },
  ]
  return (
    <div className="mt-12">
    
    <div className="max-w-5xl mx-auto text-center px-6">
      <h1 className="text-4xl font-bold">
        Fitting<span className="text-5xl text-green-700">G</span>o
      </h1>

      <h2 className="mt-6 text-7xl font-bold leading-tight">
        <span>The golf fitting</span>{" "}
        <span className="text-green-700 block">perfect for you</span>
      </h2>

      <p className="mt-4 text-slate-700 text-lg">
        Find the best golf clubs that match your skills and goals
      </p>

     
      <div className="mt-8 flex justify-center gap-4">
        <button className="px-6 py-4 rounded-xl bg-green-700 text-white cursor-pointer hover:opacity-80">
          Start your fitting
        </button>
        <button className="px-6 py-4 rounded-xl border border-slate-300 cursor-pointer hover:opacity-80">
          How it works
        </button>
      </div>
    </div>

   
    <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="border-[#dbfde2] text-center px-4 py-8 rounded-xl bg-[#dbfde2] shadow-sm"
        >
          <h3 className="font-bold mb-2">{benefit.title}</h3>
          <p className="text-slate-700">{benefit.description}</p>
        </div>
      ))}
    </div>
  
      
        <Brands />
    </div>
  )
}
