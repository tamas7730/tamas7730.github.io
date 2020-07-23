document.querySelector("#navbarTogglerButton").addEventListener("click", navbarToggleFunction
);

document.querySelector("#teszt").addEventListener("click", function(){

});


function navbarToggleFunction() {
    let status=getNavbarStatus();
    if(status == 0){
        openTheNavbar();
    }else if(status == 1){
        closeTheNavbar();
    }else{
        alert("HIBA")
    }
}

function getNavbarStatus(){

    let buttonClassNameJS = document.getElementById("navbarTogglerButton").getAttribute("class");
    let buttonAriaStatusJS = document.getElementById("navbarTogglerButton").getAttribute("aria-expanded");
    let navbarClassNameJS = document.getElementById("navbarSupportedContent").getAttribute("class");
    let decider = 0;
    if(buttonAriaStatusJS == "false"){
        decider=0
    }else{
        decider=1
    }
    return decider;
}

function closeTheNavbar(){
    document.getElementById("navbarTogglerButton").setAttribute("class", "navbar-toggler collapsed");
    document.getElementById("navbarTogglerButton").setAttribute("aria-expanded", "false");
    document.getElementById("navbarSupportedContent").setAttribute("class", "collapse navbar-collapse");
    document.getElementById("logInBarID").setAttribute("class", "form-inline flex-row-reverse")
}

function openTheNavbar(){
    document.getElementById("navbarTogglerButton").setAttribute("class", "navbar-toggler");
    document.getElementById("navbarTogglerButton").setAttribute("aria-expanded", "true");
    document.getElementById("navbarSupportedContent").setAttribute("class","collapse navbar-collapse show");
    document.getElementById("logInBarID").setAttribute("class", "form-inline flex-row")
}

