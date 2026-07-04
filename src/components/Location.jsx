const days = [
  { day: "Terça", hours: "14h – 20h" },
  { day: "Quarta", hours: "14h – 20h" },
  { day: "Quinta", hours: "14h – 20h", today: true },
  { day: "Sexta", hours: "14h – 20h" },
  { day: "Sábado", hours: "14h – 20h" },
  { day: "Domingo", hours: "Fechado" },
  { day: "Segunda", hours: "14h – 20h" }
];

export default function Location() {
  return (
    <section id="localizacao" className="location">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow" style={{ marginBottom: 20, display: "inline-flex" }}>
              Onde estamos
            </span>
            <h2>
              Um <em>pedacinho</em> do cosmo em Coronel Vivida.
            </h2>
          </div>
          <div className="head-meta">
            Paraná
            <br />
            Brasil
          </div>
        </div>
        <div className="location-grid">
          <div className="location-info">
            <div>
              <div className="label">R. JOSÉ LUÍS PACHÊCO, 303 - CEL. VIVIDA · RETIRADA NO LOCAL</div>
              <div className="val">
                R. José Luís Pachêco
                <br />
                Coronel Vivida · PR
              </div>
              <div className="sub">
                Retire seus cookies direto da nossa cozinha. Combine o horário pelo WhatsApp.
              </div>
            </div>
            <div>
              <div className="label">Horários</div>
              {days.map((d) => (
                <div key={d.day} className={`hours-row ${d.today ? "today" : ""}`}>
                  <span className="day">
                    {d.day}
                    {d.today ? " · hoje" : ""}
                  </span>
                  <span>{d.hours}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="label">Contato</div>
              <div className="val" style={{ fontSize: 18 }}>
                +55 46 99914-8012
              </div>
              <div className="sub">
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
              </div>
            </div>
          </div>
          <div className="map-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d224.15665108325211!2d-52.56083425240601!3d-25.98422334017594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1779410283794!5m2!1spt-BR!2sbr"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Cosmocook · Coronel Vivida, PR"
            ></iframe>
            <div className="map-label">cosmocook · coronel vivida · pr</div>
          </div>
        </div>
      </div>
    </section>
  );
}
