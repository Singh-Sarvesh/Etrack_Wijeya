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
using System.IO;
using System.Web;
using Spire.Xls;
using Spire.Pdf;
using Spire.Xls.Converter;

namespace eTracking.Controllers
{
    public class TrackInsertionsController : Controller
    {
        //
        // GET: /TrackInsertions/
        public ActionResult Insertions()
        {
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

                if (dt.Columns.Count > 2)
                {
                    DataRow dtDr = dt.NewRow();
                    dtDr[20] = dt.Compute("Sum(PreVatAmount)", "").ToString();
                    dtDr[21] = dt.Compute("Sum(VatAmount)", "").ToString();
                    dtDr[22] = dt.Compute("Sum(NetAmount)", "").ToString();
                    dt.Rows.Add(dtDr);
                }

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
        [ValidateInput(false)]
        public JsonResult ShowtransferEtrackingData(string xmlData)
        {
            DataTable dt = new DataTable();
            List<List<string>> listarray = new List<List<string>>();
            eTrackingAccessLayer objprovinvoice = new eTrackingAccessLayer();
            try
            {
                DataSet ds = objprovinvoice.DisplayEtrackingData(xmlData);

                if (ds.Tables.Count > 0)
                    dt = ds.Tables[0];

                //if (dt.Columns.Count > 2)
                //{
                //    DataRow dtDr = dt.NewRow();
                //    dtDr[22] = dt.Compute("Sum(NetAmount)", "").ToString();
                //    dt.Rows.Add(dtDr);
                //}

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
        [ValidateInput(false)]
        public JsonResult BindEtrackingRights(string xmlData)
        {
            DataTable dt = new DataTable();
            List<List<string>> listarray = new List<List<string>>();
            eTrackingAccessLayer objprovinvoice = new eTrackingAccessLayer();
            try
            {
                DataSet ds = objprovinvoice.eTrackingFiltersData(xmlData);

                if (ds.Tables.Count > 0)
                    dt = ds.Tables[0];

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
        [ValidateInput(false)]
        public JsonResult ShowHistoryData(string xmlData)
        {
            DataTable dt = new DataTable();
            List<List<string>> listarray = new List<List<string>>();
            eTrackingAccessLayer objprovinvoice = new eTrackingAccessLayer();
            try
            {
                DataSet ds = objprovinvoice.DisplayEtrackingData(xmlData);

                if (ds.Tables.Count > 0)
                    dt = ds.Tables[0];

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
        [ValidateInput(false)]
        public JsonResult GetSearchAgencyData(string xmlData)
        {
            DataTable dt = new DataTable();
            List<List<string>> listarray = new List<List<string>>();
            eTrackingAccessLayer objprovinvoice = new eTrackingAccessLayer();
            try
            {
                DataSet ds = objprovinvoice.DisplayEtrackingData(xmlData);

                if (ds.Tables.Count > 0)
                    dt = ds.Tables[0];

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
        [ValidateInput(false)]
        public JsonResult GetSearchClientData(string xmlData)
        {
            DataTable dt = new DataTable();
            List<List<string>> listarray = new List<List<string>>();
            eTrackingAccessLayer objprovinvoice = new eTrackingAccessLayer();
            try
            {
                DataSet ds = objprovinvoice.DisplayEtrackingData(xmlData);

                if (ds.Tables.Count > 0)
                    dt = ds.Tables[0];

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

    }
}