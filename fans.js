let paragraph = document.querySelector('.textArea')
let inputTextform = document.querySelector('#inputText')
console.log(inputTextform.value)
let newDate = new Date().toLocaleDateString()
console.log(newDate)
let test = document.querySelector('button')
console.log(test)


test.addEventListener("mouseenter", function (event) {
  event.target.style.background = "green";

  setTimeout(function () {
    event.target.style.background = "";
  }, 700);
}, false);

test.addEventListener("mouseover", function (event) {

  event.target.style.color = "black";

  setTimeout(function () {
    event.target.style.color = "";
  }, 700);
}, false);


function submitText() {
  if (!inputTextform.value) {
    alert('Cannot send an empty message')
  } else {
    paragraph.innerHTML = paragraph.innerHTML + '<div class="content inputForm">' + inputTextform.value + '<div>' + newDate + '</div>' + '</div>'
    console.log(paragraph.innerHTML)
    inputTextform.value = ''
  }


}