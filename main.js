document.addEventListener('scroll', setNavbar);

document.querySelectorAll('.nav-list-item a, .btn-scroll, .footer a').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToElement(this.getAttribute('href'));
    })
});

document.querySelector('.gallery .view-more').addEventListener('click', loadGalleryImages);
document.querySelector('.blog .view-more').addEventListener('click', loadBlogPosts);


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

function loadGalleryImages() {
    var button = document.querySelector('.gallery .view-more');
    button.classList.add('hidden');
    var gallery = document.querySelector('.gallery .grid-container');
    
    var galleryRow = document.createElement('div');
    galleryRow.classList.add('gallery-row');
    var galleryCol = document.createElement('div');
    galleryCol.classList.add('gallery-col');
    galleryCol.classList.add('full');
    
    var img = document.createElement('img');
    var imgGlass = document.createElement('img');
    img.src = './img/gallery-image-5.png';
    imgGlass.src = './img/gallery-image-4.png';

    galleryCol.appendChild(img);
    galleryCol.appendChild(imgGlass);
    
    galleryRow.appendChild(galleryCol);
    gallery.appendChild(galleryRow);
}

function loadBlogPosts() {
    var button = document.querySelector('.blog .view-more');
    button.classList.add('hidden');
    var blog = document.querySelector('.blog .grid-container');
    var posts = document.querySelector('.blog .latest-posts').cloneNode(true);
    
    blog.appendChild(posts);
}


