<%@ Page Language="C#" AutoEventWireup="true" CodeFile="viewLog.aspx.cs" Inherits="treatmentLog_viewLog" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title></title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="css/tLog.css?v=1"/>
        <link rel="icon" href="favicon.ico" />
 <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous" />
    <style>


    </style>
</head>
<body>
         <div id="tLogHdr" runat="server"></div>
     <div class="container">
        <div id="tLogMenu" runat="server"></div>

        <div class="pageGroup">
        <div class="row" style="margin-top:20px;">

            <div class="col-2">
                Date:
            </div>
            <div class="col-6">
                <input id="tDate" type="date" class="btn-block"/>
            </div>
            <div class="col-4">
                <input type="button" value="Run" id="viewLogBtn" class="btn btn-primary btn-block" />
            </div>
        </div>

        <div class="row">
            <div class="col-2">
               Prev
            </div>
            <div class="col-6" id="savedLogs"></div>
            <div class="col-4">
                <input id="prevLogBtn" type="button" class="btn btn-block btn-secondary" value="Get" />
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <h3>Treatment Log</h3>
            </div>
            
        </div>

        <div id="output"></div>

        </div>
    </div>
    <div id="tempComments" class="toHide"></div>
     <div id="footer" runat="server"></div>
        <script type="text/javascript" src="js/treatmentLog.js?v=15"></script>
       <script type="text/javascript" src="js/viewLog.js?v=45"></script>
   
    <script>
        $('#tDate').val(d1);
        $("#uSysID").val(getCookie('userSysID'));
        var uSysID = getCookie('userSysID');

        $("#HDR").html("View Log");


    </script>
</body>
</html>
