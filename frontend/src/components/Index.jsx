import React from 'react'

export default function Index() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1f1f1f] to-[#3a3a3a]">
      <img
        src="/logo.jpeg"
        alt="GENIVIS Logo"
        className="w-[500px] shadow-[0_20px_50px_rgba(0,0,0,0.6)] rounded-lg"
      />
      <p className="mt-6 text-teal-400 text-lg tracking-wider animate-pulse">
        Loading...
      </p>
    </div>
  )
}