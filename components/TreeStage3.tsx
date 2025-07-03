// components/TreeStage3.tsx
export default function TreeStage3({ className }: { className?: string }) {
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
      <rect x="47" y="55" width="6" height="35" fill="#8B5E3C" rx="2" />

      {/* 葉 */}
      <circle cx="50" cy="45" r="18" fill="#6c9a56" />
      <circle cx="35" cy="50" r="10" fill="#85b573" />
      <circle cx="65" cy="50" r="10" fill="#85b573" />

      {/* 実（りんご） */}
      <circle cx="45" cy="43" r="3" fill="#e94444" />
      <circle cx="55" cy="47" r="3" fill="#e94444" />
    </svg>
  )
}
