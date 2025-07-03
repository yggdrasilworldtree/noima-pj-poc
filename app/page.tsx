// ✅ A1 トップページ（app/page.tsx）
'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import TreeScene from '@/components/TreeScene'
import TreeMiniIcon from '@/components/TreeMiniIcon'

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
    <main className="min-h-screen bg-[#fdf6ee] px-6 py-12 text-brown-800 font-serif space-y-12">
      {/* ヘッダー */}
      <div className="text-center space-y-4">
        <TreeScene status="ripe" />
        <h1 className="text-4xl font-bold tracking-wide">Noima</h1>
        <p className="text-md text-brown-600">問いを育て、火を灯し、森を継ぐ。</p>
        <Link href="/new">
          <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700">
            ＋ 新しい問いを育てる
          </button>
        </Link>
      </div>

      {/* 木の一覧 */}
      <section className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-xl font-semibold">🌳 あなたの問いの木々</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trees.map((tree) => (
            <Link href={`/tree/${tree.id}`} key={tree.id}>
              <div className="bg-white rounded-xl p-4 shadow hover:bg-green-50 transition">
                <h3 className="text-lg font-semibold mb-1">{tree.title}</h3>
                <TreeMiniIcon status={tree.status} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
