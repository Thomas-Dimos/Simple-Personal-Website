    function addRating(){
            addStars(5,0);
            addStars(4,1);
            addStars(3,2);
            addStars(4,1);
            addStars(3,2);
            addStars(3,2);
            addStars(3,2);
    
    }
    
    function addStars(numOfBStars,numOfWStars) {
        const starsDiv = document.getElementById("stars");
        starsDiv.innerHTML += "<div class = 'line-stars' style = 'margin-top: 44%'></div>";
        for(let i = 0; i < numOfBStars; i++){
            document.getElementsByClassName("line-stars")[starsDiv.childElementCount-1].innerHTML += "<i class = 'fas fa-star'></i>";
        }
        for(let i = 0; i < numOfWStars; i++){
            document.getElementsByClassName("line-stars")[starsDiv.childElementCount-1].innerHTML += "<i class= 'far fa-star'></i>";
        }
        
    }
    addRating();