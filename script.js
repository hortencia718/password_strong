
// user inputs a password , the color bar lets the user see if the password
// they created is "weak", "medium" and or strong
// handle event for the color
//  PW color should tigger the color bar on its weakness or strong


const indicator = document.querySelector(".indicator");
const input = document.querySelector(".input");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");

function trigger(){
    if(input.value != ""){
        indicator.style.display = "block";
        indicator.style.display = "flex";
       
    }else{
        indicator.style.display = "none";
    }
}


// function indicator(, weak, medium, strong){
        // if input.value == weak )
        // a weak pw would be if its less than certain value 
        // display weak and its color bar..
        // else if input.value == meduim 
        // display medium and that color and based on the input value
        // else if strong display green color with message 


        // More characters – If the length is under 8 characters.
        // Weak – If the length is less than 10 characters and doesn’t contain a combination of symbols, caps, text.
        // Medium – If the length is 10 characters or more and has a combination of symbols, caps, text.
        // Strong – If the length is 14 characters or more and has a combination of symbols, caps, text.

// }