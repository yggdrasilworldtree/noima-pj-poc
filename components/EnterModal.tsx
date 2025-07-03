'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

export default function EnterModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl p-6 shadow-2xl w-80 space-y-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">Noima</h2>

        <MenuItem href="/tree" icon="🌳">Tree of Questions</MenuItem>
        <MenuItem href="/extinguish" icon="🔥">Extinguish</MenuItem>
        <MenuItem href="/reignite" icon="♻️">Reignite</MenuItem>
        <MenuItem href="/settings" icon="⚙️">Settings</MenuItem>

        <button
          onClick={onClose}
          className="w-full mt-2 text-sm text-gray-500 hover:text-gray-700 underline text-center"
        >
          Close
        </button>
      </div>
    </div>
  )
}

function MenuItem({
  href,
  icon,
  children,
}: {
  href: string
  icon: string
  children: ReactNode
}) {
  return (
    <Link href={href}>
      <div className="flex items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 transition rounded-xl shadow cursor-pointer">
        <span className="text-xl mr-3">{icon}</span>
        <span className="text-md font-medium text-gray-700">{children}</span>
      </div>
    </Link>
  )
}
