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
  //
  // TODO: Add code to display the current date in the header of the page.
});

var today = dayjs();
$('#currentDay').text(today.format('[Today is] MMM D, YYYY'));
$('#currentTime').text(today.format('[The time is:] hh:mm'));

var current = today.format('hA');
$('#currentHour').text(current);
console.log(current)




//click
var saveBtnEl = $('.saveBtn')




saveBtnEl.on('click', function () {


// loop for comparing current time and past,present,future
var hourEl = $('.hour')

    for (let i=0; i < hourEl.length; i++){    
    var now = hourEl[i].outerText
    console.log(now)
        // evaluates past
        if (now !== current && now < current){
          console.log('The past is the past')
          // $('.time-block').addClass("past")
        }
        //evaluates present
        else if (now === current){
          console.log('Stay present')
          // $('.time-block').addClass("present")
        }
        //evaluates future
        else if (now !== current && now > current){
          console.log('The future is now!')          
          // $('.time-block').addClass("future")
        }
    }

  $('.past').css({'background-color': '#d3d3d3'})
  $('.present').css({'background-color': '#ff6961'})
  $('.future').css({'background-color': '#77dd77'})
// *remove this later
$('.hour').css({'background-color': '#000000', 'color': '#ffffff'})

});

