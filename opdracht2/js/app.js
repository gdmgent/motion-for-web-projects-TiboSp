let images = gsap.utils.toArray('img');

images.forEach(img => {

gsap.from(img, {
    scrollTrigger: { 
        trigger: img,
        toggleActions: 'play reverse play reset',
        start: 'top 80%',
        end: 'bottom 60%',
        },
    duration: .5,
    x: -200,
    opacity: 0});
});

let hoofdstuk = gsap.utils.toArray('.chapters');

hoofdstuk.forEach(chapters => {

gsap.from(chapters, {
    scrollTrigger: { 
        trigger: chapters,
        toggleActions: 'play reverse play reset',
        start: 'top 95%',
        end: 'bottom 5%',
        },
    duration: .5,
    y: -100,
    opacity: 0});
});