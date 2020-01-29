/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet (time) {
  let timeInt = parseInt(time.split(":")[0], 10)
  if (timeInt >= 12 && timeInt <= 17) {
    return 'Good Afternoon'
  } else if (timeInt > 17 && timeInt <= 24) {
    return 'Good Evening'
  } else {
    return "Good Morning"
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  let d = document.getElementById("greeting").innerText = string;
}