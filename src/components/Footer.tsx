export default function Footer(){
  return (
    <footer className="border-t border-slate-200 bg-slate-900 py-16 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-5 mb-12">
          <div>
              <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 text-white font-bold">
                SP
              </div>
              <span className="font-bold text-white">SAMRAH PRIVE</span>
            </div>
            <p className="text-sm leading-relaxed">Your Trusted Real Estate Partner in Lahore & Dubai</p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="hover:text-teal-400 transition">Home</a></li>
              <li><a href="/properties" className="hover:text-teal-400 transition">Properties</a></li>
              <li><a href="/services" className="hover:text-teal-400 transition">Services</a></li>
              <li><a href="/about" className="hover:text-teal-400 transition">About</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-teal-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Press</a></li>
            </ul>
          </div>
          <div>
              <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>📧 hello@samrahprive.com</li>
              <li>📞 03235511022</li>
              <li>📍 DHA Lahore · Gulberg Lahore · Dubai (by appointment)</li>
              <li className="text-xs text-slate-400 mt-2">Available 24/7 for inquiries</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Get exclusive property listings and market updates.</p>
              <form className="flex flex-col gap-2">
              <input type="email" placeholder="Your email" className="rounded-lg bg-slate-800 border border-slate-700 px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              <button type="submit" className="rounded-lg px-4 py-2 text-sm font-semibold text-white btn-gradient">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8">
          <div className="grid gap-4 md:grid-cols-2">
            <p className="text-sm">© 2026 SAMRAH PRIVE. All Rights Reserved.</p>
            <div className="flex gap-6 justify-end text-sm">
                <a href="#" className="hover:text-teal-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-teal-400 transition">Terms & Conditions</a>
              <div className="flex gap-3 ml-auto">
                <a href="#" className="hover:text-teal-400 transition">f</a>
                <a href="#" className="hover:text-teal-400 transition">t</a>
                <a href="#" className="hover:text-teal-400 transition">in</a>
                <a href="#" className="hover:text-teal-400 transition">ig</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
