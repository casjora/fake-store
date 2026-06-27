/* Estados y routing */
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

/* Paginas de la OPA */
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductDescription from "./pages/ProductDescription";

// Componentes necesarios en todas las paginas:
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function db() {
      try {
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error cargando el API de Fake Store, ", error);
      } finally {
        setLoading(false);
      }
    }
    db();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-50">
        <p className="text-xl font-medium text-gray-500 animate-pulse">Cargando información...</p>
      </div>
    );
  }

  return (
    <>
      {/* 🔌 Conectamos los cables aquí pasándole el estado a la NavBar */}
      <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Banner />
      
      <Routes>
        <Route
          path="/"
          element={<Home products={products} searchTerm={searchTerm} />}
        />
        {/* Dejamos una sola ruta limpia con todas sus propiedades */}
        <Route
          path="/category/:category"
          element={<CategoryPage products={products} searchTerm={searchTerm} />}
        />
        <Route
          path="/product/:id"
          element={<ProductDescription products={products} />}
        />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;