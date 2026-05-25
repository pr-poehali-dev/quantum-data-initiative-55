import { useState } from "react"
import Icon from "@/components/ui/icon"
import { cn } from "@/lib/utils"

const EXAMPLES = [
  {
    title: "Утренний лес",
    tag: "Природа",
    image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/b3f275c1-a6ab-4ef1-a1c8-e06e8aca30fe.jpg",
  },
  {
    title: "Абстрактное искусство",
    tag: "Эмоция",
    image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/3fe13aa9-176d-457f-83a5-ea325b521c23.jpg",
  },
  {
    title: "Городские огни",
    tag: "Атмосфера",
    image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/880f0e02-36c2-4a1c-8284-8732c39da06e.jpg",
  },
]

const PALETTE = ["#4ecdc4", "#ff6b35", "#6c8ebf", "#f7e0a0"]

export function MoodboardDemo() {
  const [activeColor, setActiveColor] = useState(0)
  const [prompt, setPrompt] = useState("")

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 [text-shadow:none] font-open-sans-custom leading-tight mb-4">
          Создай свою<br />доску настроения
        </h2>
        <p className="text-gray-400 font-open-sans-custom text-base max-w-xl mx-auto">
          Введи тему, эмоцию или сцену — ИИ соберёт живой мудборд из образов, звука и цвета
        </p>
      </div>

      {/* Constructor card */}
      <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 mb-6">
        {/* Glow corners */}
        <div className="absolute -top-px -right-px w-16 h-16 rounded-tr-2xl border-t-2 border-r-2 border-cyan-400/60 pointer-events-none" />
        <div className="absolute -bottom-px -left-px w-16 h-16 rounded-bl-2xl border-b-2 border-l-2 border-purple-400/60 pointer-events-none" />

        <p className="text-white font-semibold font-open-sans-custom text-lg mb-4">Моя вдохновляющая доска</p>

        {/* Add blocks */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { icon: "Video", label: "Добавить видео" },
            { icon: "Image", label: "Добавить фото" },
            { icon: "Music", label: "Добавить аудио" },
          ].map((item) => (
            <button
              key={item.label}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors py-5 text-white/60 hover:text-white"
            >
              <Icon name="Plus" size={22} className="text-white/50" />
              <span className="text-xs font-open-sans-custom text-gray-400">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Sound wave + palette */}
        <div className="flex items-center gap-4 mb-2">
          {/* Wave visualizer */}
          <div className="flex items-center gap-[3px] flex-1">
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                className="rounded-full bg-gradient-to-t from-purple-500 to-cyan-400 opacity-80"
                style={{
                  width: 3,
                  height: `${8 + Math.sin(i * 0.7) * 6 + Math.sin(i * 1.3) * 4}px`,
                }}
              />
            ))}
          </div>
          {/* Color palette */}
          <div className="flex gap-2">
            {PALETTE.map((color, i) => (
              <button
                key={i}
                onClick={() => setActiveColor(i)}
                className={cn(
                  "w-8 h-8 rounded-lg transition-all",
                  activeColor === i ? "ring-2 ring-white/60 scale-110" : "opacity-70 hover:opacity-100"
                )}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
        <p className="text-gray-500 text-xs font-open-sans-custom mb-5">Звуки и цвета вашего вдохновения.</p>

        {/* Prompt input + CTA */}
        <div className="relative">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="осеннее одиночество в большом городе..."
            className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 font-open-sans-custom text-sm px-4 py-3 pr-32 outline-none focus:border-white/30 transition-colors mb-3"
          />
          <button className="w-full rounded-xl py-3 font-semibold font-open-sans-custom text-sm text-white bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20">
            Создать
          </button>
        </div>
      </div>

      {/* Examples */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <p className="text-white font-semibold font-open-sans-custom text-base">Примеры для вдохновения</p>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 transition-colors flex items-center justify-center">
              <Icon name="ChevronLeft" size={14} className="text-white" />
            </button>
            <button className="w-8 h-8 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 transition-colors flex items-center justify-center">
              <Icon name="ChevronRight" size={14} className="text-white" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {EXAMPLES.map((ex) => (
            <div key={ex.title} className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[4/3]">
              <img
                src={ex.image}
                alt={ex.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              {/* Play icon */}
              <div className="absolute top-2 left-2 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Icon name="Play" size={12} className="text-white ml-0.5" />
              </div>
              {/* Tag */}
              <div className="absolute top-2 right-2 rounded-full bg-black/40 backdrop-blur-sm px-2 py-0.5">
                <span className="text-white/80 text-[10px] font-open-sans-custom">{ex.tag}</span>
              </div>
              <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between">
                <p className="text-white text-xs font-open-sans-custom font-medium leading-tight">{ex.title}</p>
                <Icon name="Play" size={14} className="text-white/60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
