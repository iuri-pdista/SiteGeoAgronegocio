document.querySelector(".divCarroussel").addEventListener("click", event =>{
    event.preventDefault();
    divCarroussel();
})

document.querySelector(".divCarroussel2").addEventListener("click", event =>{
    event.preventDefault();
    divCarroussel();
})

function divCarroussel() {
    const elements = document.querySelectorAll(".hero-item");
    const firstStyle = window.getComputedStyle(elements[0]);
    const secondStyle = window.getComputedStyle(elements[1]);
    console.log(secondStyle.getPropertyValue("display"));
    if ( firstStyle.getPropertyValue("display") === "none" ){
        elements[1].style.display = "none";
        elements[0].style.display = "inherit";
    }
    else if ( secondStyle.getPropertyValue("display") === "none" ){
        elements[0].style.display = "none";
        elements[1].style.display = "inherit";
        elements[1].style.marginTop = "-3rem";
    }
}