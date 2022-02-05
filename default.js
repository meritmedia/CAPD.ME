//$("#tLogMenu").hide();
//var sessionID = getCookie("sessionID");
// $("#sessionIDDiv").html();

$("#logoff").hide();
$("#HDR").html("Log On");
$("#logInBtn").on("click", function () {
    $("#output").html(mySpinner);
    $("#loginBox").hide();
    var userID = $("#userID").val();
    var pwd = $("#pwd").val();
    logIn(userID, pwd);
    setCookie("userSysID", "0", 1);
})

function disableBtn(btn) {
    if (btn.Enabled == true) {
        btn.Enabled = false;
    }
    else {
        btn.Enabled = true;
    }
}

function logIn(userID, pwd) {
    var myURL = DataConnect + "addUser";
    var myOut = "";
    var sessionID  = window.sessionID;
    //console.log("sessionID: " + sessionID);
    $.post(myURL,
        {
            val1: userID,
            val2: pwd,
            val3: sessionID
        },
        function (data, status) {
            if (status == 'success') {
                var dataObj = JSON.parse(data);
               // console.log(dataObj);
                var val1 = "";
                var val2 = "";
                var val3 = "";
                var val4 = "";
              //  alert(myURL + "\nuserID: " + userID + "\npwd: " + pwd + "\nStatus: " + status);
                $.each(dataObj, function (key, e) {
                    val1 = e.val1;
                    val2 = e.val2;
                    val3 = e.val3;
                    val4 = e.val4;
                    //alert(val1 + ": " + val4);
                    myOut += "<div class='row'>";
                    myOut += "<div class='col-12 text-center'>" + val1 + ": " + val4 + " Welcome, " + val3 + ". </div>";
                    myOut += "</div>";

                    setCookie("userSysID", val2, 1);
                    localStorage.setItem("userSysID", val2);
                    if (val1 == '04') {
                        //alert(val4);
                        $("#output").html(val4);
                        $("#logoff").hide();
                        setCookie("userSysID", "0", 1);
                        $("#loginBox").show();
                    }
                else
                    {
                        if (val1 == '01') {
                            msg = "Since you're new I suggest clicking on 'Settings' to get started.";
                        myOut += "<div class='row'>";
                        myOut += "<div class='col-12 text-center'>" + msg + "</div>";
                        myOut += "</div>";
                        $("#settingsGet").click();
                        }
                        //alert(val1);
                    $("#tLogMenu").show(200);
                    $(".menu").toggle(200);
                    $("#loginBox").hide();
                    $("#logoff").show();
                    $("#output").html(myOut);
                    $("#sessionIDDiv").html("");
                }

                })


               // myOut += "<div class='row'><div class='col-12'>sessionID: " + sessionID +"</div></div>";
            }
            else
            {
                $("#logoff").hide();
                setCookie("userSysID", "0", 1);
                $("#loginBox").show();
            }
        });
};

localStorage.setItem("tLogMenu", $("#tLogMenu").html());