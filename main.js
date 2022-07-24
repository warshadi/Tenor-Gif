$(document).ready(function () {
    var apikey = "AIzaSyClOOW2QCV4mYAETLGnYC8S9tS_z8cK5bE";
    var clientkey = "tenor";
    var lmt = 12;
    $("#btn").click(function () {
        // here remove old search
        $("img").remove();
        
        var term = $("#search").val();
        var url = "https://tenor.googleapis.com/v2/search?q=" + term + "&key=" +
        apikey +"&client_key=" + clientkey +  "&limit=" + lmt;

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var myArr = JSON.parse(this.responseText);
 
                for(let i = 0; i < myArr["results"].length; i++) {
                    var src = myArr["results"][i]["media_formats"].gif.url;
                    $("#show").append("<img src="+ src +">");
                }
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

    });

});




