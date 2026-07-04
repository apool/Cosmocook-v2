import { fmt } from "../utils/format.js";

export default function CheckoutForm({
  isRetirada,
  form,
  setField,
  subtotal,
  delivery,
  total,
  formValid,
  onBack,
  onClose,
  onSubmit
}) {
  return (
    <form className="checkout-form" onSubmit={onSubmit}>
      <div className="cart-head">
        <button type="button" className="back-btn" onClick={onBack} aria-label="Voltar">
          ←
        </button>
        <h3>{isRetirada ? "Seus dados" : "Endereço de entrega"}</h3>
        <button type="button" className="cart-close" onClick={onClose} aria-label="Fechar">
          ×
        </button>
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
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ marginRight: 8, verticalAlign: "-3px" }}
          >
            <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.7-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5 0 1.5 1.1 2.9 1.2 3.1.1.2 2.2 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.2-.6-.3M12 22a10 10 0 0 1-5.1-1.4L2 22l1.4-4.8A10 10 0 1 1 12 22z" />
          </svg>
          Enviar pelo WhatsApp →
        </button>
        {!formValid && (
          <div
            style={{
              textAlign: "center",
              fontSize: 11,
              color: "var(--cream-dim)",
              marginTop: 10,
              fontFamily: "var(--mono)",
              letterSpacing: "0.08em"
            }}
          >
            Preencha os campos obrigatórios *
          </div>
        )}
      </div>
    </form>
  );
}
