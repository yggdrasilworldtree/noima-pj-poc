//✅ B1 spread-compost/route.ts（堆肥投稿API）

import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const { tree_id, text, nutrient } = body

  if (!tree_id || !text) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
  }

  const { data, error } = await supabase.from('composts').insert({
    tree_id,
    text,
    nutrient: nutrient ?? 1,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true, data })
}
