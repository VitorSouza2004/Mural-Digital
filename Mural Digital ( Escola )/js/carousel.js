const images = [
    { 'id': '1', 'url':'./imgs/filme1.jpg', 'desc':'IMG CARROSEL' },
    { 'id': '2', 'url':'./imgs/filme2.jpg', 'desc':'IMG CARROSEL' },
    { 'id': '3', 'url':'./imgs/filme3.jpg', 'desc':'IMG CARROSEL' },
    { 'id': '4', 'url':'./imgs/filme4.jpg', 'desc':'IMG CARROSEL' },
    { 'id': '5', 'url':'./imgs/filme5.jpg', 'desc':'IMG CARROSEL' },
    { 'id': '6', 'url':'./imgs/filme6.jpg', 'desc':'IMG CARROSEL' },
    { 'id': '7', 'url':'./imgs/filme7.jpg', 'desc':'IMG CARROSEL' },
    { 'id': '8', 'url':'./imgs/filme8.jpg', 'desc':'IMG CARROSEL' },
]

const containerItems = document.querySelector('#container-items');

const carrosel = ( images, container) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class="item">
                <img src="${image.url}" alt="${image.desc}">
            </div>
        `;
    });
}

carrosel( images, containerItems );

let items = document.querySelectorAll('.item');

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}


document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);

