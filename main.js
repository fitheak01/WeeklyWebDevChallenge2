document.addEventListener('scroll', setNavbar);

document.querySelectorAll('.nav-list-item a').forEach(function(item){
    item.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToElement(this.getAttribute('href'));
    })
});

document.querySelector('.btn-scroll').addEventListener('click', function(e){
    e.preventDefault();
    scrollToElement(this.getAttribute('href'));
});

document.querySelector('.nav-content a').addEventListener('click', function(e){
    e.preventDefault();
    scrollToElement(this.getAttribute('href'));
});

document.querySelector('.footer a').addEventListener('click', function(e){
    e.preventDefault();
    scrollToElement(this.getAttribute('href'));
});

function setNavbar() {
    console.log('navbar set');
    var navigation = document.querySelector('.nav');
    var scroll = document.documentElement.scrollTop || document.body.scrollTop; 
    var scrollBtn = document.querySelector('.btn-scroll');
    
    setActiveSectionOnScroll(scroll);
    if (scroll > 100) {
       navigation.classList.add('nav-scroll');

       if (scroll > document.querySelector('#head').clientHeight - 200) {
           scrollBtn.classList.add('hidden');
       }
       else {
            scrollBtn.classList.remove('hidden');           
       }
    }
    else {
        navigation.classList.remove('nav-scroll');
        scrollBtn.classList.remove('hidden');
    }


}

var setActiveSection = function() {
    var linkNavList = document.querySelectorAll('.nav-list li a');
    var length = linkNavList.length;
    var currentSection = location.hash;
    // for(var i=0; i< length;i++){
    //     if (linkNavList[i].getAttribute('href') == currentSection){
    //         linkNavList[i].classList.add('active-item');
    //     }
    //     else linkNavList[i].classList.remove('active-item');
    // }
}

var setActiveSectionOnScroll = function(scrollPosition) {
    var sections = document.querySelectorAll("header, section");
    var scroll = scrollPosition;
    var sectionStart = 0, sectionEnd = 0;
    var navbarItem, currentSection;
    for(var i=0;i<sections.length;i++){
        if (i == 0) {
            sectionStart=0;
        } else {
            sectionStart += sections[i-1].clientHeight;
        }
        sectionEnd += sections[i].clientHeight;
        navbarItem = document.querySelector('.nav-list li a[href="#' + sections[i].getAttribute('id') + '"]');
        if(sectionStart <= scroll && scroll <= sectionEnd){            
            navbarItem.classList.add('active-item');
            currentSection = navbarItem.getAttribute('id');
            location.hash = '#' + currentSection;
            break;
        }
        else {
            navbarItem.classList.remove('active-item');
        }
    }
}

var scrollToElement = function(target) {
    document.querySelector(target).scrollIntoView({ 
        behavior: 'smooth' 
    });
    location.hash = target;
    setActiveSection();    
}


