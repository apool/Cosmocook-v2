import { useEffect, useState } from "react";
import { fmt } from "../utils/format.js";
import { CookiePhoto } from "./ProductCard.jsx";
import CheckoutForm from "./CheckoutForm.jsx";

const WHATSAPP_NUMBER = "5546999148012";

export default function CartDrawer({ open, items, onClose, onQty, onRemove }) {
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
    payment: "Pix"
  });
  const subtotal = items.reduce((s, i) => s + i.cookie.price * i.qty, 0);
  const delivery = mode === "retirada" ? 0 : subtotal > 0 ? 8 : 0;
  const total = subtotal + delivery;

  // reset to cart step whenever drawer reopens
  useEffect(() => {
    if (!open) setStep("cart");
  }, [open]);

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
  const formValid =
    form.name.trim() &&
    form.phone.trim() &&
    (isRetirada || (form.street.trim() && form.number.trim() && form.district.trim()));

  return (
    <>
      <div className={`cart-overlay ${open ? "open" : ""}`} onClick={onClose}></div>
      <aside className={`cart-drawer ${open ? "open" : ""}`}>
        {step === "cart" && (
          <>
            <div className="cart-head">
              <h3>Sua sacola</h3>
              <button className="cart-close" onClick={onClose} aria-label="Fechar">
                ×
              </button>
            </div>
            <div className="cart-items">
              {items.length === 0 ? (
                <div className="cart-empty">
                  <div className="cart-empty-icon">∅</div>
                  <p>Sua sacola está vazia.</p>
                  <div className="hint">Volte pra Terra e adicione cookies.</div>
                </div>
              ) : (
                items.map((item) => (
                  <div className="cart-item" key={item.cookie.id}>
                    <div className="cart-item-photo">
                      <CookiePhoto cookie={item.cookie} small />
                    </div>
                    <div className="cart-item-info">
                      <div className="name">{item.cookie.name}</div>
                      <div className="meta">{item.cookie.id}</div>
                      <div className="cart-item-qty">
                        <button className="qty-btn" onClick={() => onQty(item.cookie.id, item.qty - 1)}>
                          −
                        </button>
                        <span className="qty-val">{item.qty}</span>
                        <button className="qty-btn" onClick={() => onQty(item.cookie.id, item.qty + 1)}>
                          +
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="cart-item-price">{fmt(item.cookie.price * item.qty)}</div>
                      <button className="cart-item-remove" onClick={() => onRemove(item.cookie.id)}>
                        Remover
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="cart-foot">
              {items.length > 0 && (
                <div className="cart-mode">
                  <button
                    className={`cart-mode-btn ${mode === "entrega" ? "active" : ""}`}
                    onClick={() => setMode("entrega")}
                  >
                    <span className="mode-label">Entrega</span>
                    <span className="mode-sub">{subtotal > 80 ? "Grátis" : "R$ 12,00"}</span>
                  </button>
                  <button
                    className={`cart-mode-btn ${mode === "retirada" ? "active" : ""}`}
                    onClick={() => setMode("retirada")}
                  >
                    <span className="mode-label">Retirar no local</span>
                    <span className="mode-sub">Sem taxa</span>
                  </button>
                </div>
              )}
              <div className="cart-row">
                <span>Subtotal</span>
                <span>{fmt(subtotal)}</span>
              </div>
              <div className="cart-row">
                <span>{mode === "retirada" ? "Retirada no local" : "Entrega"}</span>
                <span>{subtotal === 0 ? "—" : delivery === 0 ? "Grátis" : fmt(delivery)}</span>
              </div>
              <div className="cart-row total">
                <span>Total</span>
                <span className="val">{fmt(total)}</span>
              </div>
              <button className="cart-checkout" disabled={items.length === 0} onClick={handleCheckout}>
                {mode === "retirada" ? "Continuar →" : "Continuar para entrega →"}
              </button>
            </div>
          </>
        )}

        {step === "form" && (
          <CheckoutForm
            isRetirada={isRetirada}
            form={form}
            setField={setField}
            subtotal={subtotal}
            delivery={delivery}
            total={total}
            formValid={formValid}
            onBack={() => setStep("cart")}
            onClose={onClose}
            onSubmit={handleConfirm}
          />
        )}
      </aside>
    </>
  );
}
