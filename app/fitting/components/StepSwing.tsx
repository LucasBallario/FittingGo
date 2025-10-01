import React from 'react'

export default function StepSwing({formData,setFormData}) {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Swing Information</h2>
        <p className="text-muted-foreground">Help us understand your swing characteristics</p>
      </div>

      <div className="space-y-6">
        {formData.type === "driver" && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Average Driver Distance (yards)</label>
            <input
              type="number"
              value={formData.driverDistance || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  driverDistance: Number(e.target.value),
                })
              }
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="e.g., 250"
            />
          </div>
        )}

        {formData.type === "irons" && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Average 7-Iron Distance (yards)</label>
            <input
              type="number"
              value={formData.iron7Distance || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  iron7Distance: Number(e.target.value),
                })
              }
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="e.g., 150"
            />
          </div>
        )}

        {formData.type === "wedges" && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Average Sand Wedge Distance (yards)</label>
            <input
              type="number"
              value={formData.wedgeDistance || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  wedgeDistance: Number(e.target.value),
                })
              }
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="e.g., 80"
            />
          </div>
        )}

        <div className="space-y-4">
          <label className="text-sm font-medium text-foreground">Ball Flight Pattern</label>
          <div className="grid grid-cols-3 gap-4">
            <label className="cursor-pointer group">
              <input
                type="radio"
                name="flight"
                value="fade"
                checked={formData.flight === "fade"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    flight: e.target.value,
                  })
                }
                className="peer sr-only"
              />
              <div className="p-6 rounded-lg border-2 border-border bg-card peer-checked:border-primary peer-checked:bg-primary/5 transition-all hover:border-primary/50">
                <div className="text-center space-y-2">
                  <div className="text-4xl">↗️</div>
                  <div className="font-semibold text-foreground">Fade</div>
                  <div className="text-xs text-muted-foreground">Left to right</div>
                </div>
              </div>
            </label>

            <label className="cursor-pointer group">
              <input
                type="radio"
                name="flight"
                value="straight"
                checked={formData.flight === "straight"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    flight: e.target.value,
                  })
                }
                className="peer sr-only"
              />
              <div className="p-6 rounded-lg border-2 border-border bg-card peer-checked:border-primary peer-checked:bg-primary/5 transition-all hover:border-primary/50">
                <div className="text-center space-y-2">
                  <div className="text-4xl">⬆️</div>
                  <div className="font-semibold text-foreground">Straight</div>
                  <div className="text-xs text-muted-foreground">Direct line</div>
                </div>
              </div>
            </label>

            <label className="cursor-pointer group">
              <input
                type="radio"
                name="flight"
                value="draw"
                checked={formData.flight === "draw"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    flight: e.target.value,
                  })
                }
                className="peer sr-only"
              />
              <div className="p-6 rounded-lg border-2 border-border bg-card peer-checked:border-primary peer-checked:bg-primary/5 transition-all hover:border-primary/50">
                <div className="text-center space-y-2">
                  <div className="text-4xl">↖️</div>
                  <div className="font-semibold text-foreground">Draw</div>
                  <div className="text-xs text-muted-foreground">Right to left</div>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
  
}
