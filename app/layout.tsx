// app/layout.tsx
import './globals.css'


export const metadata = {
  title: 'Noima',
  description: 'Noima App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
