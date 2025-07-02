//✅ A12 問いのうたかた一覧ページ（app/flows/page.tsx）

'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase'
import type { Database } from '@/types/supabase'

const supabase = createClient<Database>()

export default function FlowPage() {
  const [flows, setFlows] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from('flows').select('*').order('created_at', { ascending: false })
      if (data) setFlows(data)
    }
    fetchData()
  }, [])

  return (
    <main className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🌊 問いのうたかた</h1>
      <ul className="space-y-4">
        {flows.map((flow) => (
          <li key={flow.id} className="border p-3 rounded shadow-sm">
            <div className="font-semibold">{flow.stage}：{flow.title}</div>
            <div className="text-sm text-gray-600">{flow.summary}</div>
          </li>
        ))}
      </ul>
    </main>
  )
}
