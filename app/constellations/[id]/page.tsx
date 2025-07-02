//✅ A11 星座DAO詳細ページ（app/constellations/[id]/page.tsx）

'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import type { Database } from '@/types/supabase'

//const supabase = createClient<Database>()

export default function ConstellationDetailPage() {
  const { id } = useParams()
  const [constellation, setConstellation] = useState<any>(null)

  useEffect(() => {
    const fetchConstellation = async () => {
      const { data } = await supabase.from('constellations').select('*').eq('id', id).single()
      setConstellation(data)
    }
    fetchConstellation()
  }, [id])

  if (!constellation) return <p className="p-4">読み込み中…</p>

  return (
    <main className="p-4 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">🌟 {constellation.name}</h1>
      <div className="text-gray-700 whitespace-pre-line">{constellation.description}</div>
    </main>
  )
}
