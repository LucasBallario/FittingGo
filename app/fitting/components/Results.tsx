import React from 'react'
import clubs from '../../../data/clubs'

export default function Results({formData}) {

let filteredClubs = clubs

filteredClubs = filteredClubs.filter(club => club.type === formData.type)

if (formData.preferences.brands?.length > 0) {
  filteredClubs = filteredClubs.filter(club => formData.preferences.brands.includes(club.brand))
}

if (formData.preferences.budget) {
  filteredClubs = filteredClubs.filter(club => club.priceRange === formData.preferences.budget )
}

if (formData.flight) {
  filteredClubs = filteredClubs.filter(club => club.suitableFlights.includes(formData.flight))
  
}

  return (
    <div>
    {filteredClubs.length > 0 ? (
      filteredClubs.map(club => (
        <div key={club.id} >
           <h3>{club.brand} {club.model}</h3>
           <p>Budget: {club.priceRange}</p>
         </div>
      ))
    ) : (
      <p>No clubs match your preferences.</p>
    )}
  </div>
  )
}
