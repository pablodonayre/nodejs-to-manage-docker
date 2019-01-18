function onStart() {
    //document.getElementById('response').value = "start clicked";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var result = JSON.parse(xhttp.responseText);
            if (result.success == true) {
                document.getElementById('response').value = 'Success';
            } else {
                document.getElementById('response').value = result.error;
            }
        }
    };
    xhttp.open("POST", "http://127.0.0.1:8082/start/mongodb", true);
    xhttp.send();
}

function onStop() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var result = JSON.parse(xhttp.responseText);
            if (result.success == true) {
                document.getElementById('response').value = 'Success';
            } else {
                document.getElementById('response').value = result.error;
            }
        }
    };
    xhttp.open("POST", "http://localhost:8082/stop/mongodb", true);
    xhttp.send();
}