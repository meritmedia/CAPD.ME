


$(".menuBtn").on("click", function () {
    var page = $(this).attr('id') + ".aspx";
   // var userSysID = getCookie("userSysID");
    //disableBtn(this);
    $("#tLogMenu").html(mySpinner);
    $("#output").toggleClass("toHide");
    //alert(page);
    sessionID = getCookie("sessionID");
    if (page == 'default.aspx') {
      //  alert("Logging off: " + sessionID);
        logoff(sessionID);
    }
    location.href = page;
})


$("#logoff").on("click", function () {
    $(".pageGroup").toggleClass("toHide");
    $("#output").toggleClass("toHide");
    //disableBtn($("#logoff"));
    //$(".menu").show(200);
    $("#tLogMenu").toggle(200);
})


function disableBtn(btn) {
    if ( btn.Enabled == true) {
         btn.Enabled = false;
    }
    else {
        btn.Enabled = true;
    }
}

$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        results = "";
    }
    return results[1] || "";
}




// Cookies
function setCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";

    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}





function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}





function commentGet(sysID) {
    var myURL = DataConnect + "commentSave";
    //var myOut = "";
        $.post(myURL
            , {
                sysID: sysID
                //, comment: ''
            }, function (data) {
                var dataObj = JSON.parse(data);
                var val1 = "";
                var val2 = "";
                var val3 = "";
                var myOut = "";
                $.each(dataObj, function (key, e) {
                    val1 = e.val1;
                    val2 = e.val2;
                    val3 = e.val3;
                    myComment = val1 + " (" + val2 + "\n" + val3 + ")";
                })
                $("#tempComments").html(myComment);
              //  alert("myComment: " + myComment);
            })
            .done(function () {
            })         
}


function logoff(sessionID) {
$.post(DataConnect + "logoff", {
    sessionID: sessionID
}
    , function () {
        disableBtn();
        alert("You have logged off. Have a great day!");
        })
    .fail(function () {
        alert("Did not log off successfully.");
    })
}


//$.ready(function () {
    $("#logoff").html("<i class='fa fa-bars' aria-hidden='true'></i>").removeClass('text-right').addClass('text-center');

    var DataConnect = "//fb.beatfreaks.com/DataConnect/treatmentLog/";
    var otherData = "";
    var mySpinner = "<button class='mySpinner btn btn-info btn-block'>" +
        "<span class='spinner-border spinner-border-sm'></span>" +
        "Loading..</button >";
    //$.get("partials/links.html", function (data) {
    //    $(".menu").append(data);
    //});
const d = new Date();
var d1 = formatDate(d);


const escapeHTML = str =>
    str.replace(
        /[&<>'"]/g,
        tag =>
            ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
    );
//escapeHTML('<a href="#">Me & you</a>');
const unescapeHTML = str =>
    str.replace(
        /&amp;|&lt;|&gt;|&#39;|&quot;/g,
        tag =>
            ({
                '&amp;': '&',
                '&lt;': '<',
                '&gt;': '>',
                '&#39;': "'",
                '&quot;': '"'
            }[tag] || tag)
    );

function myConfirm(text) {
    //let text = "Press a button!\nEither OK or Cancel.";
    if (confirm(text) == true) {
        text = "You pressed OK!";
    } else {
        text = "You canceled!";
    }
    //document.getElementById("demo").innerHTML = text;
}
