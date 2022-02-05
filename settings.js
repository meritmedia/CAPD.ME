$("#HDR").html("Settings");
const settings = [];
function parseSettings() {
    //$("#Div1").hide();
    var settingsJson = $("#jsonDiv1").html();
    var dataObj = JSON.parse(settingsJson);
    var uSysID = "";
    var sSysID = "";
    var val1 = "";
    var val2 = "";
    var val3 = "";
    var val4 = "";
    var val5 = "";
    var val6 = "";
    var val7 = "";
    var val8 = "";
    var val8 = "";
    var val9 = "";
    var inventory = 0;
    $.each(dataObj, function (key, e) {
        uSysID = e.uSysID;
        sSysID = e.sSysID;
        val1 = e.val1;
        val2 = e.val2;
        val3 = e.val3;
        val4 = e.val4;
        val5 = e.val5;
        val6 = e.val6;
        val7 = e.val7;
        val8 = e.val8;
        val9 = e.val9;
        inventory = e.inventory;
    })
    if (val1 == "_") {
        alert("All is well. Please log in again.");
        logoff(getCookie("sessionID"));
        location.href="default.aspx";
    }
    $("#val1").html(val1);
    $("#val2").html(val2);
    $("#val3").html(val3);
    $("#val4").html(val4);
    $("#val5").html(val5);
    $("#val6").html(val6);
    $("#val7").html(val7);
    $("#val8").html(val8);
    $("#val9").html(val9);
    $("#inventory").html(inventory);
    $("#jsonDiv1").html("");

    settings.push(["uSysID", uSysID]); // 0
    settings.push(["sSysID", sSysID]); // 1
    settings.push(["dose", val1]); // 2
    settings.push(["maxtOrd", val2]); // 3
    settings.push(["bagWt", val3]);  //4
    settings.push(["dwellTimeInMins", val4]); // 5
    settings.push(["drainTimeInMins", val9]); // 9
    settings.push(["inventory", inventory]); // 10
    settings.push(["eMail", val5]); // 6
    settings.push(["fName", val6]); // 7
    settings.push(["lName", val7]);  // 8
    settings.push(["userID", val8]); // 9
    localStorage.setItem("settings", settingsJson);

}
parseSettings();

$(".grpBtn").on("click", function () {
    var myID = $(this).attr("id");
    if (myID == 'groupBtn1') {
        $(".group1").toggle();
    }
    else {
        $(".group2").toggle();
    }
})


$(".editSetting").on("click", function () {
    $(".editSetting").off("click");
    $(this).removeClass("editSetting");
    var thisTable = $(this).data("table");
    var thisID = $(this).attr("ID");
    var thisVal = $(this).html();
    //alert("thisVal: " + thisVal);
    var varName = $(this).data("setname");
    $(this).html("<input type='text' id='" + varName + "' value='" + thisVal + "' /><input data-table='" + thisTable + "' data-setname='" + varName + "' data-field='" + thisID + "' id='settingSaveBtn' type='button' onClick='reply_click(this.id, $(\"#settingSaveBtn\").prev().val() )' value='Save' class='btn btn-primary' />");
})


//reload_js('source_file.js');
    
function reply_click(clicked_id, newValue) {
    var inputID =  $("#settingSaveBtn").data("setname");
    var inputVal = $("#settingSaveBtn").data("field");
    var tableName = $("#settingSaveBtn").data("table");
    var uSysID = settings[0][1];
    //alert("inputID: " + inputID + ", " + "newValue: " + newValue + ", inputVal: " + inputVal + ", tableName: " + tableName);
    settingEdit(uSysID, inputID, newValue, inputVal, tableName);

        }

function settingEdit(uSysID, varName, newValue, field, tableName) {
    $("#" + field).html(newValue);
    var myURL = DataConnect + "settingEdit";
    //alert("uSysID: " + uSysID + ", varName: " + varName + ", newValue: " + newValue + ", field: " + field + ", tableName: " + tableName);
    $.post(myURL,
        {
            uSysID: uSysID
            , varName: varName
            , newValue: newValue
            , tableName: tableName
        }, function (data) {
            console.log(data);
            var dataObj = JSON.parse(data);
            var recDateTime = "";
            $.each(dataObj, function (key, e) {
                recDateTime = new Date(e.recDateTime);
            })
            //console.log();
            //alert("recDateTime: " + recDateTime);
            location.href = "settingsGet.aspx";
        })
        .fail(function () {
            alert("settingsEdit failed");
        })
}

$("#settingSaveBtn").on("click", function () {
    alert(thisVal);
    $(this).html(thisVal);
})
function reload_js(src) {
    $('script[src="' + src + '"]').remove();
    $('<script>').attr('src', src).appendTo('body');
}