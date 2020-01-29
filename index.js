/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let time = timeString.split(":")[0];
  let cleanTime = parseInt(time, 10);
  if (cleanTime < 12) {
    return "Good Morning";
  }
  else if (cleanTime >= 12 && cleanTime < 17) {
    return "Good Afternoon";
  }
  else if (cleanTime >= 17) { 
    return "Good Evening";
  }
  else { 
    return time;
  }
}


/* Write your implementation of displayMessage() */
function displayMessage(greeting) {
  const element = document.getElementById('greeting');
  element.innerText = greeting;
}