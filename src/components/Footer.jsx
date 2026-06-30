import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f9fafb] text-gray-600 border-t border-gray-100 pt-16 pb-24 md:pb-8 text-left">
      {/* CONTENEDOR PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10">
        
        {/* COLUMNA 1: LOGO Y DESCRIPCIÓN (Ocupa 4 columnas en desktop) */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img className="w-5" src="/bag-blue.svg" alt="Luxe Logo" />
            <span className="text-xl font-black tracking-wider text-gray-900">
              LUXE<span className="text-blue-600">.</span>
            </span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
            Your one-stop destination for premium lifestyle products, from jewelry to electronics. Quality guaranteed.
          </p>
          {/* Iconos Sociales Simulados */}
          <div className="flex gap-3 mt-2">
            <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs cursor-pointer hover:bg-gray-300 transition-colors">🌐</span>
            <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs cursor-pointer hover:bg-gray-300 transition-colors">@</span>
          </div>
        </div>

        {/* COLUMNA 2: CATEGORÍAS ENLAZADAS (Ocupa 2 columnas en desktop) */}
        <div className="md:col-span-2 flex flex-col gap-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Categories</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link to="/category/electronics" className="hover:text-blue-600 transition-colors">Electronics</Link></li>
            <li><Link to="/category/jewelery" className="hover:text-blue-600 transition-colors">Jewelry</Link></li>
            <li><Link to="/category/men" className="hover:text-blue-600 transition-colors">Men's Fashion</Link></li>
            <li><Link to="/category/women" className="hover:text-blue-600 transition-colors">Women's Fashion</Link></li>
          </ul>
        </div>

        {/* COLUMNA 3: SOPORTE (Ocupa 2 columnas en desktop) */}
        <div className="md:col-span-2 flex flex-col gap-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Support</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="#" className="hover:text-blue-600 transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Returns & Refunds</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Order Tracking</a></li>
          </ul>
        </div>

        {/* COLUMNA 4: NEWSLETTER (Ocupa 4 columnas en desktop) */}
        <div className="md:col-span-4 flex flex-col gap-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Newsletter</h3>
          <p className="text-sm text-gray-500">Get the latest updates on new arrivals and sales.</p>
          <form className="flex flex-col gap-2 mt-2 w-full" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white border border-gray-200 px-4 py-2.5 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 w-full"
            />
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors shadow-xs"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* LÍNEA DIVISORIA */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-gray-200/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">

        <div className="flex gap-4">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Cookies</a>
        </div>
      </div>

      {/* 📱 NAVIGATION BAR INFERIOR (Solo visible en Mobile gracias a 'md:hidden') */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-100 py-2 px-6 flex justify-between items-center z-50 shadow-lg">
        <Link to="/" className="flex flex-col items-center gap-0.5 text-blue-600">
          <span className="text-lg">🏠</span>
          <span className="text-[10px] font-bold tracking-wide uppercase">Home</span>
        </Link>
        <Link to="/category/electronics" className="flex flex-col items-center gap-0.5 text-gray-400 hover:text-blue-600">
          <span className="text-lg">🧭</span>
          <span className="text-[10px] font-bold tracking-wide uppercase">Explore</span>
        </Link>
        <div className="flex flex-col items-center gap-0.5 text-gray-400 cursor-pointer hover:text-blue-600">
          <span className="text-lg">🤍</span>
          <span className="text-[10px] font-bold tracking-wide uppercase">Wishlist</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 text-gray-400 cursor-pointer hover:text-blue-600">
          <span className="text-lg">👤</span>
          <span className="text-[10px] font-bold tracking-wide uppercase">Profile</span>
        </div>
      </div>
    </footer>
  );
}