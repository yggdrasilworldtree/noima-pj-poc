//✅ A5 雨モーダルUI（app/tree/[id]/rain/page.tsx）

'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import type { Database } from '@/types/supabase'

export default function RainPage() {
  const { id } = useParams()
  const router = useRouter()
  const [note, setNote] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!note.trim()) return
    setLoading(true)
    await supabase.from('rains').insert({ tree_id: id, text: note })
    setLoading(false)
    router.push(`/tree/${id}`)
  }

  return (
    <main className="p-4 max-w-xl mx-auto space-y-4">
      <h1 className="text-xl font-bold">🌧️ 雨を降らせる</h1>
      <textarea
        className="w-full h-32 border p-2 rounded"
        placeholder="問いに雨を注ぐことで、どんな葉が育つか…"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >{loading ? '送信中…' : '雨を降らせる'}</button>
    </main>
  )
}
