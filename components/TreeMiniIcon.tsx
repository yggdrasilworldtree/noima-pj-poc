// components/TreeMiniIcon.tsx

interface Props {
  status: 'sprouting' | 'growing' | 'ripe' | 'withered' | 'zine' | string
  className?: string
}

export default function TreeMiniIcon({ status, className }: Props) {
  const emoji = {
    sprouting: '🌱',
    growing: '🌿',
    ripe: '🍎',
    withered: '🍂',
    zine: '📖',
    unknown: '🌾',
  }

  const label = {
    sprouting: '芽吹き中',
    growing: '葉が増える',
    ripe: '実が光る',
    withered: '枯れた木',
    zine: '問いの遺樹',
    unknown: '未定',
  }

  const key = ['sprouting', 'growing', 'ripe', 'withered', 'zine'].includes(status)
    ? status
    : 'unknown'

  return (
    <span className={`inline-flex items-center gap-1 text-sm ${className}`}>
      <span>{emoji[key as keyof typeof emoji]}</span>
      <span>{label[key as keyof typeof label]}</span>
    </span>
  )
}
