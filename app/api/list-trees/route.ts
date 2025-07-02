//✅ B11 list-trees/route.ts（一覧取得API）

import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {

  const { data, error } = await supabase
    .from('trees')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true, data })
}
