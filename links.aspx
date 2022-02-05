<%@ Page Language="C#" AutoEventWireup="true" CodeFile="links.aspx.cs" Inherits="links" %>
<!DOCTYPE html>
<script runat="server">

</script>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Treatment Log: Links</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="css/tLog.css?v=2"/>
    <link rel="icon" href="favicon.ico" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous" />
  <style>
      .myNews {border-top: 1px solid black !important;
               background-color: hsla(49,50%,50%,0.4) !important;
               padding-left: 10px !important;
      }
  </style>
</head>
<body>
    <div id="tLogHdr" runat="server"></div>
    <div class="container">
    <form id="form1" runat="server">
        <div id="tLogMenu" runat="server"></div>
    </form>
           <div class="pageGroup">
        <div class="myNews">
            <p>If you have a link suggestion please submit it to:<br />
                <span style="font-weight: bold;">CAPD.ME@meritmedia.com.</span>
             </p>
        </div>
        <div class="outputHDR">Read / Listen / Connect</div>
        <div id="output" style="position:relative;" class="toShow"></div>
    </div>
        </div>
        <div id="footer" runat="server"></div>
        <div id="temp1" class="toHide" runat="server"></div>
<script type="text/javascript" src="js/treatmentLog.js?v=1"></script>
<script type="text/javascript" src="js/links.js?v=2"></script>
    <script type="text/javascript" >
    </script>
</body>
</html>
