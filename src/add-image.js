import Picachu from './picachu.png';

function addImage() {
    const img = document.createElement('img');
    img.alt = 'Picachu';
    img.width = '300';
    img.src = Picachu;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;