export default function ProductCard({ product }) {
  return (
    <article className="card">
      <img
        className="cardImg"
        src={product.image}
        alt={product.name}
      />
      <div className="cardBody">
        <h3 className="cardTitle">{product.name}</h3>
        <p className="cardPrice">${product.price} MXN</p>
      </div>
    </article>
  );
}
