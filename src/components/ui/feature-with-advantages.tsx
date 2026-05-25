import Icon from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"

function Feature() {
  return (
    <div className="w-full py-20 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 py-20 flex-col items-start lg:py-0">
          <div>
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">Возможности</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-open-sans-custom text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
              Живой мудборд, который дышит
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
              ИИ собирает атмосферу из образов, звуков, цвета и движения — по одной фразе или идее.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Icon name="Sparkles" className="w-[1.05rem] h-[1.05rem] mt-2 text-white flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">ИИ-сборка по идее</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Введи фразу — система найдёт образы, цвет, звук и цитаты под твою атмосферу.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Icon name="Layers" className="w-[1.05rem] h-[1.05rem] mt-2 text-white flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Режимы мудборда</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Кино, Клип, Фотосессия, Мультфильм — каждый режим задаёт свой ритм и эстетику.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Icon name="Music" className="w-[1.05rem] h-[1.05rem] mt-2 text-white flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Звук и ритм</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Управляй интенсивностью — от медитативного потока до насыщенного клипа.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Icon name="Users" className="w-[1.05rem] h-[1.05rem] mt-2 text-white flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Коллективные доски</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Команда, съёмочная группа или агентство — каждый вносит свои ощущения.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Icon name="BookHeart" className="w-[1.05rem] h-[1.05rem] mt-2 text-white flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Личный музей эмоций</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Сохраняй подборки: «Нежность и воздух», «Атмосфера старых мультфильмов».
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Icon name="Globe" className="w-[1.05rem] h-[1.05rem] mt-2 text-white flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Лента вдохновения</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Живые мудборды со всего мира — лайкай, сохраняй, делай ремиксы.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Feature }