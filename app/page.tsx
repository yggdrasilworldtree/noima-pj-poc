'use client'

import Image from 'next/image'
import { useState } from 'react'
import EnterModal from '@/components/EnterModal'

export default function TopPage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#fdf6ee]">
      {/* 背景画像 */}
      <Image
        src="/tree-bg.png"
        alt="Tree Background"
        fill
        className="object-cover object-center pointer-events-none z-0"
        priority
      />

      {/* ロゴとボタン（オーバーレイ背景つき） */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        <div className="bg-white/70 p-6 rounded-xl backdrop-blur-sm">
          <h1 className="text-6xl font-bold text-brown-800 drop-shadow">Noima</h1>
          <button
            onClick={() => setIsOpen(true)}
            className="mt-6 px-8 py-3 text-lg bg-[#f5e6d4] text-brown-800 rounded-xl shadow hover:bg-[#ebdcc7] transition"
          >
            Enter
          </button>
        </div>
      </div>

      {/* モーダル */}
      {isOpen && <EnterModal onClose={() => setIsOpen(false)} />}
    </main>
  )
}
