import React from 'react'

export default function StepPreferences() {
  return (
    <div className='flex flex-col gap-6'>
      <h2>Preferences</h2>
      <p>Choose your preferred brands and performance priorities</p>

      <div className='grid grid-cols-2 gap-4'>

      <label>
        <input type='checkbox' />
        Taylormade
      </label>
      

      <label>
        <input type='checkbox' />
        Titleist
      </label>
      

      <label>
        <input type='checkbox' />
        Callaway
      </label>
      

      <label>
       <input type='checkbox' />
        Ping
      </label>

      <label>
        <input type='checkbox' />
        Cobra
      </label>
      

      <label>
        <input type='checkbox' />
        Mizuno
        </label>
      

      <label>
        <input type='checkbox' />
        Wilson
        </label>
      

      <label>
        <input type='checkbox' />
        Mizuno
        </label>
      
      <label>
        <input type='checkbox' />
        Mizuno
        </label>
      

      </div>

      <div className='flex gap-6'>
        <p>What matters most to you?</p>

        <label>Distance</label>
        <input type='radio' />

        <label>Forgiveness</label>
        <input type='radio' />

        <label>Workability</label>
        <input type='radio' />
      </div>

      <div>
        <p>Budget</p>

        <label>Low $</label>
        <input type='radio' name='price' />

        <label>Medium $$</label>
        <input type='radio' name='price' />

        <label>Hight $$$</label>
        <input type='radio' name='price' />
      </div>

    </div>
  )
}
