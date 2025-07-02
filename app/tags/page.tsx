//✅ A13 タグ編集・推薦管理UI（app/tags/page.tsx）

'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase'
import type { Database } from '@/types/supabase'

const supabase = createClient<Database>()

export default function TagsPage() {
  const [tags, setTags] = useState<any[]>([])
  const [newTag, setNewTag] = useState('')

  const fetchTags = async () => {
    const { data } = await supabase.from('tags').select('*')
    if (data) setTags(data)
  }

  useEffect(() => {
    fetchTags()
  }, [])

  const handleAdd = async () => {
    if (!newTag.trim()) return
    await supabase.from('tags').insert({ name: newTag })
    setNewTag('')
    fetchTags()
  }

  return (
    <main className="p-4 max-w-xl mx-auto space-y-4">
      <h1 className="text-xl font-bold">🏷️ タグ管理</h1>
      <div className="flex gap-2">
        <input
          type="text"
          className="border p-2 flex-1 rounded"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          placeholder="新しいタグ名"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >追加</button>
      </div>
      <ul className="list-disc pl-5 text-gray-700">
        {tags.map((t) => <li key={t.id}>{t.name}</li>)}
      </ul>
    </main>
  )
}