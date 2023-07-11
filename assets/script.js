$(document).ready(function() {
  // Add a listener for click on the save button
  $(document).on("click", ".saveBtn", function() {
    var hour = $(this).parent().attr("id"); // Get the id of the containing time-block
    var description = $(this).siblings(".description").val(); // Get the user input

    localStorage.setItem(hour, description); // Save the user input in local storage
  });

  // Get the current hour using Day.js
  var currentHour = dayjs().hour();

  // Use jQuery .each method to iterate each time block and apply the correct class (past, present, future)
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

  // Get  user input saved in localStorage and set the values of the corresponding textarea elements
  for (var i = 9; i <= 17; i++) {
    var event = localStorage.getItem("hour-" + i); // Get the saved event from local storage

    if (event) {
      $("#hour-" + i).find(".description").val(event); // Set the value of the textarea
    }
  }

  // Display the current date in the header of the page
  var currentDate = dayjs().format("dddd, MMMM D, YYYY"); // Get the current date using Day.js
  $("#currentDay").text(currentDate); // Set the text of the currentDay element to the current date
});
