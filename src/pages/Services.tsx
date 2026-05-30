export default function Services(){
  return (
    <main className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">What we offer</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Luxury property services designed for your lifestyle.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">From property sourcing to closing and aftercare, we provide a complete concierge experience for high-end buyers and investors.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-white">Property sourcing</h2>
            <p className="mt-4 text-slate-300">We find premier homes that match your exact style, budget, and privacy requirements.</p>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-white">Investment advisory</h2>
            <p className="mt-4 text-slate-300">Receive expert analysis and guidance to position your purchase for long-term growth.</p>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-white">Private viewings</h2>
            <p className="mt-4 text-slate-300">Enjoy discreet tours, premium scheduling, and dedicated support throughout the process.</p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-black/60 p-8">
            <h3 className="text-xl font-semibold text-white">How it works</h3>
            <ol className="mt-6 space-y-4 text-slate-300">
              <li><strong>1.</strong> Tell us your property vision.</li>
              <li><strong>2.</strong> We curate a tailored selection.</li>
              <li><strong>3.</strong> View privately and choose confidently.</li>
              <li><strong>4.</strong> Close with premium legal and financial support.</li>
            </ol>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-black/60 p-8">
            <h3 className="text-xl font-semibold text-white">Why choose SAMRA PRIVE</h3>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>Curated luxury properties not listed publicly.</li>
              <li>24/7 client concierge and personalized market updates.</li>
              <li>White-glove service from search through settlement.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
