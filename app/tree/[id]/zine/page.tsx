//✅ A6 ZINE編集UI（app/tree/[id]/zine/page.tsx）

'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import type { Database } from '@/types/supabase'

export default function ZineEditorPage() {
  const { id } = useParams()
  const router = useRouter()
  const [content, setContent] = useState('')
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    if (!content.trim()) return
    setSaving(true)
    await supabase.from('fruits').insert({ tree_id: id, content })
    setSaving(false)
    router.push(`/tree/${id}`)
  }

  return (
    <main className="p-4 max-w-xl mx-auto space-y-4">
      <h1 className="text-xl font-bold">🍎 果実ZINEをつくる</h1>
      <textarea
        className="w-full h-64 border p-2 rounded"
        placeholder="この問いからどんな果実が生まれるか…"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={handleSave}
        disabled={saving}
        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 disabled:opacity-50"
      >{saving ? '保存中…' : 'ZINEを生成'}</button>
    </main>
  )
}