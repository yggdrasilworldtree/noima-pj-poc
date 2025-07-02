//✅ B2 drop-rain/route.ts（雨投稿API）

import { createClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const supabase = createClient()
  const body = await req.json()
  const { tree_id, text, distance } = body

  if (!tree_id || !text) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
  }

  const { data, error } = await supabase.from('rains').insert({
    tree_id,
    text,
    distance: distance ?? 50,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true, data })
}
