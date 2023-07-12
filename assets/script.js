$(function() {
  // Add a listener for click on the save button
  $(".saveBtn").on("click", function() {
    var hour = $(this).parent().attr("id"); // Get the id of the containing time-block
    var description = $(this).siblings(".description").val(); // Get the user input

    localStorage.setItem(hour, description); // Save the user input in local storage
  });

// Get the current hour using Day.js
  var currentHour = dayjs().hour(); 

  //use jQuery .each method to iterate each time block and apply the correct class (past, present, future)
 $(".time-block").each(function() {
    var hour = parseInt($(this).attr("id").split("-")[1]); // Extract the hour from the id

    if (hour < currentHour) {
      $(this).removeClass("present future").addClass("past"); 
    } else if (hour === currentHour) {
      $(this).removeClass("past future").addClass("present");
    } else {
      $(this).removeClass("past present").addClass("future");
    }
  });
  
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
