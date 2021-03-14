
var currentDay = $('#currentDay');

var timeInterval;
function setTime () {
    currentDay.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}

timeInterval = setInterval(setTime, 1000);




