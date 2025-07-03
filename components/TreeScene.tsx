// components/TreeScene.tsx
import TreeIcon from './TreeIcon'

export default function TreeScene({ status }: { status: string }) {
  return (
    <div className="relative w-full h-60 bg-gradient-to-b from-green-100 to-[#fdf6ee] overflow-hidden rounded-xl shadow">
      <div className="absolute inset-0 flex items-end justify-center pb-4">
        <TreeIcon status={status} className="w-24 h-24" />
      </div>
    </div>
  )
}
