import { useEffect, useState } from "react";
import { useCart } from "./hooks/useCart.js";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Menu from "./components/Menu.jsx";
import HowToOrder from "./components/HowToOrder.jsx";
import About from "./components/About.jsx";
import Location from "./components/Location.jsx";
import Footer from "./components/Footer.jsx";
import CartDrawer from "./components/CartDrawer.jsx";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const { cart, cartCount, toast, addedFlash, addToCart, setQty, removeFromCart } = useCart();

  // close cart with esc
  useEffect(() => {
    const h = (e) => {
      if (e.key === "Escape") setCartOpen(false);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  return (
    <>
      <Header cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
      <Hero />
      <Stats />
      <Menu onAdd={addToCart} addedFlash={addedFlash} />
      <HowToOrder />
      <About />
      <Location />
      <Footer />
      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onQty={setQty}
        onRemove={removeFromCart}
      />
      <div className={`toast ${toast ? "show" : ""}`}>{toast}</div>
    </>
  );
}
