// ✅ A4 堆肥モーダルUI（app/tree/[id]/compost/page.tsx）
'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import type { Database } from '@/types/supabase'

export default function CompostPage() {
  const { id } = useParams()
  const router = useRouter()
  const [note, setNote] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!note.trim()) return
    setLoading(true)
    await supabase.from('composts').insert({ tree_id: id, text: note })
    setLoading(false)
    router.push(`/tree/${id}`)
  }

  return (
    <main className="p-4 max-w-xl mx-auto space-y-4">
      <h1 className="text-xl font-bold">🪱 堆肥を与える</h1>
      <textarea
        className="w-full h-32 border p-2 rounded"
        placeholder="感情や考えを堆肥として与える…"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
      >{loading ? '送信中…' : '堆肥を与える'}</button>
    </main>
  )
}