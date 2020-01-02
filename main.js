
function getTime() {

    var initialTime = document.getElementById("initialTimeZone").value; //works
    var finalTime = document.getElementById("finalTimeZone").value; //works

    var givenTime = document.getElementById("appt").value; //works

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = mm + ' ' + dd + ' ' + yyyy; //works


    var unixtime = Date.parse(today.toString() + " " + givenTime.toString() + ":00 EST")/1000;

    console.log(initialTime);
    console.log(finalTime);
    console.log(today.toString() + " " + givenTime.toString() + ":00 EST");
    console.log(unixtime);


    fetch("http://api.timezonedb.com/v2.1/convert-time-zone?key=EKY30YAV2E66&format=json&fields=toTimestamp&from=" + initialTime + "&to=" + finalTime + "&time=" + unixtime)
        .then((resp) => resp.json())
        .then(function(data) {
            var date = new Date(data.toTimestamp*1000);
            var hours = date.getHours();
            var minutes = "0" + date.getMinutes();
            var formattedTime = hours + ':' + minutes.substr(-2);
            document.getElementById("output").value = formattedTime;
        })

}
