import { fmt } from "../utils/format.js";

export function CookiePhoto({ cookie, small }) {
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
        }}
      />
    );
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
        }}
      />
      {cookie.tag && (
        <div className={`cookie-tag ${cookie.tag.className}`}>{cookie.tag.label}</div>
      )}
    </div>
  );
}

export default function ProductCard({ cookie, onAdd, addedFlash }) {
  return (
    <article className="cookie-card">
      <CookiePhoto cookie={cookie} />
      <div className="cookie-body">
        <div className="cookie-id">
          {cookie.id} · {cookie.category}
        </div>
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
            aria-label={`Adicionar ${cookie.name}`}
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
}
