import React from 'react'

//edad,handicap,altura,mano dominante


export default function StepPersonal({formData,setFormData,disableNext}) {
  return (
    <div>
      <h2>Personal information</h2>

      <div className="flex flex-col gap-2 mb-4">
        <label>Age</label>
        <input type='number' 
          value={formData.age || ""}
          onChange={ (event) => setFormData({
          ...formData,
          age: Number(event.target.value)
        })} />
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <label>Handicap</label>
        <input type='number' 
        value={formData.handicap || ""}
        onChange={(event) => setFormData({
          ...formData,
          handicap: Number(event.target.value)
        })}/>
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <label>Height</label>
        <input type='number'
        value={formData.height || ""} 
        onChange={(event) => setFormData({
          ...formData,
          height: Number(event.target.value)
        })}/>
      </div>

      <div className="flex flex-col gap-2 mb-4">
  <label>Hand</label>
  <div>
    <label>
      <input
        type="radio"
        name="hand"
        value="right"
        checked={formData.hand === "right"}
        onChange={(e) => setFormData({ ...formData, hand: e.target.value })}
      />
      Right-handed
    </label>

    <label>
      <input
        type="radio"
        name="hand"
        value="left"
        checked={formData.hand === "left"}
        onChange={(e) => setFormData({ ...formData, hand: e.target.value })}
      />
      Left-handed
    </label>
  </div>
</div>

    </div>
  )
}
