window.addEventListener('scroll', function() {
    var nav = document.getElementById('nav');
    var scrollPosition = window.scrollY;

    
    if (scrollPosition > 0) {
        nav.style.backgroundColor = 'green';
        nav.style.color = 'white';
        nav.style.borderBottom = '2px solid white';
    } else {
        nav.style.backgroundColor = 'peachpuff';
        nav.style.color = 'black';
        nav.style.borderBottom = 'none';
    }
});
