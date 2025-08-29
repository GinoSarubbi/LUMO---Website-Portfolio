LUMO — Demo e-commerce UI (HTML + Tailwind + JS)

Landing estática de moda minimalista, pensada como demo para portfolio orientada a mostrar UI/UX: tipografías limpias, layout responsive, componentes reutilizables y micro-interacciones. No incluye backend ni carrito real.

Vista rápida: hero con CTA, grilla de productos renderizada por JS, sección “About/valores”, newsletter y footer. El proyecto usa Tailwind vía CDN y scripts JS simples para la interacción. 

✨ Características

Navbar sticky con blur y menú mobile.

Hero con badge de temporada, CTA y arte editorial.

Cards de producto generadas desde un <template> y pobladas por JS (render dinámico al <div id="products">).

Micro-interacciones: hover scale en imágenes, botones con transición.

Sección About/valores con grid de highlights.

Newsletter con validación básica y feedback inmediato (sin backend).

Estética consistente: Inter como tipografía de sistema, paleta azul/Slate y sombras suaves.

🧰 Stack

HTML5 semántico.

CSS utilitario con Tailwind CSS (CDN), con un pequeño tailwind.config inline para extender colores/sombras. 

JavaScript Vanilla para:

Toggle del menú mobile (menuBtn / #mobileNav).

Renderizado de productos desde un array/JSON (render-productos.js).

Cambio de imagen en “About” y mensaje de consola. 

📁 Estructura sugerida
.
├─ indexw.html
├─ public/
│  └─ img/              # imágenes demo (webp/jpg)
└─ js/
   ├─ menu-toggle.js     # abre/cierra el menú mobile
   ├─ render-productos.js# genera cards desde <template id="product-card">
   ├─ mensaje-consola.js # mensajito para devs
   └─ switch-img.js      # cambia imagen en sección About


Los scripts se referencian al final del body en el HTML. El template de producto y el contenedor #products están definidos en la sección “Novedades”. 

▶️ Cómo correrlo

Como es un sitio estático, alcanza con abrir el HTML en un servidor local:

Con Live Server (VS Code): botón Go Live.

Con Node (serve):

npx serve .


Con Python:

python -m http.server 5500


Luego abrí http://localhost:5500/indexw.html (o el puerto que te muestre).

🧩 Personalización

Paleta/estilos: el tailwind.config inline extiende colors.primary y una sombra soft. Podés ajustar la paleta ahí mismo. 

Contenido: textos/links en indexw.html (secciones #shop, #about, #newsletter).

Productos: editá el array o fuente de datos en js/render-productos.js.

Imágenes: reemplazá archivos en public/img/ manteniendo los nombres o ajustando el src en el JS/HTML.

🎯 Objetivo de portfolio (UI/UX)

Tipografía y ritmo vertical coherentes.

Jerarquía visual clara (títulos, subtítulos y descripciones).

Componentes reutilizables (cards + template).

Accesibilidad básica: alt en imágenes, controles con foco, contraste adecuado.

Responsivo desde mobile a desktop con utilidades de Tailwind.

🗺️ Roadmap (ideas futuras)

Filtros por categoría/talle, paginación.

“Wishlist” en localStorage.

Migración a un framework (Next.js/React) y consumo de una API real.

📄 Licencia

MIT. Usá este código como base para tus demos y prácticas.
