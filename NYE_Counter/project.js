

const newYears = "1 January 2023";

function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    // get total seconds between the times
    var diff = Math.abs(newYearsDate - currentDate) / 1000;

    // calculate (and subtract) whole days
    var days = Math.floor(diff / 86400);
    diff -= days * 86400;

    // calculate (and subtract) whole hours
    var hours = Math.floor(diff / 3600) % 24;
    diff -= hours * 3600;

    // calculate (and subtract) whole minutes
    var mins = Math.floor(diff / 60) % 60;
    diff -= mins * 60;

    // what's left is seconds
    var seconds = Math.floor(diff % 60); 

    $("#days").text(days);
    $("#hours").text(hours);
    $("#mins").text(mins);
    $("#seconds").text(seconds);



    











}
countDown();
setInterval(countDown, 1000);