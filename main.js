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

function setNavbar() {
    console.log('navbar set');
    var navigation = document.querySelector('.nav');
    if (document.documentElement.scrollTop || document.body.scrollTop > 100) {
       navigation.classList.add('nav-scroll');
    }
    else {
        navigation.classList.remove('nav-scroll');  
    }
}

var setActiveSection = function(){
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

var scrollToElement = function(target) {
    document.querySelector(target).scrollIntoView({ 
        behavior: 'smooth' 
    });
    location.hash = target;
    setActiveSection();    
}


