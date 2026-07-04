export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-logo" aria-label="Cosmocook"></div>
        <span className="eyebrow hero-eyebrow">COOKIES ARTESANAIS · DESDE 2026</span>
        <h1>
          Cookies feitos
          <br />
          pra atravessar <em>galáxias</em>.
        </h1>
        <p>
          Cookies recheados, feitos à mão com ingredientes selecionados. Cada sabor é uma viagem do
          clássico ao surpreendente, do tradicional ao fora de órbita.
        </p>
        <div className="hero-cta">
          <a href="#cardapio" className="btn btn-primary">
            Ver cardápio →
          </a>
          <a href="#sobre" className="btn">
            Nossa história
          </a>
        </div>
      </div>
    </section>
  );
}
