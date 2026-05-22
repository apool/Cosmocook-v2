// COSMOCOOKIE — Interactive Menu App

const { useState, useEffect, useMemo } = React;

// ============ DATA ============

const COOKIES = [
{
  id: "CC-01",
  name: "Órbita de Kinder",
  italic: "Kinder",
  category: "Recheados",
  desc: "Massa tradicional com gotas de chocolate branco e ao leite, recheio tipo bueno com pedaços de Kinder.",
  price: 18.0,
  tag: { label: "Bestseller", className: "" },
  img: "img/kinder.jpg"
},
{
  id: "CC-02",
  name: "Galáxia de Nutella",
  italic: "Nutella",
  category: "Recheados",
  desc: "Massa tradicional com gotas de chocolate ao leite e recheado generosamente de Nutella.",
  price: 16.0,
  tag: null,
  img: "img/nutella.jpg"
},
{
  id: "CC-03",
  name: "Eclipse de Chocolate",
  italic: "Eclipse",
  category: "Recheados",
  desc: "Massa de cacau black com gotas de chocolate ao leite e recheado de ganache de chocolate meio amargo.",
  price: 16.0,
  tag: null,
  img: "img/eclipse.jpeg"
},
{
  id: "CC-04",
  name: "Explosão de Velvet",
  italic: "velvet",
  category: "Recheados",
  desc: "Massa de red velvet com gotas de chocolate branco e recheado de brigadeiro de cream cheese e ninho.",
  price: 16.0,
  tag: { label: "Novo", className: "new" },
  img: "img/explosao.jpeg"
},
{
  id: "CC-05",
  name: "Tradicional",
  italic: "Tradicional",
  category: "Clássicos",
  desc: "Massa tradicional com gotas de chocolate ao leite. O começo de toda viagem cósmica.",
  price: 10.0,
  tag: null,
  img: "img/tradicional.jpeg"
},
{
  id: "CC-06",
  name: "Lua Siciliana",
  italic: "siciliana",
  category: "Recheados",
  desc: "Massa tradicional com raspas de limão, gotas de chocolate branco e recheio de brigadeiro de limão siciliano.",
  price: 16.0,
  tag: { label: "Novo", className: "new" },
  img: "img/lua-siciliana.jpeg"
},
{
  id: "CC-07",
  name: "Eclipse de Oreo",
  italic: "oreo",
  category: "Recheados",
  desc: "Massa de cacau black, pedaços de oreo, gotas de chocolate branco e recheio de brigadeiro de oreo.",
  price: 16.0,
  tag: { label: "Novo", className: "new" },
  img: "img/oreo.jpeg"
},
{
  id: "CC-08",
  name: "Cookitos",
  italic: "Mini",
  category: "Caixinha",
  desc: "Caixinha com mini cookies tradicionais — chocolate ao leite, do tamanho certo pra dividir (ou não).",
  price: 12.0,
  tag: { label: "Box", className: "veg" },
  img: "img/mini-cookies.jpg"
}];


const CATEGORIES = ["Todos", "Recheados", "Clássicos", "Caixinha"];

// ============ HELPERS ============

const fmt = (n) => `R$ ${n.toFixed(2).replace(".", ",")}`;

function CookiePhoto({ cookie, small }) {
  if (small) {
    return (
      <img
        src={cookie.img}
        alt={cookie.name}
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          borderRadius: "inherit"
        }} />);

  }
  return (
    <div className="cookie-photo">
      <img
        src={cookie.img}
        alt={cookie.name}
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          inset: 0,
          display: "block"
        }} />
      
      {cookie.tag &&
      <div className={`cookie-tag ${cookie.tag.className}`}>{cookie.tag.label}</div>
      }
    </div>);

}

// ============ COMPONENTS ============

function Nav({ cartCount, onOpenCart }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#hero" className="brand">
          <span className="brand-mark"></span>
          <span className="brand-name">cosmo<em>cook</em></span>
        </a>
        <ul className="nav-links">
          <li><a href="#cardapio">Cardápio</a></li>
          <li><a href="#como-pedir">Como pedir</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#localizacao">Onde estamos</a></li>
        </ul>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="https://www.instagram.com/cosmocook_/"
            target="_blank"
            rel="noopener noreferrer"
            className="ig-btn"
            aria-label="Instagram @cosmocook_"
            title="Siga no Instagram">
            
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
    </nav>);

}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-logo" aria-label="Cosmocook"></div>
        <span className="eyebrow hero-eyebrow">COOKIES ARTESANAIS · DESDE 2026</span>
        <h1>
          Cookies feitos<br />pra atravessar <em>galáxias</em>.
        </h1>
        <p>Cookies recheados, feitos à mão com ingredientes selecionados. Cada sabor é uma viagem do clássico ao surpreendente, do tradicional ao fora de órbita.</p>
        <div className="hero-cta">
          <a href="#cardapio" className="btn btn-primary">
            Ver cardápio →
          </a>
          <a href="#sobre" className="btn">
            Nossa história
          </a>
        </div>
      </div>
    </section>);

}

