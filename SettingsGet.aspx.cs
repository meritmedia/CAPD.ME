using System;
using System.IO;
using System.Net;
using System.Text;
using System.Web.Script.Serialization;
using System.ServiceModel.Web;

public partial class SettingsGet : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        string mySessionID = Session.SessionID;
        sessionID.InnerHtml= mySessionID;
        //var uSysID = Request.Cookies["uSysID"].Value;
        string myOut = "";
        var myURI = Server.MapPath(".") + "/partials/";
        WebClient myWebClient = new WebClient();
        var path = "";

        path = myURI + "Menu.html";
        Stream myStream = myWebClient.OpenRead(path);
        StreamReader sr = new StreamReader(myStream);

        string dataConnect = "http://fb.beatfreaks.com/dataconnect/treatmentLog/";
        string myFile = dataConnect + "menuGet";
        MainFunc(myFile);

        path = myURI + "tLogHdr.html";
        //Stream myStream1 = myWebClient.OpenRead(path);
        myStream = myWebClient.OpenRead(path);
        sr = new StreamReader(myStream);
        myOut = sr.ReadToEnd();
        tLogHdr.InnerHtml = myOut;

        //path = myURI + "footer.aspx";
        //myStream = myWebClient.OpenRead(path);
        //sr = new StreamReader(myStream);
        //myOut = sr.ReadToEnd();
        //footer.InnerHtml = myOut;

        using (WebClient client = new WebClient())
        {
            //string dataConnect = "http://fb.beatfreaks.com/dataconnect/treatmentLog/";
            var reqparm = new System.Collections.Specialized.NameValueCollection();

            reqparm.Add("sessionID", mySessionID);

            byte[] settingsresponseBytes = client.UploadValues(dataConnect + "SettingsSet", "POST", reqparm);
            string settingsJson = Encoding.UTF8.GetString(settingsresponseBytes);
            jsonDiv1.InnerHtml = settingsJson;

        }
    }
        public void getData(string fKey, string myIn, string myOut)
        {
        using (WebClient client = new WebClient())
        {
            string dataConnect = "http://fb.beatfreaks.com/dataconnect/treatmentLog/";              
            var reqparm = new System.Collections.Specialized.NameValueCollection();

            reqparm.Add("sessionID", fKey);

            byte[] settingsresponseBytes = client.UploadValues(dataConnect + myIn, "POST", reqparm);
            string settingsJson = Encoding.UTF8.GetString(settingsresponseBytes);
            //myOut.InnerHtml = settingsJson;

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