<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>
<script runat="server">

</script>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title></title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      <link rel="stylesheet" href="css/tLog.css?v=3"/>
     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous" />
    <link rel="icon" href="favicon.ico" />
    <style>

        #loginBox {
            border: 1px solid black;
            padding: 5px;
            margin-top: 10%;
            /*background-color: hsla(90,50%, 90%,1);*/
        }
    </style>
</head>
<body>
        <div id="tLogHdr" runat="server"></div>
    <div class="container">

        <div id="loginBox">
            <form action="#" runat="server">
        <div class="row">
            <div class="col-6 text-right">
                User ID:
            </div>
            <div class="col-6 text-left">
                <input id="userID" type="text"  class="btn-block" autocomplete="on"/>
            </div>
        </div>
        <div class="row">
            <div class="col-6 text-right">
                Password:
            </div>
            <div class="col-6 text-left">
                <input id="pwd" type="password" class="btn-block" autocomplete="on" />
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <input type="button" class="btn btn-block btn-primary" id="logInBtn" value="Log In or Register"/>
            </div>
        </div>
            </form>
        </div>


        <div id="output" runat="server"></div>
        <div id="sessionIDDiv" style="display:none" runat="server"></div>
         <div id="tLogMenu" runat="server"></div>
        
    </div>
     <div id="footer" runat="server"></div>
    <script type="text/javascript" src="js/default.js?v=23"></script>
    <script type="text/javascript" src="js/treatmentLog.js?v=4"></script>
    <script>
           // const d = new Date();
            var d1 = formatDate(d);
        $('#tDate').val(d1);



var sessionID = "<%=Session.SessionID%>";
        setCookie("sessionID", sessionID, 1);
        localStorage.setItem("sessionID", sessionID);
//alert(sessionID);






 //$("#viewLogBtn").on("click", function () {
 //    location.href = "viewlog.aspx";
 //       })



    </script>
</body>
</html>