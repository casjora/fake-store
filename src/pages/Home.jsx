import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function Home({ products = [], searchTerm = "" }) {
  const { category } = useParams();

  // Filtro ultra-seguro contra nulos y diferencias de escritura de la API
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title?.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Si estamos en la Home general, solo dependemos del buscador
    if (!category) return matchesSearch;

    const productCat = product.category?.toLowerCase() || "";
    const routeCat = category.toLowerCase();
    
    // Cruza de forma segura "jewelery", "electronics", "men's clothing" y "women's clothing"
    const matchesCategory = productCat.includes(routeCat);
    
    return matchesSearch && matchesCategory;
  });

  // Generamos títulos dinámicos elegantes basados en el diseño
  const getTitles = () => {
    if (!category) return { main: "Trending Now", sub: "Our most popular items this week" };
    
    // Capitaliza el nombre de la categoría para el título de la izquierda
    const formattedCat = category.charAt(0).toUpperCase() + category.slice(1);
    return {
      main: `${formattedCat} Collection`,
      sub: `Discover our ${formattedCat} items`
    };
  };

  const titles = getTitles();

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 min-h-screen">
      {/* 🏷️ Encabezado dinámico doble (Izquierda y Derecha) */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-gray-100 pb-4 mb-6 gap-2">
        <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight">
          {titles.main}
        </h2>
        <p className="text-xs font-medium text-gray-400">
          {titles.sub}
        </p>
      </div>

      {/* 📦 Renderizado condicional */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
          <span className="text-3xl block mb-2">🔍</span>
          <p className="text-gray-500 font-bold text-sm">No products found</p>
          <p className="text-xs text-gray-400 mt-1">Try adjusting your keywords or category filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}