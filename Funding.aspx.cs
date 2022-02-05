using System;
using System.IO;
using System.Net;
using System.Text;
using System.Web.Script.Serialization;
using System.ServiceModel.Web;

public partial class Funding : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        string myOut = "";
        var myURI = Server.MapPath(".") + "/partials/";

        WebClient myWebClient = new WebClient();
        var path = myURI + "Menu.html";
        string dataConnect = "http://fb.beatfreaks.com/dataconnect/treatmentLog/";
        string myFile = dataConnect + "menuGet";
        MainFunc(myFile);

        path = myURI + "tLogHdr.html";
        Stream myStream1 = myWebClient.OpenRead(path);
        StreamReader sr1 = new StreamReader(myStream1);
        myOut = sr1.ReadToEnd();
        tLogHdr.InnerHtml = myOut;

        //myURI = Server.MapPath(".") + "/";
        //path = myURI + "footer.aspx";
        //Stream myStream2 = myWebClient.OpenRead(path);
        //StreamReader sr2 = new StreamReader(myStream2);
        //myOut = sr2.ReadToEnd();
        //footer.InnerHtml = myOut;
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