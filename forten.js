gsap.from('nav', { opacity:0, x:"100%" ,delay : 1, duration: 3, stagger: 5 })
gsap.from('header', { opacity:0, y:"-100%" ,delay : 1, duration: 3, stagger: 5 })



ScrollReveal().reveal('.home',{
    origin: 'top' , duration: 2000, distance: '25rem', opacity : 0
})
ScrollReveal().reveal('.season',{
    origin: 'top' , duration: 2000, distance: '25rem',opacity : 0
})
ScrollReveal().reveal('.collection',{
    origin: 'top' , duration: 2000, distance: '25rem', opacity : 0
})

ScrollReveal().reveal('.sag',{
    origin: 'right' , duration: 2000, distance: '25rem', opacity : 0
})
ScrollReveal().reveal('.sol',{
    origin: 'left' , duration: 2000, distance: '25rem', interval:100, opacity : 0
})
ScrollReveal().reveal('.sx',{
    origin: 'left' , duration: 2000, distance: '25rem', delay:500, opacity : 0
})
ScrollReveal().reveal('.top',{
    origin: 'top' , duration: 3000, distance: '55rem', interval:100 , opacity : 0
})
ScrollReveal().reveal('.bottom',{
    origin: 'bottom' , duration: 1000, distance: '55rem', interval:100 , opacity : 0
})