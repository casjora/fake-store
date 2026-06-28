/* Estados y routing */
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // 👈 Conectamos tu contexto global

export default function NavBar({ searchTerm, setSearchTerm }) {
  const { cartCount } = useCart(); // 👈 Extraemos el contador dinámico de productos

  return (
    <div className="w-full shadow-md flex gap-5 px-5 py-3 items-center justify-between bg-white sticky top-0 z-50">
      <div className="flex gap-5">
        <div className="flex items-center gap-1.5">
          <img className="w-5" src="/bag-blue.svg" alt="Luxe Logo Icon" />
          <Link
            className="text-lg font-black tracking-tight flex items-center justify-center text-slate-900"
            to={"/"}
          >
            LUXE<span className="hidden md:block text-blue-600">.</span>
          </Link>
        </div>

        {/* Menú de categorías para computadoras */}
        <nav className="md:flex gap-5 hidden items-center text-sm font-semibold text-gray-600">
          <Link to={"/category/electronics"} className="hover:text-blue-600 transition-colors">Electronics</Link>
          <Link to={"/category/jewelery"} className="hover:text-blue-600 transition-colors">Jewelry</Link>
          <Link to={"/category/men"} className="hover:text-blue-600 transition-colors">Men's</Link>
          <Link to={"/category/women"} className="hover:text-blue-600 transition-colors">Women's</Link>
        </nav>
      </div>

      <div className="flex gap-5 items-center">
        {/* Buscador inteligente */}
        <input
          className="bg-slate-100 px-3 py-1.5 hidden md:flex justify-center items-center rounded-md text-sm border border-transparent focus:border-gray-300 focus:bg-white outline-none transition-all"
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="🔎 Search Products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <img className="w-5 cursor-pointer" src="/heart.svg" alt="wishlist" />
        
        {/* 🛒 TU ICONO DE CARRITO TRANSFORMADO CON UN BADGE DINÁMICO */}
        <div className="relative p-1 cursor-pointer group">
          <img 
            className="w-5 transition-transform group-active:scale-95" 
            src="/cart-large.svg" 
            alt="shopping cart" 
          />
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-sm shadow-blue-600/30 animate-pulse">
              {cartCount}
            </span>
          )}
        </div>

        <img className="w-5 cursor-pointer" src="/user-circle.svg" alt="user profile" />
      </div>
    </div>
  );
}