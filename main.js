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

document.querySelector('.footer a').addEventListener('click', function(e){
    e.preventDefault();
    scrollToElement(this.getAttribute('href'));
});


function setNavbar() {
    var navigation = document.querySelector('.nav');
    var scroll = window.scrollY || document.body.scrollTop; 
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

function setActiveSectionOnScroll(scrollPosition) {
    var sections = document.querySelectorAll("#head, section, aside");
    var scroll = scrollPosition + 78;
    var sectionStart = 0, sectionEnd = 0;
    var navbarItem, currentSection;

    for(var i=0;i<sections.length;i++){
        if (i == 0) {
            sectionStart=0;
        } else {
            sectionStart += sections[i-1].clientHeight;
        }
        sectionEnd += sections[i].clientHeight;
        currentSection = sections[i].getAttribute('id');
        if (sections[i].tagName == "ASIDE") { 
            continue;          
        }
        navbarItem = document.querySelector('.nav-list li a[href="#' + sections[i].getAttribute('id') + '"]');
        if(sectionStart <= scroll && scroll <= sectionEnd){            
            navbarItem.classList.add('active-item');
        }
        else {
            navbarItem.classList.remove('active-item');
        }
    }
}

function scrollToElement(target) {
    document.querySelector(target).scrollIntoView({ 
        behavior: 'smooth' 
    });
    location.hash = target;   
}


