export default function Header({ cartCount, onOpenCart }) {
  return (
      <nav className="nav">
        <div className="nav-inner">
          <a href="#hero" className="brand">
            <span className="brand-mark"></span>
            <span className="brand-name">
              cosmo<em>cook</em>
            </span>
          </a>
          <ul className="nav-links">
            <li>
              <a href="#cardapio">Cardápio</a>
            </li>
            <li>
              <a href="#como-pedir">Como pedir</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#localizacao">Onde estamos</a>
            </li>
          </ul>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a
              href="https://www.instagram.com/cosmocook_/"
              target="_blank"
              rel="noopener noreferrer"
              className="ig-btn"
              aria-label="Instagram @cosmocook_"
              title="Siga no Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <button className="cart-btn" onClick={onOpenCart}>
              <span className="label">Sacola</span>
              <span className="cart-count">{cartCount}</span>
            </button>
          </div>
        </div>
      </nav>
  );
}
