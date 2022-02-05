<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Calendar.aspx.cs" Inherits="Calendar" %>

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
  <link rel="stylesheet" href="css/tLog.css?v=1"/>
        <link rel="icon" href="favicon.ico" />
 <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous" />
    <style>
        #col2 {
            border: 1px solid grey;
            border-radius: 10px;
            margin-right: 5px;
            margin-left: -5px;
            padding-right: -5px;
        }
        input[type=text], innput[type=date], textarea {
            width: 90%;
            line-height: 95%;
        }
    </style>
</head>
<body>
    <div id="tLogHdr" runat="server"></div>
    <div class="container">
        <form action="#" runat="server">
            <div id="tLogMenu" runat="server"></div>
                <div class="pageGroup" runat="server">
                    <div id="output" runat="server">
                        <div class="row">
                            <div class="col-6">
                                <input type="date" id="calDate" style="width:100%" />
                            </div>
                            <div class="col-6">
                                <input type="text" id="calTime" style="width:100%" required placeholder="Time (optional)"  />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <input type="text" id="header" style="width:100%" placeholder="Header" required/>
                                </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <textarea id="myEvent" rows="3" cols="35" style="width:100%" placeholder="Details"></textarea>
                                <input type="hidden" id="calHeaderSysID" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <input type="button" class="btn btn-primary btn-block"
                                            id="calendarSaveBtn" value="Save" />
                                <input type="button" class="btn btn-primary btn-block"
                                            id="calendarDeleteBtn" value="Delete This" />
                            </div>
                        </div>

                        <div class="row">
                            <div id='col1' style="height: 200px;overflow-x:hidden;overflow-y:scroll;" class='col-12'></div>
                        </div>
                </div>
          </div>


        </form>
    </div>
    <div id="footer" runat="server"></div>

 <script type="text/javascript" src="js/treatmentLog.js?v=2"></script>
 <script type="text/javascript" src="js/calendar.js?v=2"></script>
</body>
</html>
