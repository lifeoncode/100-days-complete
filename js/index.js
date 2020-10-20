
window.addEventListener('DOMContentLoaded', function(e){

    // DOM elements
    const [menuBtn, hamburger, menuDiv] = [document.querySelector('.menu_btn'), document.querySelectorAll('.menu_btn span'), document.querySelector('.menu')];
    // menu links
    const [homeLink, aboutLink, lessonsLink, nextLink] = [document.querySelector('.home_link'), document.querySelector('.about_link'), document.querySelector('.lessons_link'), document.querySelector('.next_link')];
    // all the links
    const [...links] = [homeLink, aboutLink, lessonsLink, nextLink];

    links.forEach(link => {
        link.addEventListener('click', closeMenu);
    })

    // events
    menuBtn.addEventListener('click', openMenu);

    function openMenu(e){
        // remove the event listener and add a new one
        menuBtn.removeEventListener('click', openMenu);
        menuBtn.addEventListener('click', closeMenu);
        
        // animate the button
        menuBtn.classList.add('open');
        hamburger.forEach(line => {
            line.classList.add('open');
        })
        // show the menu
        menuDiv.classList.add('open');
        // animate menu links
        setTimeout(() => {
            homeLink.classList.add('open');
        }, 100);
        setTimeout(() => {
            aboutLink.classList.add('open');
        }, 300);
        setTimeout(() => {
            lessonsLink.classList.add('open');
        }, 500);
        setTimeout(() => {
            nextLink.classList.add('open');
        }, 700);
    }
    
    
    function closeMenu(e){
        // remove the event listener and add a new one
        menuBtn.removeEventListener('click', closeMenu);
        menuBtn.addEventListener('click', openMenu);
        
        // animate the button
        menuBtn.classList.remove('open');
        hamburger.forEach(line => {
            line.classList.remove('open');
        })
        // hide the menu
        menuDiv.classList.remove('open');
        // grab all the menu links
        // hide at once
        links.forEach(link => {
            link.classList.remove('open');
        })
    }





    // section changes
    const [home, about, lessons, next] = [document.querySelector('.home'), document.querySelector('.about'), document.querySelector('.lessons'), document.querySelector('.next')];

    // timeline
    const [one, two, three, four] = [document.querySelector('.one'), document.querySelector('.two'), document.querySelector('.three'), document.querySelector('.four')]
    
    homeLink.addEventListener('click', (e) => {
        home.style.transform = `translateY(0%)`;
        about.style.transform = `translateY(100%)`;
        lessons.style.transform = `translateY(100%)`;
        next.style.transform = `translateY(100%)`;

        one.style.opacity = '1';
        two.style.opacity = '0.2';
        three.style.opacity = '0.2';
        four.style.opacity = '0.2';
    })
    aboutLink.addEventListener('click', (e) => {
        home.style.transform = `translateY(-100%)`;
        about.style.transform = `translateY(0%)`;
        lessons.style.transform = `translateY(100%)`;
        next.style.transform = `translateY(100%)`;

        one.style.opacity = '0.2';
        two.style.opacity = '1';
        three.style.opacity = '0.2';
        four.style.opacity = '0.2';
    })
    lessonsLink.addEventListener('click', (e) => {
        home.style.transform = `translateY(-100%)`;
        about.style.transform = `translateY(-100%)`;
        lessons.style.transform = `translateY(0%)`;
        next.style.transform = `translateY(100%)`;

        one.style.opacity = '0.2';
        two.style.opacity = '0.2';
        three.style.opacity = '1';
        four.style.opacity = '0.2';
    })
    nextLink.addEventListener('click', (e) => {
        home.style.transform = `translateY(-100%)`;
        about.style.transform = `translateY(-100%)`;
        lessons.style.transform = `translateY(-100%)`;
        next.style.transform = `translateY(0%)`;

        one.style.opacity = '0.2';
        two.style.opacity = '0.2';
        three.style.opacity = '0.2';
        four.style.opacity = '1';
    })
})