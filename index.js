$(document).ready(function() {
    $("#searchterm").keyup(function(e) {
        e.preventDefault();
        var q = $("#searchterm").val();
        $.getJSON("http://en.wikipedia.org/w/api.php?callback=?", {
                srsearch: q,
                action: "query",
                list: "search",
                format: "json"
            },
            function(data) {
                $("#results").empty();

                $.each(data.query.search, function(i, item) {
                    $("#results").append("<div class='grid'><a class='title' href='http://en.wikipedia.org/wiki/" + encodeURIComponent(item.title) + "'target='_blank'" + ">" + item.title + "</a>" + "<div class='snippet'>" + item.snippet + "</div>" + "</div>");
                });
            });
    });
});