var timeDisplayEl = $("#currentDay");
var todayIs = dayjs().format("dddd, MMMM D, YYYY");
timeDisplayEl.text(todayIs);

// format past present future
// I need to get the current hour of the day
var currentHour = dayjs().hour();

// create a foreach loop that loops over each .time-block
$(".time-block").each(function () {
  // check  the current hour vs block hour (which is going to be the id)
  var blockHour = $(this).attr("id");

  // current > blockHour this will need a class of past
  if (currentHour > blockHour) {
    $(this).addClass("past");
  }

  // conditions needed: currentHour == blockHour this will need a class of present
  else if (currentHour == blockHour) {
    $(this).addClass("present");
  }

  // else this wil need a class of future
  else {
    $(this).addClass("future");
  }
});

// The  function below will save the user's input in a textarea to localStorage - only when the corresponding save button has been clicked.

function textEntry() {
  $(".saveBtn").on("click", function () {
    const key = $(this).parent().attr("id");
    const value = $(this).siblings(".description").val();
    localStorage.setItem(key, value);
  });
}
textEntry();

// This will get the user input from the localStorage and set textarea values for each time block.
$(".time-block").each(function () {
  const key = $(this).attr("id");
  const value = localStorage.getItem(key);
  $(this).children(".description").val(value);
});
