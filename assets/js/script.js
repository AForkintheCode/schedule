$(document).ready(function (){

//save button
$(".saveBtn").on("click", function() {
  var postit = $(this).siblings(".description").val();
  var time =$(this).parent().attr("id");
  console.log('Sticky Note: ' + postit);
  console.log('Time of Note: ' + time);
  localStorage.setItem(time, postit);
})


//past,present, or future?

var today = dayjs();
$('#currentDay').text(today.format('[Today is] MMM D, YYYY'));
$('#currentTime').text(today.format('[The time is:] hh:mm'));


  var current = parseInt(today.format('HA'))
  console.log("The time is: " + current)

  $(".time-block").each(function() {
    var blockTime = parseInt($(this).attr("id").split("-")[1]);

    console.log(blockTime + ' vs. ' + current)
    
         // evaluates past
        if (blockTime < current){
          console.log('The past is the past')
          $(this).addClass("past")           
        }
        // evaluates present
        else if (blockTime == current){
          console.log('Stay present')
          $(this).removeClass("past") 
          $(this).addClass("present")
        }
        //evaluates future
        else {
          console.log('The future is now!')   
          $(this).removeClass("past present")        
          $(this).addClass("future")  
        }
      })     

$('.past').css({'background-color': '#d3d3d3'})
$('.present').css({'background-color': '#ff6961'})
$('.future').css({'background-color': '#77dd77'})


// localstorage

  var hour9 = localStorage.getItem("hour-9");
  $("#hour-9 .description").val(hour9);

  var hour10 = localStorage.getItem("hour-10");
  $("#hour-10 .description").val(hour10);

  var hour11 = localStorage.getItem("hour-11");
  $("#hour-11 .description").val(hour11);

  var hour12 = localStorage.getItem("hour-12");
  $("#hour-12 .description").val(hour12);

  var hour13 = localStorage.getItem("hour-13");
  $("#hour-13 .description").val(hour13);

  var hour14 = localStorage.getItem("hour-14");
  $("#hour-14 .description").val(hour14);

  var hour15 = localStorage.getItem("hour-15");
  $("#hour-15 .description").val(hour15);

  var hour16 = localStorage.getItem("hour-16");
  $("#hour-16 .description").val(hour16);

  var hour17 = localStorage.getItem("hour-17");
  $("#hour-17 .description").val(hour17);
});




