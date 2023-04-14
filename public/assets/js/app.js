function menuBar(){
    const navBar = document.querySelector('.navbar-list-link')
    navBar.classList.toggle('showNavbar')
    if(navBar.classList.contains('showNavbar')){
        document.body.classList.toggle('fixed')
    } else {
        document.body.classList.remove('fixed')
    }
}