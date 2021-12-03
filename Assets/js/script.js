//setting some variables - need to make more to have more dynamic code
var currentDayEl = $('#currentDay');



//current date-time - need to incorporate this into function for time
var date = moment().format('dddd, MMM Do YYYY');
currentDayEl.html(date);




//saving to local storage - could improve this to retain history of entries
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var txt = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, txt);
    })

    //this is a filler - not currently working - need to rework to be more dynamic to the fields


    //see below comments
    function timeClock() {
        var currentTime = moment().hour();

        $(".time-block").each(function () {
            var stopTime = parseInt($(this).attr("id").split("hour")[1]);

            if (stopTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }

            else if (stopTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }

            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    //see below comment
    $("hr8. description").val(localStorage.getItem("hr8"));
    $("hr9. description").val(localStorage.getItem("hr9"));
    $("hr10. description").val(localStorage.getItem("hr10"));
    $("hr11. description").val(localStorage.getItem("hr11"));
    $("hr12. description").val(localStorage.getItem("hr12"));
    $("hr13. description").val(localStorage.getItem("hr13"));
    $("hr14. description").val(localStorage.getItem("hr14"));
    $("hr15. description").val(localStorage.getItem("hr15"));
    $("hr16. description").val(localStorage.getItem("hr16"));
    $("hr17. description").val(localStorage.getItem("hr17"));

    timeClock();

    //compliments of KyleTChiu - I needed a framework to build ideas for improvement
})
