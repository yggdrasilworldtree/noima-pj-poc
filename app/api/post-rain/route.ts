//✅ B9 post-rain/route.ts（共鳴雨追加API）

import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const { tree_id, text, distance } = body

  if (!tree_id || !text) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const { data, error } = await supabase.from('rains').insert({
    tree_id,
    text,
    distance: distance || 50,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true, data })
}
