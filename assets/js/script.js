const nav = document.querySelector('nav');
const navBtnToggle = nav.querySelector('[data-action="toggle-menu"]');
navBtnToggle.addEventListener("click", function(event){
    event.preventDefault();
    if(nav.dataset.state == "open")
    {
        nav.dataset.state = "close";
    } else {
        nav.dataset.state = "open";
    }
});