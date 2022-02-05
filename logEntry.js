var d1 = formatDate(d);
$('#tDate').val(d1);

$("#uSysID").val(getCookie('userSysID'));
setCookie("last_drain", $("#drain").html(), 1);



function getFlush() {
    var result = $('#bagWt').val() - $('#dose').val();
    $('#flush').html(result);
}

function getDrainAndFlush() {
    getFlush();
    var result = parseInt($('#flush').html()) + parseInt($('#drain').val());
    $('#drain2').html(result);
}
function doCalcs() {
    getDrainAndFlush();
}
$("#drain2").click(function () {
            $("#defaults").toggle(200);
        })


$("#HDR").html("Log Entry");
doCalcs();

function tDateeVal(tDate) {
    var today = new Date();
    var tDate_d = new Date(tDate);
    if (tDate_d > today) {
        $("#logEntrygBtn").off("click")
    } else {
        //
    }
}



function logEntry(uSysID, bagWt, dose, tDate, tOrd, drain) {
    console.log("logEntry()");
    var myURL = DataConnect + "logEntry";
    setCookie("drain", drain, 1);
    var myOut = "";
    $.post(myURL
        , {
            usysID: uSysID
            , bagWt: bagWt
            , dose: dose
            , tDate: tDate
            , tOrd: tOrd
            , drain: drain
        }
        , function (data) {
            var dataObj = JSON.parse(data);

            var errCode = "";
            var msg = "";
            var tDate_ = "";
            var tOrd = "";
            var bagWt = "";
            var dose = "";
            var drain = "";
            var time = "";
            $.each(dataObj, function (key, e) {
                errCode = e.errCode;
                msg = e.msg;
                tDate_ = e.tDate;
                tOrd = e.tOrd;
                bagWt = e.bagWt;
                dose = e.dose;
                drain = e.drain;
                time = e.time;
                if (errCode == '01') {
                    myStyle = "entry01";
                } else {
                    myStyle = "entry02";
                }
                myOut += "<div class='row'>" +
                    "<div class='col-12 " + myStyle + "' > " + errCode + ": " + msg + "</div></div> ";
                myOut += "<div class='row'>" +
                    "<div class='col-4'>Time</div>" +
                    "<div class='col-2 text-center'>#</div>" +
                    "<div class='col-3 text-center'>Drain</div>" +
                    "<div class='col-3 text-center'>Dose</div>" +
                    "</div>";
                myOut += "<div class='row'>" +
                    "<div class='col-4'>" + time + "</div>" +
                    "<div class='col-2 text-center'>" + tOrd + ".</div>" +
                    "<div class='col-3 text-center'>" + drain + "</div>" +
                    "<div class='col-3 text-center'>" + dose + "</div>" +
                    "</div>";


            })

            $("#output").html(myOut);//.delay(5000).hide(1000);
           // $("#last_updated").html(time);
           // $("#tLogMenu").toggle();
        })
        .done(function () {
            calendarGet(sessionIDCheck(sessionID), '', '');
        })

}


const settings = [];
function parseSettings(callback) {
    console.log("parseSettings()");
    $("#Div1").hide();
    //var settingsJson = settings_json; //$("#Div1").html();
    //alert("settings_json: " + settings_json );
    var dataObj = JSON.parse(settings_json);
    var uSysID = "";
    var sSysID = "";
    var val1 = "";
    var val2 = "";
    var val3 = "";
    var val4 = "";
    var inventory = "";
    $.each(dataObj, function (key, e) {
        uSysID = e.uSysID;
        sSysID = e.sSysID;
        val1 = e.val1; // dose
        val2 = e.val2; // max TOrd
        val3 = e.val3; // bagWt
        val4 = e.val4; // dwell hr
        inventory = e.inventory;
        settings[0] = uSysID;
        settings[1] = sSysID;
        settings[2] = val1; // dose
        settings[3] = val2; // max TOrd
        settings[4] = val3; // bagWt
        settings[5] = inventory;
        settings[8] = val4; // dwell hour
        //alert("dose: " + settings[2]);
    })
   // console.log("val3=" + val3);
    
    if (val1 == "_") {
        let sessionID = sessionIDCheck("sessionID");
        confirm("All is well. " + sessionID + ", val1:" + "_" + ", DIV1: " + ("#Div1").html());
        if (confirm(msg) == false) {
            getSettings(sessionID);
            return;
        } else {
            logoff(sessionID);
            location.href = "default.aspx";
        }
    }
    $("#bagWt").val(settings[4]);
    $("#bagWtOut").html(settings[4]);
    $("#dose").val(settings[2]);
    $("#doseOut").html(settings[2]);
    //setCookie("drain", val1, 1);
    $("#max_tOrd").html(settings[3]);
    //alert("settings[3]: " + settings[3]);
    var invDays = parseInt(settings[5]) / (settings[3] * 1.0);
    $("#inventory").html(settings[5] + " bags");
    $("#inventory").data("inv", invDays + " days");
    settings[6] = $("#inventory").html();
    settings[7] = "inv", invDays + " days";
   // alert("parseSettings uSysID" + " :" + val2);
    callback(getAvg(getCookie('userSysID')));
    doCalcs();
}
$("#inventory").on("click", function () {
    var inv1 = $("#inventory").data("inv");
    var inv2 = $("#inventory").html();
    $("#inventory").data("inv", inv2);
    $("#inventory").html(inv1);
    //alert(invDays + " days");
})

