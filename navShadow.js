window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }


    // Code below is just for image to show up when we scroll down
    var image = document.querySelector('.photo');
    if (window.pageYOffset > 0) {
        image.classList.add('scrolled');
    } else {
        image.classList.remove('scrolled');
    }
};

