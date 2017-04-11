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
    for(var i=0; i< length;i++){
        if (linkNavList[i].getAttribute('href') == currentSection){
            linkNavList[i].classList.add('active-item');
        }
        else linkNavList[i].classList.remove('active-item');
    }
}

var setActiveSectionOnScroll = function(scrollPosition) {
    var sections = document.querySelectorAll("head,section");
    var scroll = scrollPosition;
    debugger;
    sections.forEach(function(section){
        if(scroll <= section.clientHeight){
            document.querySelector('.nav-list li a[href="' + section.getAttribute('id') + "']");
        }
    });
}

var scrollToElement = function(target) {
    document.querySelector(target).scrollIntoView({ 
        behavior: 'smooth' 
    });
    location.hash = target;
    setActiveSection();    
}


