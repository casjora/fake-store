import { useParams } from "react-router-dom";
import MainGrid from "../components/MainGrid";

// 1. Asignamos un string vacío por defecto a searchTerm por si no llega desde App.jsx
export default function CategoryPage({ products = [], searchTerm = "" }) {
  const { category = "" } = useParams();

  // Filtramos de forma segura evitando valores nulos o indefinidos
  const categoryOptions = products
    .filter((product) => {
      // Usamos ( || "" ) para asegurar que siempre sea un string antes de aplicar toLowerCase()
      const apiCategory = (product?.category || "").toLowerCase();
      const urlCategory = category.toLowerCase();

      return apiCategory.startsWith(urlCategory);
    })
    .filter((product) => {
      const productTitle = (product?.title || "").toLowerCase();
      const search = searchTerm.toLowerCase();

      return productTitle.includes(search);
    });

  // Controlamos que category tenga caracteres antes de transformar el título
  const titulo = category 
    ? `${category.charAt(0).toUpperCase()}${category.slice(1)}` 
    : "Collection";

  return (
    <div className="py-6">
      <div className="flex w-full justify-between px-5 my-5">
        <h2 className="text-2xl font-bold text-gray-900">{titulo} Collection</h2>
        <p className="text-gray-500">Discover our {titulo} items</p>
      </div>
      
      {categoryOptions.length > 0 ? (
        <MainGrid data={categoryOptions} />
      ) : (
        <div className="text-center py-12 text-gray-400">
          <p className="text-lg font-medium">No products found</p>
          <p className="text-sm text-gray-400 mt-1">Try adjusting your search terms or filters.</p>
        </div>
      )}
    </div>
  );
}