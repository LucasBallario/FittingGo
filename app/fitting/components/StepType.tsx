import React from 'react'

export default function StepType({ formData, setFormData }) {

 const handleClick = (event) => {
  setFormData({
     ...formData,
    type: event.target.value
 })
   
    
 }

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold text-foreground">Select Club Type</h2>
        <p className="text-muted-foreground">Choose the type of club you are looking to fit</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <button
          className={`group relative p-8 rounded-xl border-2 transition-all ${
            formData.type === "driver"
              ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
              : "border-border bg-card hover:border-primary/50 hover:shadow-md"
          }`}
          value={"driver"}
          onClick={handleClick}
        >
          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-foreground">Driver</h3>
            </div>
          </div>
          {formData.type === "driver" && (
            <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}
        </button>

        <button
          className={`group relative p-8 rounded-xl border-2 transition-all ${
            formData.type === "irons"
              ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
              : "border-border bg-card hover:border-primary/50 hover:shadow-md"
          }`}
          value={"irons"}
          onClick={handleClick}
        >
          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-foreground">Irons</h3>
            </div>
          </div>
          {formData.type === "irons" && (
            <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}
        </button>

        <button
          className={`group relative p-8 rounded-xl border-2 transition-all ${
            formData.type === "wedges"
              ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
              : "border-border bg-card hover:border-primary/50 hover:shadow-md"
          }`}
          value={"wedges"}
          onClick={handleClick}
        >
          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-foreground">Wedges</h3>
            </div>
          </div>
          {formData.type === "wedges" && (
            <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}
        </button>
      </div>
    </div>
  )
  
}
