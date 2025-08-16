const fruits = document.querySelectorAll('.fruit');
const verticalText = document.querySelector('.vertical-text');
const freshText = document.querySelector('.fresh');
const cherryText = document.querySelector('.cherry');
const price = document.querySelector('.price');
const circles = document.querySelectorAll('.circle');
const body = document.body;
const centerImage = document.querySelector('.center img');
 
const fruitData = {
    cherry: {
        verticalText: 'SWEET CHERRY',
        freshText: 'Fresh',
        cherryText: 'Cherry',
        price: '$5.45',
        bgImage: 'url("images/bg1.png")',
        circleColors: ['#7e1414', '#a21c1b', '#ae3130'],
        imageUrl: 'images/img1.png'
    },
    orange: {
        verticalText: 'SWEET ORANGE',
        freshText: 'Fresh',
        cherryText: 'Orange',
        price: '$3.99',
        bgImage: 'url("images/bg2.png")',
        circleColors: ['#f96d1c', '#ff8f23', '#ffa552'],
        imageUrl: 'images/img2.png'
    },
    blueberry: {
        verticalText: 'SWEET BLUEBERRY',
        freshText: 'Fresh',
        cherryText: 'Blueberry',
        price: '$6.99',
        bgImage: 'url("images/bg3.png")',
        circleColors: ['#2c3f67', '#436089', '#89abce'],
        imageUrl: 'images/img3.png'
    },
    kiwi: {
        verticalText: 'SWEET KIWI',
        freshText: 'Fresh',
        cherryText: 'Kiwi',
        price: '$2.99',
        bgImage: 'url("images/bg4.png")',
        circleColors: ['#75990a', '#a4cb30', '#b1a31e'],
        imageUrl: 'images/img4.png'
    },
    strawberry: {
        verticalText: 'SWEET STRAWBERRY',
        freshText: 'Fresh',
        cherryText: 'Strawberry',
        price: '$4.99',
        bgImage: 'url("images/bg5.png")',
        circleColors: ['#e63a3a', '#ff908f', '#ffb7b8'],
        imageUrl: 'images/img5.png'
    }
};

fruits.forEach(fruit => {
    fruit.addEventListener('click', () => {
        const selectedFruit = fruit.getAttribute('data-fruit');
        updateUI(selectedFruit);
        setActiveFruit(fruit);
        animateCircles();
        changeImage(selectedFruit);
    });
});

function updateUI(fruit) {
    const data = fruitData[fruit];
    verticalText.textContent = data.verticalText;
    freshText.textContent = data.freshText;
    cherryText.textContent = data.cherryText;
    price.textContent = data.price;

    body.style.background = `${data.bgImage}`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'center';
    body.style.backgroundRepeat = 'no-repeat';

    circles.forEach((circle, index) => {
        circle.style.backgroundColor = data.circleColors[index];
    });
}

function changeImage(fruit) {
    const data = fruitData[fruit];
    centerImage.style.animation = 'none';
    void centerImage.offsetWidth;
    centerImage.style.animation = 'expand 1s ease-in-out forwards';
    centerImage.src = data.imageUrl;
}

function setActiveFruit(selectedFruit) {
    fruits.forEach(fruit => {
        fruit.classList.remove('active');
    });
    selectedFruit.classList.add('active');
}

function animateCircles() {
    circles.forEach((circle, index) => {
        circle.style.animation = 'none';
        void circle.offsetWidth;
        circle.style.animation = `expand 1s ease-in-out forwards`;
        circle.style.animationDelay = `${index * 0.5}s`;
    });
}