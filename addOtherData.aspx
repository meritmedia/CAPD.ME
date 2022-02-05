<%@ Page Language="C#" AutoEventWireup="true" CodeFile="addOtherData.aspx.cs" Inherits="treatmentLog_addOtherData" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title></title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="css/tLog.css?v=2"/>
        <link rel="icon" href="favicon.ico" />
 <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous" />
    <style>

#output .row {
    margin-bottom: 2px;
    padding-bottom: 2px;
}
        /*input[type=button] {
            width:25%;
        }*/
#lastMiscDataDiv {
    border: 3px solid black;
    border-radius: 10px;
    background-color: hsla(42,30%,90%,1);
    margin-bottom:16px;
        }
.lastMiscDataHdr {
text-align:center;
text-transform:uppercase;
letter-spacing: 0.5em;
font-size: small;
font-weight: bold;
}
.lastMiscData, .lastMiscDataLabel1,.lastMiscDataLabel2 {
    text-align:center;
    font-size: smaller;
    border-left: 1px solid grey;
    border-top: 1px solid grey;
    border-radius: 0;
}
    </style>
</head>
<body>
        <div id="tLogHdr" runat="server"></div>
    <div class="container">
        <form action="#">
        <div id="tLogMenu" runat="server"></div>
            <div class="pageGroup">
        <div class="row">
            <div class="col-2">
                Date:
            </div>
            <div class="col-5">
                <input type="hidden" id="var1" value="userID" />
                <input type="hidden" id="var2" value="tDate" />
                <input type="date" id="val2" class="btn-block"/>
            </div>
            <div class="col-5"></div>
        </div>
<!----
        <div class="row">
            <div class="col-3">
                Select: 
            </div>
            <div class="col-9">

                <div id='var30' class="recAttr btn btn-secondary">weight</div>
                <div id='var31' class="recAttr btn btn-secondary">BP</div>
                <div id='var32' class="recAttr btn btn-secondary">pulse</div>

            </div>
        </div>
--->
        <div class="row">
            <div class="col-2">
                <div id="var3" style="display:inline">Field:</div>
            </div>

            <div class="col-5 text-left">
                <input type="text" value="" id="datum" class="btn-block"/>
            </div>
            <div class="col-5">
                <input type="button" value="Submit" id="addOtherDataBtn" class="btn-block btn-primary" />
            </div>
        </div>


        <div id="output"></div>
                </div>
</form>
</div>
     <div id="footer" runat="server"></div>
 <script type="text/javascript" src="js/treatmentLog.js?v=1"></script>
 <script type="text/javascript" src="js/addOtherData.js?v=7"></script>
<script>
    $("#val2").val(d1);

    $("#HDR").html("Misc Data");




</script>
</body>
</html>
