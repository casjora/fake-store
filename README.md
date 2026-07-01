# LUXE. - Fake Store E-Commerce

Una aplicación web moderna de comercio electrónico basada en React, construida sobre la API pública de **FakeStoreAPI**. La plataforma permite explorar productos por categorías, realizar búsquedas de artículos en tiempo real y visualizar detalles detallados de cada producto con un diseño totalmente responsivo y adaptado tanto para dispositivos móviles como pantallas de escritorio.

---

## 🚀 Características Clave

- **Exploración por Categorías:** Filtrado dinámico mediante una barra de categorías móvil y menús de navegación en desktop (Electrónica, Joyería, Ropa de hombre y Ropa de mujer).
- **Búsqueda en Tiempo Real:** Barra de búsqueda global integrada en el `NavBar` que filtra dinámicamente los productos en el catálogo actual sin recargas.
- **Vistas Detalladas:** Fichas de producto individuales con especificaciones completas, precios y descripciones mediante enrutamiento dinámico.
- **Diseño Adaptativo (Mobile-First):** Experiencia de navegación móvil pulida que incluye una barra inferior de navegación (Home, Explore, Wishlist, Profile) y soporte táctil para deslizamiento horizontal de categorías.
- **Gestión de Estados de Red:** Pantallas de carga con animaciones personalizadas y sistema de recuperación con botón de reintento ante fallos de conexión.

---

## 📂 Estructura del Proyecto

Basado en la estructura de archivos provista en el entorno:

├── design/                     # Recursos visuales de referencia (Desktop y Mobile)
├── public/                     # Archivos estáticos públicos (Imágenes, SVG Logos)
└── src/
    ├── assets/                 # Recursos multimedia integrados
    ├── components/             # Componentes modulares y reutilizables
    │   ├── Banner.jsx          # Banner principal interactivo (Manejo de formatos WebP/PNG)
    │   ├── CategoryFilter.jsx  # Botones de categorías adaptativos para mobile
    │   ├── Footer.jsx          # Pie de página detallado con barra de navegación móvil integrada
    │   ├── NavBar.jsx          # Barra de navegación principal y buscador global
    │   ├── ProductCard.jsx     # Tarjeta individual de presentación de producto
    │   └── ProductDetail.jsx   # Componente de detalle extendido del artículo
    ├── hooks/
    │   └── useFetchProducts.js # Custom Hook para consumir y centralizar la data de FakeStoreAPI
    ├── pages/                  # Vistas o páginas principales de la aplicación
    │   ├── Home.jsx            # Catálogo general y filtrado por categorías
    │   ├── NotFound.jsx        # Pantalla de error 404 personalizada
    │   └── ProductPage.jsx     # Página contenedora del detalle del producto
    ├── App.css                 # Estilos globales y configuraciones de Tailwind CSS
    ├── App.jsx                 # Componente principal con el Layout y ruteador global
    └── main.jsx                # Punto de entrada de la aplicación encapsulado en BrowserRouter

---

## 🛠️ Tecnologías Utilizadas

- **React 18** (hooks, componentes funcionales, custom hooks)
- **React Router DOM** (Enrutamiento del lado del cliente, `BrowserRouter`, `Routes`, `Route`, `useParams`, `useNavigate`)
- **Tailwind CSS** (Framework de estilos utilitarios con clases para estados responsivos y animaciones)
- **FakeStoreAPI** (REST API pública para obtención de productos en formato JSON)

---

## 🔌 Instalación y Configuración

Sigue estos pasos para levantar el entorno de desarrollo localmente:

1. **Clonar el repositorio:**
   git clone https://github.com/tu-usuario/fake-store.git
   cd fake-store

2. **Instalar dependencias utilizando `pnpm` (según el lockfile del proyecto):**
   pnpm install

3. **Iniciar el servidor de desarrollo local (Vite):**
   pnpm dev

4. **Abrir en el navegador:**
   Accede a http://localhost:5173 para ver la aplicación en ejecución.

---

## 📝 Detalles de Implementación

### Gestión de Datos (`useFetchProducts.js`)
El estado de la aplicación se maneja mediante un hook personalizado que implementa `fetch` de manera asíncrona dentro de un ciclo `useEffect`. Retorna tres estados esenciales: `products` (arreglo de datos), `loading` (booleano de carga) y `error` (mensaje de fallo), además de una función `refetch` para volver a solicitar los datos bajo demanda.

### Filtros Seguros
La lógica de filtrado implementada en la página `Home.jsx` es tolerante a variaciones en las cadenas de texto enviadas por la API (por ejemplo, cruza de forma segura strings complejos como `"men's clothing"` mediante comparaciones en minúsculas y uso de métodos inclusivos `.includes()`), previniendo errores de renderizado ante valores nulos.