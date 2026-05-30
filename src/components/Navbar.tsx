import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-teal-200/20 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 text-white font-bold text-sm shadow-md">
            SP
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-slate-900">SAMRAH PRIVE</span>
            <span className="text-xs text-teal-600 font-semibold">Luxury Homes</span>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 lg:flex">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-teal-600 border-b-2 border-teal-600 pb-1' : 'transition hover:text-teal-600'}>Home</NavLink>
          <NavLink to="/properties" className={({ isActive }) => isActive ? 'text-teal-600 border-b-2 border-teal-600 pb-1' : 'transition hover:text-teal-600'}>Properties</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'text-teal-600 border-b-2 border-teal-600 pb-1' : 'transition hover:text-teal-600'}>Services</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-teal-600 border-b-2 border-teal-600 pb-1' : 'transition hover:text-teal-600'}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-teal-600 border-b-2 border-teal-600 pb-1' : 'transition hover:text-teal-600'}>Contact</NavLink>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://wa.me/923255511022?text=Hello%20SAMRA%20PRIVE%2C%20I%20would%20like%20to%20connect%20via%20WhatsApp%20about%20properties."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:shadow-lg"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
