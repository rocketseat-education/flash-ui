import { MoveRight } from 'lucide-react'
import { Button, ButtonIcon, ButtonText } from 'ui'
import { ProgressCircle } from '../components/progress-circle'

export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-t from-marine-600 to-marine-500 px-6 py-5 flex flex-col gap-8 md:flex-row-reverse md:justify-between md:items-center">
        <img
          src="https://github.com/diego3g.png"
          alt=""
          className="rounded-full h-16 w-16 self-end"
        />
        <span className="text-2xl font-bold leading-heading text-mirage-50">
          Dashboard
        </span>
      </div>

      <main className="p-6 flex flex-col gap-4">
        <span className="text-lg font-bold leading-heading">Coleções</span>

        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 12 }).map((_, i) => {
            return (
              <div
                key={i}
                className="flex flex-col gap-5 py-6 px-5 rounded-lg border border-mirage-100 shadow-lg transition-transform duration-300 hover:scale-[1.025]"
              >
                <span className="font-bold text-sm text-mirage-600 leading-heading">
                  JAVASCRIPT
                </span>

                <div className="space-y-2">
                  <h2 className="font-bold leading-heading">
                    Fundamentos do JavaScript
                  </h2>
                  <p className="text-smoke-800 text-sm leading-base">
                    Treine seus conhecimentos nos fundamentos do JavaScript como
                    Arrays, variáveis, condicionais e estruturas de repetição.
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <Button>
                    <ButtonText>Acessar coleção</ButtonText>
                    <ButtonIcon icon={MoveRight} />
                  </Button>

                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6">
                      <ProgressCircle progress={50} />
                    </div>
                    <span className="text-smoke-600 text-sm leading-base">
                      8/16
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
