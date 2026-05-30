export default function About(){
  return (
    <main className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Our vision</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Built for visionary buyers and modern living.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">SAMRA PRIVE brings together elite properties, modern market insights, and a discreet service model for clients seeking the finest homes in the world.</p>
          </div>
          <div className="space-y-4 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-soft">
            <div>
              <h2 className="text-xl font-semibold text-white">Our mission</h2>
              <p className="mt-3 text-slate-300">To redefine luxury property discovery with immersive experiences, authentic advice, and absolute trust.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Our values</h2>
              <ul className="mt-3 space-y-2 text-slate-300">
                <li>Authenticity in every listing</li>
                <li>Personalized concierge service</li>
                <li>Design-forward real estate strategy</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="mt-20 grid gap-8 lg:grid-cols-3">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <h3 className="text-lg font-semibold text-white">Curated selection</h3>
            <p className="mt-4 text-slate-300">Only the most refined homes enter our portfolio after rigorous quality review.</p>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <h3 className="text-lg font-semibold text-white">White glove access</h3>
            <p className="mt-4 text-slate-300">Private viewings, document handling, and premium negotiation support included.</p>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <h3 className="text-lg font-semibold text-white">Market insight</h3>
            <p className="mt-4 text-slate-300">Detailed property intelligence and performance outlooks for every listing we present.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
