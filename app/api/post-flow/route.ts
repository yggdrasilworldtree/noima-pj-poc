//✅ B8 post-flow/route.ts（問いのうたかた追加API）

import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const { tree_id, stage, comment } = body

  if (!tree_id || !stage) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const { data, error } = await supabase.from('flows').insert({
    tree_id,
    stage,
    comment,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true, data })
}
