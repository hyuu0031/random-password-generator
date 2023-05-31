const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassEl = document.getElementById("firstPass-el")
let secondPassEl = document.getElementById("secondPass-el")

let passwordLength = 15
let randomPass1
let randomPass2

function generateRandomPass(){
    randomPass1 = ""
    randomPass2 = ""
    for(i=1;i<=passwordLength;i++){
        randomPass1 += characters[Math.floor(Math.random() * characters.length)]
    }
    for(i=1;i<=passwordLength;i++){
        randomPass2 += characters[Math.floor(Math.random() * characters.length)]
    }
    firstPassEl.textContent = randomPass1
    secondPassEl.textContent = randomPass2
} 

