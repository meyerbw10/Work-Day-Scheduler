
var hourRow = $('.time-block')
var currentDay = moment().format("dddd MMM Do, YYYY")
$("#currentDay").text(currentDay);
var currentTime = moment().format("H")
var colorBackground = document.querySelectorAll('.colorBackground')
var hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var saveBtns = document.querySelectorAll('.saveBtn')

//for each text area
for (var i = 0; i < colorBackground.length; i++) {
  //the hours array
  var thisHour = hoursArray[i]
  // if the hour in the array is less ( Greater/equal) than the actual time is now then..
  if (thisHour < currentTime) {
    colorBackground[i].classList.add("past")
  } else if (thisHour > currentTime) {
    colorBackground[i].classList.add("future")
  } else {
    colorBackground[i].classList.add("present")
  }
  //listen to the save buttons and when clicked target the value of the previous sibling and store that text
  saveBtns[i].addEventListener('click', function(event){
    var text = event.target.previousElementSibling.value
    localStorage.setItem(event.target.id, text)
  }) // take the stored text and display that value to the text area
  var storedText = localStorage.getItem(hoursArray[i])
  colorBackground[i].value = storedText
};



