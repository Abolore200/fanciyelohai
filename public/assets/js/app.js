//display the navigation bar, when the menu button is clicked
function menuBar(){
    const navBar = document.querySelector('.navbar-list-link')
    navBar.classList.toggle('showNavbar')
    if(navBar.classList.contains('showNavbar')){
        document.body.classList.toggle('fixed')
    } else {
        document.body.classList.remove('fixed')
    }
}
//insert the current year
const year = new Date().getFullYear()
document.querySelector('.copyright-year p span').innerHTML = year