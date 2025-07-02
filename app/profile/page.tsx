//✅ A15 マイページ（app/profile/page.tsx）

'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import type { Database } from '@/types/supabase'

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser()
      if (data?.user) setUser(data.user)
    }
    getUser()
  }, [])

  if (!user) return <p className="p-4">ログイン情報の取得中...</p>

  return (
    <main className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">👤 マイページ</h1>
      <p><strong>メール:</strong> {user.email}</p>
      <p><strong>ユーザーID:</strong> {user.id}</p>
    </main>
  )
}
