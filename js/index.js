function updateClock() {
    const clock = document.querySelector('.clock');
    clock.innerText = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
{

//Carousel slideshow//
    const images = [
        'img-slide/amg.jpg',
        'img-slide/auto-wash.jpg',
        'img-slide/benz.jpg',
        'img-slide/car-wash-pro.jpg',
        'img-slide/carwash.jpg',
        'img-slide/ceramic-pro.jpg',
        'img-slide/detailing.jpg',
        'img-slide/how-to-clean.jpg',
        'img-slide/karcher.jpg',
        'img-slide/lexus.jpg',
        'img-slide/maxres.jpg',
        'img-slide/oil-change.jpg',
        'img-slide/polishing.png'        
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
        imgElement1.src = images[currentIdx];
        imgElement2.src = images[idx2];
        imgElement3.src = images[idx3];
        imgElement4.src = images[idx4];
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