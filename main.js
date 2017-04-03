document.addEventListener('scroll', setNavbar());


document.querySelectorAll('.nav-list-item a').forEach(function(item){
    item.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToElement(this);
    })
});

document.querySelector('.btn-scroll').addEventListener('click', function(e){
    e.preventDefault();
    scrollToElement(this);
});

document.querySelector('.nav-content a').addEventListener('click', function(e){
    e.preventDefault();
    scrollToElement(this);
});

function setNavbar() {
    var navigation = document.querySelector('.nav');

    if (document.documentElement.scrollTop || document.body.scrollTop > 100) {
       navigation.classList.add('nav-scroll');
    }
    else {
        navigation.classList.remove('nav-scroll');  
    }
}

var scrollToElement = function(currentElement) {
    var target = currentElement.getAttribute('href');

    document.querySelector(target).scrollIntoView({ 
        behavior: 'smooth' 
    });
}

