// ✅ A3 問い木詳細ページ（app/tree/[id]/page.tsx）
'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase'
import type { Database } from '@/types/supabase'

const supabase = createClient<Database>()

export default function TreeDetailPage() {
  const { id } = useParams()
  const router = useRouter()
  const [tree, setTree] = useState<any>(null)

  useEffect(() => {
    const fetchTree = async () => {
      const { data } = await supabase.from('trees').select('*').eq('id', id).single()
      setTree(data)
    }
    fetchTree()
  }, [id])

  if (!tree) return <div className="p-4">Loading...</div>

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">🌳 {tree.title}</h1>
      <div className="text-gray-500">状態：{tree.status}</div>

      <div className="flex gap-4 flex-wrap">
        <Link href={`/tree/${tree.id}/compost`} className="btn">🪱 堆肥を与える</Link>
        <Link href={`/tree/${tree.id}/rain`} className="btn">🌧️ 雨を降らせる</Link>
        <Link href={`/tree/${tree.id}/graft`} className="btn">🌿 接ぎ木する</Link>
        {tree.status === 'ripe' && (
          <Link href={`/tree/${tree.id}/zine`} className="btn">🍎 果実をZINEに</Link>
        )}
        {tree.status === 'withered' && (
          <Link href={`/tree/${tree.id}/seed`} className="btn">🌱 種を拾う</Link>
        )}
      </div>
    </main>
  )
}