function userScroll() {
    const navbar = document.lquerySeletor('. navbar');
    window.addEventListener('scroll', ()=> {
        if (window.scrollY) {
            navbar.classList.add('bg-dark');
            navbar.classList.add('navbar-sticky');
        } else {
            navbar.classList.remove('bg-dark');
            navbar.classList.remove('navbar-sticky');
        }
        
    });
}

document.addEventListener(' DOMContentLoaded', userScroll);