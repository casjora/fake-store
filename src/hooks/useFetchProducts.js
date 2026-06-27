import { useState, useEffect } from "react";

export function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUrl = "https://fakestoreapi.com/products";

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(fetchUrl);
      if (!res.ok) throw new Error("Error al conectar con el servidor");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      setError(err.message || "Algo salió mal");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return { products, loading, error, refetch: loadData };
}