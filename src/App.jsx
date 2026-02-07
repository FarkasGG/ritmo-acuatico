import { products } from "./data/products";
import ProductCard from "./components/ProductCard";

export default function App() {
  return (
    <main>
      <header>
        <h1>Ritmo Acuático</h1>
        <p>Ropa inspirada en el movimiento del agua.</p>
        <button>Ver catálogo</button>
      </header>

      <section>
        <h2>Novedades</h2>
        <p>Colección inicial del Sprint 1.</p>
      </section>

      <section>
        <h2>Catálogo</h2>
        <div className="grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <footer>
        <p>© 2026 Ritmo Acuático</p>
      </footer>
    </main>
  );
}


