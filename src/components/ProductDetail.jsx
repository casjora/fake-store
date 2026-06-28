import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";


export default function ProductDetail({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-gray-100 p-6 md:p-10 shadow-xs">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-600 bg-gray-50 rounded-xl transition-colors cursor-pointer [@media(hover:hover)]:hover:bg-gray-100 active:bg-gray-200"
      >
        ← Back to store
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="w-full bg-gray-50 rounded-2xl p-8 flex items-center justify-center aspect-square overflow-hidden">
          <img src={product.image} alt={product.title} className="max-h-80 object-contain" />
        </div>
        <div>
          <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest">{product.category}</span>
          <h1 className="text-2xl font-black text-gray-900 mt-2 mb-4 leading-tight">{product.title}</h1>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">{product.description}</p>
          <div className="flex items-center justify-between border-t border-gray-100 pt-6">
            <span className="text-3xl font-black text-gray-900">${product.price?.toFixed(2)}</span>
            <button onClick={() => addToCart(product)} className="bg-blue-600 [@media(hover:hover)]:hover:bg-blue-700 active:bg-blue-800 text-white font-bold px-8 py-3.5 rounded-xl transition-colors shadow-md shadow-blue-600/10 cursor-pointer">
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}