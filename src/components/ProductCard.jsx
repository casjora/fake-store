import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col justify-between shadow-xs transition-all [@media(hover:hover)]:hover:shadow-md">
      <Link to={`/product/${product.id}`} className="group cursor-pointer">
        <div className="aspect-square w-full bg-gray-50 rounded-xl p-6 flex items-center justify-center overflow-hidden mb-4">
          <img 
            src={product.image} 
            alt={product.title} 
            className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
          {product.category}
        </span>
        <h3 className="text-sm font-bold text-gray-800 line-clamp-2 h-10 mb-2">
          {product.title}
        </h3>
      </Link>
      
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-base font-black text-gray-900">${product.price.toFixed(2)}</span>
          <span className="text-xs text-amber-500 font-bold">⭐ {product.rating?.rate || 4.5}</span>
        </div>
        <button className="w-full bg-[#0f172a] [@media(hover:hover)]:hover:bg-slate-800 active:bg-slate-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2">
          🛍️ Add to Cart
        </button>
      </div>
    </div>
  );
}