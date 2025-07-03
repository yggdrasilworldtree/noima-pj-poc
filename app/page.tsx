'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function TopPage() {
  const router = useRouter()

  return (
    <main className="relative min-h-screen w-full bg-[#fdf6ee] font-serif text-center">
      {/* 背景画像 */}
      <Image
        src="/tree-bg.png"
        alt="Tree of Questions"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />

      {/* フォアグラウンドUI */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen space-y-6">
        <h1 className="text-6xl font-bold text-brown-800 drop-shadow">Noima</h1>
        <button
          onClick={() => router.push('/menu')}
          className="px-8 py-3 text-lg bg-[#f5e6d4] text-brown-800 rounded-xl shadow hover:bg-[#ebdcc7] transition"
        >
          Enter
        </button>
      </div>
    </main>
  )
}
