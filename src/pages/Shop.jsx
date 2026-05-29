export default function Shop({ items, gems }) {
  return (
    <section aria-labelledby="shop-title">
      <div className="section-head">
        <div>
          <p className="eyebrow">Rewards</p>
          <h2 id="shop-title">Shop educațional</h2>
        </div>
        <strong className="wallet">Ai {gems} gems</strong>
      </div>
      <div className="cards-grid">
        {items.map(item => (
          <article className="shop-card" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button className="secondary-action">Cumpără cu {item.price} gems</button>
          </article>
        ))}
      </div>
    </section>
  );
}
