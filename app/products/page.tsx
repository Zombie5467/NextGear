import ProductCard from "@/components/ProductCard";
import { getMockProducts } from "../../lib/getMockProducts"; // server-side helper
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Productos",
  description: "Catálogo de productos",
};



export default function ProductsPage() {
  const products = getMockProducts(); // esto corre en el servidor (sync mock)

  return (
    <section className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Catálogo</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p, index) => (
          <li key={p.id}>
            <ProductCard product={p} priority={index === 0}/>
            {/* product es una de las 3 propiedades que ProductCard recibe (Props). 
              ={p} es el nombre de la variable local dentro del map.*/}
          </li>
        ))}
      </ul>
    </section>
  );
}
