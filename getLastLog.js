//var d1 = formatDate(d);
//$('#tDate').val(d1);
//$("#uSysID").val(getCookie('userSysID'));

//$('#drain').html(getCookie('last_drain'));

// alert( $('#drain').html() );
//if ($('#drain').html() == '' || $('#drain').html() == null) {
//    $('#drain').html("2800");
//    setCookie("last_drain", "2800", 1);
//}
//else {
//    setCookie("last_drain", $("#drain").html(), 1);
//}

$("#extraBtn").click(function () {
            $(".toHide").toggle(200);
        })

//function doCalcs() {
//    getDrainAndFlush();
//}


//function getFlush() {
//    var result = $('#bagWt').val() - $('#dose').val();
//    // alert("flush: " + result);
//    //alert( "geFlush() " + ": " + $('#bagWt').val() + ":" + $('#dose').val());
//    $('#flush').html(result);
//}

//function getDrainAndFlush() {
//    getFlush();
//    var result = parseInt($('#flush').html()) + parseInt($('#drain').val());
//    $('#drain2').html(result);
//}


//function moveVal(start, amount, moveDir) {
//    var startVal = $('#' + start);
//    if (moveDir == '-') {
//        amount = parseInt(amount) * -1;
//    }
//    var result = parseInt(startVal.html()) + parseInt(amount);
//    startVal.html(result);
//    doCalcs();
//}

//function set_tOrd() {
//    var tOrd = getCookie("last_tOrd");
//    if (tOrd == "" || tOrd == null) {
//        tOrd = "1";
//    }
//    $("#tOrd").val(tOrd);
//}

$("#HDR").html("GetLastLog");
//set_tOrd();
////doCalcs();

//$("#logEntrygBtn").on("click", function () {
//    // $("#logEntryOutput").hide(100);
//    $("#logEntryOutput").show().append(mySpinner);
//    var uSysID = getCookie('userSysID');
//    //setCookie("last_tOrd", $("#tOrd").val(), 1);
//    setCookie("last_tOrd", $("#tOrd").html(), 1);
//    setCookie("last_drain", $("#drain").html(), 1);
//    //$("#output").html();
//   // alert("uSysID: " + uSysID);
//    $("#output").show();
//    logEntry(
//        //$("#uSysID").val()
//        uSysID
//        , $("#bagWt").val()
//        , $("#dose").val()
//        , $("#tDate").val()
//        //, $("#tOrd").val()
//        , $("#tOrd").html()
//        , $("#drain").val()
//    )
//})
//function logEntry(uSysID, bagWt, dose, tDate, tOrd, drain) {
//    var myURL = DataConnect + "logEntry";
//    console.log("uSysID: " + uSysID);
//    //?uSysID = " + uSysID + " & bagWt=" + bagWt + " & dose=" + dose + " & tDate=" + tDate + " & tOrd=" + tOrd + " & drain=" + drain;
//    setCookie("drain", drain, 1);
//    var myOut = "";
//    $.post(myURL
//        , {
//            usysID: uSysID
//            , bagWt: bagWt
//            , dose: dose
//            , tDate: tDate
//            , tOrd: tOrd
//            , drain: drain
//        }
//        , function (data) {
//            var dataObj = JSON.parse(data);

//            var errCode = "";
//            var msg = "";
//            var tDate_ = "";
//            var tOrd = "";
//            var bagWt = "";
//            var dose = "";
//            var drain = "";
//            var time = "";
//            $.each(dataObj, function (key, e) {
//                errCode = e.errCode;
//                msg = e.msg;
//                tDate_ = e.tDate;
//                tOrd = e.tOrd;
//                bagWt = e.bagWt;
//                dose = e.dose;
//                drain = e.drain;
//                time = e.time;
//                if (errCode == '01') {
//                    myStyle = "style='background-color: green;color: white;'";
//                } else {
//                    myStyle = "style='background-color: DodgerBlue;color: white;'";
//                }
//                myOut += "<div class='row'>" +
//                    "<div class='col-12' " + myStyle + " > " + errCode + ": " + msg + "</div ></div > ";
//                myOut += "<div class='row'>" +
//                    "<div class='col-4'>Time</div>" +
//                    "<div class='col-2 text-right'>#</div>" +
//                    "<div class='col-3 text-center'>Drain</div>" +
//                    "<div class='col-3 text-center'>Dose</div>" +
//                    "</div>";
//                myOut += "<div class='row'>" +
//                    "<div class='col-4'>" + time + "</div>" +
//                    "<div class='col-2 text-right'>" + tOrd + ".</div>" +
//                    "<div class='col-3 text-center'>" + drain + "</div>" +
//                    "<div class='col-3 text-center'>" + dose + "</div>" +
//                    "</div>";


