using DBInterface;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using eTracking.Models;
using System.Web.Mvc;
using eTracking_DAL;

namespace eTracking.Controllers
{
    public class eTrackingController : Controller
    {
        //
        // GET: /eTracking/
        public ActionResult WebTrack()
        {
            return View();
        }

        public ActionResult Welcome(string id, string cid)
        {

            if (id == null || id == "")
            {
                Response.Redirect(System.Web.Configuration.WebConfigurationManager.AppSettings["AdproUrl"]);
                return View();
            }
            string ClintIP = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
            if (ClintIP == "" || ClintIP == null)
            {
                ClintIP = Request.ServerVariables["REMOTE_ADDR"];
            }
            using (DBManager db = new DBManager())
            {
                db.Open();
                db.CreateParameters(3);
                db.AddParameters(0, "@Id", id);
                db.AddParameters(1, "@CentreID", cid);
                db.AddParameters(2, "@MachineIP", ClintIP);
                DataSet ds = db.ExecuteDataSet(CommandType.StoredProcedure, "USP_EMAT_UserIdentification");
                if (ds.Tables[0].Rows.Count > 0)
                {
                    //HttpContext.Session["UserCode"] = ds.Tables[0].Rows[0]["UserCode"].ToString();
                    HttpContext.Session["UserId"] = ds.Tables[0].Rows[0]["UserID"].ToString();
                    HttpContext.Session["UserName"] = ds.Tables[0].Rows[0]["UserName"].ToString();
                    HttpContext.Session["CentreID"] = ds.Tables[0].Rows[0]["CentreID"].ToString(); ;
                    HttpContext.Session["Center"] = ds.Tables[0].Rows[0]["CentreName"].ToString();
                    //return RedirectToAction(GetLoginRight(HttpContext.Session["UserId"].ToString(), HttpContext.Session["CenterID"].ToString()), true);
                    return RedirectToAction("../TrackInsertions/Insertions", true);
                }
                else
                {
                    string s = ConfigurationManager.AppSettings["AdproUrl"].ToString();
                    return Redirect(s);
                }
            }
            return View();
        }

        [HttpPost]
        [ValidateInput(false)]
        public JsonResult etrackingFiltersData(string xmlData)
        {
            List<ControlData> lst = new List<ControlData>();
            eTrackingAccessLayer objOrders = new eTrackingAccessLayer();
            try
            {
                DataTable dt = objOrders.eTrackingFiltersData(xmlData).Tables[0];
                if (dt.Rows.Count > 0)
                {
                    foreach (DataRow dr in dt.Rows)
                    {
                        ControlData p = new ControlData();
                        p.value = Convert.ToString(dr[0]);
                        p.key = Convert.ToString(dr[1]);
                        lst.Add(p);
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return Json(lst);
        }

        [HttpPost]
        [ValidateInput(false)]
        public JsonResult ShowEtrackingData(string xmlData)
        {
            DataTable dt = new DataTable();
            List<List<string>> listarray = new List<List<string>>();
            eTrackingAccessLayer objprovinvoice = new eTrackingAccessLayer();
            try
            {
                DataSet ds = objprovinvoice.DisplayEtrackingData(xmlData);

                if (ds.Tables.Count > 0)
                    dt = ds.Tables[0];

                DataRow dtDr = dt.NewRow();
                dtDr[17] = dt.Compute("Sum(Net)", "").ToString();
                dt.Rows.Add(dtDr);

                List<String> columnlist = (from dc in dt.Columns.Cast<DataColumn>()
                                           select dc.ColumnName).ToList();
                listarray.Add(columnlist);
                foreach (DataRow dr in dt.Rows)
                {
                    List<String> jst = dr.ItemArray.Select(o => o.ToString()).ToList();
                    listarray.Add(jst);
                }
            }
            catch (Exception ex)
            {

            }
            var jsonResult = Json(listarray);
            jsonResult.MaxJsonLength = int.MaxValue;
            return jsonResult;
        }

        [HttpPost]
        public JsonResult Logout()
        {
            try
            {
                Session.Abandon();
                Session.Clear();
            }
            catch (Exception ex)
            {
            }
            return Json('1');
        }

        [HttpPost]
        [ValidateInput(false)]
        public void unlockorder(string userid, string centerid, string moduleid)
        {
            eTrackingAccessLayer objOrders = new eTrackingAccessLayer();
            try
            {
                DataTable dt = objOrders.unlockorder(userid, centerid, moduleid).Tables[0];
            }
            catch (Exception ex)
            {

            }
        }

        [HttpPost]
        public JsonResult GetSessionValue(string xmlParameter)
        {
            List<string> result = new List<string>();
            result.Add(Session[xmlParameter] == null ? "" : Session[xmlParameter].ToString());
            return Json(result);
        }


    }
}