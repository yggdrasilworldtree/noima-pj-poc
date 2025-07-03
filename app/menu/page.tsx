'use client'

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#f5efe2] font-serif text-brown-800 flex flex-col items-center justify-center space-y-6">
      <h1 className="text-5xl font-bold">Noima</h1>

      <div className="w-72 space-y-4 mt-8">
        <button className="w-full px-6 py-3 bg-[#dce9cc] rounded-xl shadow hover:bg-[#cce0b9] transition">
          🌳 Tree of Questions
        </button>
        <button className="w-full px-6 py-3 bg-[#f9ddc8] rounded-xl shadow hover:bg-[#f5cfae] transition">
          🔥 Extinguish
        </button>
        <button className="w-full px-6 py-3 bg-[#d5e7eb] rounded-xl shadow hover:bg-[#bfe1e7] transition">
          ♻️ Reignite
        </button>
        <button className="w-full px-6 py-3 bg-[#e2d6f0] rounded-xl shadow hover:bg-[#d0c2e4] transition">
          ⚙️ Settings
        </button>
      </div>
    </main>
  )
}
