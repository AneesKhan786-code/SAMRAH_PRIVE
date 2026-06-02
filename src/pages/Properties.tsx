import { Link } from 'react-router-dom';
import { properties } from '../data/properties';

export default function Properties(){
  return (
    <main>
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Property collection</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Premium Properties Across Lahore & Dubai</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">Explore luxury homes, villas, apartments, commercial buildings, and investment opportunities located in the region's most sought-after communities.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-soft">
              <h2 className="text-lg font-semibold">Prime locations</h2>
              <p className="mt-3 text-sm text-slate-600">Each residence is located in a secure neighborhood with rapid access to premium amenities.</p>
            </div>
            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-soft">
              <h2 className="text-lg font-semibold">Transparent process</h2>
              <p className="mt-3 text-sm text-slate-600">From first viewing to closing, our team manages the full luxury purchase experience.</p>
            </div>
            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-soft">
              <h2 className="text-lg font-semibold">Exclusive preview</h2>
              <p className="mt-3 text-sm text-slate-600">Instant access to new listings and private viewings reserved for our premium members.</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {properties.map(p=> (
              <article key={p.id} className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 text-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-64 overflow-hidden bg-black">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="mb-3 text-sm uppercase tracking-[0.3em] text-slate-400">{p.price}</div>
                  <h3 className="mb-2 text-xl font-semibold">{p.title}</h3>
                  <p className="text-sm text-slate-400">{p.location}</p>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-300">
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-3 py-2">🛏️ {p.beds} beds</span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-3 py-2">🛁 {p.baths} baths</span>
                  </div>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <Link to={`/property/${p.id}`} className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">View details</Link>
                    <span className="text-sm text-slate-400">Exclusive</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
