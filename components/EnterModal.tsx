'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

export default function EnterModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-[#fffaf1] rounded-2xl p-8 shadow-lg w-80 space-y-4 text-brown-800">
        <h2 className="text-3xl font-bold text-center mb-4">Noima</h2>
        <MenuItem href="/tree" icon="🌳">Tree of Questions</MenuItem>
        <MenuItem href="/extinguish" icon="🔥">Extinguish</MenuItem>
        <MenuItem href="/reignite" icon="♻️">Reignite</MenuItem>
        <MenuItem href="/settings" icon="⚙️">Settings</MenuItem>
        <button onClick={onClose} className="w-full mt-2 text-sm text-gray-500 hover:underline">
          Close
        </button>
      </div>
    </div>
  )
}

function MenuItem({ href, icon, children }: { href: string, icon: string, children: ReactNode }) {
  return (
    <Link href={href}>
      <div className="flex items-center px-4 py-2 rounded-xl bg-[#f5e6d4] hover:bg-[#ecdcc5] transition cursor-pointer">
        <span className="text-xl mr-3">{icon}</span>
        <span className="text-md font-medium">{children}</span>
      </div>
    </Link>
  )
}
