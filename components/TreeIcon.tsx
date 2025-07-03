// components/TreeIcon.tsx
import TreeStage1 from './TreeStage1'
import TreeStage2 from './TreeStage2'
import TreeStage3 from './TreeStage3'

interface Props {
  status: 'sprouting' | 'growing' | 'ripe' | string
  className?: string
}

export default function TreeIcon({ status, className }: Props) {
  switch (status) {
    case 'sprouting':
      return <TreeStage1 className={className} />
    case 'growing':
      return <TreeStage2 className={className} />
    case 'ripe':
      return <TreeStage3 className={className} />
    default:
      return <TreeStage1 className={className} />
  }
}
