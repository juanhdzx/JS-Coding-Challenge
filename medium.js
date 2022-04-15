let userText = prompt("Type something in the textbox");

if (userText == userText.toUpperCase()) {
    console.log("Are you Yelling?")
} else if (userText == userText.toLowerCase()){
    console.log("Are you whispering")
} else {
    console.log("Are you speaking normally?")
} 
