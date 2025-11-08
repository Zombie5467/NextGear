import Image from "next/image";
import { getMockProducts } from "../../lib/products";

export default function ProductsPage() {
  const products = getMockProducts();
  // console.log(products);
  console.log("world, hold on");

  return (
    <div>
      <h1 className="text-2xl font-bold">Catálogo de productos</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <li key={product.id}>
            <h2 className="text-xl">{product.title}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>

            {/* ✅ Versión optimizada */}
            <Image
              src={product.images[0]}
              alt={product.title}
              width={300} // ⚠️ obligatorio
              height={300} // ⚠️ obligatorio
              className="rounded-lg"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
// Nota: width y height son obligatorios en <Image> para calcular el espacio que ocupará (evita saltos de diseño).
// Nota: Usamos el componente Image porque next lo prefiere para ayudarnos con el ancho de banda y Mejora el rendimiento (LCP = Largest Contentful Paint).
