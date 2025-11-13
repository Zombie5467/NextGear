# 🧾 CHANGELOG

## 📅 Semana 2 — Mejoras en el módulo `products/`

### ✳️ 1. Uso del componente `Link` de Next.js

Se reemplazaron los enlaces tradicionales `<a>` por el componente optimizado [`<Link>`] de Next.js:

```
<Link href={`/products/${product.id}`} className="underline">
  View Details
</Link>
```

**Motivo:**  
El componente `Link` de Next.js optimiza la navegación interna dentro de la aplicación.  
Permite **transiciones más rápidas entre páginas**, **precarga automática** de rutas (prefetching) y **mejor SEO**.  
Esto mejora el rendimiento general y la experiencia de usuario en comparación con el uso de etiquetas `<a>` normales.

### 🖼️Uso del componente `Image` de Next.js

Se implementó el componente [`<Image>`] para renderizar las imágenes de productos:
```
<Image
  src={product.images[0]}
  alt={product.title}
  width={300}
  height={300}
  className="rounded-lg"
  priority={priority}
/>
```
**Motivo:**  
El componente `Image` de Next.js realiza una **optimización automática de imágenes**, manejando **lazy loading**, **redimensionamiento adaptable** y **compresión optimizada** según el dispositivo del usuario.  
Esto ayuda a **mejorar la velocidad de carga** de las páginas y el **rendimiento general del sitio** sin necesidad de configuración adicional.

### 🧩 3. Uso de `Metadata` en Next.js

Se implementó el objeto `Metadata` para definir información específica de cada página:

```
export const metadata = {
  title: 'Products',
  description: 'Listado de productos disponibles en la tienda',
};
```

**Motivo:**  
`Metadata` permite establecer etiquetas meta como **título, descripción y favicon** directamente desde el servidor.  
Esto **mejora el SEO**, **la accesibilidad** y **el control del contenido mostrado en redes sociales** o resultados de búsqueda.  
Además, al ser gestionado por el sistema de routing de Next.js, evita duplicidades y mantiene la configuración de cada ruta organizada.

### ⚙️ 4. Uso de `async/await` en componentes asíncronos

Durante el desarrollo de la página de detalles del producto se identificó un problema:  
sin el uso de `async/await`, el componente devolvía únicamente este fragmento:

```
if (!product) {
  return <div>Producto no encontrado</div>;
}
```

Esto ocurría por el mensaje en consola sobre **"unwrap" (desenvolver una promesa)**, indicando que la función debía manejar operaciones asíncronas correctamente.

El código final incluye `async/await` para garantizar que los datos estén listos antes de renderizar:

```
export default async function ProductPage({ params }: { params: { id: string } }) {
  const resolveParams = await params; // Simula una operación asíncrona si es necesario
  const id = resolveParams.id;
  const product = getProductById(id);
}
```

**Nota:**  
En este caso se decidió **mantener el código actual** sin el uso completo de `fetch`, ya que el proyecto aún no está finalizado y se evaluará más adelante la integración de llamadas externas a API.

