using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.IO;

namespace eTracking_DAL
{
   public class Utility
    {

       public static string strRootPath
       {
           get
           {
               string APP_PATH = System.Web.HttpContext.Current.Request.ApplicationPath.ToLower();
               if (APP_PATH == "/")      //a site
                   APP_PATH = "/";
               else if (!APP_PATH.EndsWith(@"/")) //a virtual
                   APP_PATH += @"/";
               return System.Web.HttpContext.Current.Server.MapPath(APP_PATH) + "TempDocument/";
           }
       }

        public static void ReportError(string message, Exception exceptionMessage, string xml = "")
        {
            try
            {
                string path = HttpContext.Current.Server.MapPath("~/log.txt");
                FileStream fs1 = new FileStream(path, FileMode.Append, FileAccess.Write);
                StreamWriter writer = new StreamWriter(fs1);
                writer.WriteLine("----" + message + "------" + DateTime.Now.ToString("dd/MM/yyyy hh:mm:ss") + "-----------------\n" + exceptionMessage.Message + "\n" + xml);
                writer.Close();
            }
            catch (Exception ex) { }
        }
        public static string SaveToLog(string message)
        {
            string path = "";
            try
            {
                path = HttpContext.Current.Server.MapPath("~/log.txt");

                FileStream fs1 = new FileStream(path, FileMode.Append, FileAccess.Write);
                StreamWriter writer = new StreamWriter(fs1);
                writer.WriteLine("----------" + DateTime.Now.ToString("dd/MM/yyyy hh:mm:ss") + "-----------------\n" + message);
                writer.Close();
                return "";
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
    }
}
