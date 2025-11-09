import getProductById from "../../../lib/getMockProducts";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detalle del Producto - NextGear",
  description: "Página de detalle del producto en NextGear",
};

export default async function ProductPage({ params }: { params: { id: string } }) {
  
  const resolveParams = await params; // Simula una operación asíncrona si es necesario
  const id = resolveParams.id;
  const product = getProductById(id);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p>{product.description}</p>
      <p>Precio:${product.price}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aut dolores
        quod optio autem temporibus natus quae ipsum perspiciatis inventore!
        Nisi aspernatur, asperiores laboriosam dolorem doloribus tempore
        quisquam maiores. Esse.
      </p>

      <Image
        src={product.images[0]}
        alt={product.title}
        width={300}
        height={300}
        className="rounded-lg"
      />
    </div>
  );
}
// Bonus (opcional): implementar generateStaticParams para prerendering las páginas de producto
// si quieres SSG de los mocks.
