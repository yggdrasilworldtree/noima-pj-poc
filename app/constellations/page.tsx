//✅ A10 星座DAO一覧ページ（app/constellations/page.tsx）

'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import type { Database } from '@/types/supabase'

export default function ConstellationsPage() {
  const [constellations, setConstellations] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from('constellations').select('*').order('created_at', { ascending: false })
      if (data) setConstellations(data)
    }
    fetchData()
  }, [])

  return (
    <main className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🌌 星座DAO一覧</h1>
      <ul className="space-y-2">
        {constellations.map((c) => (
          <li key={c.id}>
            <Link href={`/constellations/${c.id}`} className="text-blue-600 hover:underline">
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
