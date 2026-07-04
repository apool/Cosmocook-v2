export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo" aria-label="Cosmocook"></div>
            <div className="footer-tag">
              Cookies feitos pra atravessar <em>galáxias</em>.
            </div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.15em",
                color: "var(--cream-dim)",
                textTransform: "uppercase"
              }}
            >
              COSMOCOOK · CORONEL VIVIDA · PR
            </div>
          </div>
          <div>
            <h4>Navegar</h4>
            <ul>
              <li>
                <a href="#cardapio">Cardápio</a>
              </li>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#localizacao">Localização</a>
              </li>
              <li>
                <a href="#como-pedir">Como pedir</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contato</h4>
            <ul>
              <li></li>
              <li>+55 46 99914-8012</li>
              <li>Coronel Vivida · PR</li>
            </ul>
          </div>
          <div>
            <h4>Siga-nos</h4>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/cosmocook_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ig-link"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    style={{ verticalAlign: "-2px", marginRight: 6 }}
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  @cosmocook_
                </a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 COSMOCOOK</span>
          <span>feito com manteiga e gravidade</span>
        </div>
      </div>
    </footer>
  );
}
