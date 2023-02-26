// Variable
// Times
var nine = document.querySelector("#hour-9");
var ten = document.querySelector("#hour-10");
var eleven = document.querySelector("#hour-11");
var twelve = document.querySelector("#hour-12");
var one = document.querySelector("#hour-1");
var two = document.querySelector("#hour-2");
var three = document.querySelector("#hour-3");
var four = document.querySelector("#hour-4");
var five = document.querySelector("#hour-5");

// Set current date
var date = document.querySelector("#currentDay");
var today = dayjs();
$(date).text(today.format('dddd, MMM D, YYYY'));


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?



    // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?



    // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?



    // TODO: Add code to display the current date in the header of the page.
  });
  