//            })

//            $("#output").html(myOut);//.delay(5000).hide(1000);
//            $("#last_updated").html(time);
//        });

////}

//$("#tOrd").on("click", function () {

//    var last_tOrd = $("#tOrd").html();
//    var max_tOrd = parseInt(last_tOrd) + 1; //$("#max_tOrd").html();
//    var min_tOrd = $("#min_tOrd").html();
//    var maxx_tOrd = $("#max_tOrd").html();
//    var result = parseInt($(this).html()); //val();

//    console.log("result: " + result);
//    console.log("last_tOrd: " + last_tOrd);
//    console.log("min_tOrd: " + min_tOrd);
//    console.log("max_tOrd: " + max_tOrd);
//    console.log("maxx_tOrd: " + maxx_tOrd);
//    //alert(result + ":" + last_tOrd + ":" + min_tOrd + ":" + max_tOrd + ":" + maxx_tOrd);

//    if (result == max_tOrd) {
//        result = min_tOrd;
//    } else {
//        result = max_tOrd;

//    }
//    if (result > maxx_tOrd) {
//        result = 1;
//    }
    
//    //if (result > parseInt(max_tOrd) {
//    //    result = last_tOrd;
//    //} 
    
//    //$(this).val(result);
//    $(this).html(result);
//    //last_tOrd = $("tOrd").html();
//    setCookie("last_tOrd", $(this).html(),1);
//})


//function parseSettings() {
//    $("#Div1").hide();
//    var settingsJson = $("#Div1").html();
//    //alert(settingsJson);
//    var dataObj = JSON.parse(settingsJson);
//    var uSysID = "";
//    var sSysID = "";
//    var val1 = "";
//    var val2 = "";
//    var val3 = "";
//    var val4 = "";

//    $.each(dataObj, function (key, e) {
//        uSysID = e.uSysID;
//        sSysID = e.sSysID;
//        val1 = e.val1;
//        val2 = e.val2;
//        val3 = e.val3;
//        val4 = e.val4;
//    })
//    $("#max_tOrd").html(val2);
//    //$("#tOrd").attr({
//    //    max: val2
//    //});
//    //$("#Div1").html("val1: " + val1).show();
//   // $("#dose").val(val1);
//   // $("#bagWt").val(val3);
//   // $('#bagWtOut').html(val3);
//    doCalcs();
//}

function parseLastLog() {
    //$("#lastLog").hide();
    var lastLogJson = $("#lastLog").html();
    var myOut = "";
   // alert(lastLogJson);
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
    $.each(dataObj, function (key, e) {
        val1 = e.val1;
        val2 = e.val2;
        val3 = e.val3;
        val4 = e.val4;
        val5 = e.val5;
        val6 = e.val6;
        val7 = e.val7;
        val8 = e.val8;
        val9 = e.val9;
        //console.log("last log: " + val1 + ":" + val2 + ":" + val3 + ":" + val4 + ":" + val5 + ":" + val6 + ":" + val7 + ":" + val8 + ":" + val9);
        //alert(val2);
       // $("#last_tOrd").html(val2);
        //$("#tOrd").attr({
        //    min: val2
        //});
        //$("#tOrd").val(val2);
        myOut += "<div class='row'>" +
            "<div class='col-12' style='background-color:yellow;'>Last Log Entry</div ></div > ";
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
        //$("#tOrd").html(val2);
        $("#min_tOrd").html(val2);
    })
    $("#output").html(myOut);
   // $("#lastLog").html("");
    //$("#Div1").html("val1: " + val1).show();
    //$("#dose").val(val1);
    //$("#bagWt").val(val3);
    //$('#bagWtOut').html(val3);
    //doCalcs();
}
$(document).ready(function () {
parseLastLog();
//parseSettings();
}) 