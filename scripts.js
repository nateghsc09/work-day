
var currentDay = $('#currentDay');

var timeInterval;
function setTime () {
    currentDay.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}

timeInterval = setInterval(setTime, 1000);



var timeblocks = $('.time-block');
console.log(timeblocks);
timeblocks.each(function() {
    var specificTimeblock =$(this);
    var specificTimeblockId = specificTimeblock.attr('id');

specificTimeblockId = parseInt(specificTimeblockId);

var currentHour = moment().hour();
console.log( specificTimeblockId);
if (currentHour > specificTimeblockId) {
    specificTimeblock.addClass('past');
} else if (currentHour === specificTimeblockId){
    specificTimeblock.addClass('present');
} else {
    specificTimeblock.addClass('future');
}







});

