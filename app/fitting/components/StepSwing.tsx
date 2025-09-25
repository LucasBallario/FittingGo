import React from 'react'

export default function StepSwing({formData,setFormData}) {
  return (
    <div>
      <h2>Swing Information</h2>

{formData.type === 'driver' && (
  <div>
    <label>Enter your average driver distance in yds</label>
    <input type='number' value={formData.driverDistance} onChange={(e) => setFormData({
      ...formData,
      driverDistance: Number(e.target.value)
    })}/>
  </div>
)}

{formData.type === 'irons' && (
  <div>
  <label>Enter your average iron 7 distance in yds</label>
  <input type='number' value={formData.iron7Distance} onChange={(e) => setFormData({
    ...formData,
    iron7Distance: Number(e.target.value)
  })} />
</div>
)}

{formData.type === 'wedges' && (
  <div>
  <label>Enter your average sand wedge distance in yds</label>
  <input type='number' value={formData.wedgeDistance} onChange={(e) => setFormData({
    ...formData,
    wedgeDistance: Number(e.target.value)
  })} />
</div>
)}

<div>
  <h3>Ball flight</h3>
  <label>
    <input type='radio' name='flight' value='fade' checked={formData.flight === 'fade'} 
    onChange={(e) => setFormData({
      ...formData,
      flight: e.target.value
    })}/>
    Fade
  </label>

  <label>
    <input type='radio' name='flight' value='straight' checked={formData.flight === 'straight'}
    onChange={(e) => setFormData({
      ...formData,
      flight: e.target.value
    })} />
    Straight
  </label>

  <label>
    <input type='radio' name='flight' value='draw' checked={formData.flight === 'draw'}
    onChange={(e) => setFormData({
      ...formData,
      flight: e.target.value
    })} />
    Draw
  </label>
  
</div>
    
    </div>
  )
}
