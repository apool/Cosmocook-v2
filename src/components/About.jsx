export default function About() {
  return (
    <section id="sobre">
      <div className="container">
        <div className="about-grid">
          <div className="about-img">
            <img src="img/sobre.jpg" alt="Cookies Cosmocook com embalagens e copo de leite" loading="lazy" />
          </div>
          <div className="about-content">
            <span className="eyebrow" style={{ marginBottom: 24, display: "inline-flex" }}>
              A história
            </span>
            <h2>
              Começou com uma <em>insônia</em> e um forno.
            </h2>
            <p>
              A CosmoCook nasceu do amor por cookies artesanais de verdade — aqueles que têm
              textura, recheio generoso e sabor que fica na memória. Aqui, cada lote é preparado
              com ingredientes selecionados e muito cuidado.
            </p>
            <p>
              Nossa mascote é a capivara astronauta: curiosa, tranquila e sempre pronta para
              explorar novos sabores. Assim como ela, a gente acredita que a próxima mordida pode
              ser a melhor da sua vida. Além dos clássicos, sempre temos edições especiais e
              sabores sazonais. Acompanhe o Instagram para não perder nenhum lançamento!
            </p>
            <div className="about-quote">
              "Tudo o que a gente faz cabe na palma da mão e dura uma mordida. Vale a pena fazer
              direito."
              <div
                style={{
                  fontSize: 12,
                  fontFamily: "var(--mono)",
                  letterSpacing: "0.12em",
                  color: "var(--cream-dim)",
                  marginTop: 14,
                  textTransform: "uppercase",
                  fontStyle: "normal"
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
