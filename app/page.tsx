'use client'

import Image from 'next/image'
import { useState } from 'react'
import EnterModal from '@/components/EnterModal'

export default function TopPage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="relative w-screen h-screen overflow-hidden">
      {/* 背景画像 */}
      <Image
        src="/tree-bg.png"
        alt="Tree Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0 pointer-events-none"
        priority
      />

      {/* ロゴとボタン */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold text-brown-800 drop-shadow-lg">Noima</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="mt-8 px-8 py-3 text-lg bg-[#f5e6d4] text-brown-800 rounded-xl shadow hover:bg-[#ebdcc7] transition"
        >
          Enter
        </button>
      </div>

      {/* モーダル */}
      {isOpen && <EnterModal onClose={() => setIsOpen(false)} />}
    </main>
  )
}
