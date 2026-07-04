import { useState } from "react";

export function useCart() {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState("");
  const [addedFlash, setAddedFlash] = useState(null);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const addToCart = (cookie) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.cookie.id === cookie.id);
      if (existing) {
        return prev.map((i) =>
          i.cookie.id === cookie.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { cookie, qty: 1 }];
    });
    setToast(`${cookie.name} foi pra sacola`);
    setAddedFlash(cookie.id);
    setTimeout(() => setToast(""), 2200);
    setTimeout(() => setAddedFlash(null), 600);
  };

  const setQty = (id, qty) => {
    if (qty <= 0) return removeFromCart(id);
    setCart((prev) => prev.map((i) => (i.cookie.id === id ? { ...i, qty } : i)));
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.cookie.id !== id));
  };

  return { cart, cartCount, toast, addedFlash, addToCart, setQty, removeFromCart };
}
