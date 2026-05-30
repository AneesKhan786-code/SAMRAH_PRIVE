import { Link } from 'react-router-dom';
import { heroSlides, properties } from '../data/properties';
import { useEffect, useMemo, useState } from 'react';

export default function Home(){
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(()=>{
    const id = setInterval(()=> setActiveIndex(p=> (p+1)%heroSlides.length), 5000);
    return ()=> clearInterval(id);
  },[]);
  const active = useMemo(()=>heroSlides[activeIndex],[activeIndex]);

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage:`url(${active})`}} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        <div className="relative mx-auto flex min-h-[75vh] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-teal-300">Luxury Properties</p>
            <h1 className="mb-6 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">Easiest way to find your dream home</h1>
            <p className="mb-10 max-w-2xl text-lg text-slate-100 sm:text-xl leading-relaxed">Discover the finest curated properties with exceptional search tools, market insights, and white-glove service.</p>
            <form className="flex flex-col gap-3 sm:flex-row">
              <input placeholder="Your ZIP code or City. e.g. New York" className="min-w-0 flex-1 rounded-full border-0 bg-white/90 px-6 py-4 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              <button className="rounded-full bg-gradient-to-r from-teal-500 to-teal-600 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition">Search</button>
            </form>
          </div>
        </div>
      </section>

      {/* POPULAR PROPERTIES */}
      <section className="bg-white py-20 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-teal-600 font-semibold">Featured Listings</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">Popular Properties</h2>
            </div>
            <Link to="/properties" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-teal-600 px-8 py-3 text-sm font-semibold text-white hover:shadow-lg transition">View all properties</Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {properties.map((property)=> (
              <article key={property.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-md transition hover:shadow-2xl hover:-translate-y-1">
                <div className="relative h-72 overflow-hidden bg-slate-100">
                  <img src={property.image} alt={property.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-teal-600">{property.price}</div>
                  <h3 className="mb-3 text-xl font-bold text-slate-950">{property.title}</h3>
                  <p className="mb-5 text-sm text-slate-600">{property.location}</p>
                  <div className="mb-6 flex flex-wrap gap-3 text-sm text-slate-600">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm">🛏️ {property.beds} beds</span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm">🛁 {property.baths} baths</span>
                  </div>
                  <Link to={`/property/${property.id}`} className="inline-flex items-center rounded-full bg-gradient-to-r from-teal-500 to-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:shadow-lg">See details</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES / WHY CHOOSE */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-teal-600 font-semibold">Our Services</p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">Why Choose Us</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="rounded-2xl bg-white p-8 shadow-md text-center hover:shadow-lg transition">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-lg font-bold text-slate-950">Top Properties</h3>
              <p className="mt-3 text-sm text-slate-600">Handpicked homes from the finest neighborhoods worldwide.</p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md text-center hover:shadow-lg transition">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-bold text-slate-950">Property for Sale</h3>
              <p className="mt-3 text-sm text-slate-600">Browse our exclusive portfolio of luxury residences.</p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md text-center hover:shadow-lg transition">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-lg font-bold text-slate-950">Real Estate Agent</h3>
              <p className="mt-3 text-sm text-slate-600">Expert advisors ready to guide your property journey.</p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md text-center hover:shadow-lg transition">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-bold text-slate-950">Light Properties</h3>
              <p className="mt-3 text-sm text-slate-600">Bright, modern spaces designed for contemporary living.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-3xl font-bold text-slate-950">Customer Says</h2>
            <div className="flex gap-2">✨⭐⭐⭐⭐⭐</div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {name: 'Mike Houston', text: 'The team made the entire process seamless. From viewings to closing, every detail was handled with professionalism.'},
              {name: 'Cameron Webster', text: 'Found my dream home within weeks. The expert guidance and property curation exceeded all expectations.'},
              {name: 'Dave Smith', text: 'Outstanding service and beautiful properties. Highly recommended for anyone seeking luxury real estate.'}
            ].map((review, i) => (
              <div key={i} className="rounded-2xl bg-slate-50 p-8 shadow-md hover:shadow-lg transition">
                <div className="mb-4 flex gap-1 text-yellow-400">⭐⭐⭐⭐⭐</div>
                <p className="text-slate-700 mb-6 leading-relaxed italic">\"{ review.text }\"</p>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600"></div>
                  <div>
                    <p className="font-bold text-slate-950">{review.name}</p>
                    <p className="text-sm text-slate-600">Property Buyer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIND HOME SECTION */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Let's find home that's perfect for you</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">Our comprehensive property search and expert consultation services ensure you find exactly what you're looking for.</p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-2xl">🔑</div>
                  <div>
                    <h3 className="font-bold mb-1">Find Properties</h3>
                    <p className="text-sm text-slate-400">Browse our extensive portfolio of luxury homes.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-bold mb-1">Top Rated Agents</h3>
                    <p className="text-sm text-slate-400">Work with the industry's finest real estate professionals.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl">💎</div>
                  <div>
                    <h3 className="font-bold mb-1">Light Properties</h3>
                    <p className="text-sm text-slate-400">Modern, bright homes with contemporary design.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={properties[0]?.image} alt="Featured home" className="w-full h-96 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gradient-to-r from-teal-500 to-teal-600 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 text-center md:grid-cols-4">
            <div>
              <p className="text-5xl font-bold">3,298</p>
              <p className="mt-3 text-teal-100">Total Properties</p>
            </div>
            <div>
              <p className="text-5xl font-bold">2,181</p>
              <p className="mt-3 text-teal-100">Sold Properties</p>
            </div>
            <div>
              <p className="text-5xl font-bold">9,316</p>
              <p className="mt-3 text-teal-100">Happy Clients</p>
            </div>
            <div>
              <p className="text-5xl font-bold">7,191</p>
              <p className="mt-3 text-teal-100">Agents</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - BE PART OF AGENTS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-teal-600 font-semibold">Join Our Team</p>
          <h2 className="mt-4 text-4xl font-bold text-slate-950 mb-6">Be a part of our growing real estate agents</h2>
          <p className="max-w-2xl mx-auto text-slate-600 mb-10 text-lg">Become part of a thriving community of real estate professionals dedicated to luxury property expertise.</p>
          <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-teal-600 px-10 py-4 text-sm font-semibold text-white hover:shadow-xl transition">
            Apply for Real Estate Agent
          </a>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-teal-600 font-semibold">Our Team</p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">Our Agents</h2>
            <p className="mt-6 max-w-2xl mx-auto text-slate-600">Experienced professionals committed to finding you the perfect property with personalized service.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {name: 'James Doe', title: 'Senior Agent', desc: 'Expert in luxury residential properties and investment portfolios.'},
              {name: 'Jean Smith', title: 'Property Consultant', desc: 'Specializing in premium estates and architectural masterpieces.'},
              {name: 'Alicia Brown', title: 'Market Advisor', desc: 'Provides comprehensive market insights and valuation expertise.'}
            ].map((agent, i) => (
              <div key={i} className="text-center">
                <div className="mb-6 h-32 w-32 mx-auto rounded-full bg-gradient-to-br from-teal-400 to-teal-600 shadow-lg"></div>
                <h3 className="text-xl font-bold text-slate-950">{agent.name}</h3>
                <p className="text-sm text-teal-600 font-semibold mt-2">{agent.title}</p>
                <p className="text-sm text-slate-600 mt-4 leading-relaxed">{agent.desc}</p>
                <div className="mt-6 flex gap-3 justify-center">
                  <a href="#" className="text-teal-600 hover:text-teal-700">f</a>
                  <a href="#" className="text-teal-600 hover:text-teal-700">t</a>
                  <a href="#" className="text-teal-600 hover:text-teal-700">in</a>
                  <a href="#" className="text-teal-600 hover:text-teal-700">ig</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
