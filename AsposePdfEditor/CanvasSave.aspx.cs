using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Script.Services;
using System.Web.Services;
using System.IO;
using Aspose.Pdf;
using Aspose.Pdf.Devices;
using Aspose.Pdf.Facades;
using System.Threading;
using System.Drawing;
using Aspose.Pdf.Text;

namespace AsposePdfEditor
{
    [ScriptService]
    public partial class CanvasSave : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
           
        }

        public void ProcessRequest(HttpContext context)
        {

            //Capture File From Post
            HttpPostedFile file = context.Request.Files["fileToUpload"];

            //Or just save it locally
            file.SaveAs(Server.MapPath("Convert/input.pdf"));



        }


        [WebMethod()]
        public static string AddPage_Click(string lastpage)
        {
            try
            {
                Document doc = new Document(HttpContext.Current.Server.MapPath("Convert/output.pdf"));

                //insert an empty page at the end of a PDF file
                doc.Pages.Add();

                doc.Save(HttpContext.Current.Server.MapPath("Convert/output.pdf"));

                int height = 760;

                int counter = Convert.ToInt32(lastpage.Replace("image", "").Replace(".png", ""));
                counter = counter + 1;

                using (FileStream imageStream = new FileStream(HttpContext.Current.Server.MapPath("Input/image-1" + counter + ".png"), FileMode.Create))
                {
                    //Create Resolution object
                    Resolution resolution = new Resolution(300);
                    //create PNG device with specified attributes
                    PngDevice pngDevice = new PngDevice();
                    //Convert a particular page and save the image to stream
                    pngDevice.Process(doc.Pages[doc.Pages.Count], imageStream);
                    //Close stream
                    imageStream.Close();
                }
                string Aratio = "";
                System.Drawing.Image image = System.Drawing.Image.FromFile(HttpContext.Current.Server.MapPath("Input/image-1" + counter + ".png"));
                ScaleImage(image, 1138, 760, HttpContext.Current.Server.MapPath("Input/image" + counter + ".png"), out height, out Aratio);
                image.Dispose();
                return "image" + counter + ".png";
            }
            catch (Exception Exp)
            {
                return Exp.Message;
            }
        }

       

        [WebMethod()]
        protected static void ScaleImage(System.Drawing.Image image, int maxWidth, int maxHeight, string path, out int height,out string Aratio)
        {
            var ratio = (double)maxWidth / image.Width;
            //var ratioY = (double)maxHeight / image.Height;
            //var ratio = Math.Min(ratioX, ratioY);
           Aratio = ratio.ToString();
            var newWidth = (int)(image.Width * ratio);
            var newHeight = (int)(image.Height * ratio);
            height = newHeight;
            var newImage = new Bitmap(newWidth, newHeight);
            Graphics.FromImage(newImage).DrawImage(image, 0, 0, newWidth, newHeight);
            Bitmap bmp = new Bitmap(newImage);

            bmp.Save(path);



        }


        [WebMethod()]
        public static void DeletePage_Click(string imageData)
        {
            try
            {
                Document doc = new Document(HttpContext.Current.Server.MapPath("Convert/output.pdf"));

                //insert an empty page at the end of a PDF file
                doc.Pages.Delete(Convert.ToInt32(imageData));

                doc.Save(HttpContext.Current.Server.MapPath("Convert/output.pdf"));

                System.IO.File.Delete(HttpContext.Current.Server.MapPath("Input/image" + Convert.ToInt32(imageData) + ".png"));
            }
            catch (Exception Exp)
            {
               // return Exp.Message;
            }
            
        }

       
        [WebMethod()]
        public static void UploadPic(List<shap> shapes , string filename, string aspectRatio)
        {
            try
            {
                Document doc = new Document(HttpContext.Current.Server.MapPath("Convert/output.pdf"));

                //open document
                PdfFileStamp fileStamp = new PdfFileStamp(doc);

                for (int i = 0; i < shapes.Count; i++)
                {
                    //create stamp
                    Aspose.Pdf.Facades.Stamp stamp = new Aspose.Pdf.Facades.Stamp();

                    float shapeX = (shapes[i].x * 72 / 150) / (float)Convert.ToDouble(aspectRatio);
                    float shapeY = (shapes[i].y * 72 / 150) / (float)Convert.ToDouble(aspectRatio);
                    float shapeW = (shapes[i].w * 72 / 150) / (float)Convert.ToDouble(aspectRatio);
                    float shapeH = (shapes[i].h * 72 / 150) / (float)Convert.ToDouble(aspectRatio);

                    double yaxis = (float)(doc.Pages[shapes[i].p].Rect.URY - (shapeH + shapeY));

                    stamp.BindImage(HttpContext.Current.Server.MapPath("test.png"));
                    stamp.SetOrigin((float)(shapeX), (float)(yaxis));
                    stamp.SetImageSize(shapeW, shapeH);

                    // stamp.Rotation = 90.0F;
                    stamp.IsBackground = false;

                    //set particular pages
                    stamp.Pages = new int[] { shapes[i].p };

                    //add stamp to PDF file
                    fileStamp.AddStamp(stamp);

                }
                //save updated PDF file
                fileStamp.Save(HttpContext.Current.Server.MapPath("Convert/output.pdf"));
                doc.Save(HttpContext.Current.Server.MapPath("Convert/input.pdf"));
            }
            catch (Exception Exp)
            {
              //  return Exp.Message;
            }
        }
        [WebMethod]
        public static string ImageConverter()
        {
            try
            {
                System.IO.DirectoryInfo downloadedMessageInfo = new DirectoryInfo(HttpContext.Current.Server.MapPath("Input/"));

                foreach (FileInfo file in downloadedMessageInfo.GetFiles())
                {
                    file.Delete();
                }

                Document doc = new Document(HttpContext.Current.Server.MapPath("Convert/input.pdf"));
                doc.Save(HttpContext.Current.Server.MapPath("Convert/output.pdf"));
                string Aratio = "";
                string pages = "";
                int height = 760;

                for (int pageCount = 1; pageCount <= doc.Pages.Count; pageCount++)
                {
                    using (FileStream imageStream = new FileStream(HttpContext.Current.Server.MapPath("Input/image-1" + pageCount + ".png"), FileMode.Create))
                    {
                        //Create Resolution object
                        //Resolution resolution = new Resolution(300);
                        //create PNG device with specified attributes
                        PngDevice pngDevice = new PngDevice();
                        //Convert a particular page and save the image to stream
                        pngDevice.Process(doc.Pages[pageCount], imageStream);
                        //Close stream
                        imageStream.Close();

                        System.Drawing.Image image = System.Drawing.Image.FromFile(HttpContext.Current.Server.MapPath("Input/image-1" + pageCount + ".png"));



                        ScaleImage(image, 1138, 760, HttpContext.Current.Server.MapPath("Input/image" + pageCount + ".png"), out height, out Aratio);

                        image.Dispose();

                        pages = pages + "," + "image" + pageCount + ".png";
                    }

                }

                Aratio = Aratio + pages;
                return Aratio;
            }
            catch (Exception Exp)
            {
                return Exp.Message;
            }
        }

        [WebMethod]
        public static void btnTextExport_Click()
        {
            try
            {
                Document doc = new Document(HttpContext.Current.Server.MapPath("Convert/input.pdf"));

                //create TextAbsorber object to extract text
                TextAbsorber textAbsorber = new TextAbsorber();

                //accept the absorber for all the pages
                doc.Pages.Accept(textAbsorber);

                //get the extracted text
                string extractedText = textAbsorber.Text;

                System.IO.File.WriteAllText(HttpContext.Current.Server.MapPath("Convert/output.txt"), extractedText);
            }
            catch (Exception Exp)
            {
             //   return Exp.Message;
            }
        }
    }

    public class shap
    {
        public int x { get; set; }
        public int y { get; set; }
        public int w { get; set; }
        public int h { get; set; }
        public int p { get; set; }
        public string f { get; set; }

    }


}