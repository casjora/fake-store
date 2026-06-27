import { useParams, Link, useNavigate } from "react-router-dom"

export default function ProductDescription({ products }) {
  const { id } = useParams()
  const navigate = useNavigate()
  // Buscamos el producto por ID. Nota: item.id es Número y el id de useParams es String.
  const product = products.find(p => p.id === parseInt(id))

  // Cláusula de guarda por si el usuario escribe un ID que no existe
  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold text-gray-700">Product not found</h2>
        <Link to="/" className="text-blue-600 underline mt-4 inline-block">Go back home</Link>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

      

      {/* Contenedor de la Imagen */}
      <div className="flex justify-center bg-white p-8 rounded-2xl shadow-xs border border-gray-100">
        <img 
          src={product.image} 
          alt={product.title} 
          className="max-h-96 object-contain evolution-img"
        />
      </div>
      
      {/* Información del Producto */}
      <div className="flex flex-col gap-4 text-left">
        <span className="text-xs font-bold tracking-widest text-blue-600 uppercase flex justify-between">
        
          {product.category}
          <button 
        onClick={() => navigate(-1)} 
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors mb-6 group cursor-pointer"
      >
        <span className="transform group-hover:-translate-x-1 transition-transform">←</span> 
        Back to previous page
      </button>
        </span>
        <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
          {product.title}
        </h1>
        
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 font-bold">★ {product.rating?.rate}</span>
          <span className="text-gray-400 text-sm">({product.rating?.count} reviews)</span>
        </div>

        <p className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
        <p className="text-gray-600 leading-relaxed my-2">{product.description}</p>
        
        <button 
          type="button" 
          className="w-full md:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}