function Stats() {
  return (
    <div className="stats">
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-num">6</div>
          <div className="stat-label">sabores recheados</div>
        </div>
        <div className="stat-item">
          <div className="stat-num" style={{ fontSize: "40px" }}>Cookies</div>
          <div className="stat-label">FEITOS COM AMOR</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">100%</div>
          <div className="stat-label">ARTESANAL</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">∞</div>
          <div className="stat-label">possibilidades</div>
        </div>
      </div>
    </div>);

}

function Menu({ onAdd, addedFlash }) {
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
            <h2>Nossos Cookies, um <em>universo</em> de sabores.</h2>
          </div>
          <div className="head-meta">
            Atualizado<br />
            21 · mai · 2026
          </div>
        </div>

        <div className="filters">
          {CATEGORIES.map((cat) =>
          <button
            key={cat}
            className={`chip ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}>
            
              {cat}
            </button>
          )}
        </div>

        <div className="menu-grid">
          {filtered.map((cookie) =>
          <article key={cookie.id} className="cookie-card">
              <CookiePhoto cookie={cookie} />
              <div className="cookie-body">
                <div className="cookie-id">{cookie.id} · {cookie.category}</div>
                <h3 className="cookie-name">{cookie.name}</h3>
                <p className="cookie-desc">{cookie.desc}</p>
                <div className="cookie-foot">
                  <div className="cookie-price">
                    {fmt(cookie.price)}
                    <small>/un</small>
                  </div>
                  <button
                  className={`add-btn ${addedFlash === cookie.id ? "added" : ""}`}
                  onClick={() => onAdd(cookie)}
                  aria-label={`Adicionar ${cookie.name}`}>
                  
                    +
                  </button>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>);

}

function HowTo() {
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
  }];


  return (
    <section id="como-pedir" className="howto">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow" style={{ marginBottom: 20, display: "inline-flex" }}>
              Como funciona
            </span>
            <h2>Da nossa cozinha pra <em>sua órbita</em>.</h2>
          </div>
          <div className="head-meta">
            Pedidos<br />24h por dia
          </div>
        </div>
        <div className="howto-grid">
          {steps.map((s) =>
          <div className="step" key={s.n}>
              <span className="step-num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function About() {
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
            <h2>Começou com uma <em>insônia</em> e um forno.</h2>
            <p>A CosmoCook nasceu do amor por cookies artesanais de verdade — aqueles que têm textura, recheio generoso e sabor que fica na memória. Aqui, cada lote é preparado com ingredientes selecionados e muito cuidado. 




            </p>
            <p>Nossa mascote é a capivara astronauta: curiosa, tranquila e sempre pronta para explorar novos sabores. Assim como ela, a gente acredita que a próxima mordida pode ser a melhor da sua vida. Além dos clássicos, sempre temos edições especiais e sabores sazonais. Acompanhe o Instagram para não perder nenhum lançamento!





            </p>
            <div className="about-quote">
              "Tudo o que a gente faz cabe na palma da mão e dura uma mordida.
              Vale a pena fazer direito."
              <div style={{ fontSize: 12, fontFamily: "var(--mono)", letterSpacing: "0.12em", color: "var(--cream-dim)", marginTop: 14, textTransform: "uppercase", fontStyle: "normal" }}>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function Location() {
  const days = [
  { day: "Terça", hours: "14h – 20h" },
  { day: "Quarta", hours: "14h – 20h" },
  { day: "Quinta", hours: "14h – 20h", today: true },
  { day: "Sexta", hours: "14h – 20h" },
  { day: "Sábado", hours: "14h – 20h" },
  { day: "Domingo", hours: "14h – 20h" },
  { day: "Segunda", hours: "14h – 20h" }];


  return (
    <section id="localizacao" className="location">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow" style={{ marginBottom: 20, display: "inline-flex" }}>
              Onde estamos
            </span>
            <h2>Um <em>pedacinho</em> do cosmo em Coronel Vivida.</h2>
          </div>
          <div className="head-meta">
            Paraná<br />Brasil
          </div>
        </div>
        <div className="location-grid">
          <div className="location-info">
            <div>
              <div className="label">R. JOSÉ LUÍS PACHÊCO, 303 - CEL. VIVIDA · RETIRADA NO LOCAL</div>
              <div className="val">R. José Luís Pachêco<br />Coronel Vivida · PR</div>
              <div className="sub">Retire seus cookies direto da nossa cozinha. Combine o horário pelo WhatsApp.</div>
            </div>
            <div>
              <div className="label">Horários</div>
              {days.map((d) =>
              <div key={d.day} className={`hours-row ${d.today ? "today" : ""}`}>
                  <span className="day">{d.day}{d.today ? " · hoje" : ""}</span>
                  <span>{d.hours}</span>
                </div>
              )}
            </div>
            <div>
              <div className="label">Contato</div>
              <div className="val" style={{ fontSize: 18 }}>+55 46 99914-8012</div>
              <div className="sub">
                <a href="https://www.instagram.com/cosmocook_/" target="_blank" rel="noopener noreferrer" className="ig-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ verticalAlign: "-2px", marginRight: 6 }}>
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  @cosmocook_
                </a>
              </div>
            </div>
          </div>
          <div className="map-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d224.15665108325211!2d-52.56083425240601!3d-25.98422334017594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1779410283794!5m2!1spt-BR!2sbr"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Cosmocook · Coronel Vivida, PR">
            </iframe>
            <div className="map-label">cosmocook · coronel vivida · pr</div>
          </div>
        </div>
      </div>
    </section>);

}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo" aria-label="Cosmocook"></div>
            <div className="footer-tag">
              Cookies feitos pra atravessar <em>galáxias</em>.
            </div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.15em", color: "var(--cream-dim)", textTransform: "uppercase" }}>COSMOCOOK · CORONEL VIVIDA · PR

            </div>
          </div>
          <div>
            <h4>Navegar</h4>
            <ul>
              <li><a href="#cardapio">Cardápio</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#localizacao">Localização</a></li>
              <li><a href="#como-pedir">Como pedir</a></li>
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
                <a href="https://www.instagram.com/cosmocook_/" target="_blank" rel="noopener noreferrer" className="ig-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ verticalAlign: "-2px", marginRight: 6 }}>
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  @cosmocook_
                </a>
              </li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 COSMOCOOK</span>
          <span>feito com manteiga e gravidade</span>
        </div>
      </div>
    </footer>);

}

// ============ CART ============

function Cart({ open, items, onClose, onQty, onRemove, onClearCart }) {
  const [mode, setMode] = useState("entrega");
  const [step, setStep] = useState("cart"); // "cart" | "form"
  const [form, setForm] = useState({
    name: "",
    phone: "",
    street: "",
    number: "",
    district: "",
    complement: "",
    reference: "",
    payment: "Pix",
  });
  const subtotal = items.reduce((s, i) => s + i.cookie.price * i.qty, 0);
  const delivery = mode === "retirada" ? 0 : subtotal > 0 ? 8 : 0;
  const total = subtotal + delivery;

  // reset to cart step whenever drawer reopens
  useEffect(() => {
    if (!open) setStep("cart");
  }, [open]);

  const WHATSAPP_NUMBER = "5546999148012";

  const buildMessage = () => {
    const lines = [];
    lines.push("🍪 *Novo pedido — Cosmocook*");
    lines.push("");
    lines.push("📋 *Itens*");
    items.forEach((i) => {
      lines.push(`• ${i.qty}x ${i.cookie.name} — ${fmt(i.cookie.price * i.qty)}`);
    });
    lines.push("");
    lines.push(`Subtotal: ${fmt(subtotal)}`);
    if (mode === "entrega") {
      lines.push(`Entrega: ${delivery === 0 ? "Grátis" : fmt(delivery)}`);
    } else {
      lines.push("Retirada no local");
    }
    lines.push(`*Total: ${fmt(total)}*`);
    lines.push("");

    if (mode === "entrega") {
      lines.push("📍 *Entrega para*");
      if (form.name) lines.push(`Nome: ${form.name}`);
      if (form.phone) lines.push(`Telefone: ${form.phone}`);
      const addr = [form.street, form.number].filter(Boolean).join(", ");
      if (addr) lines.push(`Endereço: ${addr}`);
      if (form.district) lines.push(`Bairro: ${form.district}`);
      if (form.complement) lines.push(`Complemento: ${form.complement}`);
      if (form.reference) lines.push(`Referência: ${form.reference}`);
    } else {
      lines.push("🏪 *Retirada no local*");
      if (form.name) lines.push(`Nome: ${form.name}`);
      if (form.phone) lines.push(`Telefone: ${form.phone}`);
    }
    lines.push("");
    lines.push(`💳 Pagamento: ${form.payment}`);

    return lines.join("\n");
  };

  const sendToWhatsApp = () => {
    const msg = encodeURIComponent(buildMessage());
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
    window.open(url, "_blank");
  };

  const handleCheckout = () => {
    if (items.length === 0) return;
    setStep("form");
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    sendToWhatsApp();
  };

  const setField = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const isRetirada = mode === "retirada";
  const formValid = form.name.trim() && form.phone.trim() && (isRetirada || (form.street.trim() && form.number.trim() && form.district.trim()));

  return (
    <>
      <div className={`cart-overlay ${open ? "open" : ""}`} onClick={onClose}></div>
      <aside className={`cart-drawer ${open ? "open" : ""}`}>
        {step === "cart" && (
          <>
            <div className="cart-head">
              <h3>Sua sacola</h3>
              <button className="cart-close" onClick={onClose} aria-label="Fechar">×</button>
            </div>
            <div className="cart-items">
              {items.length === 0 ?
              <div className="cart-empty">
                  <div className="cart-empty-icon">∅</div>
                  <p>Sua sacola está vazia.</p>
                  <div className="hint">Volte pra Terra e adicione cookies.</div>
                </div> :

              items.map((item) =>
              <div className="cart-item" key={item.cookie.id}>
                    <div className="cart-item-photo">
                      <CookiePhoto cookie={item.cookie} small />
                    </div>
                    <div className="cart-item-info">
                      <div className="name">{item.cookie.name}</div>
                      <div className="meta">{item.cookie.id}</div>
                      <div className="cart-item-qty">
                        <button className="qty-btn" onClick={() => onQty(item.cookie.id, item.qty - 1)}>−</button>
                        <span className="qty-val">{item.qty}</span>
                        <button className="qty-btn" onClick={() => onQty(item.cookie.id, item.qty + 1)}>+</button>
                      </div>
                    </div>
                    <div>
                      <div className="cart-item-price">{fmt(item.cookie.price * item.qty)}</div>
                      <button className="cart-item-remove" onClick={() => onRemove(item.cookie.id)}>Remover</button>
                    </div>
                  </div>
              )}
            </div>
            <div className="cart-foot">
              {items.length > 0 &&
              <div className="cart-mode">
                  <button
                  className={`cart-mode-btn ${mode === "entrega" ? "active" : ""}`}
                  onClick={() => setMode("entrega")}>
                    <span className="mode-label">Entrega</span>
                    <span className="mode-sub">{subtotal > 80 ? "Grátis" : "R$ 12,00"}</span>
                  </button>
                  <button
                  className={`cart-mode-btn ${mode === "retirada" ? "active" : ""}`}
                  onClick={() => setMode("retirada")}>
                    <span className="mode-label">Retirar no local</span>
                    <span className="mode-sub">Sem taxa</span>
                  </button>
                </div>
              }
              <div className="cart-row">
                <span>Subtotal</span>
                <span>{fmt(subtotal)}</span>
              </div>
              <div className="cart-row">
                <span>
                  {mode === "retirada" ? "Retirada no local" : "Entrega"}
                </span>
                <span>{subtotal === 0 ? "—" : delivery === 0 ? "Grátis" : fmt(delivery)}</span>
              </div>
              <div className="cart-row total">
                <span>Total</span>
                <span className="val">{fmt(total)}</span>
              </div>
              <button
                className="cart-checkout"
                disabled={items.length === 0}
                onClick={handleCheckout}>
                {mode === "retirada" ? "Continuar →" : "Continuar para entrega →"}
              </button>
            </div>
          </>
        )}

        {step === "form" && (
          <form className="checkout-form" onSubmit={handleConfirm}>
            <div className="cart-head">
              <button type="button" className="back-btn" onClick={() => setStep("cart")} aria-label="Voltar">←</button>
              <h3>{isRetirada ? "Seus dados" : "Endereço de entrega"}</h3>
              <button type="button" className="cart-close" onClick={onClose} aria-label="Fechar">×</button>
            </div>
            <div className="form-body">
              <div className="form-intro">
                {isRetirada
                  ? "Preencha seus dados pra combinarmos o horário de retirada."
                  : "Preencha o endereço para onde devemos entregar."}
              </div>

              <div className="form-section-label">Contato</div>
              <label className="field">
                <span>Nome completo *</span>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setField("name", e.target.value)}
                  required
                  placeholder="Como podemos te chamar"
                />
              </label>
              <label className="field">
                <span>WhatsApp *</span>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setField("phone", e.target.value)}
                  required
                  placeholder="(46) 9 0000-0000"
                />
              </label>

              {!isRetirada && (
                <>
                  <div className="form-section-label">Endereço</div>
                  <div className="field-row">
                    <label className="field" style={{ flex: 3 }}>
                      <span>Rua *</span>
                      <input
                        type="text"
                        value={form.street}
                        onChange={(e) => setField("street", e.target.value)}
                        required
                        placeholder="Nome da rua"
                      />
                    </label>
                    <label className="field" style={{ flex: 1 }}>
                      <span>Nº *</span>
                      <input
                        type="text"
                        value={form.number}
                        onChange={(e) => setField("number", e.target.value)}
                        required
                        placeholder="123"
                      />
                    </label>
                  </div>
                  <label className="field">
                    <span>Bairro *</span>
                    <input
                      type="text"
                      value={form.district}
                      onChange={(e) => setField("district", e.target.value)}
                      required
                      placeholder="Centro"
                    />
                  </label>
                  <label className="field">
                    <span>Complemento</span>
                    <input
                      type="text"
                      value={form.complement}
                      onChange={(e) => setField("complement", e.target.value)}
                      placeholder="Apto, bloco, casa..."
                    />
                  </label>
                  <label className="field">
                    <span>Ponto de referência</span>
                    <input
                      type="text"
                      value={form.reference}
                      onChange={(e) => setField("reference", e.target.value)}
                      placeholder="Perto da praça, em frente ao mercado..."
                    />
                  </label>
                </>
              )}

              <div className="form-section-label">Pagamento</div>
              <div className="payment-grid">
                {["Pix", "Cartão", "Dinheiro"].map((p) => (
                  <button
                    key={p}
                    type="button"
                    className={`payment-btn ${form.payment === p ? "active" : ""}`}
                    onClick={() => setField("payment", p)}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div className="cart-foot">
              <div className="cart-row">
                <span>Subtotal</span>
                <span>{fmt(subtotal)}</span>
              </div>
              <div className="cart-row">
                <span>{isRetirada ? "Retirada" : "Entrega"}</span>
                <span>{delivery === 0 ? "Grátis" : fmt(delivery)}</span>
              </div>
              <div className="cart-row total">
                <span>Total</span>
                <span className="val">{fmt(total)}</span>
              </div>
              <button type="submit" className="cart-checkout wa-btn" disabled={!formValid}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 8, verticalAlign: "-3px" }}>
                  <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.7-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5 0 1.5 1.1 2.9 1.2 3.1.1.2 2.2 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.2-.6-.3M12 22a10 10 0 0 1-5.1-1.4L2 22l1.4-4.8A10 10 0 1 1 12 22z"/>
                </svg>
                Enviar pelo WhatsApp →
              </button>
              {!formValid && (
                <div style={{ textAlign: "center", fontSize: 11, color: "var(--cream-dim)", marginTop: 10, fontFamily: "var(--mono)", letterSpacing: "0.08em" }}>
                  Preencha os campos obrigatórios *
                </div>
              )}
            </div>
          </form>
        )}
      </aside>
    </>);

}

// ============ APP ============

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
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
    setCart((prev) => prev.map((i) => i.cookie.id === id ? { ...i, qty } : i));
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.cookie.id !== id));
  };

  // close cart with esc
  useEffect(() => {
    const h = (e) => {if (e.key === "Escape") setCartOpen(false);};
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  return (
    <>
      <Nav cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
      <Hero />
      <Stats />
      <Menu onAdd={addToCart} addedFlash={addedFlash} />
      <HowTo />
      <About />
      <Location />
      <Footer />
      <Cart
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onQty={setQty}
        onRemove={removeFromCart} />
      
      <div className={`toast ${toast ? "show" : ""}`}>{toast}</div>
    </>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);