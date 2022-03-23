function shuffleArray(arr) {
    arr.sort(() => Math.random() - 0.5);
    return arr
}

function showPanjere(URL, count=3) {

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = xmlhttp.response.split("\n");
        showRandomLinks(myArr, count);
      }
    };
    xmlhttp.open("GET", URL, true);
    xmlhttp.setRequestHeader('Accept', 'application/text');
    xmlhttp.send();

    function showRandomLinks(links, count) {
        var out = "";
        links = shuffleArray(links).slice(0, count);
        for(var i = 0; i < links.length; i++) {
            console.log(links[i])
            var url = links[i].split("@@@")[0];
            var title = links[i].split("@@@")[1] || "";
            out += '<li> <a href="' + url + '" target="_blank" style="target-new: tab;" >' +
                title + '</a></li>';
        }

        document.getElementById("panjere").style.direction = "rtl";
        document.getElementById("panjere").style.listStyleType = "none";
        document.getElementById("panjere").innerHTML = out;
        var panjere = document.getElementById("panjere")
    }
}

