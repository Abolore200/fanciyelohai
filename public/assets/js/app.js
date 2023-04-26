//display the navigation bar, when the menu button is clicked
function menuBar(){
    const navBar = document.querySelector('.navbar-list-link')
    navBar.classList.toggle('showNavbar')
    if(navBar.classList.contains('showNavbar')){
        document.body.classList.toggle('fixed')

        //array for all the navigation bar link [product,about us,contact us]
        const click = document.querySelectorAll('.link')
        const clickArray = Array.from(click)
        //when the product link is clicked, navigate the page to product section
        clickArray[0].addEventListener('click', () => {
            if(document.body.classList.contains('fixed') && navBar.classList.contains('showNavbar')){
                document.body.classList.remove('fixed')
                navBar.classList.remove('showNavbar')
            }
            window.location.href = '#product'
        })
        //when the about us link is clicked, navigate the page to about us section
        clickArray[1].addEventListener('click', () => {
            if(document.body.classList.contains('fixed') && navBar.classList.contains('showNavbar')){
                document.body.classList.remove('fixed')
                navBar.classList.remove('showNavbar')
            }
            window.location.href = '#about-us'
        })
        //when the contact us link is clicked, navigate the page to contact us section
        clickArray[2].addEventListener('click', () => {
            if(document.body.classList.contains('fixed') && navBar.classList.contains('showNavbar')){
                document.body.classList.remove('fixed')
                navBar.classList.remove('showNavbar')
            }
            window.location.href = '#contact-us'
        })
        
    } else {
        document.body.classList.remove('fixed')
    }
}
//insert the current year
const year = new Date().getFullYear()
document.querySelector('.copyright-year p span').innerHTML = year
//when the site is loaded, display animation
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.header-quotes').classList.add('displayQuoteOnLoad')
    document.querySelector('.header-images').classList.add('displayImageOnLoad')
    document.body.style.overflowX = 'hidden'
    setTimeout(() => {
        document.body.style.removeProperty('overflow-x')
    },5000)
    //remove animation if the max-width is 768px
    const maxWidth = window.matchMedia("(max-width:768px)")
    if(maxWidth.matches){
        document.querySelector('.header-quotes').classList.remove('displayQuoteOnLoad')
        document.querySelector('.header-images').classList.remove('displayImageOnLoad')
        document.body.style.removeProperty('overflow-x')
    }
})