document.addEventListener('DOMContentLoaded', function () {
    const mobileNavBtn = document.querySelector('.mobile-nav-btn');
    const mobileNav = document.querySelector('.mobile-nav');


    mobileNavBtn.addEventListener('click', function () {
        mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
    });
});