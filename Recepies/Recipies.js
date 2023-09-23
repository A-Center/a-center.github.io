

function generateData(value){
  const numbers = document.getElementsByClassName("number")

  for (const number of numbers) {
    number.innerText = number.getAttribute("originalNumber") * value
  }
};