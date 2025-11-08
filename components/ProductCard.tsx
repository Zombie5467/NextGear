import { Product } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
      <Image
        src={product.images[0]}
        alt={product.title}
        width={300} // ⚠️ obligatorio
        height={300} // ⚠️ obligatorio
        className="rounded-lg"
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <span>{product.price}</span>
      <button onClick={() => onAddToCart?.(product)}>Add to Cart</button>
      {/* encadenamiento opcional (?.) si onAddToCart existe se ejecuta, si no en vez de dar undefined (marca error) no hace nada */}
      <Link href={`/products/${product.id}`}>View Details</Link>
    </div>
  );
}

// Probar onAddToCart con console.log: al crear la pagina donde rendering ProductCard
// Nota: aun evaluando si debo usar grid
