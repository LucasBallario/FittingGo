import React from 'react'

export default function StepType({ formData, setFormData }) {

 const handleClick = (event) => {
  setFormData({
     ...formData,
    type: event.target.value
 })
   
    
 }

  return (
    <div>
      <div>
          <button value={'driver'} onClick={handleClick}>
            Driver
          </button>
          <button value={'irons'} onClick={handleClick}>
            irons
          </button>
          <button value={'wedges'} onClick={handleClick}>
            Wedges
          </button>
      </div>
    </div>
  )
}
