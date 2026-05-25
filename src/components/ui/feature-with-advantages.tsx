import Icon from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"

function Feature() {
  return (
    <div className="w-full py-20 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 py-20 flex-col items-start lg:py-0">
          <div>
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">Платформа</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-open-sans-custom text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
              Всё для творческого потока
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
              Инструменты, которые помогают чувствующим людям находить, хранить и передавать вдохновение.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Icon name="Zap" className="w-[1.05rem] h-[1.05rem] mt-2 text-white flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Живое вдохновение</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Мгновенный поток идей — находи искру в любой момент.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Icon name="Palette" className="w-[1.05rem] h-[1.05rem] mt-2 text-white flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Визуализация эмоций</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Передавай настроение и идеи через образы, без лишних слов.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Icon name="LayoutGrid" className="w-[1.05rem] h-[1.05rem] mt-2 text-white flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Доска референсов</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Упорядочивай творческие образы в красивые коллекции.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Icon name="Users" className="w-[1.05rem] h-[1.05rem] mt-2 text-white flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Настроение команде</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">Делись moodboard-ами с клиентами и командой.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Icon name="Headphones" className="w-[1.05rem] h-[1.05rem] mt-2 text-white flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Визуальный поток</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Перезагружайся через звук и визуальный ритм.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Icon name="Heart" className="w-[1.05rem] h-[1.05rem] mt-2 text-white flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Сообщество</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Будь частью сообщества чувствующих и креативных.
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
