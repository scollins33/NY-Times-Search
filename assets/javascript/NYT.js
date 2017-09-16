
var searchTerm = 'ronald reagan'
var recordNumber = 0;
var startYear= '19000101';
var endYear = getEndYear();
var today = new Date();

function getEndYear () {
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

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

url += '?' + $.param({
    'api-key': "4bd4b70fd6a647289476db64bb764974",
    'q': searchTerm,
    'begin_date': startYear,
    'end_date': endYear
});
$.ajax({
    url: url,
    method: 'GET',
}).done(function(result) {
    console.log(url);
    console.log(result);
}).fail(function(err) {
    throw err;
});

$('#').on('click',function() {
    searchTerm = $('#').val().trim();
    recordNumber = $('#').val().trim();
    startYear = $('#').val().trim();
    endYear = $('#').val().trim();
})


$('#').append(result)

