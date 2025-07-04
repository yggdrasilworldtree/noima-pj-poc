'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { supabase } from '../../utils/supabase/client'

type Tree = {
  id: string
  title: string
  status: 'sprouting' | 'growing' | 'fruiting'
  score: number
  created_at: string
  user_id: string
  revive_count?: number
}

// 🌱 状態アイコンのマッピング
const statusIcons: Record<Tree['status'], string> = {
  sprouting: '🌱',
  growing: '🌿',
  fruiting: '🍎',
}

export default function TreePage() {
  const [trees, setTrees] = useState<Tree[]>([])

  useEffect(() => {
    async function fetchTrees() {
      const { data, error } = await supabase
        .from('trees')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching Trees:', error)
      } else {
        setTrees(data)
      }
    }

    fetchTrees()
  }, [])

  return (
    <main className="min-h-screen bg-green-50 text-brown-800 font-serif px-6 py-10 bg-[url('/tree-bg.png')] bg-no-repeat bg-cover">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">🌳 問いの森</h1>

        {/* ▼ 問いカード一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {trees.map((q) => (
            <Link
              href={`/tree/${q.id}`}
              key={q.id}
              className="tree-card border rounded-xl p-4 shadow bg-white hover:shadow-lg hover:scale-105 transition transform duration-200"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{statusIcons[q.status] || '🌱'}</span>
                <h2 className="text-lg font-semibold line-clamp-2">{q.title}</h2>
              </div>
              <p className="text-sm text-brown-600">
                状態：{q.status}・投稿：{new Date(q.created_at).toLocaleDateString()}
              </p>
              {typeof q.revive_count === 'number' && (
                <p className="text-xs text-brown-500 mt-1">
                  🔁 再燃：{q.revive_count} 回
                </p>
              )}
            </Link>
          ))}
        </div>

        {/* ▼ 新しい問い */}
        <div className="text-center">
          <Link
            href="/new"
            className="inline-block bg-brown-600 text-white px-6 py-3 rounded-full hover:bg-brown-800 transition"
          >
            ＋ 新しい問いを育てる
          </Link>
        </div>
      </div>
    </main>
  )
}
