'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { supabase  } from '../../utils/supabase/client'

type tree = {
  id: string
  title: string
  status: string
  score: number
  created_at: string
  user_id: string
}

export default function TreePage() {
  const [trees, setTrees] = useState<tree[]>([])

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
    <main className="min-h-screen bg-green-50 text-brown-800 font-serif px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">🌳 問いの森</h1>

        {/* ▼ 問いカード一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {trees.map((q) => (
            <Link
              href={`/tree/${q.id}`}
              key={q.id}
              className="border rounded-xl p-4 shadow bg-white hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold line-clamp-2">{q.title}</h2>
              <p className="text-sm text-brown-600 mt-1">
                状態：{q.status}・投稿：{new Date(q.created_at).toLocaleDateString()}
              </p>
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