const sDrain = [];
const lastLog = [];
function parseLastLog(callback) {
    console.log("parseLastLog()");
    //$("#lastLog").hide();
   // alert("parseLastLog");
    var lastLogJson = $("#lastLog").html();
    var myOut = "";
   //alert("LastLog");
    var dataObj = JSON.parse(lastLogJson);
    var val1 = "";
    var val2 = "";
    var val3 = "";
    var val4 = "";
    var val5 = "";
    var val6 = "";
    var val7 = "";
    var val8 = "";
    var val9 = "";
    var val10 = "";
    $.each(dataObj, function (key, e) {
        val1 = e.val1;  //tDate
        val2 = e.val2; // tOrd
        val3 = e.val3;  //drain
        val4 = e.val4; // dose
        val5 = e.val5; // bagWt
        val6 = e.val6; // flush
        val7 = e.val7; // drain2
        val8 = e.val8; // recDate
        val9 = e.val9; // recTime
        val10 = e.val10; // tDate_sysID
        lastLog[1] = val1;
        lastLog[2] = val2;
        lastLog[3] = val3;
        lastLog[4] = val4;
        lastLog[5] = val5;
        lastLog[6] = val6;
        lastLog[7] = val7;
        lastLog[8] = val8;
        lastLog[9] = val9;
        lastLog[10] = val10;
        lastLog[11] = val8 + " " + val9;
        //
        var lastDateTime = new Date(lastLog[11]);
        var myNow = new Date();
        var hours = Math.abs(myNow - lastDateTime) / 36e5;
        hours = Math.round(hours * 10) / 10;

        lastLog[12] = hours;
        //
        setCookie("lastDateTime", lastLog[11]);
        setCookie("tDateSysID", val10, 1);
        setCookie("last_tOrd", val2, 1);
       // console.log("tDateSysID: " + val10);
        myOut += "<div class='row'>" +
            "<div class='col-12 entry01'>Last Log Entry</div></div>";
        myOut += "<div class='row' style='border-bottom: 1px solid black;background-color: hsla(0,0%,0%,0.1);'>" +
            "<div class='col-4'>Time</div>" +
            "<div class='col-2 text-right'>#</div>" +
            "<div class='col-3 text-center'>Drain</div>" +
            "<div class='col-3 text-center'>Dose</div>" +
            "</div>";
        myOut += "<div class='row' style='background-color: hsla(0,0%,0%,0.1);'>" +
            "<div class='col-4'>" + val9 + "</div>" +
            "<div class='col-2 text-right'>" + val2 + ".</div>" +
            "<div class='col-3 text-center'>" + val3 + "</div>" +
            "<div class='col-3 text-center'>" + val4 + "</div>" +
            "</div>";

        let tO = parseInt(lastLog[2]); // the last tOrd
       
        tO = tO + 1;
        //console.log("tO: " + tO + ", settings[3]: " + settings[3]);
        if (tO > parseInt(settings[3])) {
            tO = 1;
        }

        //$("#tOrd").html(val2);
        $("#tOrd").html(tO);

        tOrds[0] = val2;
        $("#min_tOrd").html(val2);
        $("#dose").val(val4);
        $("#drain").html(val3);
        sDrain[0] = val3;
    })
    $("#output").html(myOut);
    //commentSave(val10, '');
    var commentSaveKey = $("#tDate").val() + ":" + getCookie("userSysID");
    //alert(commentSaveKey);
    commentSave(commentSaveKey, '');
    callback;
}

function commentSave(sysID, comment) {
    var myOut = "";
    var myURL = DataConnect + "commentSave";
    $.post(myURL
        , {
            sysID: sysID
            , comment: comment
        }, function (data) {
            var dataObj = JSON.parse(data);
            var val1 = "";
            var val2 = "";
            var val3 = "";
            $.each(dataObj, function (key, e) {
                val1 = e.val1;
                val2 = e.val2;
                val3 = e.val3;
                myOut += val2 + "<br/>" + val3;
            })
            $("#comment").val(htmlEntities1(unescapeHTML(val1)));
            //  alert(val1);
            $("#commentDateTime").html(myOut);
        })
}

