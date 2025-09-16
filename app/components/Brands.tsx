import React from 'react'
import Image from 'next/image'

export default function Brands() {
  return (
    <section className="mt-16">
      <h3 className="text-2xl text-slate-600 font-bold text-center mb-4">Trusted Brands</h3>
      <div className="flex justify-center gap-12 flex-wrap">
        <Image src="/taylormade.png" alt="TaylorMade" width={120} height={60} />
        <Image src="/callaway.png" alt="Callaway" width={140} height={40} />
        <Image src="/fujikura.png" alt="Fujikura" width={120} height={60} />
        <Image src="/titleist.png" alt="Titleist" width={120} height={60} />
        <Image src="/kbs.png" alt="KBS" width={120} height={60} />
      </div>
    </section>
  )
}
