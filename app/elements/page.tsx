//✅ A14 素材編集／分類パネル（app/elements/page.tsx）

'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase'
import type { Database } from '@/types/supabase'

const supabase = createClient<Database>()

export default function ElementsPage() {
  const [elements, setElements] = useState<any[]>([])
  const [newElement, setNewElement] = useState('')

  const fetchElements = async () => {
    const { data } = await supabase.from('elements').select('*')
    if (data) setElements(data)
  }

  useEffect(() => {
    fetchElements()
  }, [])

  const handleAdd = async () => {
    if (!newElement.trim()) return
    await supabase.from('elements').insert({ name: newElement })
    setNewElement('')
    fetchElements()
  }

  return (
    <main className="p-4 max-w-xl mx-auto space-y-4">
      <h1 className="text-xl font-bold">📦 素材・分類管理</h1>
      <div className="flex gap-2">
        <input
          type="text"
          className="border p-2 flex-1 rounded"
          value={newElement}
          onChange={(e) => setNewElement(e.target.value)}
          placeholder="新しい素材名"
        />
        <button
          onClick={handleAdd}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >追加</button>
      </div>
      <ul className="list-disc pl-5 text-gray-700">
        {elements.map((e) => <li key={e.id}>{e.name}</li>)}
      </ul>
    </main>
  )
}
