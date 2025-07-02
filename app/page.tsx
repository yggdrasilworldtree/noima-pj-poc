// ✅ A1 トップページ（app/page.tsx）
'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

interface Tree {
  id: string
  title: string
  status: string
}

export default function TopPage() {
  const [trees, setTrees] = useState<Tree[]>([])

  useEffect(() => {
    const fetchTrees = async () => {
      const { data, error } = await supabase.from('trees').select('id, title, status')
      if (!error && data) setTrees(data)
    }
    fetchTrees()
  }, [])

  return (
    <main className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">🌱 問いの木々</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {trees.map((tree) => (
          <Link href={`/tree/${tree.id}`} key={tree.id}>
            <div className="border rounded-xl p-4 hover:bg-gray-100">
              <h2 className="text-lg font-semibold">{tree.title}</h2>
              <p className="text-sm text-gray-500">状態: {translateStatus(tree.status)}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-right">
        <Link href="/new">
          <button className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700">
            ＋ 新しい問いを育てる
          </button>
        </Link>
      </div>
    </main>
  )
}

function translateStatus(status: string): string {
  switch (status) {
    case 'sprouting': return '芽吹き中'
    case 'growing': return '葉が増える'
    case 'ripe': return '実が光る'
    case 'zine': return '問いの遺樹'
    case 'withered': return '枯れた木'
    default: return '未定'
  }
}
