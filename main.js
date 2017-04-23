document.addEventListener('scroll', setNavbar);

document.querySelectorAll('.nav-list-item a, .btn-scroll, .footer a').forEach(function(item){
    item.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToElement(this.getAttribute('href'));
    })
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
    var pageSections = document.querySelectorAll("#head, section, aside");
    var pageSectionsLength = pageSections.length;
    var nav = document.querySelector('nav');
    var scroll = scrollPosition + nav.clientHeight;
    var sectionStart = 0, sectionEnd = 0;
    var navbarItem, currentSection;

    for(var i=0;i<pageSectionsLength;i++){
        currentSection = pageSections[i];
        if (i == 0) {
            sectionStart=0;
        } else {
            sectionStart += pageSections[i-1].clientHeight;
        }
        sectionEnd += currentSection.clientHeight;
        if (currentSection.tagName == "ASIDE") { 
            continue;          
        }
        navbarItem = document.querySelector('.nav-list li a[href="#' + currentSection.getAttribute('id') + '"]');
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


