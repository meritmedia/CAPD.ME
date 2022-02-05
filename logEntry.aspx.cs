using System;
using System.IO;
using System.Net;
using System.Text;
using System.Web.Script.Serialization;
using System.ServiceModel.Web;
//using Newtonsoft.Json;


public partial class logEntry : System.Web.UI.Page
{

    
    protected void Page_Load(object sender, EventArgs e)
    {
        //var uSysID = Request.Cookies["uSysID"].Value;
        var sessionID = Session.SessionID;
        string myOut = "";
        var myURI = Server.MapPath(".") + "/partials/";
        WebClient myWebClient = new WebClient();
        var path ="";

        //path = myURI + "Menu.html";
        //Stream myStream = myWebClient.OpenRead(path);
        //StreamReader sr = new StreamReader(myStream);
        //myOut = sr.ReadToEnd();
        //tLogMenu.InnerHtml = myOut;
        string dataConnect = "http://fb.beatfreaks.com/dataconnect/treatmentLog/";
        string myFile = dataConnect + "menuGet";
        MainFunc(myFile);

        path = myURI + "tLogHdr.html";
        Stream myStream1 = myWebClient.OpenRead(path);
        StreamReader sr1 = new StreamReader(myStream1);
        myOut = sr1.ReadToEnd();
        tLogHdr.InnerHtml = myOut;

        //path = myURI + "footer.aspx";
        //Stream myStream2 = myWebClient.OpenRead(path);
        //StreamReader sr2 = new StreamReader(myStream2);
        //myOut = sr2.ReadToEnd();
        //footer.InnerHtml = myOut;

        using (WebClient client = new WebClient())
        {
           // string dataConnect = "http://fb.beatfreaks.com/dataconnect/treatmentLog/";
            //var reqparm = new System.Collections.Specialized.NameValueCollection();

            //reqparm.Add("sessionID", sessionID);
            //reqparm.Add("val1", "");
            //reqparm.Add("val2", "");
            //reqparm.Add("val3", "");
            //reqparm.Add("val4", "");
            //byte[]  lastLogsresponseBytes = client.UploadValues(dataConnect + "getLastLog", "POST", reqparm);
            //string lastLogJson = Encoding.UTF8.GetString(lastLogsresponseBytes);
           // lastLog.InnerHtml = lastLogJson;
            //byte[] settingsresponseBytes = client.UploadValues(dataConnect + "settingsSet", "POST", reqparm);
            //string settingsJson = Encoding.UTF8.GetString(settingsresponseBytes);
            //Div1.InnerHtml = settingsJson;




            //footer.InnerHtml = sessionID;

        }
    }

    public void MainFunc(string myFile)
    {
        using (WebClient client = new WebClient())
        {
            //string dataConnect = "http://fb.beatfreaks.com/dataconnect/treatmentLog/";
            var reqparm = new System.Collections.Specialized.NameValueCollection();

            //reqparm.Add("sessionID", sessionID);
            byte[] responseBytes = client.UploadValues(myFile, "POST", reqparm);
            string responseJson = Encoding.UTF8.GetString(responseBytes);
            tLogMenu.InnerHtml = responseJson;
        }
    }
}