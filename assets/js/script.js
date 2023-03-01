// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html
$(function () {
  // Save buttons save events added to page
  var saveBtn = document.querySelectorAll(".saveBtn");
  $(saveBtn).on("click", function(event){
    event.preventDefault();
    var text = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id").split("-")[1];

    localStorage.setItem(hour,text);
  });

  // Removes and adds past, present, and future classes for hour blocks based on the hour of the day using day.js
  var hourBlocks = document.querySelectorAll(".time-block");
  var checkHour = dayjs().format('HH');
  $(hourBlocks).each(function() {
    var timeValue = $(this).attr("id").split("-")[1];

    if (checkHour == timeValue) {
      $(this).removeClass('past');
      $(this).removeClass('future');
    } else if (checkHour < timeValue) {
      $(this).removeClass('present');
      $(this).removeClass('past');
      $(this).addClass('future');
    } else if (checkHour > timeValue) {
      $(this).removeClass('future');
      $(this).removeClass('present');
      $(this).addClass('past');
    };
  });
 
  // Gets any user input saved in localStorage and sets the values of the corresponding textarea elements
  $("#hour-09 .description").val(localStorage.getItem("09"));
  $("#hour-10 .description").val(localStorage.getItem("10"));
  $("#hour-11 .description").val(localStorage.getItem("11"));
  $("#hour-12 .description").val(localStorage.getItem("12"));
  $("#hour-13 .description").val(localStorage.getItem("13"));
  $("#hour-14 .description").val(localStorage.getItem("14"));
  $("#hour-15 .description").val(localStorage.getItem("15"));
  $("#hour-16 .description").val(localStorage.getItem("16"));
  
  // Prints today's date at top of site
  var date = $("#currentDay");
  var today = dayjs();
  $(date).text(today.format('dddd, MMMM D, YYYY'));
});
  