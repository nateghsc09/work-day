
var currentDay = $('#currentDay');

var timeInterval;
var allPlans = [];
function setTime() {
    currentDay.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}

timeInterval = setInterval(setTime, 1000);



var timeblocks = $('.time-block');
console.log(timeblocks);
timeblocks.each(function () {
    var specificTimeblock = $(this);
    var specificTimeblockId = specificTimeblock.attr('id');

    specificTimeblockId = parseInt(specificTimeblockId);

    var currentHour = moment().hour();
    console.log(specificTimeblockId);
    if (currentHour > specificTimeblockId) {
        specificTimeblock.addClass('past');
    } else if (currentHour === specificTimeblockId) {
        specificTimeblock.addClass('present');
    } else {
        specificTimeblock.addClass('future');
    }


});

var saveBtn = $('.save');


console.log(saveBtn);

saveBtn.click(function (event) {
    event.preventDefault();
    var clickedButton = $(this);
    var buttonTime = $(this).parent();
    var buttonText = $(this).siblings('textarea');

    var newPlan = {
        time: buttonTime.attr('id'),
        text: buttonText.val()

    }
    allPlans.push(newPlan)
    console.log(allPlans);
    localStorage.setItem('plans', JSON.stringify(allPlans));


})

function getAllExstingPlans() {
    if (localStorage.getItem('plans')) {
        allPlans = JSON.parse(localStorage.getItem('plans'));

    }
    if (allPlans.length > 0) {
        for (var i = 0; i < allPlans.length; i++) {
            console.log(allPlans[i]);
            var parent = $(`#${allPlans[i].time}`);
            var textAreaChild = parent.children('textarea');
            textAreaChild.val(allPlans[i].text)
            console.log(parent);
        }
    }
}
getAllExstingPlans();