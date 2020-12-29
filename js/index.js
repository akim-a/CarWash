function updateClock() {
    const clock = document.querySelector('.clock');
    clock.innerText = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
{

//Carousel slide//
    const images = [
        {src: 'img-slide/amg.jpg', alt: 'amg'},
        {src: 'img-slide/auto-wash.jpg', alt: 'Auto Wash'},
        {src: 'img-slide/benz.jpg', alt: 'Benz'},
        {src: 'img-slide/car-wash-pro.jpg', alt: 'Wash Pro'},
        {src: 'img-slide/carwash.jpg', alt: 'Car Washing'},
        {src: 'img-slide/ceramic-pro.jpg', alt: 'Ceramic Pro'},
        {src: 'img-slide/detailing.jpg', alt: 'Car Detailing'},
        {src: 'img-slide/how-to-clean.jpg', alt: 'How Cleac'},
        {src: 'img-slide/karcher.jpg',alt: 'Karsher'},
        {src: 'img-slide/lexus.jpg',alt: 'Lexus'},
        {src: 'img-slide/maxres.jpg', alt: 'Maxres'},
        {src: 'img-slide/oil-change.jpg',alt: 'Oil Change'},
        {src: 'img-slide/polishing.png', alt: 'Polishing'}        
    ]

       let currentIdx = 0;

    function showCurrent() {
        const imgElement1 = document.querySelector('.carousel3 .img1');
        const imgElement2 = document.querySelector('.carousel3 .img2');
        const imgElement3 = document.querySelector('.carousel3 .img3');
        const imgElement4 = document.querySelector('.carousel3 .img4');
        const idx2 = currentIdx + 1 >= images.length ? 0 : currentIdx + 1;
        const idx3 = idx2 + 1 >= images.length ? 0 : idx2 + 1;
        const idx4 = idx3 + 1 >= images.length ? 0 : idx3 + 1;
        // console.log(currentIdx, idx2, idx3, idx4);
        imgElement1.src = images[currentIdx].src;
        imgElement1.alt = images[currentIdx].alt;        
        imgElement2.src = images[idx2].src;
        imgElement2.alt = images[idx2].alt;
        imgElement3.src = images[idx3].src;
        imgElement3.alt = images[idx3].alt;
        imgElement4.src = images[idx4].src;
        imgElement4.alt = images[idx4].alt;
    }

    function showNext() {
        currentIdx++;
        if (currentIdx >= images.length) currentIdx = 0;
        showCurrent();
    }

    function showPrev() {
        currentIdx--;
        if (currentIdx < 0) currentIdx = images.length - 1;
        showCurrent();
    }

    setInterval(showNext, 3000);
    document.querySelector('.carousel3 .next').addEventListener('click', showNext);
    document.querySelector('.carousel3 .prev').addEventListener('click', showPrev);
    showCurrent();
}