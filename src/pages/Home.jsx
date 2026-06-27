import MainGrid from "../components/MainGrid";

// Recibimos la prop 'searchTerm' de App.jsx
export default function Home({ products = [], searchTerm = "" }) {
  
  // Filtramos la lista completa de la tienda según lo escrito en la barra de búsqueda
  const filteredProducts = products.filter((product) => {
    const title = (product?.title || "").toLowerCase();
    return title.includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <div className="flex w-full justify-between px-5 mt-8">
        <div className="text-left">
          <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">Trending Now</h2>
          <p className="text-xs text-gray-400 mt-1 hidden sm:block">Our most popular items this week</p>
        </div>
      </div>
      
      {/* Si hay resultados los muestra, si no, te avisa amigablemente */}
      {filteredProducts.length > 0 ? (
        <MainGrid data={filteredProducts} />
      ) : (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg font-medium">No products matched your search.</p>
          <p className="text-sm mt-1">Try searching for something else!</p>
        </div>
      )}
    </div>
  );
}