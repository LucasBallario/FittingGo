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
          <button className={formData.type === 'driver' 
          ? 'buttonType bg-green-500' : 'buttonType'} 
           value={'driver'} onClick={handleClick}>
            Driver
          </button>
          <button className={formData.type === 'irons' 
          ? 'buttonType bg-green-500' : 'buttonType'} 
          value={'irons'} onClick={handleClick}>
            irons
          </button>
          <button className={formData.type === 'wedges' 
          ? 'buttonType bg-green-500' : 'buttonType'} 
          value={'wedges'} onClick={handleClick}>
            Wedges
          </button>
      </div>
    </div>
  )
}
