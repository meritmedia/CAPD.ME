using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;
using System.Net.Sockets;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        string sessionID = Session.SessionID;
        MainFunc(sessionID);
        string myOut = "";
        var myURI = Server.MapPath(".") + "/partials/";

        WebClient myWebClient = new WebClient();
        var path = myURI + "Menu.html";

        

        string dataConnect = "http://fb.beatfreaks.com/dataconnect/treatmentLog/";
        //var reqparm = new System.Collections.Specialized.NameValueCollection();
        string myFile = dataConnect + "menuGet";
        MainFunc1(myFile,sessionID);

        //Stream myStream = myWebClient.OpenRead(path);
        //StreamReader sr = new StreamReader(myStream);
        //myOut = sr.ReadToEnd();
        //tLogMenu.InnerHtml = myOut;

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

        sessionIDDiv.InnerHtml = Session.SessionID;

    }
    public void MainFunc(string sessionID)
    {
        using (WebClient client = new WebClient())
        {
            string dataConnect = "http://fb.beatfreaks.com/dataconnect/treatmentLog/";
            var reqparm = new System.Collections.Specialized.NameValueCollection();

            reqparm.Add("sessionID", sessionID);
            byte[] settingsresponseBytes = client.UploadValues(dataConnect + "settingsSet", "POST", reqparm);
        }
    }
    public void MainFunc1(string myFile, string sessionID)
    {
        using (WebClient client = new WebClient())
        {
            //string dataConnect = "http://fb.beatfreaks.com/dataconnect/treatmentLog/";
            var reqparm = new System.Collections.Specialized.NameValueCollection();

            reqparm.Add("sessionID", sessionID);
            byte[] responseBytes = client.UploadValues(myFile, "POST", reqparm);
            string responseJson = Encoding.UTF8.GetString(responseBytes);
            tLogMenu.InnerHtml = responseJson;
        }
    }
}