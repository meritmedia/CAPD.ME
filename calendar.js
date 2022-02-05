$("#HDR").html("Calendar");
var sessionID = getCookie("sessionID");

function calendarGet(searchCrit, calDate, calHeaderSysID) {
    var myURL = DataConnect + "calendarGet";
    var myOut = "";
    var myOut1 = "";
    var myOut2 = "";
    //alert(searchCrit);
    $.post(myURL, {
            searchCrit: searchCrit
        , calDate: calDate
        , calHeaderSysID: calHeaderSysID
    }, function (data) {
       // console.log(data);
        var dataObj = JSON.parse(data);
        var calDateSysID = "";
        var calDate = "";
        var calTime = "";
        var calHeaderSysID = "";
        var header = "";
        var myEvent = "";
        var myWhen = "";
        var myWhen_ = "";
        $.each(dataObj, function (key, e) {
            calDateSysID = e.calDateSysID;
            calDate = e.calDate;
            calTime = e.calTime;
            calHeaderSysID = e.calHeaderSysID;
            header = e.Header;
            
            myEvent = e.event;

            
            const currCalData = {};
            currCalData.calDate = calDate;
            currCalData.calTime = calTime;
            currCalData.header = header;
            currCalData.myEvent = myEvent;
            currCalData.calHeaderSysID = calHeaderSysID;
            currCalData.uSysID = localStorage.getItem("userSysID");
            localStorage.setItem('currCalData', JSON.stringify(currCalData));
            var test1 = localStorage.getItem('currCalData');

            var calDate_dte = new Date(calDate);
            var today = new Date();

           
            var daysBetween = getDaysBetweenDates(today, calDate_dte) + 1;

            if (daysBetween == 0) {
                myWhen = "today";
            }
            if (daysBetween == 1) {
                myWhen = 'tomorrow';
            }
            if (daysBetween > 1 && daysBetween <=7) {
                myWhen = 'next 7 days';
            }
            if (daysBetween > 7) {
                myWhen = 'post 8 days';
            }
            if (myWhen_ != myWhen) {
                myOut1 += "<div class='' style='background-color: hsla(42,50%,10%,1);color: white;font-size: 80%;font-stretch:ultra-expanded;text-transform:uppercase;'>" + myWhen + "</div>";
            }
            myOut1 += "<div class='calCol1 calDate' data-between='" + daysBetween + "' data-currcaldata='" + test1 + "' onclick='whoamI(this);' data - calheadersysid='" + calHeaderSysID + "'>";
            myOut1 += loseYr(calDate) + " " + calTime + " : " + header.replace("&amp;", "&").replace("&#33;", "\'");
            myOut1 += "</div>";

            myWhen_ = myWhen;

        })
        $("#col1").html(myOut1);
        
        })
        .fail(function () {
            alert("It didn't work.");
        })

}

function getDaysBetweenDates(d0, d1) {
    var msPerDay = 8.64e7;
    var x0 = new Date(d0);    // Copy dates so don't mess them up
    var x1 = new Date(d1);
    x0.setHours(12, 0, 0);    // Set to noon - avoid DST errors
    x1.setHours(12, 0, 0);
    return Math.round((x1 - x0) / msPerDay);    // Round to remove daylight saving errors
}

function whoamI(me) {
    var myClasses = $(me).attr("class");
    var myHeaderID = $(me).data("calheadersysid");
    var currCalData = $(me).data("currcaldata");

    $("#calDate").val(currCalData.calDate);
    $("#calTime").val(currCalData.calTime);
    
    var myHeader = htmlEntities1(currCalData.header);

    $("#header").val(myHeader);

    var myEvent = htmlEntities1(currCalData.myEvent);

    $("#myEvent").val(myEvent);

    $("#calHeaderSysID").val(currCalData.calHeaderSysID);
    uSysID = currCalData.uSysID;
}

function calendarSave(searchCrit, calDate, calTime, calHeader, calDetails) {
    let myURL = DataConnect + "calendarAdd";
    console.log("details: " + calDetails);
    $.post(myURL,
        {
            searchCrit: searchCrit
            , calDate: calDate
            , calTime: calTime
            , calHeader: calHeader
            , calDetails:calDetails
        }, function (data) {
            var dataObj = JSON.parse(data);
            var calHdrSysID = "";
            var calDate = "";
            var calTime = "";
            var Header = "";
            var details = "";
            $.each(dataObj, function (key, e) {
                calHdrSysID = e.calHdrSysID;
                calDate = e.calDate;
                calTime = e.calTime;
                Header = e.Header;
                details =e.details;
            })
            $("#calDate").val(calDate);
            $("#calTime").val(calTime);
            $("#header").val(htmlEntities1(Header));
            $("#myEvent").val(htmlEntities1(details));
            $("#calHeaderSysID").val(calHdrSysID);
        })
        .done(function () {
            console.log("second success");
            calendarGet(sessionID, '', '');
        })
        .fail(function () {
            console.log("error");
        })
}
function calendarDelete(searchCrit) {
    let myURL = DataConnect + "calendarDelete";
    $.post(myURL, {
        searchCrit: searchCrit
    }, function (data) {
        })
        .done(function () {
            alert("Event deleted.")
            calendarGet(sessionID, '', '');
        })
}

$("#calendarSaveBtn").on("click", function () {
    //alert("Let's save this bad boy!");
    let searchCrit = getCookie("userSysID");
    let calDate = $("#calDate").val();
    let calTime = $("#calTime").val();
    let calHeader = htmlEntities($("#header").val());
    calHeader = calHeader.replace("&", "&amp;");
    let calDetails = htmlEntities($("#myEvent").val());
    calDetails = calDetails.replace("&", "&amp;");
    calendarSave(searchCrit, calDate, calTime, calHeader, calDetails);
})
$("#calendarDeleteBtn").on("click", function () {
    let searchCrit = $("#calHeaderSysID").val();
    if (searchCrit == '' || searchCrit == null) {
        alert("Nothing to delete");
    }
    else {
        calendarDelete(searchCrit);
        calendarGet(localStorage.getItem("userSysID"));
    }
})


if (sessionID != '') {
    calendarGet(sessionID);
    }
else {
    let uSysID = localStorage.getItem("userSysID");
        if (uSysID == '') {
            alert("Nothing to fear. Please log in.");
            logoff(sessionID);
            location.href = "default.aspx";
            }
        else {
            calendarGet(uSysID);
            }
        }

