import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useFetchProducts } from "./hooks/useFetchProducts";

import Banner from "./components/Banner";
import Footer from "./components/Footer";
import CategoryFilter from "./components/CategoryFilter";
import NavBar from "./components/NavBar"; // O SearchBar según tu archivo

import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const { products, loading, error, refetch } = useFetchProducts();

  // 🌀 Pantalla de carga oficial de la rúbrica
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 gap-3">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest animate-pulse">Cargando Tienda...</p>
      </div>
    );
  }

  // ⚠️ Pantalla de error amigable con reintento
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 text-center">
        <span className="text-4xl mb-2">⚠️</span>
        <p className="text-red-500 font-bold mb-4">Error de conexión: {error}</p>
        <button 
          onClick={refetch} 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-colors cursor-pointer"
        >
          Reintentar conexión
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      <div>
        {/* Sincronizamos el buscador global */}
        <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Banner />
        <CategoryFilter />

        <Routes>
          <Route path="/" element={<Home products={products} searchTerm={searchTerm} />} />
          <Route path="/category/:category" element={<Home products={products} searchTerm={searchTerm} />} />
          <Route path="/product/:id" element={<ProductPage products={products} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;