let section=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');


window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

// Sticky nav

let header=document.querySelector('header');
header.classList.toggle('sticky',window.scrollY>100);

// nav ctrl-toggle
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Remove toggle icon and navbar when click nav
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');


// Scroll reveal
ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

// Mulitple text controller

var typed = new Typed('#element', {
    strings: ['Frontend Developer.', 'Java Developer.' ,'Data Analyst'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
  });

//   Skills section

document.addEventListener('DOMContentLoaded',()=>{
    const bars=document.querySelectorAll('.bar span');

    const option={
        threshold:0.5
    };

    const observer=new IntersectionObserver((entries,observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const span=entry.target;
                const percent=span.getAttribute('data-percent');
                span.style.width=percent+'%';
                observer.unobserve(span);
            }
        });
    },option);

    bars.forEach(bar=>{
        observer.observe(bar);
    });
});

ScrollReveal().reveal('.skill-container .box-1',{origin:'left'});
ScrollReveal().reveal('.skill-container .box-2',{origin:'right'});