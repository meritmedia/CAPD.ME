var uSysID = getCookie("userSysID");
lastMiscDataGet(uSysID);

$(".recAttr").on("click", function () {
    var id = $(this).attr('id');
    var var3_ = $("#" + id).html();
    $("#var3").html(var3_);
    $("#datum").val("");
})

function postData(this_) {
    var field = $(this_).data("field");
    var thisVal = $(this_).html();
    $("#datum").val(thisVal);
    $("#var3").html(field);
}

$("#addOtherDataBtn").on("click", function () {
    var uSysID = getCookie('userSysID');
    var var1 = $("#var1").val();
    var var2 = $("#var2").val();
    var val2 = $("#val2").val();
    var var3 = $("#var3").html();
    var datum = $("#datum").val();
   // $("#output").html(mySpinner);
    //alert(uSysID + ":" + var1 + ":" + var2 + ":" + val2 + ":" + var3 + ":" + datum);
    addOtherData(uSysID, var1, var2, val2, var3, datum);
})
function addOtherData(sysID, var1, var2, val2, var3, datum) {
    var myOut = "";
    var myURL = DataConnect + "addOtherData";
    var parms = "?sysID=" + sysID + "&var1=" + var1 + "&var2=" + var2 + "&val2=" + val2 + "&var3=" + var3 + "&datum=" + datum;
  // alert(parms);
    $.post(myURL,
        {
              sysID: sysID
            , var1: var1
            , var2: var2
            , val2: val2
            , var3: var3
            , datum: datum
        }
        , function (data) {
        var dataObj = JSON.parse(data);
        var ec = "";
        var msg = "";
        var field = "";
        var sysID = "";
        var sysID_tDate = "";
        //var userID = "";
        var tDate = "";
        var weight = "";
        var BP = "";
        var pulse = "";
        var last_tDate = "";
        // console.log(dataObj);
        $.each(dataObj, function (key, e) {
            ec = e.ec;
            msg = e.msg;
            field = e.field;
            sysID = e.sysID;
            sysID_tDate = e.sysID_tDate;
            tDate = e.tDate;
            weight = e.weight;
            BP = e.BP;
            pulse = e.pulse;

            myOut += "<div class='row'>";
            myOut += "<div class='col-4'>" + ec + ": " + msg + "</div> ";
            myOut += "<div class='col-4'>Field:  " + field + "</div> ";
            myOut += "<div class='col-4'>Date: " + tDate + "</div> ";
            myOut += "</div>";
            myOut += "<div class='row'>";
            myOut += "<div class='col-4'>Weight: " + weight + "</div> ";
            myOut += "<div class='col-4'>BP: " + BP + "</div> ";
            myOut += "<div class='col-4'>Pulse: " + pulse + "</div> ";
            myOut += "</div>";

            last_tDate = tDate;
        })
        $("#output").html(myOut);
    })
}

function getOtherData(value1, value2) {
    var parms = "?val1=" + value1 + "&val2=" + value2;
    var myURL = DataConnect + "getOtherData" + parms;
    //alert(myURL);
    //var myOut1 = "";
    $.post(myURL, function (data1) {
        var dataObj1 = JSON.parse(data1);
        var val1 = "";
        var val2 = "";
        var val3 = "";
        var val4 = "";
        var val5 = "";
        var val6 = "";
        var val7 = "";
        //var myOut1 = "";
        // console.log('GETOTHERDATA: ' + dataObj);
        $.each(dataObj1, function (key, e) {
            val1 = e.val1;
            val2 = e.val2;
            val3 = e.val3;
            val4 = e.val4;
            val5 = e.val5;
            val6 = e.val6;
            val7 = e.val7;

            otherData = "<div class='row'>";
            otherData += "<div class='col-4 text-center nowrap'>Weight: " + val5 + "</div> ";
            otherData += "<div class='col-4 text-center '>BP: " + val6 + "</div> ";
            otherData += "<div class='col-4 text-center '>Pulse: " + val7 + "</div> ";
            otherData += "</div>";
            //$("#tempOutput").html(otherData);
            //console.log(window.otherData);
        })
    })
}

function lastMiscDataGet(usysID) {
    var myOut = "<div id='lastMiscDataDiv'>";
    var myURL = DataConnect + "lastMiscDataGet";
    $.post(myURL, {
        uSysID: uSysID
    }, function (data) {
        var dataObj = JSON.parse(data);
        var weight = "";
        var weight_tDate = "";
        var pulse = "";
        var pulse_tDate = "";
        var bp = "";
        var bp_tDate = "";
        $.each(dataObj, function (key, e) {
            weight = e.weight;
            weight_tDate = e.weight_tDate;
            bp = e.bp;
            bp_tDate = e.bp_tDate;
            pulse = e.pulse;
            pulse_tDate = e.pulse_tDate;
            myOut += "<div class='row'>";
            myOut += "<div class='col-12 lastMiscDataHdr'>Last Reported Data</div>";
            myOut += "</div>";
            myOut += "<div class='row'>";
            myOut += "<div class='col-4 lastMiscDataLabel1'>Weight</div>";
            myOut += "<div class='col-4 lastMiscDataLabel1'>BP</div>";
            myOut += "<div class='col-4 lastMiscDataLabel1'>Pulse</div>";
            myOut += "</div>";
            myOut += "<div class='row'>";
            myOut += "<div class='col-4 lastMiscDataLabel2'>" + weight_tDate + "</div>";
            myOut += "<div class='col-4 lastMiscDataLabel2'>" + bp_tDate + "</div>";
            myOut += "<div class='col-4 lastMiscDataLabel2'>" + pulse_tDate + "</div>";
            myOut += "</div>";
            myOut += "<div class='row'>";
            myOut += "<div class='col-4 lastMiscData btn btn-info' data-field='weight' onclick='postData(this)'>" + weight + "</div>";
            myOut += "<div class='col-4 lastMiscData btn btn-info' data-field='BP' onclick='postData(this)'>" + bp + "</div>";
            myOut += "<div class='col-4 lastMiscData btn btn-info' data-field='pulse' onclick='postData(this)'>" + pulse + "</div>";
            myOut += "</div>";
        })
        myOut += "</div>";
        //console.log(myOut);
        $(myOut).prependTo(".pageGroup");
        })
}
