import React from 'react'

export default function StepPreferences({formData,setFormData}) {
  const brandList = [
    "Taylormade",
    "Titleist",
    "Callaway",
    "Ping",
    "Cobra",
    "Mizuno",
    "Wilson",
    "PXG",
    "Srixon"
  ]

  return (
    <div className='flex flex-col gap-6'>
      <h2>Preferences</h2>
      <p>Choose your preferred brands and performance priorities</p>

      <div className='grid grid-cols-2 gap-4'>

    {brandList.map((brand) => (
      <label key={brand}>
          <input
              type="checkbox"
              value={brand}
              checked={formData.preferences.brands?.includes(brand)}
              onChange={(e) => {
                const checked = e.target.checked;
                const value = e.target.value;

                setFormData({
                  ...formData,
                  preferences: {
                    ...formData.preferences,
                    brands: checked
                      ? [...(formData.preferences.brands || []), value]
                      : formData.preferences.brands.filter((b) => b !== value),
                  },
                });
              }}
            />
            {brand}
      </label>
    ))}

      

     

      
       
      
      

      </div>

      <div className='flex gap-6'>
        <p>What matters most to you?</p>

        <label>
          <input type='radio' name='priority' value='distance'
        checked={formData.preferences.priority === "distance"}
        onChange={(e) => 
          setFormData({
            ...formData,
            preferences: {
              ...formData.preferences,
              priority: e.target.value
            }
          
        })} />
          Distance
          </label>
        

        <label>
          <input type='radio' name='priority' value='forgiveness'
        checked={formData.preferences.priority === "forgiveness"}
        onChange={(e) => 
          setFormData({
            ...formData,
            preferences: {
              ...formData.preferences,
              priority: e.target.value
            }
          })
          
        } />
          Forgiveness
          </label>
        

        <label>
          <input type='radio' name='priority' value='workability' 
        checked={formData.preferences.priority === 'workability'} 
        onChange={(e) => 
          setFormData({
            ...formData,
            preferences: {
              ...formData.preferences,
              priority: e.target.value
            }
          })
        }/>
          Workability
          </label>
        
      </div>

      <div>
        <p>Budget</p>

        <label>
        <input type='radio' name='price' value='low'
        checked={formData.preferences.budget === 'low'}
        onChange={(e) => {
          setFormData({
            ...formData,
            preferences: {
              ...formData.preferences,
              budget:e.target.value
            }
          })
        }} />
          Low $
          </label>
        

        <label>
        <input type='radio' name='price' value='medium'
        checked={formData.preferences.budget === 'medium'} 
        onChange={(e) => 
          setFormData({
            ...formData,
            preferences: {
              ...formData.preferences,
              budget: e.target.value
            }
          })
        }/>
          Medium $$
          </label>
        

        <label>
          <input type='radio' name='price' value='high' 
        checked={formData.preferences.budget === 'high'} 
        onChange={(e) => 
          setFormData({
            ...formData,
            preferences: {
              ...formData.preferences,
              budget: e.target.value
            }
          })
        }/>
          High $$$
         </label>
        
      </div>

    </div>
  )
}
