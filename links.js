var uSysID = getCookie('userSysID');

function linksGet(uSysID) {
    $("#output").html(mySpinner);
    var myURL = DataConnect + "linkGet";
    var myOut = "";
    $.post(myURL
        , {
            uSysID
        }
        , function (data) {
            var dataObj = JSON.parse(data);
            var uSysID = "";
            var lSysID = "";
            var linkName = "";
            var link = "";
            var cat = "";
            var cat_ = "";
            myOut += "<div class='row'>";
            $.each(dataObj, function (key, e) {
                uSysID = e.uSysID;
                lSysID = e.lSysID;
                linkName = e.linkName;
                link = e.link;
                let cat1 = linkName.substr(0, 1);
                cat = catGet( cat1 );
                //console.log("cat1: " + cat1 + ", cat:" + cat);
                if (cat != cat_) {
                    myOut += "<div class='col-12 stretched-text'>" + cat + "</div>";
                }
                linkName = linkName.substr(2);
                myOut += "<div class='col-6 linkItem'>";
                myOut += "<a target='CAPDNews' href='" + link + "' class='myLink'>" + linkName + "</a>";
                myOut += "</div>";
                cat_ = cat;
            })
            myOut += "</div>";
        })
        .done(function () {
            $(".myNews").hide();
            $("#output").html(myOut);
            $(".myNews").appendTo($("#output")).show();
            $(".outputHDR").prependTo($("#output"));

            
        })
}


//$(".myLink").on("click", function () {
//    var thisURI = $(this).data("uri");
//    console.log(thisURI);
//    window.open("CAPD", thisURI);
//})
//$.ready(function () {
    $("#HDR").html("Links+News");
    linksGet(getCookie("userSysID"));
//})