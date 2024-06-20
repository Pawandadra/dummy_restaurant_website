document.addEventListener('DOMContentLoaded', function () {
    const images = ['/bg/bg1.jpg', '/bg/bg2.jpg', '/bg/bg3.jpg', '/bg/bg4.jpg', '/bg/bg5.jpg', '/bg/bg6.jpg', '/bg/bg7.jpg', '/bg/bg8.jpg', '/bg/bg9.jpg', '/bg/bg10.jpg'];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const container = document.getElementById('random_bg');
    container.style.backgroundImage = `url(${randomImage})`;
});
