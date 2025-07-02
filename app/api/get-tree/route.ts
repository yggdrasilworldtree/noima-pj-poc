//✅ B10 get-tree/route.ts（単体取得API）

import { createClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const supabase = createClient()
  const body = await req.json()
  const { id } = body

  if (!id) {
    return NextResponse.json({ error: 'Missing tree ID' }, { status: 400 })
  }

  const { data, error } = await supabase
    .from('trees')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true, data })
}
