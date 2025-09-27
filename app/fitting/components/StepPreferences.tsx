import React from 'react'

export default function StepPreferences({formData,setFormData}) {
  return (
    <div className='flex flex-col gap-6'>
      <h2>Preferences</h2>
      <p>Choose your preferred brands and performance priorities</p>

      <div className='grid grid-cols-2 gap-4'>

      <label>
        <input type='checkbox' value='Taylormade'
        checked={formData.preferences.brands?.includes("Taylormade")}
        onChange={(e) => {
          const checked = e.target.checked
          const value = e.target.value

          setFormData({
            ...formData,
            preferences: {
              ...formData.preferences,
              brands: checked ? [...(formData.preferences.brands || []), value] : formData.preferences.brands.filter((b) => b !== value) 
            }
          })
        }}
        />
        Taylormade
      </label>
      

      <label>
        <input type='checkbox' value='Titleist' 
        checked={formData.preferences.brands?.includes("Titleist")} 
        onChange={(e) => {
          const checked = e.target.checked
          const value = e.target.value

          setFormData({ 
            ...formData,
            preferences: {
              ...formData.preferences,
              brands: checked ? [...(formData.preferences.brands || []), value] : formData.preferences.brands.filter((b) => b !== value) 
            }
        })

        }}/>
        Titleist
      </label>
      

      <label>
        <input type='checkbox' value='Callaway'
        checked={formData.preferences.brands?.includes("Callaway")} 
        onChange={(e) => {
          const checked = e.target.checked
          const value = e.target.value

          setFormData({
            ...formData,
            preferences: {
              ...formData.preferences,
              brands: checked ? [...(formData.preferences.brands || []), value] : formData.preferences.brands.filter((b) => b !== value) 
            }
          })
        }}   />
        Callaway
      </label>
      

      <label>
       <input type='checkbox' value='Ping' 
       checked={formData.preferences.brands?.includes("Ping")} 
       onChange={(e) => {
        const checked = e.target.checked
        const value = e.target.value

        setFormData({
          ...formData,
          preferences: {
            ...formData.preferences,
            brands: checked ? [...(formData.preferences.brands || []), value] : formData.preferences.brands.filter((b) => b !== value) 
          }
        })
       }} />
        Ping
      </label>

      <label>
        <input type='checkbox' value='Cobra' 
       checked={formData.preferences.brands?.includes("Cobra")} 
       onChange={(e) => {
        const checked = e.target.checked
        const value = e.target.value

        setFormData({
          ...formData,
          preferences: {
            ...formData.preferences,
            brands: checked ? [...(formData.preferences.brands || []), value] : formData.preferences.brands.filter((b) => b !== value) 
          }
        })
       }}    />
        Cobra
      </label>
      

      <label>
        <input type='checkbox' value='Mizuno' 
       checked={formData.preferences.brands?.includes("Mizuno")} 
       onChange={(e) => {
        const checked = e.target.checked
        const value = e.target.value

        setFormData({
          ...formData,
          preferences: {
            ...formData.preferences,
            brands: checked ? [...(formData.preferences.brands || []), value] : formData.preferences.brands.filter((b) => b !== value) 
          }
        })
       }}    />
        Mizuno
        </label>
      

      <label>
        <input type='checkbox' value='Wilson' 
       checked={formData.preferences.brands?.includes("Wilson")} 
       onChange={(e) => {
        const checked = e.target.checked
        const value = e.target.value

        setFormData({
          ...formData,
          preferences: {
            ...formData.preferences,
            brands: checked ? [...(formData.preferences.brands || []), value] : formData.preferences.brands.filter((b) => b !== value) 
          }
        })
       }}   />
        Wilson
        </label>
      

      <label>
        <input type='checkbox' value='PXG' 
       checked={formData.preferences.brands?.includes("PXG")} 
       onChange={(e) => {
        const checked = e.target.checked
        const value = e.target.value

        setFormData({
          ...formData,
          preferences: {
            ...formData.preferences,
            brands: checked ? [...(formData.preferences.brands || []), value] : formData.preferences.brands.filter((b) => b !== value) 
          }
        })
       }}   />
        PXG
        </label>
      
      <label>
        <input type='checkbox' value='Srixon' 
       checked={formData.preferences.brands?.includes("Srixon")} 
       onChange={(e) => {
        const checked = e.target.checked
        const value = e.target.value

        setFormData({
          ...formData,
          preferences: {
            ...formData.preferences,
            brands: checked ? [...(formData.preferences.brands || []), value] : formData.preferences.brands.filter((b) => b !== value) 
          }
        })
       }}  />
        Srixon
        </label>
      

      </div>

      <div className='flex gap-6'>
        <p>What matters most to you?</p>

        <label>Distance</label>
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

        <label>Forgiveness</label>
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

        <label>Workability</label>
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
