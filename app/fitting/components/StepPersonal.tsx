import React from 'react'

//edad,handicap,altura,mano dominante


export default function StepPersonal({formData,setFormData,disableNext}) {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Personal Information</h2>
        <p className="text-muted-foreground">Tell us about yourself to get started</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Age</label>
          <input
            type="number"
            value={formData.age || ""}
            onChange={(event) =>
              setFormData({
                ...formData,
                age: Number(event.target.value),
              })
            }
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="Enter your age"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Handicap</label>
          <input
            type="number"
            value={formData.handicap || ""}
            onChange={(event) =>
              setFormData({
                ...formData,
                handicap: Number(event.target.value),
              })
            }
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="Enter your handicap"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Height (inches)</label>
          <input
            type="number"
            value={formData.height || ""}
            onChange={(event) =>
              setFormData({
                ...formData,
                height: Number(event.target.value),
              })
            }
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="Enter your height"
          />
        </div>

        <div className="space-y-4">
          <label className="text-sm font-medium text-foreground">Dominant Hand</label>
          <div className="grid grid-cols-2 gap-4">
            <label className="cursor-pointer group">
              <input
                type="radio"
                name="hand"
                value="right"
                checked={formData.hand === "right"}
                onChange={(e) => setFormData({ ...formData, hand: e.target.value })}
                className="peer sr-only"
              />
              <div className="p-6 rounded-lg border-2 border-border bg-card peer-checked:border-primary peer-checked:bg-primary/10 transition-all hover:border-primary/50">
                <div className="text-center space-y-2">
                  <div className="font-semibold text-foreground">Right-handed</div>
                </div>
              </div>
            </label>

            <label className="cursor-pointer group">
              <input
                type="radio"
                name="hand"
                value="left"
                checked={formData.hand === "left"}
                onChange={(e) => setFormData({ ...formData, hand: e.target.value })}
                className="peer sr-only"
              />
              <div className="p-6 rounded-lg border-2 border-border bg-card peer-checked:border-primary peer-checked:bg-primary/10 transition-all hover:border-primary/50">
                <div className="text-center space-y-2">
                  <div className="font-semibold text-foreground ">Left-handed</div>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}