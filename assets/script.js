$(function() {
  // Add a listener for click events on the save button
  $(".saveBtn").on("click", function() {
    var hour = $(this).parent().attr("id"); // Get the id of the containing time-block
    var description = $(this).siblings(".description").val(); // Get the user input

    localStorage.setItem(hour, description); // Save the user input in local storage
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //0 - use jquery.children to select children elements

  // js vanilla version document.query(".yimr-block"); (we need jquery)

  //1 - use dayjs() to grab current time (just the hour)
  //2 - use a loop to iterate through time blocks

    // **** alt soulution inside the for loop select the time block i index       other -  use children
    //for(i=9; i < 18; i++)
    // document.querySelector("#hour-" + i) //use jquery selector

  //2a  - use if statement to compare the current hour to the 9am block (then iterate to 10 11 etc
      // if current time < current timeblocka apply future
      // else if the current hour is qual to time block apply present class
      // else the current hour is greater than time block apply past class

  //3 - remove past, present, and future class in html and append the correct class

  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  //1. getItem for localStorage to pull previously stored content
      //a. separate key in localStorage for each hour
      //b create a for loop for hour 9-18 
           //check localStorage eithin the loop
           //if there is storage (value) 
               //  inside the text area of corresponding hour
               //use id selector for the text area

           // else no content do nothing


  // Display the current date in the header of the page
  var currentDate = dayjs().format("dddd, MMMM D, YYYY"); // Get the current date using Day.js
  $("#currentDay").text(currentDate); // Set the text of the currentDay element to the current date
});
