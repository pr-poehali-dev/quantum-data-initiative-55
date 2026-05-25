import Icon from "@/components/ui/icon"
import { cn } from "@/lib/utils"

const SIMILAR_IDEAS = [
  {
    title: "Утренняя свежесть",
    desc: "Природные текстуры и мягкий свет",
    image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/77e563a9-3f60-4b23-8f46-cb545f154245.jpg",
  },
  {
    title: "Мистический туман",
    desc: "Атмосфера уединения и тайны",
    image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/702cbd82-be20-4867-a1fe-9b7db02ddebe.jpg",
  },
  {
    title: "Дикая грация",
    desc: "Внимание к деталям и движению",
    image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/82077864-e6e6-4040-9d0e-a7c0102e17e7.jpg",
  },
  {
    title: "Свет и текстура",
    desc: "Внимание к ритму и деталям",
    image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/e0013ff8-75bd-4de3-afa3-34abf96a0ad5.jpg",
  },
]

const EXPLORE_ITEMS = [
  {
    title: "Эхо природы",
    desc: "Кураторская подборка для съёмок на открытом воздухе",
    image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/702cbd82-be20-4867-a1fe-9b7db02ddebe.jpg",
    hasWave: true,
  },
  {
    title: "Свет и текстура",
    desc: "Вдохновение для макросъёмки",
    image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/77e563a9-3f60-4b23-8f46-cb545f154245.jpg",
    hasWave: true,
  },
  {
    title: "Городские огни",
    desc: "Ночная урбанистика и неон",
    image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/880f0e02-36c2-4a1c-8284-8732c39da06e.jpg",
    hasWave: false,
  },
  {
    title: "Сухая земля",
    desc: "Фактуры и природные узоры",
    image: "https://cdn.poehali.dev/projects/18911932-b1de-4f6f-b1a7-e0ce026ec503/files/e0013ff8-75bd-4de3-afa3-34abf96a0ad5.jpg",
    hasWave: false,
  },
]

function WaveBar() {
  return (
    <div className="flex items-center gap-[2px]">
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={i}
          className="rounded-full bg-gradient-to-t from-purple-400 to-cyan-300 opacity-80"
          style={{ width: 2, height: `${5 + Math.sin(i * 0.8) * 4}px` }}
        />
      ))}
    </div>
  )
}

export function DashboardSlide() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Top nav bar */}
      <div className="flex items-center gap-3 mb-6">
        <button className="px-4 py-2 rounded-xl bg-blue-500/80 text-white text-sm font-open-sans-custom font-medium hover:bg-blue-500 transition-colors">
          Создать
        </button>
        <button className="px-4 py-2 rounded-xl border border-white/20 bg-white/5 text-white/80 text-sm font-open-sans-custom hover:bg-white/10 transition-colors">
          Изучать
        </button>
        <button className="px-4 py-2 rounded-xl border border-white/20 bg-white/5 text-white/80 text-sm font-open-sans-custom hover:bg-white/10 transition-colors">
          Похожие идеи
        </button>
        <button className="px-4 py-2 rounded-xl border border-white/20 bg-white/5 text-white/80 text-sm font-open-sans-custom hover:bg-white/10 transition-colors">
          Сотрудничать
        </button>
        <div className="ml-auto flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 flex items-center justify-center">
            <Icon name="User" size={12} className="text-white" />
          </div>
          <span className="text-white/80 text-sm font-open-sans-custom">Профиль</span>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <Icon name="Search" size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Поиск по настроению, теме и атмосфере..."
          className="w-full rounded-xl border border-white/10 bg-white/5 text-white/60 placeholder:text-gray-500 font-open-sans-custom text-sm pl-9 pr-4 py-2.5 outline-none focus:border-white/20 transition-colors"
        />
      </div>

      {/* Main 3-column grid */}
      <div className="grid grid-cols-12 gap-3">

        {/* Left — Похожие идеи */}
        <div className="col-span-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-3">
          <p className="text-white font-semibold font-open-sans-custom text-sm mb-3">Похожие идеи</p>
          <div className="flex flex-col gap-2">
            {SIMILAR_IDEAS.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-2 rounded-lg hover:bg-white/5 p-1.5 cursor-pointer transition-colors group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-14 h-10 rounded-lg object-cover flex-shrink-0 group-hover:scale-105 transition-transform"
                />
                <div className="min-w-0">
                  <p className="text-white text-xs font-open-sans-custom font-medium leading-tight truncate">{item.title}</p>
                  <p className="text-gray-400 text-[10px] font-open-sans-custom leading-tight mt-0.5 line-clamp-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center — Изучать */}
        <div className="col-span-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-3">
          <p className="text-white font-semibold font-open-sans-custom text-sm mb-3">Изучать</p>
          <div className="grid grid-cols-2 gap-2">
            {EXPLORE_ITEMS.map((item) => (
              <div key={item.title} className="relative rounded-xl overflow-hidden cursor-pointer group aspect-[16/9]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                {item.hasWave && (
                  <div className="absolute top-2 left-2">
                    <WaveBar />
                  </div>
                )}
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-[11px] font-open-sans-custom font-semibold leading-tight">{item.title}</p>
                  <p className="text-white/60 text-[9px] font-open-sans-custom mt-0.5 leading-tight">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Сотрудничать + Профиль */}
        <div className="col-span-3 flex flex-col gap-3">

          {/* Сотрудничать */}
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-3 flex-1">
            <p className="text-white font-semibold font-open-sans-custom text-sm mb-3">Сотрудничать</p>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3 cursor-pointer hover:bg-white/10 transition-colors">
              <div className="flex items-center mb-2">
                <div className="flex -space-x-2">
                  {["from-pink-400 to-rose-500", "from-blue-400 to-cyan-500", "from-purple-400 to-violet-500"].map((grad, i) => (
                    <div
                      key={i}
                      className={cn("w-7 h-7 rounded-full bg-gradient-to-br border-2 border-black/40 flex items-center justify-center", grad)}
                    >
                      <Icon name="User" size={10} className="text-white" />
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-white text-xs font-open-sans-custom font-medium leading-tight">Проект «Тишина»</p>
              <p className="text-gray-400 text-[10px] font-open-sans-custom mt-1 leading-tight">Совместная работа над мудбордом с Анной К.</p>
            </div>

            <div className="mt-2 rounded-lg border border-dashed border-white/15 p-3 cursor-pointer hover:border-white/30 transition-colors flex items-center gap-2">
              <Icon name="Plus" size={14} className="text-white/40" />
              <span className="text-gray-500 text-xs font-open-sans-custom">Пригласить участника</span>
            </div>
          </div>

          {/* Профиль */}
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-3">
            <p className="text-white font-semibold font-open-sans-custom text-sm mb-3">Профиль</p>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                <Icon name="User" size={16} className="text-white" />
              </div>
              <div>
                <p className="text-white text-xs font-open-sans-custom font-medium">2</p>
                <p className="text-gray-400 text-[10px] font-open-sans-custom">Сохранённых доски</p>
              </div>
            </div>
            <button className="text-blue-400 text-[11px] font-open-sans-custom hover:text-blue-300 transition-colors">
              Настройки пользователя →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
