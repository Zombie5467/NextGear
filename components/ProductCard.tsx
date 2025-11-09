// import { Product } from "@/types/products";
// import Image from "next/image";
// import Link from "next/link";
// interface ProductCardProps {
//   product: Product;
//   onAddToCart?: (product: Product) => void;
// }

// export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
//   return (
//     <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
//       <Image
//         src={product.images[0]}
//         alt={product.title}
//         width={300} // ⚠️ obligatorio
//         height={300} // ⚠️ obligatorio
//         className="rounded-lg"
//       />
//       <h2>{product.title}</h2>
//       <p>{product.description}</p>
//       <span>{product.price}</span>
//       <button onClick={() => onAddToCart?.(product)}>Add to Cart</button>
//       {/* encadenamiento opcional (?.) si onAddToCart existe se ejecuta, si no en vez de dar undefined (marca error) no hace nada */}
//       <Link href={`/products/${product.id}`}>View Details</Link>
//     </div>
//   );
// }

// Probar onAddToCart con console.log: al crear la pagina donde rendering ProductCard
// Nota: aun evaluando si debo usar grid

"use client"; // <- IMPORTANTE: convierte el archivo en Client Component

import Image from "next/image";
import Link from "next/link";
import type { Product } from "../types/products";

interface Props {
  product: Product;
  onAddToCart?: (product: Product) => void;
  priority: boolean;
}

export default function ProductCard({ product, onAddToCart, priority }: Props) {
  function handleAdd() {
    onAddToCart?.(product);
  }

  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden">
      <Image
        src={product.images[0]}
        alt={product.title}
        width={300}
        height={300}
        className="rounded-lg"
        priority={priority}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="mt-2 font-bold">${product.price}</p>

        <div className="mt-3 flex gap-2">
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-3 py-1 rounded"
            aria-label={`Add ${product.title} to cart`}
          >
            Add to Cart
          </button>
          <Link href={`/products/${product.id}`} className="underline">
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
