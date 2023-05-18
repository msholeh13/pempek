const show = () => {
    const button = document.querySelector("#myNav");
    
    if(button.style.display === "block"){
        button.style.display = "none";
    } else {
        button.style.display = "block";
    }
}