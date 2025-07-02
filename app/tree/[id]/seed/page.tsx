//✅ A7 種拾いページ（app/tree/[id]/seed/page.tsx）

'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import type { Database } from '@/types/supabase'

export default function SeedPage() {
  const { id } = useParams()
  const router = useRouter()
  const [processing, setProcessing] = useState(false)

  const handleRevive = async () => {
    setProcessing(true)
    const { data: oldTree } = await supabase.from('trees').select('*').eq('id', id).single()
    if (!oldTree) return
    await supabase.from('trees').insert({
      title: oldTree.title,
      parent_id: oldTree.id,
      status: 'sprouting',
    })
    setProcessing(false)
    router.push('/')
  }

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-xl font-bold">🌱 種を拾う</h1>
      <p>この虚木から、新たな問いを芽吹かせますか？</p>
      <button
        onClick={handleRevive}
        disabled={processing}
        className="bg-lime-700 text-white px-4 py-2 rounded hover:bg-lime-800 disabled:opacity-50"
      >{processing ? '生成中…' : '種を拾って芽吹かせる'}</button>
    </main>
  )
}