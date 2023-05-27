function createLanding(data) {
    document.title = data.title;
    document.querySelector('.slogan').innerText = data.slogan;
    document.querySelector('.logo-container img').setAttribute('src', data.logoSrc);
    document.querySelector('.content img').setAttribute('src', data.bannerSrc);
    // print (data.advantages.length);
    for (let i = 0; i < data.advantages.length; i++) {
        document.getElementById(i + 1).innerText = data.advantages[i];
    }
    document.querySelector('.content p').innerText = data.text;
};

let data = {
    icon: './img/icon-cole.png',
    title: 'Discover magic',
    slogan: 'Real Magic',
    logoSrc: './img/logo-cola.png',
    logoAlt: 'Coca-cola logo',
    bannerSrc: './img/bottle_dribbble_2.gif',
    bannerAlt: 'Coca-cola logo',
    advantages: [
        "Grab value",
        "Discover magic"
    ],
    text: 'Discover the essence of joy and refreshment in every bottle of Coca-Cola. Immerse yourself in the iconic taste that has been delighting hearts for generations. Join us on this extraordinary journey.',
    tel: '+1 234 5678',
    mail: 'cola@gmail.com',
};

createLanding(data);