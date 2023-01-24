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
$('#currentTime').text(today.format('[The time is:] hh:mm A'));


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
for (i=9; i<=17; i++)
{
  var st1 = 'hour' + i + ' = localStorage.getItem("hour-' + i + '")'
  eval(st1);
  var st2 = '$("#hour-' + i + ' .description").val(hour' + i + ')'
  eval(st2);
  console.log(st1);
  console.log(st2);
}

});

 





