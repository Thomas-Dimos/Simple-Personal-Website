function toggleDropdown(){
    const border = document.getElementsByClassName("social-media-border")[0];
    const arrow = document.getElementById("arrow");
    if(border.style.width != ""){
        arrow.style.transform = "none";
        border.style.width = "";
        border.style.borderWidth = "";
        border.style.opacity = "";
        border.style.boxShadow = "none";
    }else{
        border.style.border = "1px solid black";
        border.style.boxShadow = "2px 2px 5px 0px rgb(20, 35, 100)";
        border.style.width = "98%";
        border.style.opacity ="1";
        border.style.height = "auto";
        arrow.style.transform = "rotate(180deg)";
    }
}