
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
    
    
    // DOM elementsns
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
    













    // toggle theme
    const bulb = document.querySelector('.toggle i');
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const heading = document.querySelector('h1');
    const definitions = document.querySelectorAll('.answer');
    const bodyLinks = document.querySelectorAll('a');
    const lessonDivs = [document.querySelector('.git'), document.querySelector('.terminal'), document.querySelector('.git'), document.querySelector('.sass'), document.querySelector('.javascript'), document.querySelector('.kali_linux'), document.querySelector('.design'), document.querySelector('.ux')];
    const highlights = document.querySelectorAll('.timeline div');
    const footer = document.querySelector('footer');
    
    bulb.addEventListener('click', darkMode);

    
    function darkMode(e){
        bulb.removeEventListener('click', darkMode);
        bulb.addEventListener('click', lightMode);
        
        bulb.setAttribute('class', 'fas');
        bulb.classList.add('fa-lightbulb');
        bulb.style.color = '#ffffff';

        // body 
        body.style.backgroundColor = '#0c2431';
        bodyLinks.forEach(link => {
            link.style.color = '#ffffff';
        })
        // header
        header.style.backgroundColor = '#0e1d26';
        heading.style.color = '#ffffff';
        // menu 
        hamburger.forEach(ham => {
            ham.style.backgroundColor = '#ffffff';
        })
        menuDiv.style.backgroundColor = '#0e1d26';
        // menu links
        links.forEach(link => {
            link.style.color = '#22e1ee';
        })
        // home section
        document.querySelector('.btn').style.backgroundColor = 'transparent';
        // about section
        definitions.forEach(definition => {
            definition.style.backgroundColor = '#132a36';
            definition.style.boxShadow = '-5px 5px 32px #071c27';
            definition.firstElementChild.style.color = '#ffffff'; // h3
            definition.lastElementChild.style.color = '#ffffff'; // p
        })
        // lessons section
        lessonDivs.forEach(div => {
            div.style.backgroundColor = '#1b313b';
            div.firstElementChild.style.backgroundColor = '#0e1d26';
            div.lastElementChild.style.color = '#ffffff';
        })
        // next section
        highlights.forEach(item => {
            item.style.backgroundColor = '#1b313b';
            item.firstElementChild.style.color = '#ffffff';
            item.lastElementChild.style.color = '#ffffff';
        })
        // footer
        footer.style.backgroundColor = '#0c2431';
        footer.firstElementChild.style.borderTop = '1px solid #384953';
        document.querySelector('.clock').style.color = '#ffffff';
        footer.firstElementChild.lastElementChild.firstElementChild.style.color = '#ffffff';
    }

    function lightMode(e){
        bulb.removeEventListener('click', lightMode);
        bulb.addEventListener('click', darkMode);
        
        bulb.setAttribute('class', 'far');
        bulb.classList.add('fa-lightbulb');
        bulb.style.color = '#131c46';

        // body 
        body.style.backgroundColor = '#0064c8';
        bodyLinks.forEach(link => {
            link.style.color = '#131c46';
        })
        // header
        header.style.backgroundColor = '#fbfdff';
        heading.style.color = '#131c46';
        // menu 
        hamburger.forEach(ham => {
            ham.style.backgroundColor = '#000000';
        })
        menuDiv.style.backgroundColor = '#ffffff';
        // menu links
        links.forEach(link => {
            link.style.color = '#072dac';
        })
        // home section
        document.querySelector('.btn').style.backgroundColor = '#ffffff';
        // about section
        definitions.forEach(definition => {
            definition.style.backgroundColor = '#ffffff';
            definition.style.boxShadow = '-5px 5px 32px #062793';
            definition.firstElementChild.style.color = '#131c46'; // h3
            definition.lastElementChild.style.color = '#131c46'; // p
        })
        // lessons section
        lessonDivs.forEach(div => {
            div.style.backgroundColor = '#ffffff';
            div.firstElementChild.style.backgroundColor = '#131c46';
            div.lastElementChild.style.color = '#0064c8';
        })
        // next section
        highlights.forEach(item => {
            item.style.backgroundColor = '#ffffff';
            item.firstElementChild.style.color = '#131c46';
            item.lastElementChild.style.color = '#131c46';
        })
        // footer
        footer.style.backgroundColor = '#fbfdff';
        footer.firstElementChild.style.borderTop = 'none';
        document.querySelector('.clock').style.color = '#131c46';
        footer.firstElementChild.lastElementChild.firstElementChild.style.color = '#131c46';
    }


    // auto toggle theme setting
    const autoBtn = document.querySelector('#auto-theme');
    
    let status = true;

    autoBtn.addEventListener('click', manual);

    function manual(e){
        status = false;
        autoBtn.removeEventListener('click', manual);
        autoBtn.addEventListener('click', auto);
    }

    function auto(e){
        status = true;
        autoBtn.removeEventListener('click', auto);
        autoBtn.addEventListener('click', manual);
    }
    
    setInterval(() => checkStatus(), 1);

    function checkStatus(e){
        if(status){
            autoChangeTheme();
            bulb.classList.add('no_click');
            bulb.setAttribute('title', 'auto-mode is ON. turn it off in the menu');
            autoBtn.style.opacity = '1';
            autoBtn.style.color = '#22e1ee';
            autoBtn.setAttribute('title', 'auto-mode: ON');

        }else{
            bulb.classList.remove('no_click');
            bulb.removeAttribute('title');
            // bulb.setAttribute('title', 'auto-mode is ON');
            autoBtn.style.opacity = '0.2';
            autoBtn.style.color = '#000';
            autoBtn.setAttribute('title', 'auto-mode: OFF');
        }
    }

    // automatically change theme based on current time
    function autoChangeTheme(e){
        let hrs = new Date().getHours();
        hrs >= 08 && hrs < 18 ? lightMode() : darkMode();   
    }

})