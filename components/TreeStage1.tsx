// components/TreeStage1.tsx
export default function TreeStage1({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 土壌 */}
      <ellipse cx="50" cy="95" rx="40" ry="5" fill="#A87954" />

      {/* 芽 */}
      <line x1="50" y1="90" x2="50" y2="70" stroke="#8B5E3C" strokeWidth="3" />
      <circle cx="48" cy="68" r="4" fill="#6c9a56" />
      <circle cx="52" cy="68" r="4" fill="#6c9a56" />
    </svg>
  )
}
