<%@ Page Language="C#" AutoEventWireup="true" CodeFile="DailySched.aspx.cs" Inherits="DailySched" %>

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
        .outlineMe {
            border: 3px solid blue;
            border-radius: 15px;
        }
    </style>
</head>
<body>
    <div id="tLogHdr" runat="server"></div>
    <div class="container">
    <form id="form1" runat="server">
        <div id="tLogMenu" runat="server"></div>
          <div class="pageGroup">
        <div class="row">
            <div class="col-5">
                StartTime:
            </div>
            <div class="col-6">
                <input type="time" id="startTime" value="" style="width:90%;"/>
            </div>
            </div>
            <div class="row">
            <div class="col-5">
                Dwell Time Hrs(0.00):
            </div>
            <div class="col-6">
                <input type="text" id="dwellTime2" value=""  style="width:90%;" placeholder="(optional)" />
            </div>
        </div>
        <input type="button" id="DailySchedGetBtn" class="btn btn-primary btn-block" value="Run" />
        <div id="output"></div>
        <input type="button" id="DailySchedSaveBtn" class="btn btn-primary btn-block" value="Save" />
        <div id="lastSaved" class="text-center badge-info" style="font-size:smaller;"></div>
        <input type="button" id="DailySchedUseLastSavedBtn" class="btn btn-primary btn-block" value="Use Last Saved" />
            </div>
    </form>
        </div>
    <div id="footer" runat="server"></div>
    <script type="text/javascript" src="js/treatmentLog.js?v=2"></script>
    <script type="text/javascript" src="js/DailySched.js?v=2"></script>
    </body>
</html>
