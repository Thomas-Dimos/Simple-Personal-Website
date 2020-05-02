const shortBio = ["SHORT BIO:", "Hello, My name is Thomas Dimos and I am a programmer currently living in Ioannina, Greece.", "I am a dedicated and hard working software enginneer, willing to accept new challenges,motivated in learning new things,skilled in dealing with problems.",];
const styles = ['<span id = "0" style = "font-size: 20px"></span>'];
const speed = 50;
let i = 0;
let p = 0;
let s = 0;
let t;
let styleON = false;

function textEffect(text,style){

    if(typeof text !== 'string' ){
        t = setTimeout(textEffect,1000,shortBio[p],(styles[0] ? true : false));
    }else{
        if(style && !styleON){
            document.getElementById("pc-screen").innerHTML += styles[s];
            s++;
            styleON = true;
            t = setTimeout(textEffect,speed,shortBio[p],styleON);
        }else{
            if (i< text.length){
                if(styleON){
                    document.getElementById(p + "").innerHTML += text.charAt(i);
                    i++;
                    t = setTimeout(textEffect,speed,shortBio[p],styleON);
                }else{
                    document.getElementById("pc-screen").innerHTML += text.charAt(i);
                    i++;
                    t = setTimeout(textEffect,speed,shortBio[p],styleON);
                }
            }else{
                if(p < shortBio.length){
                    document.getElementById("pc-screen").innerHTML += "<br>";
                    p++;
                    i = 0;
                    styleON = false;
                    t = setTimeout(textEffect,speed,shortBio[p],(styles[s] ? true : false));
                } 
            }
        }
    }
  }
  textEffect();