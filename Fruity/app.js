const openNav = document.querySelector('.hamburger'),
closeNav = document.querySelector('.nav__close'),
nav = document.querySelector('.nav__list');

openNav.addEventListener('click',()=>{
    const navLeft = nav.getBoundingClientRect().left
    if(navLeft < 0){
        nav.style.left = 0;
        document.body.classList.add('active');
    }
});

closeNav.addEventListener('click',()=>{
    const navLeft = nav.getBoundingClientRect().left
    if(navLeft === 0){
        nav.style.left = '-40rem';
        document.body.classList.remove('active');
    }
});

const scrollLink = [...document.querySelectorAll('.scroll-link')];
scrollLink.forEach(link=>{
    link.addEventListener('click',e=>{
        const id = e.target.getAttribute('href').slice(1);
        const ele = document.getElementById(id);
        const position = ele.offsetTop;

        window.scrollTo({
            left: 0,
            top: position

        });

        nav.style.left="-40rem";
        document.body.classList.remove('active');
    });
});