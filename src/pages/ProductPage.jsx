import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";

export default function ProductPage({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center py-24">
        <h2 className="text-xl font-bold text-gray-800">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50/50 py-10 px-4 min-h-screen">
      <ProductDetail product={product} />
    </div>
  );
}