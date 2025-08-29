# LUMO — Demo e-commerce UI (HTML + Tailwind + JS)

Landing estática de moda minimalista, pensada como demo para portfolio orientada a mostrar **UI/UX**: tipografías limpias, layout responsive, componentes reutilizables y micro-interacciones.  
⚠️ **Nota:** no incluye backend ni carrito real.

---

## 🚀 Vista rápida

- Hero con **CTA**, grilla de productos renderizada por JS.  
- Sección **About/Valores**.  
- Newsletter con validación básica.  
- Footer minimalista.  
- Proyecto construido con **Tailwind (CDN)** y **JavaScript Vanilla**.

---

## ✨ Características

- **Navbar sticky** con blur y menú mobile.  
- **Hero** con badge de temporada, CTA y arte editorial.  
- **Cards de producto** generadas desde un `<template>` y pobladas por JS (render dinámico en `#products`).  
- **Micro-interacciones**: hover scale en imágenes y transiciones en botones.  
- **Sección About/Valores** con grid de highlights.  

---

## 🧰 Stack

- **HTML5** semántico.  
- **Tailwind CSS (CDN)** con pequeño `tailwind.config` inline para extender colores/sombras.  
- **JavaScript Vanilla** para:
  - Toggle del menú mobile (`menuBtn` / `#mobileNav`).
  - Renderizado de productos (`render-productos.js`).
  - Cambio de imagen en “About” y mensaje en consola.  

---

## 📁 Estructura sugerida

```bash
.
├─ indexw.html
├─ public/
│  └─ img/                 # imágenes demo (webp/jpg)
└─ js/
   ├─ menu-toggle.js        # abre/cierra el menú mobile
   ├─ render-productos.js   # genera cards desde <template id="product-card">
   ├─ mensaje-consola.js    # mensajito para devs
   └─ switch-img.js         # cambia imagen en sección About
