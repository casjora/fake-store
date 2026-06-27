import { Link } from "react-router-dom";

export default function MainGrid({ data }) {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-10">
      
      {/* HEADER DE LA SECCIÓN */}


      {/* GRID RESPONSIVO: 2 columnas en mobile, 4 en desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {data.map((item) => (
          <article 
            key={item.id} 
            className="bg-white border border-gray-100 rounded-2xl p-3 md:p-4 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-gray-200 transition-all group relative"
          >
            {/* CONTENEDOR DE LA IMAGEN */}
            <div className="w-full aspect-square bg-gray-50/50 rounded-xl p-4 flex items-center justify-center relative overflow-hidden mb-3">
              <Link to={`/product/${item.id}`} className="w-full h-full flex items-center justify-center">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 mix-blend-multiply" 
                />
              </Link>
              
              {/* Botón Flotante Wishlist (Opcional del diseño Mobile) */}
              <button className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full shadow-xs flex items-center justify-center text-xs text-gray-400 hover:text-red-500 transition-colors cursor-pointer md:opacity-0 group-hover:opacity-100">
                🤍
              </button>
            </div>

            {/* CUERPO DE INFORMACIÓN */}
            <div className="flex-1 flex flex-col text-left">
              {/* Categoría */}
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase mb-1 block">
                {item.category}
              </span>
              
              {/* Título truncado a 2 líneas para mantener simetría */}
              <h3 className="text-xs md:text-sm font-semibold text-gray-800 line-clamp-2 mb-2 min-h-[2.5rem] leading-snug">
                {item.title}
              </h3>
              
              {/* Precio y Calificación en una sola fila */}
              <div className="mt-auto flex items-center justify-between gap-1 pt-1">
                <span className="text-sm md:text-base font-black text-gray-900">
                  ${item.price.toFixed(2)}
                </span>
                
                {item.rating && (
                  <span className="text-xs font-bold text-amber-500 flex items-center gap-0.5">
                    ★ <span className="text-gray-400 font-medium text-[11px]">{item.rating.rate}</span>
                  </span>
                )}
              </div>
            </div>

            {/* BOTÓN ADD TO CART (Fiel al diseño oscuro de referencia) */}
            <button 
              type="button" 
              className="w-full bg-[#0f172a] hover:bg-slate-800 text-white text-xs font-bold py-2.5 px-4 rounded-xl mt-4 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>🛒</span> Add to Cart
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}