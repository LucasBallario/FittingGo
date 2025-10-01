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
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold text-foreground">Your Personalized Recommendations</h2>
        <p className="text-muted-foreground">Based on your fitting profile, here are the best clubs for you</p>
      </div>

      {filteredClubs.length > 0 ? (
        <div className="grid gap-6">
          {filteredClubs.map((club, index) => (
            <div
              key={club.id}
              className="group relative p-6 rounded-xl border-2 border-border bg-card hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {club.brand} {club.model}
                      </h3>
                      <p className="text-sm text-muted-foreground capitalize">{club.type}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {club.priceRange === "low" && "$ Budget"}
                      {club.priceRange === "medium" && "$$ Mid-Range"}
                      {club.priceRange === "high" && "$$$ Premium"}
                    </span>
                    {club.suitableFlights.map((flight) => (
                      <span
                        key={flight}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground capitalize"
                      >
                        {flight} flight
                      </span>
                    ))}
                  </div>

                  {club.description && <p className="text-sm text-muted-foreground">{club.description}</p>}
                </div>

                <div className="flex flex-col items-end gap-2">
                  <button className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 px-6 rounded-xl border-2 border-dashed border-border bg-muted/30">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-foreground mb-2">No clubs match your preferences</h3>
          <p className="text-muted-foreground">Try adjusting your filters or preferences to see more options</p>
        </div>
      )}
    </div>
  )
  
}
