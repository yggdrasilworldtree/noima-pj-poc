'use client'

interface Props {
  onClose: () => void
}

export default function EnterModal({ onClose }: Props) {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#fdf6ee] rounded-xl p-8 shadow-xl w-80 space-y-4 text-center">
        <h2 className="text-2xl font-bold text-brown-800 mb-4">Noima</h2>

        <button className="w-full py-2 bg-[#e0eecf] rounded-md hover:bg-[#d4e2c5]">
          🌳 Tree of Questions
        </button>
        <button className="w-full py-2 bg-[#fde3c4] rounded-md hover:bg-[#fcd8b0]">
          🔥 Extinguish
        </button>
        <button className="w-full py-2 bg-[#e3e9f8] rounded-md hover:bg-[#d1dbf0]">
          ♻️ Reignite
        </button>
        <button className="w-full py-2 bg-[#eee6f4] rounded-md hover:bg-[#e1d9ed]">
          ⚙️ Settings
        </button>

        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-500 hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  )
}
