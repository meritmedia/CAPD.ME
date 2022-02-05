<%@ Page Language="C#" AutoEventWireup="true" CodeFile="SettingsGet.aspx.cs" Inherits="SettingsGet" %>

<!DOCTYPE html>
<script runat="server">

</script>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Treatment Log: Log Entry</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="css/tLog.css?v=1"/>
        <link rel="icon" href="favicon.ico" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous" />

</head>
<body>
            <div id="tLogHdr" runat="server"></div>
    <form id="form1" runat="server">
        <div class="container">
            <div id="tLogMenu" runat="server"></div>
            <div class="pageGroup">
            <div class="row">
                <div class="col-12">
                    <input type="button" id="groupBtn1" class="grpBtn btn btn-block  btn-outline-info" value="Settings" />
                </div>
            </div>

            <div class="group1 toHide">
            <div class="row">
                <div class="col-4">Dose</div>
                <div class="col-7 settingField  editSetting" id="val1" data-table="setting" data-setname="dose"></div>
            </div>

           <div class="row">
                <div class="col-4">Max Ord</div>
                <div class="col-7 settingField  editSetting" id="val2" data-table="setting" data-setname="treatments"></div>
            </div>
           <div class="row">
                <div class="col-4">BagWt</div>
                <div class="col-7  settingField editSetting" id="val3" data-table="setting" data-setname="bagWt"></div>
            </div>
           <div class="row">
                <div class="col-4">Dwell Hr</div>
                <div class="col-7  settingField editSetting" id="val4" data-table="setting" data-setname="dwellTimeInHrs"></div>
            </div>
           <div class="row">
                <div class="col-4">Drain minutes</div>
                <div class="col-7  settingField editSetting" id="val9" data-table="setting" data-setname="drainTimeInMins"></div>
            </div>
           <div class="row">
                <div class="col-4">Inventory</div>
                <div class="col-7 settingField  editSetting" id="inventory"  data-table="setting" data-setname="inventory"></div>
            </div>
            </div>


            <div class="row">
                <div class="col-12">
                     <input type="button" id="groupBtn2" class="grpBtn btn-block  btn-outline-info" value="Security" />
                </div>
            </div>
            <div class="group2 toHide">
           <div class="row">
                <div class="col-4">eMail</div>
                <div class="col-7 settingField  editSetting" id="val5"  data-table="security" data-setname="eMail"></div>
            </div>

           <div class="row">
                <div class="col-4">First</div>
                <div class="col-7 settingField  editSetting" id="val6" data-table="security"   data-setname="fName"></div>
            </div>
           <div class="row">
                <div class="col-4">Last</div>
                <div class="col-7 settingField  editSetting" id="val7" data-table="security" data-setname="lName"></div>
            </div>
           <div class="row">
                <div class="col-4">User ID</div>
                <div class="col-7 settingField" id="val8" data-table="security" data-setname="userID"></div>
            </div>
            </div>
                </div>
        </div>
    </form>
        <div id="sessionID" class="toHide" runat="server"></div>
        <div id="jsonDiv1" class="toHide" runat="server"></div>
        <div id="jsonDiv2" class="toHide" runat="server"></div>
    <div id="footer" runat="server"></div>
    <script type="text/javascript" src="js/treatmentLog.js?v=2"></script>
        <script type="text/javascript" src="js/settings.js?v=13"></script>

</body>
</html>
