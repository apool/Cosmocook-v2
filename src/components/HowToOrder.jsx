const steps = [
  {
    n: "i",
    title: "Escolha seus cookies",
    text: "Navegue pelo cardápio e adicione na sacola. Sugerimos a partir de 4 unidades — eles viajam melhor em grupo."
  },
  {
    n: "ii",
    title: "Finalize o pedido",
    text: "Confirme sabores, quantidade e endereço. O pagamento é via Pix, cartão ou na entrega."
  },
  {
    n: "iii",
    title: "Esperamos assar",
    text: "Tudo é feito sob encomenda. O preparo leva algumas horas, o tempo certo da fermentação."
  },
  {
    n: "iv",
    title: "Entrega ou retirada",
    text: "Entregamos em Coronel Vivida e região. Também é possível retirar direto na nossa cozinha — sem taxa."
  }
];

export default function HowToOrder() {
  return (
    <section id="como-pedir" className="howto">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow" style={{ marginBottom: 20, display: "inline-flex" }}>
              Como funciona
            </span>
            <h2>
              Da nossa cozinha pra <em>sua órbita</em>.
            </h2>
          </div>
          <div className="head-meta">
            Pedidos
            <br />
            24h por dia
          </div>
        </div>
        <div className="howto-grid">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <span className="step-num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
