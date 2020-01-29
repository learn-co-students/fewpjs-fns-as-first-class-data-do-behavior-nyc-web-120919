/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let timeInt = time.slice(0, 2)
  if (timeInt.charAt(1) === ":"){
    timeInt = timeInt.charAt(0);
  }
  console.log(timeInt);
  if (timeInt < 12){
    return "Good Morning"
  } else if (timeInt >= 17){
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message){
  let element = document.getElementById("greeting");
  element.innerText = message;
}

