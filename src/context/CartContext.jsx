import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  // Inicializa el carrito leyendo el localStorage para que no se borre al recargar
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("luxe_cart");
    return localData ? JSON.parse(localData) : [];
  });

  // Guardar en localStorage cada vez que el carrito cambie
  useEffect(() => {
    localStorage.setItem("luxe_cart", JSON.stringify(cart));
  }, [cart]);

  // ➕ Agregar producto (o aumentar cantidad si ya existe)
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // ➖ Eliminar o reducir cantidad
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // 🧹 Vaciar carrito completo
  const clearCart = () => setCart([]);

  // 🔢 Contador total de artículos (Badge)
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizado para usar el carrito de forma limpia y directa
export function useCart() {
  return useContext(CartContext);
}