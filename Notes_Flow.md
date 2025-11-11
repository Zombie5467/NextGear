
## 📘 Notas técnicas – Flujo del catálogo de productos

### 1. Interface Product
- Define la forma que debe tener cada producto.
- Importada en `getMockProducts.ts` y `ProductCard.tsx`.

### 2. getMockProducts() y getProductById()
- `getMockProducts(): Product[]` devuelve un array de productos con estructura `Product`.
- `getProductById(id: string): Product | undefined` busca en ese array el producto con el ID indicado.

### 3. ProductsPage (listado)
- Importa ambas funciones.
- Usa `getMockProducts()` para obtener todos los productos.
- Renderiza un `<ProductCard>` por cada producto con `.map()`.
- Envía props `{ product, priority }` al componente.

### 4. ProductCard (card individual)
- Es un **Client Component**.
- Recibe props: `{ product, onAddToCart?, priority }`.
- Muestra la info del producto y un `<Link href={`/products/${product.id}`}>View Details</Link>` para navegar al detalle.

### 5. ProductPage (detalle dinámico)
- Ubicada en `app/products/[id]/page.tsx`.
- Next extrae el `id` desde `params`.
- Usa `getProductById(id)` para obtener solo ese producto.
- Renderiza la página de detalles o un mensaje “Producto no encontrado”.

### 6. Conceptos clave
- `Product[]` → tipo de retorno, **no una prop**.
- `product.id` → valor usado en la URL y para identificar el producto.
- `Link` → construye la ruta dinámica `/products/[id]`.
- Separación Client/Server → buena práctica en Next.js.


> Written with [StackEdit](https://stackedit.io/).