

//var tLogHDR = $("#tLogHdr").html().replace("CAPD Log", "CAPD.ME");
$("<img src='img/capd_me.png' style='position:fixed;top:0;left:0;height:60px;width:auto;z-index:150;' />").insertBefore("#tLogHdr");
var tLogHDR = $("#tLogHdr").html().replace("CAPD Log", "");
$("#tLogHdr").html(tLogHDR);
var sessionID = sessionIDCheck(sessionID);

$(".menuBtn").on("click", function () {
    var page = $(this).attr('id') + ".aspx";
   // var userSysID = getCookie("userSysID");
    //disableBtn(this);
    $("#tLogMenu").html(mySpinner);
    $("#output").toggleClass("toHide");
    //alert(page);
    sessionID = getCookie("sessionID");
    //alert("page: " + page);
    if (page == 'default.aspx') {
        alert("Logging off. Goodbye!");
        logoff(sessionIDCheck(sessionID));
    }
    location.href = page;
})

$("#siteMap li").on("click", function () {
    let page = $(this).data("page") + ".aspx";
    alert(page);
    if (page == "default.aspx") {
       // sessionID = getCookie("sessionID");
        logoff(sessionIDCheck(sessionID));
    }
    location.href = page;

})

$("#logoff").on("click", function () {
    $(".pageGroup").toggleClass("toHide");
    output = $("#output").html();
    $("#output").toggleClass("toHide");
    disableBtn($("#logoff"));
    $(".menu").toggle(200);
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
    window.tOrds = "";
    window.sDrain = [];
    window.lastLog = [];
    window.settings = [];
    $.post(DataConnect + "logoff", {
        sessionID: sessionID
    }, function () {
        disableBtn();
        alert("You have logged off. Have a great day!");
        location.href = "default.aspx";
        localStorage.setItem("userSysID", "");
        window.sessionID = "";
        return;
        })
    .fail(function () {
        alert("Did not log off successfully.");
    })
}


//$.ready(function () {
    $("#logoff").html("<i class='fa fa-bars' aria-hidden='true'></i>").removeClass('text-right').addClass('text-center');

    var DataConnect = "//fb.beatfreaks.com/DataConnect/treatmentLog/";
    var otherData = "";
    var mySpinner = "<button class='mySpinner btn btn-warning btn-block'>" +
        "<span class='spinner-border spinner-border-sm'></span>" +
        " Loading..</button >";
    //$.get("partials/links.html", function (data) {
    //    $(".menu").append(data);
    //});
const d = new Date();
var d1 = formatDate(d);


const escapeHTML = str =>
    str.replace(
        /[&<>'"!]/g,
        tag =>
            ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#33;',
                '"': '&quot;',
                '!': '&#39;'
            }[tag] || tag)
    );
//escapeHTML('<a href="#">Me & you</a>');
const unescapeHTML = str =>
    str.replace(
        /&amp;|&lt;|&gt;|&#39;|&quot;|&#33;/g,
        tag =>
            ({
                '&amp;': '&',
                '&lt;': '<',
                '&gt;': '>',
                '&#33;': "'",
                '&quot;': '"',
                '&#39;': '!'
            }[tag] || tag)
    );

function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, "&#33;").replace(/"/g, '&quot;');
}
function htmlEntities1(str) {
    return String(str).replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>').replace("&#33;", "'").replace('&quot;', '"');
}

const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function loseYr(str) {
    let myDate = new Date(str);
    let day = weekday[myDate.getDay()];
    day = day.substring(0, 3);
    var str = str.replace("2022-", day + " ");
    return str;
}

function myConfirm(text) {
    //let text = "Press a button!\nEither OK or Cancel.";
    if (confirm(text) == true) {
        text = "You pressed OK!";
    } else {
        text = "You canceled!";
    }
    //document.getElementById("demo").innerHTML = text;
}


$(".music").css("cursor", "pointer");

function CAPDMusic(URL) {
    window.open(URL, "CAPDMusic", "popup", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=200");
}
$(".music").on("click", function () {
    var URL = $(this).data("url");
    CAPDMusic(URL);
})

function catGet(cat) {
    const catName = { E: 'entertainment', H: 'health', M: 'Misc', N: 'news', S: 'sports' };
    return catName[cat];
}
$(".logEntryHdr span:nth-of-type(1)").on("click", function () {
    location.href = "http://capd.me";
})

function right(str, chr) {
    return str.slice(str.length - chr, str.length);
}

function left(str, chr) {
    return str.slice(0, chr - str.length);
}

function sessionIDCheck(sessionID) {
    if (getCookie("sessionID") != "") {
        sessionID = getCookie("sessionID");
    }
    if (localStorage.getItem("sessionID") != "") {
        sessionID = localStorage.getItem("sessionID");
    }
    return sessionID;
};
///// Footer code
$("#footer").load("footer.aspx");
//$("#siteMap li").css({ "cursor": "pointer" });
//$("#siteMap li").on("mouseover", function () {
//    $(this).css({ "background-color": "white", "color": "hsla(189,60%,10%,1)", "text-decoration": "underline" });
//})
//$("#siteMap li").on("mouseout", function () {
//    $(this).css({ "color": "white", "background-color": "hsla(189,60%,20%,1)", "text-decoration": "none" });
//})

