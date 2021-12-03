var currentDayEl = $('#currentDay');



var date = moment().format('dddd, MMM Do YYYY');
currentDayEl.html(date);





$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var txt = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, txt);
    })

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


})
