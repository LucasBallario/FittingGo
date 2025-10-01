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
    <div className="w-full max-w-3xl mx-auto space-y-8">
    <div className="space-y-2">
      <h2 className="text-3xl font-bold text-foreground">Your Preferences</h2>
      <p className="text-muted-foreground">Choose your preferred brands and performance priorities</p>
    </div>

    <div className="space-y-8">
      {/* Brand Selection */}
      <div className="space-y-4">
        <label className="text-lg font-semibold text-foreground">Preferred Brands</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {brandList.map((brand) => (
            <label key={brand} className="cursor-pointer group">
              <input
                type="checkbox"
                value={brand}
                checked={formData.preferences.brands?.includes(brand)}
                onChange={(e) => {
                  const checked = e.target.checked
                  const value = e.target.value

                  setFormData({
                    ...formData,
                    preferences: {
                      ...formData.preferences,
                      brands: checked
                        ? [...(formData.preferences.brands || []), value]
                        : formData.preferences.brands.filter((b) => b !== value),
                    },
                  })
                }}
                className="peer sr-only"
              />
              <div className="px-4 py-3 rounded-lg border-2 border-border bg-card peer-checked:border-primary peer-checked:bg-primary/10 transition-all hover:border-primary/50 text-center font-medium text-foreground">
                {brand}
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Priority Selection */}
      <div className="space-y-4">
        <label className="text-lg font-semibold text-foreground">What matters most to you?</label>
        <div className="grid md:grid-cols-3 gap-4">
          <label className="cursor-pointer group">
            <input
              type="radio"
              name="priority"
              value="distance"
              checked={formData.preferences.priority === "distance"}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  preferences: {
                    ...formData.preferences,
                    priority: e.target.value,
                  },
                })
              }
              className="peer sr-only"
            />
            <div className="p-6 rounded-lg border-2 border-border bg-card peer-checked:border-primary peer-checked:bg-primary/10 transition-all hover:border-primary/50">
              <div className="text-center space-y-2">
                <div className="text-4xl">🚀</div>
                <div className="font-semibold text-foreground">Distance</div>
                <div className="text-xs text-muted-foreground">Maximum yardage</div>
              </div>
            </div>
          </label>

          <label className="cursor-pointer group">
            <input
              type="radio"
              name="priority"
              value="forgiveness"
              checked={formData.preferences.priority === "forgiveness"}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  preferences: {
                    ...formData.preferences,
                    priority: e.target.value,
                  },
                })
              }
              className="peer sr-only"
            />
            <div className="p-6 rounded-lg border-2 border-border bg-card peer-checked:border-primary peer-checked:bg-primary/10 transition-all hover:border-primary/50">
              <div className="text-center space-y-2">
                <div className="text-4xl">🎯</div>
                <div className="font-semibold text-foreground">Forgiveness</div>
                <div className="text-xs text-muted-foreground">Consistent results</div>
              </div>
            </div>
          </label>

          <label className="cursor-pointer group">
            <input
              type="radio"
              name="priority"
              value="workability"
              checked={formData.preferences.priority === "workability"}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  preferences: {
                    ...formData.preferences,
                    priority: e.target.value,
                  },
                })
              }
              className="peer sr-only"
            />
            <div className="p-6 rounded-lg border-2 border-border bg-card peer-checked:border-primary peer-checked:bg-primary/10 transition-all hover:border-primary/50">
              <div className="text-center space-y-2">
                <div className="text-4xl">🎨</div>
                <div className="font-semibold text-foreground">Workability</div>
                <div className="text-xs text-muted-foreground">Shot shaping</div>
              </div>
            </div>
          </label>
        </div>
      </div>

      {/* Budget Selection */}
      <div className="space-y-4">
        <label className="text-lg font-semibold text-foreground">Budget Range</label>
        <div className="grid md:grid-cols-3 gap-4">
          <label className="cursor-pointer group">
            <input
              type="radio"
              name="price"
              value="low"
              checked={formData.preferences.budget === "low"}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  preferences: {
                    ...formData.preferences,
                    budget: e.target.value,
                  },
                })
              }}
              className="peer sr-only"
            />
            <div className="p-6 rounded-lg border-2 border-border bg-card peer-checked:border-primary peer-checked:bg-primary/10 transition-all hover:border-primary/50">
              <div className="text-center space-y-2">
                <div className="font-semibold text-foreground">Budget</div>
                <div className="text-xs text-muted-foreground">$</div>
              </div>
            </div>
          </label>

          <label className="cursor-pointer group">
            <input
              type="radio"
              name="price"
              value="medium"
              checked={formData.preferences.budget === "medium"}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  preferences: {
                    ...formData.preferences,
                    budget: e.target.value,
                  },
                })
              }
              className="peer sr-only"
            />
            <div className="p-6 rounded-lg border-2 border-border bg-card peer-checked:border-primary peer-checked:bg-primary/10 transition-all hover:border-primary/50">
              <div className="text-center space-y-2">
                <div className="font-semibold text-foreground">Mid-Range</div>
                <div className="text-xs text-muted-foreground">$$</div>
              </div>
            </div>
          </label>

          <label className="cursor-pointer group">
            <input
              type="radio"
              name="price"
              value="high"
              checked={formData.preferences.budget === "high"}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  preferences: {
                    ...formData.preferences,
                    budget: e.target.value,
                  },
                })
              }
              className="peer sr-only"
            />
            <div className="p-6 rounded-lg border-2 border-border bg-card peer-checked:border-primary peer-checked:bg-primary/10 transition-all hover:border-primary/50">
              <div className="text-center space-y-2">
             
                <div className="font-semibold text-foreground">Premium</div>
                <div className="text-xs text-muted-foreground">$$$</div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  </div>
)
}
