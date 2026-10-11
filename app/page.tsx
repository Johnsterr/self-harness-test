import CanvasScene from './scene/Canvas';

export default function Home() {
  return (
    <main className="min-h-full flex flex-col">

      {/* ========== HERO ========== */}
      <section className="relative flex flex-col-reverse lg:flex-row items-stretch h-screen overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[30%] w-[600px] h-[600px] rounded-full bg-cyan-500/[0.03] blur-[100px]" />
          <div className="absolute bottom-[20%] right-[30%] w-[500px] h-[500px] rounded-full bg-violet-500/[0.03] blur-[100px]" />
        </div>

        {/* Left: text */}
        <div className="relative z-10 flex flex-col justify-center px-8 py-24 lg:w-1/2 lg:px-16">
          <span className="inline-flex items-center gap-2 text-cyan-400/80 font-mono text-xs tracking-[0.3em] uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Агнетный рантайм
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05] mb-6 text-white glow-text">
            AI-агент —<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              это будущее
            </span>
          </h1>

          <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
            Автоматизация через AI-агентов — это не тренд, а сдвиг парадигмы.
            Построить свою harness — значит создать фундамент, на котором будут работать
            все ваши AI-агенты: контекст, инструменты, проверки.
          </p>

          <p className="text-base text-gray-500 mb-10 max-w-md leading-relaxed">
            NEXUS объединяет контекст, инструменты и проверки вокруг любой модели.
            Одного ядра достаточно для любого AI-workflow.
          </p>

          <a
            href="#demo"
            className="btn-premium relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-semibold px-8 py-4 rounded-xl transition-all w-fit shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20"
          >
            <span>Начать</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Right: 3D */}
        <div className="flex items-center justify-center lg:w-1/2 h-full">
          <CanvasScene />
        </div>
      </section>

      {/* Why AI Agents Section */}
      <section className="py-24 lg:py-32 px-8 lg:px-16 bg-graphite-800 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-graphite-900 via-violet-500/[0.02] to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto relative">
          <span className="text-violet-400/80 font-mono text-xs tracking-[0.3em] uppercase mb-8 block">
            Почему это важно
          </span>

          <h2 className="text-3xl lg:text-5xl font-bold mb-16 text-center text-white leading-tight">
            AI-агенты и построение своей harness —<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              это мета
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-8 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.74-5.007A9.003 9.003 0 0012 3.996 9.003 9.003 0 003.26 8.993 9.004 9.004 0 0012 21z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.79V12m0 0l4.5 4.5M12 12l-4.5 4.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">AI — это не про чаты</h3>
              <p className="text-gray-400 leading-relaxed">
                Личные ассистенты, автопилоты для бизнеса, автономные системы —
                агенты работают без постоянного участия человека. Они принимают решения,
                выполняют задачи и возвращают результат. Это не просто чат-боты — это
                самостоятельные рабочие потоки.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-violet-500/5 flex items-center justify-center">
                <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6m0 0l-3 3m3-3l3-3M12 2v2m0 16v2M4.93 8.93l1.41-1.41M17.66 16.6l1.41-1.41M4.93 15.07l1.41 1.41M17.66 7.4l1.41 1.41" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Harness — это мост</h3>
              <p className="text-gray-400 leading-relaxed">
                Harness — это слой обвязки вокруг модели: контекст, инструменты,
                проверки, роутинг. Без него агенты хаотичны и ненадёжны. С ним —
                они становятся промышленным инструментом. Построить свою harness —
                значит встать на путь реальной автоматизации.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h16l-9-10z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Скорость — главное преимущество</h3>
              <p className="text-gray-400 leading-relaxed">
                Команды, которые внедряют AI-агентов с правильным фундаментом,
                сокращают время выполнения рутинных задач в разы. Это не будущее —
                это сейчас. Те, кто строит harness сегодня, получают преимущество
                завтра.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-violet-500/5 flex items-center justify-center">
                <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 116 2.06M12 10.5v.5m0 0v.5m0-1v2a4 4 0 01-4 4H4m16-3a4 4 0 01-4-4V7.5m0 0v-.5m0 0v-.5m0 1v2a4 4 0 01-4-4H4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Безопасность и контроль</h3>
              <p className="text-gray-400 leading-relaxed">
                Автоматизация без проверок — это риск. Harness включает
                guardrails для комплаенса, контроля затрат и валидации результатов.
                Агенты работают быстро — и без того, что вы потеряете контроль.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 lg:py-32 px-8 lg:px-16 relative">
        <div className="absolute inset-0 grid-bg" />
        <div className="max-w-5xl mx-auto relative">
          <span className="text-cyan-400/80 font-mono text-xs tracking-[0.3em] uppercase mb-6 block text-center">
            Возможности
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-16 text-center text-white">
            Всё, что нужно агенту
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8 text-center space-y-4 group hover:border-cyan-500/20 transition-colors duration-300">
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-cyan-500/20 to-transparent flex items-center justify-center group-hover:from-cyan-500/30 transition-all">
                <span className="text-cyan-400 font-mono text-lg font-bold">01</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Контекст</h3>
              <p className="text-gray-400 leading-relaxed">
                Правильный контекст к каждому вызову. Меньше галлюцинаций,
                выше точность. Агент понимает, а не гадает.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 text-center space-y-4 group hover:border-violet-500/20 transition-colors duration-300">
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-violet-500/20 to-transparent flex items-center justify-center group-hover:from-violet-500/30 transition-all">
                <span className="text-violet-400 font-mono text-lg font-bold">02</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Роутинг</h3>
              <p className="text-gray-400 leading-relaxed">
                Автоматический выбор и цепочка инструментов.
                Никакой ручной оркестрации — агент сам знает, что делать.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 text-center space-y-4 group hover:border-cyan-500/20 transition-colors duration-300">
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-cyan-500/20 to-transparent flex items-center justify-center group-hover:from-cyan-500/30 transition-all">
                <span className="text-cyan-400 font-mono text-lg font-bold">03</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Проверки</h3>
              <p className="text-gray-400 leading-relaxed">
                Встроенные guardrails для комплаенса, контроля затрат
                и валидации выходных данных. Агенту доверяют.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="gradient-line" />

      {/* Workflow */}
      <section className="py-24 lg:py-32 px-8 lg:px-16 bg-graphite-800 relative">
        <div className="max-w-3xl mx-auto">
          <span className="text-violet-400/80 font-mono text-xs tracking-[0.3em] uppercase mb-6 block text-center">
            Как это работает
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-20 text-center text-white">
            Три шага к автоматизации
          </h2>

          <div className="space-y-0 relative">
            {/* Connecting line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 via-violet-500/20 to-transparent" />

            <div className="flex items-start gap-6 group">
              <span className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-graphite-700 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400/60 transition-colors">
                <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Подключите модели</h3>
                <p className="text-gray-400 leading-relaxed">
                  Укажите NEXUS на любой провайдер. OpenAI, Anthropic, локальные модели — всё работает.
                  Один адаптер — всё подключено.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <span className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-graphite-700 border border-violet-500/30 flex items-center justify-center group-hover:border-violet-400/60 transition-colors">
                <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Определите workflow</h3>
                <p className="text-gray-400 leading-relaxed">
                  Опишите шаги. NEXUS берёт на себя роутинг, контекст и обработку ошибок.
                  Вы описываете — система делает.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <span className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-graphite-700 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400/60 transition-colors">
                <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Запускайте с уверенностью</h3>
                <p className="text-gray-400 leading-relaxed">
                  Мониторьте результаты, отслеживайте затраты, итерируйте — всё из одного dashboard.
                  Полная прозрачность и контроль.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="demo" className="py-24 lg:py-32 px-8 lg:px-16 text-center relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-cyan-500/[0.05] via-violet-500/[0.05] to-cyan-500/[0.05] blur-[80px]" />
        </div>

        <div className="max-w-2xl mx-auto relative">
          <span className="text-cyan-400/80 font-mono text-xs tracking-[0.3em] uppercase mb-8 block">
            Готовы начать?
          </span>

          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white glow-text">
            Постройте свой<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              AI-foundation
            </span>
          </h2>

          <p className="text-lg text-gray-400 mb-12 max-w-lg mx-auto leading-relaxed">
            Запустите демо. Посмотрите, как NEXUS оркестрирует реальный workflow
            за 60 секунд. AI-агенты уже здесь — пришло время построить фундамент.
          </p>

          <a
            href="#demo"
            className="btn-premium relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 text-white font-semibold px-10 py-5 rounded-xl transition-all shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:shadow-violet-500/10"
          >
            <span>Начать сейчас</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="gradient-line" />

      {/* Footer */}
      <footer className="py-8 px-8 lg:px-16 text-center text-gray-600 text-sm">
        <p>© 2025 NEXUS. Агнетный рантайм для продуктовых команд.</p>
      </footer>
    </main>
  );
}
