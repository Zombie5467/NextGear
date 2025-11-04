// types/product.ts
export interface Product {
  id: string; // slug o uuid
  title: string;
  price: number;
  description: string;
  images: string[]; // urls relativas en /public o externas (Unsplash)
  category?: string;
  subcategory?: string;
  inStock?: boolean;
}

// La categoría images es un arreglo porque podemos usar varias imágenes por producto.
// Ejemplo: imagen principal y secundaria, o galerías.
export interface ProductSummary {
  id: string;
  title: string;
  price: number;
  image: string; // url relativa en /public o externa (Unsplash)
}
