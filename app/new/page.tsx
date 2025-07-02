// ✅ A2 問い投稿ページ（app/new/page.tsx）
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import type { Database } from '@/types/supabase'

export default function NewTreePage() {
  const router = useRouter()
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!text.trim()) return
    setLoading(true)
    const { data, error } = await supabase.from('trees').insert({
      title: text,
      status: 'sprouting',
    }).select().single()

    if (data) {
      router.push(`/tree/${data.id}`)
    }
    setLoading(false)
  }

  return (
    <main className="p-4 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">問いを芽吹かせる</h1>
      <textarea
        className="w-full h-32 border p-2 rounded"
        placeholder="あなたの問いを記してください…"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
      >
        {loading ? '投稿中…' : '🌱 芽吹かせる'}
      </button>
    </main>
  )
}