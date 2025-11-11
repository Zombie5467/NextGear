// lib/products.ts
import { Product } from "../types/products";

// images: ["/public/images/products/product-1.jpg"],
// devuelve un arreglo con 6-12 objetos Product.
export function getMockProducts(): Product[] {
  // Product[] = un arreglo de objetos que cumplen las propiedades definidas en la interfaz Product.
  // En TypeScript, eso se llama tipo de retorno (return type).
  return [
    {
      id: "product-1",
      title: "Kraken Elite 240",
      price: 159.99,
      description: '240mm AIO Liquid Cooler with 2.72" IPS LCD',
      images: [
        "https://nzxt.com/cdn/shop/files/AP73Az_fe74e692-b68d-4383-b760-dcfffa321fd8.png?v=1751935448&width=700",
      ],
      category: "Refrigeradores de CPU",
      subcategory: "Refrigeración Líquida",
      inStock: true,
    },
    {
      id: "product-2",
      title: "H5 Flow RGB",
      price: 131.99,
      description: "Compact ATX Mid-Tower Airflow Case with RGB Fans",
      images: [
        "https://nzxt.com/cdn/shop/files/r18LnU_e6e792ac-c340-4242-bb59-0d597c90f4b3.png?v=1744381513&width=700",
      ],
      category: "Componentes de PC",
      subcategory: "Cajas",
      inStock: false,
    },
    {
      id: "product-3",
      title: "Capsule Mini",
      price: 57.08,
      description: "Small Cardioid USB Gaming Microphone",
      images: [
        "https://nzxt.com/cdn/shop/files/IcHPe0.png?v=1759467185&width=700",
      ],
      category: "Periféricos",
      subcategory: "Micrófonos",
      inStock: false,
    },
    {
      id: "product-4",
      title: "N9 Z890",
      price: 229.99,
      description:
        "Intel® Z890 ATX Gaming Wi-Fi 7 Motherboard with Full Cover & RGB",
      images: [
        "https://nzxt.com/cdn/shop/files/1744171946-7wgabw.png?v=1746176606&width=700",
      ],
      category: "Componentes de PC",
      subcategory: "Placas Base",
      inStock: true,
    },
    {
      id: "product-5",
      title: "Function 2",
      price: 69.99,
      description: "Full-Size Optical Gaming Keyboard",
      images: [
        "https://nzxt.com/cdn/shop/files/1707522525-function-2-hero-black_288a9cf2-4842-41e4-b134-d51e0137d004.png?v=1747412104&width=700",
      ],
      category: "Periféricos",
      subcategory: "Teclados",
      inStock: false,
    },
    {
      id: "product-6",
      title: "Lift Elite Wireless",
      price: 29.99,
      description: "Wireless Ergonomic Gaming Mouse",
      images: [
        "https://nzxt.com/cdn/shop/files/lift-elite-hero-black.png?v=1744956686&width=700",
      ],
      category: "Periféricos",
      subcategory: "Ratones",
      inStock: true,
    },
    {
      id: "product-7",
      title: "Control Hub",
      price: 49.99,
      description: "Digital RGB Lighting & Fan Speed Controller",
      images: [
        "https://nzxt.com/cdn/shop/files/mfP3SY_711eab1c-353c-4c7c-b02b-1ece6b30e5d0.png?v=1745294379&width=700",
      ],
      category: "Piezas y Accesorios",
      subcategory: "Accesorios",
      inStock: true,
    },
    {
      id: "product-8",
      title: "C750 Núcleo Dorado",
      price: 114.99,
      description: "750 Watt 80 PLUS Gold Fully Modular ATX 3.1 PSU",
      images: [
        "https://nzxt.com/cdn/shop/files/Etail_C750GoldCore_Carousel_Hero_Packaging_EN.png?v=1758743813&width=700",
      ],
      category: "Componentes de PC",
      subcategory: "Fuentes de Poder",
      inStock: false,
    },
  ];
}

function getProductById(id: string): Product | undefined {
  return getMockProducts().find((product) => product.id === id);
  // busca por id dentro del arreglo retornado por getMockProducts
}

export default getProductById;

// El product =>
// es cada elemento del array durante la iteración.
// puede llamarse p, item etc.
// === id es el string que le pasamos a la función getProductById.

// (| undefined) es importante porque el método .find() puede no encontrar nada, y TypeScript
// obliga a manejar ese caso para evitar errores en tiempo de ejecución.
