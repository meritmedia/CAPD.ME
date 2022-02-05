function dSchedGet(sessionID, startTime, dwellTime2) {
    var myURL = DataConnect + "dailySchedGet";
    var myOut = "";
        myOut += "<div class='row'>";
        myOut += "<div class='col-4 text-center'>Treatment</div>";
        myOut += "<div class='col-4 text-center'>Drain Start</div>";
        myOut += "<div class='col-4 text-center'>Dwell Start</div>";
        myOut += "</div>";
    $.post(myURL, {
        sessionID: sessionID
        , startTime: startTime
        , dwellTime2: dwellTime2
    }, function (data) {
        var dataObj = JSON.parse(data);
        var tOrd = "";
        var drainStart = "";
        var dwellStart = "";
        var myNow = new Date();
        var drainTime = "";
        var add12 = "";
        //alert(myNow);
        var drainStartMin = "";
        var drainStartHr = "";
        var drainTimeSecs = 0;
        var bgColor = "";
        let myClass_ = 0;
        let myClass = "";
        $.each(dataObj, function (key, e) {
            tOrd = e.tOrd;
            drainStart = e.drainStart;
            dwellStart = e.dwellStart;
            drainStartMin = right(drainStart.replace(right(drainStart, 3), ''), 2);
            drainStartHr = drainStart.replace(right(drainStart, 6), '');
            if (drainStart.indexOf(' pm') > 0) {
                drainStartHr = parseInt(drainStartHr) + 12;
            }

            drainStartMin = right('00' + drainStartMin, 2);
            drainStartHr = right('00' + drainStartHr, 2);
            drainTimeMins = parseInt(drainStartHr) * 60 + parseInt(drainStartMin);
            //drainTime = new Date(myNow.toDateString());
            drainTime = new Date(new Date().toDateString());
            
            console.log("drainTime before: " + drainTime);
            drainTime.setMinutes(drainTime.getMinutes() + drainTimeMins);

            console.log("myNow: " + myNow + ",  drainTime: " + drainTime);
            console.log("myNow: " + myNow.getTime() + ",  drainTime: " + drainTime.getTime());
            console.log(myNow - drainTime.getTime() );
            if (myNow > drainTime.getTime()) {
                myClass = ' bg-secondary';
            } else {
                myClass = ' outlineMe';
                if (myClass_ > 0) { myClass = '';}
                myClass_++;
            }
            myOut += "<div class='row" + myClass + "'>";
            myOut += "<div class='col-4 text-center'>" + tOrd + "</div>";
            myOut += "<div class='col-4 text-center'>" + drainStart + "</div>";
            myOut += "<div class='col-4 text-center'>" + dwellStart + "</div>";
            myOut += "</div>";
        })
        $("#output").html(myOut);
        })
}

Date.prototype.getDateWithoutTime = function () {
    return new Date(this.toDateString());
}

$("#HDR").html("Daily Schedule");
var sessionID = getCookie("sessionID");
if (sessionID != "") {
    var startTime = localStorage.getItem("startTime");
    var dwellTime2 = localStorage.getItem("dwellTime2");
    $("#lastSaved").html("Last Saved: [startTime]: " + startTime + ", [dwellTime2]: " + dwellTime2);
    $("#startTime").val(startTime);
    $("#dwellTime2").val(dwellTime2);
    runIt();
}

$("#DailySchedGetBtn").on("click", function () {
      runIt();
})

$("#DailySchedSaveBtn").on("click", function () {
    var startTime = $("#startTime").val();
    var dwellTime2 = $("#dwellTime2").val();
    localStorage.setItem("startTime", startTime);
    localStorage.setItem("dwellTime2", dwellTime2);
    $("#lastSaved").html("Last Saved: [startTime]: " + startTime + ", [dwellTime2]: " + dwellTime2);
    runIt();
})
$("#DailySchedUseLastSavedBtn").on("click", function () {
    var startTime = localStorage.getItem("startTime");
    var dwellTime2 = localStorage.getItem("dwellTime2");
    $("#startTime").val(startTime);
    $("#dwellTime2").val(dwellTime2);
    runIt();
})
function runIt() {
    var startTime = $("#startTime").val();
    var dwellTime2 = $("#dwellTime2").val();
    dSchedGet(sessionID, startTime, dwellTime2);
}