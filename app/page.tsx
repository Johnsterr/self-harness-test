import CanvasScene from './scene/Canvas';

export default function Home() {
  return (
    <main className="min-h-full flex flex-col">
      {/* Hero */}
      <section className="flex flex-col-reverse lg:flex-row items-stretch h-screen">
        {/* Left: text */}
        <div className="flex flex-col justify-center px-8 py-24 lg:w-1/2 lg:px-16">
          <span className="text-cyan-500 font-mono text-xs tracking-widest uppercase mb-6">
            AGENTIC RUNTIME
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white">
            One core. Every AI workflow.
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-md">
            Context, tools and checks around any model. Built for product teams who ship fast.
          </p>
          <a
            href="#demo"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors w-fit"
          >
            Launch the demo
          </a>
        </div>

        {/* Right: 3D */}
        <div className="flex items-center justify-center lg:w-1/2 h-full">
          <CanvasScene />
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 px-8 lg:px-16 bg-graphite-800">
        <h2 className="text-3xl font-bold mb-16 text-center">Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-cyan-500 bg-opacity-20 flex items-center justify-center">
              <span className="text-cyan-500 text-xl font-bold">01</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Context Aware</h3>
            <p className="text-gray-400">
              Passes the right context to every model call. Reduces hallucinations and improves accuracy.
            </p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-violet-500 bg-opacity-20 flex items-center justify-center">
              <span className="text-violet-500 text-xl font-bold">02</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Tool Routing</h3>
            <p className="text-gray-400">
              Automatically selects and chains the right tools. No manual orchestration needed.
            </p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-cyan-500 bg-opacity-20 flex items-center justify-center">
              <span className="text-cyan-500 text-xl font-bold">03</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Safety Checks</h3>
            <p className="text-gray-400">
              Built-in guardrails for compliance, cost control, and output validation.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24 px-8 lg:px-16">
        <h2 className="text-3xl font-bold mb-16 text-center">How It Works</h2>
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="flex items-start gap-6">
            <span className="text-cyan-500 font-mono text-2xl font-bold w-8 shrink-0">→</span>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Connect your models</h3>
              <p className="text-gray-400">
                Point NEXUS to any provider. OpenAI, Anthropic, local models — it all works.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <span className="text-cyan-500 font-mono text-2xl font-bold w-8 shrink-0">→</span>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Define the workflow</h3>
              <p className="text-gray-400">
                Describe the steps. NEXUS handles routing, context, and error recovery.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <span className="text-cyan-500 font-mono text-2xl font-bold w-8 shrink-0">→</span>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Ship with confidence</h3>
              <p className="text-gray-400">
                Monitor outputs, track costs, and iterate — all from a single dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="demo" className="py-24 px-8 lg:px-16 bg-graphite-800 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
          Ready to build?
        </h2>
        <p className="text-lg text-gray-300 mb-10 max-w-md mx-auto">
          Start with the demo. See NEXUS orchestrate a real workflow in under 60 seconds.
        </p>
        <a
          href="#demo"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
        >
          Launch the demo
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 lg:px-16 text-center text-gray-500 text-sm">
        <p>© 2025 NEXUS. Agentic runtime for product teams.</p>
      </footer>
    </main>
  );
}
