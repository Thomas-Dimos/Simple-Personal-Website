let previousEl = document.getElementById("home");
const homeStyle = "text-decoration: underline;text-decoration-color: rgb(5, 0, 71);text-decoration-thickness: 3px;text-underline-offset: 10px;color: rgb(5, 0, 71);"
const defaultStyle = "color: black;text-decoration: none;margin-top:30%;";
const selectedStyle = "margin-top: 30%;text-decoration: underline;text-decoration-color: rgb(5, 0, 71);text-decoration-thickness: 3px;text-underline-offset: 10px;color: rgb(5, 0, 71);"
 
 function link(event){
     if (previousEl.id == "home"){
        previousEl.style = "color: black;text-decoration: none;" 
     }else{
        previousEl.style = defaultStyle;
     }
     if (event.target.id == "home"){
        event.target.style = homeStyle;
        $('#main-page').load("index.html #main-page");
     }else {
        event.target.style = selectedStyle;
        clearTimeout(t);
        if(event.target.id == "knowledge"){
            $('#main-page').load("knowledge.html");
         }else if (event.target.id == "contacta"){
            $('#main-page').load("contact.html");
         }
      }
    previousEl = event.target;
    return false;
 }