function getAvg(uSysID) {
    var myURL = DataConnect + "AvgDrainGet";
    var tOrd_ = "";
    sDrain[x] = getCookie("drain");
    $.post(myURL
        , {
            uSysID: uSysID
            ,   tOrd: tOrd_
        }, function(data) {
            var dataObj = JSON.parse(data);
            //console.log(dataObj );
            var tOrd1 = 0;
            var avgDrain = "";
            $.each(dataObj, function (key, e) {
                tOrd1 = parseInt(e.tOrd);
                avgDrain = e.avgDrain;
                sDrain[tOrd1] = avgDrain;
            })
        })
       //console.log(sDrain);
}


$("#saveCommentsBtn").on("click", function () {
   // var sysID = getCookie("tDateSysID");
    var sysID = $("#tDate").val();
    var comment = $("#comment").val();
    //escapeHTML('<a href="#">Me & you</a>');
    //commentSave(val10, '');
    var commentSaveKey = $("#tDate").val() + ":" + getCookie("userSysID");
    //alert(commentSaveKey);
    commentSave(commentSaveKey, htmlEntities(escapeHTML(comment)));
})

const tOrds = [];




function moveVal(start, amount, moveDir) {
    var startVal = $('#' + start);
    if (moveDir == '-') {
        amount = parseInt(amount) * -1;
    }
    var result = parseInt(startVal.html()) + parseInt(amount);
    startVal.val(result);
    doCalcs();
}

let x = 1;
$("#drain").on("click", function () {
    var drain_ = sDrain[x];
    if (x < sDrain.length) {
        $("#drain").html(sDrain[x]);
    } else {
        x = 0;
        $("#drain").html(sDrain[x]);
    }
    $("#sDrainX").html(x);
    x++;
    doCalcs();
})

$("#logEntrygBtn").on("click", function () {
    var tDate = $("#tDate").val();
    tDateeVal(tDate);
    var temp = $("#output").html();
    $("#output").html(mySpinner);
    $("#logEntryOutput").show();
    

        //alert("hrs since: " + lastLog[12] + " : [0] : " + tOrds[0] +
        //    " : [1] : " + tOrds[1] +
        //    " : [2] : " + tOrds[2] +
        //    " : [3] : " + tOrds[3]);
    if (parseInt(lastLog[12]) >= 1 && tOrds[1] == tOrds[3]) {
        msg = "Please check your treatment #. It's been more than an hour since you last updated treatment #" + tOrds[3] + ". ";
        msg += "Click 'CANCEL' to NOT log this entry...";
        if (confirm(msg) == false) {
            alert("You cancelled.");
            $("#output").html(temp);
            return;
        }
    }
        else {
        //alert("hrs since: " + lastLog[12] + " : [0] : " + tOrds[0] + " : [1] : " + tOrds[1] + " : [2] : " + tOrds[2] + " : [3] : " + tOrds[3]);
        }


    var uSysID = getCookie('userSysID');
    //setCookie("last_tOrd", $("#tOrd").val(), 1);
    setCookie("last_tOrd", $("#tOrd").html(), 1);
    setCookie("last_drain", $("#drain").html(), 1);
    //$("#output").html();
    // alert("uSysID: " + uSysID);
    $("#output").show();
    //alert("uSysID: " + uSysID + ", tOrd: " + tOrd + ", tDate: " + tDate);
    logEntry(
        //$("#uSysID").val()
        uSysID
        , $("#bagWt").val()
        , $("#dose").val()
        , $("#tDate").val()
        //, $("#tOrd").val()
        , $("#tOrd").html()
        , $("#drain").html()
    )
})

$("#sDrainX").on("click", function () {
    alert("Hours: " + lastLog[12]);
})


