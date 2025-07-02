// ✅ A8 接ぎ木UIページ（app/tree/[id]/graft/page.tsx）

'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { createClient } from '@/lib/supabase'
import type { Database } from '@/types/supabase'

const supabase = createClient<Database>()

export default function GraftPage() {
  const { id } = useParams()
  const router = useRouter()
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!text.trim()) return
    setLoading(true)
    await supabase.from('grafts').insert({ tree_id: id, text })
    setLoading(false)
    router.push(`/tree/${id}`)
  }

  return (
    <main className="p-4 max-w-xl mx-auto space-y-4">
      <h1 className="text-xl font-bold">🌿 接ぎ木する</h1>
      <textarea
        className="w-full h-32 border p-2 rounded"
        placeholder="問いに別の枝を接ぎ木してみよう…"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 disabled:opacity-50"
      >{loading ? '送信中…' : '接ぎ木する'}</button>
    </main>
  )
}