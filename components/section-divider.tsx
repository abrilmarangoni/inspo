"use client"

export function SectionDivider() {
  return (
    <>
      <div className="bg-primary absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-40 blur-3xl select-none"></div>
      <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#FF6B35] to-transparent transition-all ease-in-out shadow-[0_0_10px_rgba(255,107,53,0.5)]"></div>
    </>
  )
}

