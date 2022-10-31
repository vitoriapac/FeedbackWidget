import { CloseButton } from './CloseButton'

export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe o seu feedback</span>

        <CloseButton />
      </header>

      <p>Hello world</p>

      <footer className="text-xs text-neutral-600">
        Feito com ♥ pela{' '}
        <a
          className="underline underline-offset-2"
          href="http://www.github.com/vitoriapac"
          target="_blank"
        >
          Vitoria Pacheco
        </a>
      </footer>
    </div>
  )
}
