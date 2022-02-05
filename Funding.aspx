<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Funding.aspx.cs" Inherits="Funding" %>
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

        <div class="container">
            <div id="tLogMenu" runat="server"></div>
            <div class="pageGroup">
                <div class="row">
                    <div class="col-12" style="margin-bottom:30px;">
                        <img src="capd_me.png"  style="float:left;height:100px;width:auto;"/>
                    <span class="alert-heading" style="font-size:large;">Please help Fund this project by donating below.</span>
                        <p>Hi, my name is Charlie and I'm developing CAPD.ME a website for CKD patients who dialyze without a machine, 
                            or cycler. Our kidneys usually filter and remove waste products and excess fluid from the blood. Continuous
                            ambulatory peritoneal dialysis (CAPD) is a way of replacing your kidney function, if your kidneys have failed,
                            by using the membrane covering your internal organs (the peritoneum). In performing this treatment, patients
                            and those who assist them have a myriad of tasks: keeping a daily schedule, logging treatments, keeping a
                            calendar of deliveries, inventory, and reporting, as well as providing links to entertainment while engaged
                            in the dialysis. I have End-Stage Renal Disease (ESRD) and am developing CAPD ME in between my own treatments. 
                            I want to avoid cluttering the site with ads. Your donation will go to cover server and other development costs.
                            If you find the site useful please give what you can. <span style="font-weight:600;">Thank you.</span></p>
                    </div>
                 </div>
                <div class="row">
                    <div class="col-6 goFundMe">
                        <div class="gfm-embed" data-url="https://www.gofundme.com/f/capdme-a-site-for-ckd-patients-not-on-a-cycler/widget/large/"></div><script defer src="https://www.gofundme.com/static/js/embed.js"></script>
                    </div>
                    <div class="col-6 payPal text-center" style="border-top: 2px solid black;margin-top:20px;">
                        <span>You can also donate through PayPal.</span>
                        <div  id="paypal-button-container-P-1LW42712CG925615NMH4DVFY" 
                            class="text-center">Set up recurring donations.
                            <img src="img/QR%20Code.png" style="float:right;height:100px;width:auto;" /></div>

                        <form  action="https://www.paypal.com/donate" method="post" target="_top">
                            <input type="hidden" name="hosted_button_id" value="GCVE7F5F2MQPN" />
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" 
                                title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                        </form>

                        <div class="row" style="border-top: 2px solid black;margin-top:50px;">
                            <div class="col-12 falik">
                                <span class="alert-dismissible">Buying music also helps.</span>
                                <iframe width="100%" height="265" scrolling="no" frameborder="no" 
                                    src="https://www.reverbnation.com/widget_code/html_widget/artist_23377?widget_id=55&pwc[included_songs]=1&context_type=page_object&spoid=artist_23377&pwc[size]=small" 
                                    style="width:0px;min-width:100%;max-width:100%;"></iframe>
                            </div>
                        </div>
                    </div>
            </div>

            </div>
        </div>

        <div id="sessionID" class="toHide" runat="server"></div>
        <div id="jsonDiv1" class="toHide" runat="server"></div>
        <div id="jsonDiv2" class="toHide" runat="server"></div>
    <div id="footer" runat="server"></div>
    <script type="text/javascript" src="js/treatmentLog.js?v=0"></script>
    <script type="text/javascript" src="js/funding.js?v=0"></script>

</body>
</html>