import { useState } from "react";
import { COOKIES, CATEGORIES } from "../data/products.js";
import ProductCard from "./ProductCard.jsx";

export default function Menu({ onAdd, addedFlash }) {
  const [filter, setFilter] = useState("Todos");
  const filtered = filter === "Todos" ? COOKIES : COOKIES.filter((c) => c.category === filter);

  return (
    <section id="cardapio">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow" style={{ marginBottom: 20, display: "inline-flex" }}>
              O menu
            </span>
            <h2>
              Nossos Cookies, um <em>universo</em> de sabores.
            </h2>
          </div>
          <div className="head-meta">
            Atualizado
            <br />
            21 · mai · 2026
          </div>
        </div>

        <div className="filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`chip ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filtered.map((cookie) => (
            <ProductCard key={cookie.id} cookie={cookie} onAdd={onAdd} addedFlash={addedFlash} />
          ))}
        </div>
      </div>
    </section>
  );
}
