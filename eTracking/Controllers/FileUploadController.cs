using eTracking_DAL;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace eTracking.Controllers
{
    public class FileUploadController : Controller
    {
        //
        // GET: /FileUpload/

        [HttpPost]
        public ActionResult SaveUploadedFile(string sourcepath, string destipath, string filename, string roid, string oldschdate, string newschdate)
        {
            string fileName = filename;
            string sourcePath = sourcepath;
            string targetPath = destipath;

            string sourceFile = System.IO.Path.Combine(sourcePath, fileName);
            string destFile = System.IO.Path.Combine(targetPath, fileName);
            try
            {
                if (!System.IO.Directory.Exists(targetPath))
                {
                    System.IO.Directory.CreateDirectory(targetPath);
                }
                if (System.IO.File.Exists(destFile))
                {
                    System.IO.File.Delete(destFile);
                }
                if (!System.IO.File.Exists(sourceFile))
                {
                    return Json(new { Message = "Error in transferring file!!", Status = 1 });
                }
                System.IO.File.Move(sourceFile, destFile);
            }
            //if (System.IO.Directory.Exists(sourcePath))
            //{
            //    string[] files = System.IO.Directory.GetFiles(sourcePath);
            //    foreach (string s in files)
            //    {
            //        fileName = System.IO.Path.GetFileName(s);
            //        destFile = System.IO.Path.Combine(targetPath, fileName);
            //        System.IO.File.Move(s, destFile);
            //    }
            //}
            //else
            //{
            //    return Json(new { Message = "Error in saving file", Status = 1 });
            //}
            catch (Exception ex)
            {
                Utility.ReportError("FileUploadController :SaveUploadedFile :: Roid:" + roid + " OldSchDate:" + oldschdate + "NewSchDate:" + newschdate + " SourcePath:" + sourcepath + " DestiPath:" + destipath + " FileName:" + filename + " ", ex);
                return Json(new { Message = "Error in transferring file!!", Status = 1 });
            }

            return Json(new { Message = "File Transferred  successfully!!", Status = 0 });
        }

    }
}