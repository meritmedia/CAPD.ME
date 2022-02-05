$("#viewLogBtn").on("click", function () {
    $("#output").html(mySpinner).show();
    viewLog(
        //$("#uSysID").val()
        uSysID
        , $("#tDate").val()
    )
})

//$("#logEntryBtn").on("click", function () {
//    location.href = "logEntry.aspx";
//})
//$("#addOtherDataBtn").on("click", function () {
//    location.href = "addOtherData.aspx";
//})


function viewLog(sysID, tDate) {
    var myURL = DataConnect + "viewLog";
    var myOut = "";
   // alert(sysID + ":" + tDate);
    $.post(myURL
        , {
              sysID: sysID
            , tDate: tDate
        }
        , function (data) {
            var dataObj = JSON.parse(data);
           // console.log(dataObj);
            var tDate_ = "";
            var last_tDate = "";
            var tOrd = "";
            var drain = "";
            var dose = "";
            var drain2 = ""
            var sysID_tDate = "";
            var weght = "";
            var BP = "";
            var pulse = "";
            var otherData = "";
            var last_tDate = "";
            var part1 = "";
            var comment = "";
            var recDateC = "";
            var recTimeC = "";
            //var comment = "";
            var hdr = "<div class='row outputHDR'>" +
                // "<div class='col-3 text-left'>Date</div>" +
                "<div class='col-3 text-center'>#</div>" +
                "<div class='col-3 text-center'>Drain</div>" +
                "<div class='col-3 text-center'>Dose</div>" +
                "<div class='col-3 text-center'>Drain+</div>" +
                "</div>";
            $.each(dataObj, function (key, e) {
                tDate_ = e.tDate;
                tOrd = e.tOrd;
                drain = e.drain;
                dose = e.dose;
                drain2 = e.drain2;
                sysID_tDate = e.sysID_tDate;
                weight = e.wt;
                BP = e.BP;
                pulse = e.pulse;
                comment = e.comment;
               // recDateC = e.recDateC;
               // recTimeC = e.recTimeC;
                //    myComments = $("#tempComments").html(commentGet(sysID_tDate));
                   // alert("viewlog.js: " + $("#tempComments").html());
               // commentGet(sysID_tDate);
                if (tOrd == '1') {
                    otherData = "<div class='row outputAttr'>";
                    otherData += "<div class='col-3 text-left'><span>Date:</span> " + tDate_ + "</div>";
                    otherData += "<div class='col-3 text-center'><span>Weight:</span> " + [weight] + "</div>";
                    otherData += "<div class='col-3 text-center'><span>BP:</span> " + BP + "</div>";
                    otherData += "<div class='col-3 text-center'><span>Pulse:</span> " + pulse + "</div>";
                    otherData += "</div>";
                    //alert("viewlog l68: "+ commentGet(sysID_tDate, ''));
                    if (comment != '') {
                        otherData += "<div class='row'><div class='col-12' style='line-height: 0.8;' >Comments: " + comment + "</div></div>";
                    }
                }

                part1 = "<div class='row' style:'padding-bottom:1px;margin-bottom: 1px;'>" +
                    "<div class='col-3 text-center'>" + tOrd + ".</div>" +
                    "<div class='col-3 text-center'>" + drain + "</div>" +
                    "<div class='col-3 text-center'>" + dose + "</div>" +
                    "<div class='col-3 text-center'>" + drain2 + "</div>" +
                    "</div>";
                if (tOrd == '1') {
                    myOut += otherData + hdr + part1;
                }
                else {
                    myOut += part1;
                }
                last_tDate = tDate;

                //otherData += "<div class='row'><div class='col-sm-12'><hr></div></div>";

            })

            myOut += "<div class='row' style='border-top:3px solid black;'>";
            myOut += "<div class='col-sm-12'></div > ";
            myOut += "</div>";
        }

    )
            .done(function () {
            $("#output").html(myOut);
                logSave(uSysID, htmlEntities(myOut));
            })
}

function logSave(uSysID,myOut) {
    var myURL = DataConnect + "logSave";
   // alert(myURL + ":" + uSysID + ":");
    $.post(myURL
        , {
            uSysID: uSysID
            , myOut: myOut
        }, function (data) {
            getSavedLogs(uSysID);
        })
    .fail(function (data) {
        console.log("Error. Not saved.");
    })
}

function getSavedLogs(uSysID) {
    var myURL = DataConnect + "myOut";
    var myOut = "<select id='sysID'>";
    $.post(myURL
        , {
            uSysID: uSysID
        }, function (data) {
            var dataObj = JSON.parse(data);
            var sysID = "";
            var recDate = "";
            $.each(dataObj, function (key, e) {
                sysID = e.sysID;
                recDate = e.recDate;
                myOut += "<option value='" + sysID + "'>" + recDate + "</option>";
            })
            myOut += "</select>";
            $("#savedLogs").html(myOut);
        })
}

$("#prevLogBtn").on("click", function () {
    var sysID = $("#sysID").val();
    getSavedLog(sysID);
})
function getSavedLog(sysID) {
    var myURL = DataConnect + "myOut1";
    var myOut = "";
    $.post(myURL
        , {
            sysID: sysID
        }, function (data) {
            var dataObj = JSON.parse(data);
            var myLog = "";
            var recDate = "";
            $.each(dataObj, function (key, e) {
                myLog = e.myLog;
                recDate = e.recDate;
                myOut += "<div class='row'><div class='col-12'>" + recDate + "</div></div>";
                //myOut += decodeURIComponent(myLog);
                //myOut += decodeURI(myLog);
                
               // myOut += htmlEntities1(myLog);
                myOut += myLog;
            })
            
            $("#output").html(myOut);
        })
}


function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function htmlEntities1(str) {
    return String(str).replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>').replace('&quot;', '"');
}