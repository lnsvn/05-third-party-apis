// Variable
// Times
var nineBlock = document.querySelector("#hour-09");
var tenBlock = document.querySelector("#hour-10");
var elevenBlock = document.querySelector("#hour-11");
var twelveBlock = document.querySelector("#hour-12");
var oneBlock = document.querySelector("#hour-13");
var twoBlock = document.querySelector("#hour-14");
var threeBlock = document.querySelector("#hour-15");
var fourBlock = document.querySelector("#hour-16");
// var fiveBlock = document.querySelector("#hour-5");

// Adding Events
var textArea = document.querySelectorAll("#description");
var saveBtn = document.querySelector(".saveBtn");
var hourBlocks = document.querySelectorAll(".time-block");


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
$(function () {
// TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?

// Save buttons save events added to page



// TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time? :]

// change past pres future classes for hour blocks using day.js

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
 
  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?



  // TODO: Add code to display the current date in the header of the page. :]
  // Set current date
  
  var date = document.querySelector("#currentDay");
  var today = dayjs();
  $(date).text(today.format('dddd, MMMM D, YYYY'));
});
  