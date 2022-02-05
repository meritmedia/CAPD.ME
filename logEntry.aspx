<%@ Page Language="C#" AutoEventWireup="true" CodeFile="logEntry.aspx.cs" Inherits="logEntry" %>
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
  <link rel="stylesheet" href="css/tLog.css?v=10"/>
    <link rel="icon" href="favicon.ico" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous" />
    <style>


        #logEntryOutput {
            background-color: hsla(90,50%,90%,1);
        }

        .btn-half {
            width:48%;
        }
div#output {
    height:200px;
    overflow-y: scroll;
    overflow-x:hidden;
    border-bottom: 1px solid grey;
    padding-bottom: 2px;
    margin-bottom: 6px;
    background-color: hsla(42,10%,50%,0.2);
}
div#output div.calCol1 {
                font-stretch:extra-condensed;
                font-size: 90%;
                line-height: 90%;
            }

    </style>
</head>
<body runat="server">
    <div id="tLogHdr" runat="server"></div>
    <form runat="server" action="#">
    <div class="container">
        <div id="tLogMenu" runat="server"></div>
        <div class="pageGroup">
            <div class="row" data-row="1">
                <div class="col-5">
                    <input type="date" id="tDate" style="width:100%;" />
                </div>
                <div class="col-2 text-center" id="tOrdSelect">
                    
                    <span>#</span><span id="tOrd" class='' style="font-size: larger;"></span>
                    
                </div>
                <div class="col-5">
                    <span data-inv="" class="btn btn-info btn-block help" id="inventory"></span>
                    
                </div>
            </div>


            <div class="row" data-row="2" >
                <div class="col-8 text-center" style="margin-left:10px;margin-right:-10px;border: 1px solid grey;border-radius:10px;background-color: hsla(189,30%,70%,1);">
                    <a class="btn btn-secondary" href="#" onclick="moveVal('drain',10,'-');"
                        style="width:20%;border-radius:50%;"><i class="fa fa-arrow-down"></i></a>

                    <output id="drain" class="btn btn-info help" style="width:40%;"></output>

                    <a class="btn btn-secondary" href="#" onclick="moveVal('drain',5,'+');"
                        style="width:20%;border-radius:50%;"><i class="fa fa-arrow-up"></i></a>
                </div>
                <div class="col-4">
                   <output class="btn btn-success btn-block help" name="drain2" id="drain2" onclick="getDrainAndFlush()"></output>
                </div>
            </div>

            <div class="row" data-row="3">
                <div class="col-6 text-center">
                     Avg Drain: #<span class='btn btn-info help' id="sDrainX">0</span>               
                </div>
                <div class="col-6">
                    <input id="logEntrygBtn" class="btn btn-primary btn-block" value="Log it" type="button"/>
                </div>
            </div>


        <div id="defaults" class="toHide">
            <div class="row">
                <div class="col-2">
                    BagWt:
                </div>
            <div class="col-7">
                <input name="bagwt" id="bagWt"  min="2000" max="3500" step="20"
                    aria-label="bagWt" value=""
                   style="width:100%;" type="range"
                   oninput="$('#bagWtOut').html(this.value);doCalcs();"/>
            </div>
            <div class="col-3">
                [<output id="bagWtOut"></output>]
            </div>
            </div>           

            <div class="row">
                <div class="col-2">
                    Dose:
                </div>
                <div class="col-7">
                    <input name="dosa" id="dose" min="2000" max="3000" step="20" 
                        aria-label="dosage" value=""
                          style="width:100%;" type="range"
                          oninput="$('#doseOut').html(this.value);doCalcs();" />
                </div>
                <div class="col-3">
                    [<output id="doseOut"></output>]
                </div>
            </div>

            <div class="row">
                <div class="col-9">
                    Flush:
                </div>
                <div class="col-3">
                    [<output name="flush" id="flush" onclick="doCalcs();"></output>]
                </div>
            </div>
        </div>
        <div id="output" runat="server"></div>
        </div>

        <div class="pageGroup">
        <div class="row">
            <div class="col-8 text-center">
                <textarea id="comment" class="commentsClass"></textarea>
            </div>
            <div class="col-4">
                <div id="commentDateTime"></div>
                <input type="button" id="saveCommentsBtn" value="Save" class="btn btn-block btn-secondary"/>
            </div>
        </div>
            <div class="row">
                <div class="col-12">
                    <input type="button" id="changeHistory" value="Change History" />
                </div>
            </div>

        </div>
        <div id="Div1"   class="toHide" runat="server"></div>
        <div id="lastLog"  class="toHide" runat="server"></div>
        <div id="last_tOrd" class="toHide"></div>
        <div id="max_tOrd" class="toHide"></div>
        <div id="min_tOrd" class="toHide"></div>

</div>
    </form>
        <div id="footer" runat="server"></div>
    <script type="text/javascript" src="js/treatmentLog.js?v=3"></script>
    <script type="text/javascript" src="js/logEntry.js?v=19"></script>
    <%--<script type="text/javascript" src="js/help.js?v=1"></script>--%>
    <script>

    </script>
</body>
</html>