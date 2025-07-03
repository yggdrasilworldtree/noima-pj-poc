// components/TreeStage2.tsx
export default function TreeStage2({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 土壌 */}
      <ellipse cx="50" cy="95" rx="40" ry="5" fill="#A87954" />

      {/* 幹 */}
      <rect x="47" y="60" width="6" height="30" fill="#8B5E3C" rx="2" />

      {/* 葉 */}
      <circle cx="50" cy="50" r="15" fill="#6c9a56" />
      <circle cx="40" cy="55" r="10" fill="#85b573" />
      <circle cx="60" cy="55" r="10" fill="#85b573" />
    </svg>
  )
}
