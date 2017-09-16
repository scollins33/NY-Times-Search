function getEndYear () {
    var today = new Date();
    var thisDay = today.getDate();
    var thisMonth = today.getMonth();
    var thisYear = today.getFullYear();

    if (thisDay < 10) {
        thisDay = '0' + thisDay;
    }

    if (thisMonth < 10) {
        thisMonth = '0' + thisMonth;
    }

    var endYear = thisYear + thisMonth + thisDay;

    console.log(endYear);
    return endYear;
}