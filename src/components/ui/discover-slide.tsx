import Icon from "@/components/ui/icon"

const SIMILAR_CARDS = [
  { title: "Лесная тайна", image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/213e5b95-6ae9-4285-8cf5-59584deafdfd.jpg" },
  { title: "Утренний туман", image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/71f509a5-f98d-4f73-ba0b-b959d6c168f1.jpg" },
  { title: "Туманное озеро", image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/702cbd82-be20-4867-a1fe-9b7db02ddebe.jpg" },
  { title: "Дикая грация", image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/d2f0eb6f-ccea-4166-857b-921dc0ab15f8.jpg" },
  { title: "Ветер", image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/87adfd98-fa8c-4aaf-bd0a-5f97cdfa6f48.jpg" },
  { title: "Городские огни", image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/880f0e02-36c2-4a1c-8284-8732c39da06e.jpg" },
  { title: "Жёлтый лес", image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/b3f275c1-a6ab-4ef1-a1c8-e06e8aca30fe.jpg" },
]

const EXPLORE_CARDS = [
  { title: "Эпическая природа", image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/2ea9c2d3-d40a-40f6-adaf-002928a0df9d.jpg" },
  { title: "Документальный стиль", image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/82077864-e6e6-4040-9d0e-a7c0102e17e7.jpg" },
  { title: "Макро мир", image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/aa013df4-b576-4545-a58c-903a17f15b4d.jpg" },
  { title: "Абстракция", image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/3fe13aa9-176d-457f-83a5-ea325b521c23.jpg" },
  { title: "Сухая земля", image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/e0013ff8-75bd-4de3-afa3-34abf96a0ad5.jpg" },
  { title: "Туман и лес", image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/702cbd82-be20-4867-a1fe-9b7db02ddebe.jpg" },
]

const COLLAB_CARDS = [
  {
    title: "Актив настроений",
    image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/702cbd82-be20-4867-a1fe-9b7db02ddebe.jpg",
    members: 3,
  },
  {
    title: "Ноябрь настроений",
    image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/87adfd98-fa8c-4aaf-bd0a-5f97cdfa6f48.jpg",
    members: 4,
  },
]

const PROFILE_ITEMS = [
  { title: "Сохранённые доски", image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/702cbd82-be20-4867-a1fe-9b7db02ddebe.jpg" },
  { title: "Лесная настроений", image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/2ea9c2d3-d40a-40f6-adaf-002928a0df9d.jpg" },
  { title: "Документальный стиль", image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/82077864-e6e6-4040-9d0e-a7c0102e17e7.jpg" },
]

export function DiscoverSlide() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">

      {/* Top nav */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-white font-extrabold font-open-sans-custom text-lg tracking-wide mr-4">МУДБОРДЫ</span>
        <button className="px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-sm font-open-sans-custom hover:bg-white/25 transition-colors">Создать</button>
        <button className="px-4 py-1.5 rounded-full border border-white/15 text-white/70 text-sm font-open-sans-custom hover:bg-white/10 transition-colors">Изучать</button>
        <button className="px-4 py-1.5 rounded-full border border-white/15 text-white/70 text-sm font-open-sans-custom hover:bg-white/10 transition-colors">Похожие идеи</button>
        <button className="px-4 py-1.5 rounded-full border border-white/15 text-white/70 text-sm font-open-sans-custom hover:bg-white/10 transition-colors">Сотрудничать</button>
        <div className="ml-auto flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 text-white/70 text-sm font-open-sans-custom hover:bg-white/10 transition-colors cursor-pointer">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400" />
          Профиль
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <Icon name="Search" size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Поиск настроения, темы, атмосферы..."
          className="w-full rounded-xl border border-white/10 bg-white/5 text-white/60 placeholder:text-gray-500 font-open-sans-custom text-sm pl-9 pr-4 py-2 outline-none focus:border-white/20 transition-colors"
        />
      </div>

      {/* Hero text */}
      <div className="text-center mb-5">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] mb-1">
          Создай свою доску настроений
        </h2>
        <p className="text-gray-400 text-sm font-open-sans-custom max-w-xl mx-auto">
          Инструмент для визуализации атмосферы ваших съёмок, вдохновлённый природой и кинематографом.
        </p>
        <button className="mt-3 px-6 py-2 rounded-full bg-white/15 border border-white/20 text-white text-sm font-open-sans-custom hover:bg-white/25 transition-colors">
          Создать новую доску
        </button>
      </div>

      {/* Похожие идеи — горизонтальный скролл */}
      <div className="mb-5">
        <p className="text-white font-semibold font-open-sans-custom text-sm mb-2">Похожие идеи</p>
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1" style={{ scrollbarWidth: "none" }}>
          {SIMILAR_CARDS.map((card) => (
            <div key={card.title} className="relative flex-shrink-0 w-40 h-28 rounded-xl overflow-hidden cursor-pointer group">
              <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <p className="absolute bottom-2 left-2 right-2 text-white text-[11px] font-open-sans-custom font-medium leading-tight">{card.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom grid: Изучать + Сотрудничать + Профиль */}
      <div className="grid grid-cols-12 gap-3">

        {/* Изучать */}
        <div className="col-span-5">
          <p className="text-white font-semibold font-open-sans-custom text-sm mb-2">Изучать</p>
          <div className="grid grid-cols-3 gap-1.5">
            {EXPLORE_CARDS.map((card) => (
              <div key={card.title} className="relative rounded-xl overflow-hidden cursor-pointer group aspect-square">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-1.5 left-1.5 right-1.5 text-white text-[10px] font-open-sans-custom font-medium leading-tight">{card.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Сотрудничать */}
        <div className="col-span-4">
          <p className="text-white font-semibold font-open-sans-custom text-sm mb-2">Сотрудничать</p>
          <div className="flex flex-col gap-2">
            {COLLAB_CARDS.map((card) => (
              <div key={card.title} className="relative rounded-xl overflow-hidden cursor-pointer group aspect-video">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                {/* Members */}
                <div className="absolute top-2 right-2 flex -space-x-1.5">
                  {Array.from({ length: card.members }).map((_, i) => (
                    <div key={i} className="w-5 h-5 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 border border-black/40 flex items-center justify-center">
                      <Icon name="User" size={8} className="text-white" />
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-2 left-2 right-6 flex items-center justify-between">
                  <p className="text-white text-[11px] font-open-sans-custom font-medium truncate">{card.title}</p>
                  <Icon name="MoreHorizontal" size={12} className="text-white/60 flex-shrink-0 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Профиль */}
        <div className="col-span-3">
          <p className="text-white font-semibold font-open-sans-custom text-sm mb-2">Профиль</p>
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
            {PROFILE_ITEMS.map((item, i) => (
              <div
                key={item.title}
                className="flex items-center gap-2 px-3 py-2 hover:bg-white/5 cursor-pointer transition-colors border-b border-white/5 last:border-0"
              >
                <img src={item.image} alt={item.title} className="w-8 h-8 rounded-lg object-cover flex-shrink-0" />
                <p className="text-white text-[11px] font-open-sans-custom flex-1 truncate">{item.title}</p>
                <Icon name="ChevronRight" size={12} className="text-white/30 flex-shrink-0" />
              </div>
            ))}
            <div className="flex items-center gap-2 px-3 py-2 hover:bg-white/5 cursor-pointer transition-colors">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Settings" size={12} className="text-white/50" />
              </div>
              <p className="text-white/50 text-[11px] font-open-sans-custom">Настройки</p>
              <Icon name="ChevronRight" size={12} className="text-white/30 flex-shrink-0 ml-auto" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
