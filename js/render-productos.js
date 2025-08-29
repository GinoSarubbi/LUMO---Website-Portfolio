
//array de productos
const products = [
    { name: 'Remera Essential', color: 'Arena', price: 18990, img: 'public/img/byn.webp' },
    { name: 'Camisa Lino', color: 'Marfil', price: 35990, img: 'public/img/byn2.webp' },
    { name: 'Pantalón Wide', color: 'Grafito', price: 32990, img: 'public/img/byn3.webp' },
    { name: 'Overshirt Canvas', color: 'Oliva', price: 42990, img: 'public/img/byn4.webp' },
    { name: 'Sweater Trenzas', color: 'Crudo', price: 28990, img: 'public/img/r.webp' },
    { name: 'Vestido Midi', color: 'Negro', price: 39990, img: 'public/img/r2.webp' },
    { name: 'Jean Relaxed', color: 'Azul Claro', price: 31990, img: 'public/img/r3.webp' },
    { name: 'Buzo Half-Zip', color: 'Piedra', price: 30990, img: 'public/img/r4.webp' }
];


const money = (n) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(n); //formato 
const list = document.getElementById('products');
const tpl = document.getElementById('product-card');
const svgCart = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round"
    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>`;

products.forEach(p => {
    const node = tpl.content.cloneNode(true);
    const img = node.querySelector('img');
    const h3 = node.querySelector('h3');
    const pColor = node.querySelector('p');
    const price = node.querySelector('span.font-bold');
    const btn = node.querySelector('button');
    img.src = p.img; img.alt = p.name;
    h3.textContent = p.name;
    pColor.textContent = p.color;
    price.textContent = money(p.price);
    btn.addEventListener('click', () => {
        btn.textContent = '✓';
        btn.classList.add('bg-dark-700');
        setInterval(() => {
            btn.innerHTML = svgCart;
            btn.classList.remove('bg-dark-700');
        }, 5000);
    });

    list.appendChild(node);
});
