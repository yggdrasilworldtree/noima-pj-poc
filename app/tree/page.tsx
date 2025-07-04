'use client'

import Link from 'next/link'

export default function TreePage() {
  return (
    <main className="min-h-screen bg-[#fdf6ee] text-brown-800 font-serif px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">🌳 問いの森</h1>

        {/* ▼ ユーザーの問い木カード一覧（今はダミー） */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* サンプル問い木カード */}
          <div className="border rounded-xl p-4 shadow bg-white hover:shadow-md transition">
            <h2 className="text-xl font-semibold">問い：なぜ私は問い続けるのか？</h2>
            <p className="text-sm mt-2 text-brown-600">状態：🌱 sprouting</p>
          </div>

          <div className="border rounded-xl p-4 shadow bg-white hover:shadow-md transition">
            <h2 className="text-xl font-semibold">問い：言葉の外側には何がある？</h2>
            <p className="text-sm mt-2 text-brown-600">状態：🌿 growing</p>
          </div>
        </div>

        {/* ▼ 新しい問いを育てるボタン */}
        <div className="text-center">
          <Link
            href="/new"
            className="inline-block bg-brown-600 text-white px-6 py-3 rounded-full hover:bg-brown-800 transition"
          >
            ＋ 新しい問いを育てる
          </Link>
        </div>
      </div>
    </main>
  )
}
