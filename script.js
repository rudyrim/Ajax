function request(req) {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            req(request.responseText);
        }
    };
    request.open("GET", "cities.json");
    request.send();
}

function result(req) {
    let cp = document.getElementById('Code');
    console.log(cp.value);

    let jsonObj = JSON.parse(req);
    document.getElementById("Cities").innerHTML = "";
    for (i = 0; i < jsonObj.length; i++) {
        if (jsonObj[i]["zip"] === cp.value) {
            console.log("jsonObj[i] = ",jsonObj[i]);
            document.getElementById("Zip").innerHTML = "<li>"+cp.value + "</li>";
            document.getElementById("Cities").innerHTML += "<li>" + jsonObj[i]["name"] + "</li>";
        }
    }
}
