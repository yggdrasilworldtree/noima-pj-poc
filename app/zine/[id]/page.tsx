// ✅ A9 ZINE表示ページ（app/zine/[id]/page.tsx）

'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase'
import type { Database } from '@/types/supabase'

const supabase = createClient<Database>()

export default function ZineDetailPage() {
  const { id } = useParams()
  const [zine, setZine] = useState<any>(null)

  useEffect(() => {
    const fetchZine = async () => {
      const { data } = await supabase.from('fruits').select('*').eq('id', id).single()
      setZine(data)
    }
    fetchZine()
  }, [id])

  if (!zine) return <p className="p-4">読み込み中…</p>

  return (
    <main className="p-4 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">🍎 {zine.title}</h1>
      <div className="text-gray-700 whitespace-pre-line">{zine.content}</div>
    </main>
  )
}