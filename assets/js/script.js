// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

});
var today = dayjs();
$('#currentDay').text(today.format('[Today is] MMM D, YYYY'));
$('#currentTime').text(today.format('[The time is:] hh:mm'));
var current = today.format('HA');
var now = parseInt(today.format('HA'))
console.log("The time is: " + now)

        // evaluates past
        if (current < now){
          console.log('The past is the past')
          $('.time-block').addClass("past")
          $('.time-block').removeClass("present")
          $('.time-block').removeClass("future")
        }
        // evaluates present
        if (current === now){
          console.log('Stay present')
          $('.time-block').addClass("present")
          $('.time-block').removeClass("past")
          $('.time-block').removeClass("future")
        }
        //evaluates future
        else if (current > now){
          console.log('The future is now!')          
          $('.time-block').addClass("future")
          $('.time-block').removeClass("past")
          $('.time-block').removeClass("present")
        }
  

$('.past').css({'background-color': '#d3d3d3'})
$('.present').css({'background-color': '#ff6961'})
$('.future').css({'background-color': '#77dd77'})
// *remove this later
$('.hour').css({'background-color': '#000000', 'color': '#ffffff'})