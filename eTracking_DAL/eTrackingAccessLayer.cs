using DBInterface;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eTracking_DAL
{
  public class eTrackingAccessLayer
    {


      public DataSet eTrackingFiltersData(string xmlData)
      {
          using (var db = new DBManager())
          {
              db.Open();
              db.CreateParameters(1);
              db.AddParameters(0, "@XMLBody", xmlData);
              DataSet ds = db.ExecuteDataSet(CommandType.StoredProcedure, "AMS_SP_eTrackFilters");
              return ds;
          }
      }

      public DataSet DisplayEtrackingData(string xmlData)
        {
            using (var db = new DBManager())
            {
                db.Open();
                db.CreateParameters(1);
                db.AddParameters(0, "@XMLBody", xmlData);
                DataSet ds = db.ExecuteDataSet(CommandType.StoredProcedure, "AMS_SP_eTrackActions ");
                return ds;
            }
        }

      public DataSet unlockorder(string userid, string centerid, string moduleid)
      {
          string submodule = string.Empty;
          using (var db = new DBManager())
          {
              db.Open();
              db.CreateParameters(4);
              db.AddParameters(0, "@UserID", userid);
              db.AddParameters(1, "@LoginCentre", centerid);
              db.AddParameters(2, "@ModuleID", moduleid);
              db.AddParameters(3, "@SubModule", submodule);
              DataSet ds = db.ExecuteDataSet(CommandType.StoredProcedure, "AMS_SP_UnlockOrder");
              return ds;
          }
      }
    }
}
