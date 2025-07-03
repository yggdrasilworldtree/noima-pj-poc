// ✅ A1 トップページ（app/page.tsx）
'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import Image from 'next/image'
import TreeIcon from '@/components/TreeIcon' // 🆕 木のアイコンをSVG or コンポーネント化する想定

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
    <main className="min-h-screen bg-[#fdf6ee] px-6 py-12 text-brown-800 font-serif space-y-10">
      {/* ヘッダー */}
      <div className="text-center space-y-4">
        <TreeIcon className="mx-auto w-24 h-24" />
        <h1 className="text-4xl font-bold tracking-wide">Noima</h1>
        <p className="text-md text-brown-600">To illuminate questions and nurture inquiry.</p>
        <Link href="/new">
          <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700">
            ＋ 新しい問いを育てる
          </button>
        </Link>
      </div>

      {/* 問いの木 一覧 */}
      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-xl font-semibold">🌳 あなたの問いの木々</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trees.map((tree) => (
            <Link href={`/tree/${tree.id}`} key={tree.id}>
              <div className="bg-white rounded-xl p-4 shadow hover:bg-green-50 transition">
                <h3 className="text-lg font-semibold">{tree.title}</h3>
                <p className="text-sm text-gray-600">状態: {translateStatus(tree.status)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

function translateStatus(status: string): string {
  switch (status) {
    case 'sprouting': return '🌱 芽吹き中'
    case 'growing': return '🌿 葉が増える'
    case 'ripe': return '🍎 実が光る'
    case 'zine': return '📖 問いの遺樹'
    case 'withered': return '🍂 枯れた木'
    default: return '🌾 未定'
  }
}
