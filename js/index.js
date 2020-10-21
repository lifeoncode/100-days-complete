
window.addEventListener('DOMContentLoaded', function(e){

    document.querySelector('body').style.opacity = '1';
    
    // display current time
    setInterval(() => showTime(), 1000);
    function showTime(){
        const time = new Date();
        const [hrs, min, sec] = [time.getHours(), time.getMinutes(), time.getSeconds()];
        const realTime = `${addZero(hrs)}:${addZero(min)}:${addZero(sec)}`;

        document.querySelector('.clock').textContent = realTime;

        // add zeros
        function addZero(n){
            return (parseInt(n, 10) < 10 ? '0' : '') + n;
        }
    }
    
    
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
    
    homeLink.addEventListener('click', homeFun);
    aboutLink.addEventListener('click', aboutFun);
    lessonsLink.addEventListener('click', lessonsFun);
    nextLink.addEventListener('click', nextFun);

    one.addEventListener('click', homeFun);
    two.addEventListener('click', aboutFun);
    three.addEventListener('click', lessonsFun);
    four.addEventListener('click', nextFun);

    function homeFun(e){
        home.style.transform = `translateY(0%)`;
        about.style.transform = `translateY(100%)`;
        lessons.style.transform = `translateY(100%)`;
        next.style.transform = `translateY(100%)`;

        setTimeout(() => {
            home.style.opacity = '1';
        }, 100);
        
        let [...allSections] = [about, lessons, next];
        allSections.forEach(section => {
            section.style.opacity = '0';
        })

        one.style.transform = 'scale(2)';
        two.style.transform = 'scale(1)';
        three.style.transform = 'scale(1)';
        four.style.transform = 'scale(1)';
    }

    function aboutFun(e){
        home.style.transform = `translateY(-100%)`;
        about.style.transform = `translateY(0%)`;
        lessons.style.transform = `translateY(100%)`;
        next.style.transform = `translateY(100%)`;

        setTimeout(() => {
            about.style.opacity = '1';
        }, 100);

        let [...allSections] = [home, lessons, next];
        allSections.forEach(section => {
            section.style.opacity = '0';
        })

        one.style.transform = 'scale(1)';
        two.style.transform = 'scale(2)';
        three.style.transform = 'scale(1)';
        four.style.transform = 'scale(1)';
    }

    function lessonsFun(e){
        home.style.transform = `translateY(-100%)`;
        about.style.transform = `translateY(-100%)`;
        lessons.style.transform = `translateY(0%)`;
        next.style.transform = `translateY(100%)`;

        setTimeout(() => {
            lessons.style.opacity = '1';
        }, 100);

        let [...allSections] = [home, about, next];
        allSections.forEach(section => {
            section.style.opacity = '0';
        })
        
        one.style.transform = 'scale(1)';
        two.style.transform = 'scale(1)';
        three.style.transform = 'scale(2)';
        four.style.transform = 'scale(1)';
    }
    
    function nextFun(e){
        home.style.transform = `translateY(-100%)`;
        about.style.transform = `translateY(-100%)`;
        lessons.style.transform = `translateY(-100%)`;
        next.style.transform = `translateY(0%)`;

        setTimeout(() => {
            next.style.opacity = '1';
        }, 100);

        let [...allSections] = [home, about, lessons];
        allSections.forEach(section => {
            section.style.opacity = '0';
        })

        one.style.transform = 'scale(1)';
        two.style.transform = 'scale(1)';
        three.style.transform = 'scale(1)';
        four.style.transform = 'scale(2)';
    }


    // setInterval(() => slideImages(), 6000);

    setTimeout(() => {
        slideImages();
    }, 5000);

    setInterval(() => slideImages(), 50000);

    const images = document.querySelector('.images').children;

    function slideImages(e){
        images[0].style.transform = `translateX(-100%)`;
        images[1].style.transform = `translateX(0%)`;
        setTimeout(() => {
            images[1].style.transform = `translateX(-100%)`;
            images[2].style.transform = `translateX(0%)`;
        }, 5000);
        setTimeout(() => {
            images[2].style.transform = `translateX(-100%)`;
            images[3].style.transform = `translateX(0%)`;
        }, 10000);
        setTimeout(() => {
            images[3].style.transform = `translateX(-100%)`;
            images[4].style.transform = `translateX(0%)`;
        }, 15000);
        setTimeout(() => {
            images[4].style.transform = `translateX(-100%)`;
            images[5].style.transform = `translateX(0%)`;
        }, 20000);

        // reverse
        setTimeout(() => {
            images[0].style.transform = `translateX(0%)`;
            images[1].style.transform = `translateX(100%)`;
        }, 45000);
        setTimeout(() => {
            images[1].style.transform = `translateX(0%)`;
            images[2].style.transform = `translateX(100%)`;
        }, 40000);
        setTimeout(() => {
            images[2].style.transform = `translateX(0%)`;
            images[3].style.transform = `translateX(100%)`;
        }, 35000);
        setTimeout(() => {
            images[3].style.transform = `translateX(0%)`;
            images[4].style.transform = `translateX(100%)`;
        }, 30000);
        setTimeout(() => {
            images[4].style.transform = `translateX(0%)`;
            images[5].style.transform = `translateX(100%)`;
        }, 25000);
    }
    


    // about section
    const [questionA, questionB, questionC] = [document.querySelector('.question_a'), document.querySelector('.question_b'), document.querySelector('.question_c')]

    const [ansA, ansB, ansC] = [document.querySelector('.answer_a'), document.querySelector('.answer_b'), document.querySelector('.answer_c')];
    
    // events
    questionA.addEventListener('mouseover', (e) => {
        ansA.style.display = 'block';
        ansB.style.display = 'none';
        ansC.style.display = 'none';

        setTimeout(() => {
            ansA.style.opacity = '1';
            ansB.style.opacity = '0';
            ansC.style.opacity = '0';
        }, 50);
    });
    questionB.addEventListener('mouseover', (e) => {
        ansB.style.display = 'block';
        ansA.style.display = 'none';
        ansC.style.display = 'none';

        setTimeout(() => {
            ansB.style.opacity = '1';
            ansA.style.opacity = '0';
            ansC.style.opacity = '0';
        }, 50);
    });
    questionC.addEventListener('mouseover', (e) => {
        ansC.style.display = 'block';
        ansA.style.display = 'none';
        ansB.style.display = 'none';

        setTimeout(() => {
            ansC.style.opacity = '1';
            ansA.style.opacity = '0';
            ansB.style.opacity = '0';
        }, 50);
    });

    // lessons section
    // const git = document.querySelector('.git');
    
})