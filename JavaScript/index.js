navButton = () => {
    const display = document.getElementById("dropdown-content");
    if(display.style.display === "none"){
        return display.style.display ="block";
    }
    else {
        return display.style.display ="none";
    }
    
}