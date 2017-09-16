var today = new Date();
var baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
var searchTerm = 'ronald reagan';
var recordNumber = 0;
var startYear= '19000101';
var endYear = getEndYear(today);

function getEndYear (pDay) {
    var thisDay = pDay.getDate();
    var thisMonth = pDay.getMonth();
    var thisYear = pDay.getFullYear();

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

// https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=4bd4b70fd6a647289476db64bb764974&q=ronald+reagan&begin_date=19900101&end_date=20170101
var callURL = baseURL + 'api-key=4bd4b70fd6a647289476db64bb764974' +
    '&q=' + searchTerm +
    '&begin_date=' + startYear +
    '&end_date=' + endYear;

$.ajax({
    url: callURL,
    method: 'GET',
}).done(function(result) {
    console.log(callURL);
    console.log(result);
}).fail(function(err) {
    throw err;
});

$('#').on('click',function() {
    searchTerm = $('#').val().trim();
    recordNumber = $('#').val().trim();
    startYear = $('#').val().trim();
    endYear = $('#').val().trim();

    if (startYear === null) {
        startYear = 19000101;
    }

    if (endYear === null) {
        endYear = getEndYear();
    }


});


$('#').append(result)