function calendarGet(searchCrit, calDate, calHeaderSysID) {
    console.log("calendarGet()");
    var myURL = DataConnect + "calendarGet";
    var myOut = "";
    var myOut1 = "";
    var myOut2 = "";
    var limit = 5;
    $.post(myURL, {
        searchCrit: searchCrit
        , calDate: calDate
        , calHeaderSysID: calHeaderSysID
    }, function (data) {
        
        var dataObj = JSON.parse(data);
        var calDateSysID = "";
        var calDate = "";
        var calTime = "";
        var calHeaderSysID = "";
        var header = "";
        var myEvent = "";
        
        $.each(dataObj, function (key, e) {
            calDateSysID = e.calDateSysID;
            calDate = e.calDate;
            calTime = e.calTime;
            calHeaderSysID = e.calHeaderSysID;
            
            header = e.Header;
            myEvent = e.event;
            if (limit > 0) {
            myEvent = htmlEntities1(myEvent).replace("&amp;", "&").replace("&#33;", "/'");
            header  = htmlEntities1(header).replace("&amp;", "&").replace("&#33;", "/'");
            myOut1 += "<div class='calCol1 calDate' ";
            myOut1 += " style='font-stretch:extra-condensed;font-size:80%;line-height:90%;' onclick = 'whoamI(this);' data-calheadersysid='" + calHeaderSysID + "' > ";
            myOut1 += loseYr(calDate) + " " + calTime + " : " + header + "</div > ";

            myOut2 += "<div onclick='wellwhoamI(this);' class='row calCol2 calEvent toHide' data-calheadersysid='" + calHeaderSysID + "'>";
            myOut2 += "<div class='col-12'><span style='float:right;background-color:red;'>[X]</span><span>";
            myOut2 += loseYr(calDate) + "</span>&nbsp;&nbsp;";
            myOut2 += "<span>" + calTime + "</span></div>";
            myOut2 += "<div class='col-12'><span>Event:</span>&nbsp;" + header + "</span></div>";
            myOut2 += "<div class='col-12'><span>Detail:<span>&nbsp;" + myEvent + "</span></div>";
            myOut2 += "</div>";
            }
            limit--;

        })

        //let x = $("#output").append(myOut1);
        //x = $("#output").append(myOut2);
        })
        .done(function () {
            //alert("Calendar has loaded.");
            $("#output").append(myOut1);
            $("#output").append(myOut2);
        })
        .fail(function () {
            alert("Calendar not loaded.");
        })
}



function whoamI(me) {
    console.log("whoamI()");
    var myClasses = $(me).attr("class");
    var myHeaderID = $(me).data("calheadersysid");
    let pos = myClasses.search('calCol1');
    //alert("myClasses: " + myClasses + ", myHeaderID: " + myHeaderID);
    if (pos >= 0) {
        $(".calCol2[data-calheadersysid='" + myHeaderID + "']").show();
        $(".calCol1").hide(200);
    }
}
function wellwhoamI(me) {
    console.log("wellwhoamI()");
    $(".calCol1").show(200);
     $(me).hide();
}

$(".calCol2").on("click", function () {
    $(".calCol2").hide(200);
})

var tOrdSelect_prev = $("#tOrdSelect").html();
$("#changeHistory").on("click", function () {
    let selectTord = "<input type='number' id='tOrd' min='1' value='1' max='" + $("#max_tOrd").html() + "' size='3' />" +
        "<input type='button' onclick='doneChange(this)' value='Done'/>";
    $("#tOrdSelect").html(selectTord);
})
function doneChange(me) {
    console.log("doneChange()");
    let newtOrd = $(me).prev().val();
    $("#tOrdSelect").html(tOrdSelect_prev);
    $("#tOrd").html(newtOrd);
}

var settings_json = "";

function getSettings(sessionID) {
    console.log("getSettings()");
    let myURL = DataConnect + "SettingsSet";
    $.post(myURL, {
        sessionID: sessionID
    }, function (data) {
        settings_json = data;
        console.log("settings_json: " + settings_json);
        $("#Div1").html(settings_json);
       // alert("I'm ready: " + settings_json);
        imReady(settings_json);
    })
        .done(function (data) {
        })
        .fail(function (data) {
            alert("2) What went wrong? " + data);
        })
}

var lastLog_json = "";

function getLastLog(sessionID) {
    console.log("getLastLog()");
    let myURL = DataConnect + "GetLastLog";
    $.post(myURL, {
        sessionID: sessionID
    }, function (data) {
        lastLog_json = data;
        console.log("lastLog_json: " + lastLog_json);
        $("#lastLog").html(lastLog_json);
    })
        .done(function (data) {
        })
        .fail(function (data) {
            alert("getLastLog) What went wrong? " + data);
        })
}

function imReady(json) {
    console.log("imReady()");
    parseSettings(parseLastLog);
    calendarGet(sessionIDCheck(sessionID));
    tOrds[0] = parseInt($("#tOrd").html());
    tOrds[1] = parseInt(getCookie("last_tOrd"));
    tOrds[2] = parseInt($("#max_tOrd").html());
    //alert("Bottom tOrds[2]: " + settings[3]);
    tOrds[3] = "0";
    if ($("#tOrd").html() == "") {
    }
}

$(document).ready(function () {
    console.log("doc ready");
    getLastLog(sessionIDCheck(sessionID));
    getSettings(sessionIDCheck(sessionID));
}) 