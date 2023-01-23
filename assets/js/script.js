$(document).ready(function () {
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

//The Basics


//Creating the
var today = dayjs();
$('#currentDay').text(today.format('[Today is] MMM D, YYYY'));
$('#currentTime').text(today.format('[The time is:] hh:mm'));
var current = today.format('hA');

// $('#currentHour').text(current);
console.log("The time is currently " + current)

  var row = ""
  for (let i = 9; i<=17; i++){
    row = $('<div class="row time-block">')
    //time
    col1 = $(`<div class = "col-2 col-md-1 hour">${displayTime(i)}</div>`)
    //memo
    col2 = $(`<textarea class = "col-8 col-md-10 data-input="${i}" id="inputText${i}" rows = "3"></textarea>`)
    //save
    col3 = $('<button class = "btn saveBtn col-2 col-md-1" aria-label="save"><i class="fas fa-save" aria-hidden="true"></i></button>') 
    //create time-block
    row.append(col1, col2, col3)
    $('#dayplanner').append(row)    
    getlocalStorage(i)

//coloring in the memo
    var hourEl = $('.hour')
    var now = `${displayTime(i)}`;
    console.log(now, i)
   
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
  }

  //time-block
  function displayTime(hour){
    var meridian = ""
    if (hour <=12){
      meridian = "AM"
    }else{
      meridian = "PM"
    }
    hour = hour % 12
    hour = hour ? hour : 12
    return hour + "" + meridian
  }

  $("button.saveBtn").click(function(e){
    var id = $(this).data("id")
    console.log(id)
    var inputText = $(this).parent().siblings().find("input").val()
    localStorage.setItem(id,inputText)
  })


  })

$('.past').css({'background-color': '#d3d3d3'})
$('.present').css({'background-color': '#ff6961'})
$('.future').css({'background-color': '#77dd77'})
// *remove this later
$('.hour').css({'background-color': '#000000', 'color': '#ffffff'})



//start copied code

function getlocalStorage(hour){
  let inputval = localStorage.getItem(hour)
  if(true){
    $("input").data(`input${hour}`)
   var text= $(`input#inputText${hour}`).val(inputval)
   console.log("Hello mother" + text)
  }
}
// //end copied code



//click
// var saveBtnEl = $('.saveBtn')




// saveBtnEl.on('click', function () {})


// loop for comparing current time and past,present,future
        
