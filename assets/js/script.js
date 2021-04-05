$(document).ready(function () { //call back function
    var currentDate= moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(currentDate);

    $(".saveBtn").on('click', function () {  //always takes two arguments
        let value = $(this).siblings('.text').val()
        
        let time = $(this).parent().attr('id')

        localStorage.setItem(time, value) //key value pairs also //no need for quotes on var

    } );

function timeColor() {
    let currentHour= moment().hours()
    $(".time-block").each( function() {
        let hour = parseInt($(this).attr('id'))
console.log(hour)
        if (hour < currentHour) {
            $(this).addClass('past')

        } else if (hour === currentHour) {
            $(this).removeClass('past')

            $(this).addClass('present')
        } else {
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass('future')
        }
    })
}

timeColor();

let interval = setInterval(timeColor, 15000)  //always takes in 2 arguments 1. name of fun or callback 2. number of mil sec this fun will run at


$("#9 .text").val(localStorage.getItem('9'));
$("#10 .text").val(localStorage.getItem('10'));
$("#11 .text").val(localStorage.getItem('11'));
$("#12 .text").val(localStorage.getItem('12'));
$("#13 .text").val(localStorage.getItem('13'));
$("#14 .text").val(localStorage.getItem('14'));
$("#15 .text").val(localStorage.getItem('15'));
$("#16 .text").val(localStorage.getItem('16'));
$("#17 .text").val(localStorage.getItem('17'));

})

// all colums live in a row have to equal to 12







