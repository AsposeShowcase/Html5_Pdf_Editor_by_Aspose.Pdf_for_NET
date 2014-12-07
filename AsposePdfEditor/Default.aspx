<%@ Page Title="" Language="C#" MasterPageFile="~/AsposePdfEditor.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="AsposePdfEditor.Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    



<!-- Modal -->
<div class="modal" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title" id="myModalLabel">File Upload Dialog</h4>
      </div>
      <div class="modal-body">
              <label for="fileToUpload">Select a File to Upload</label><br />
      <input type="file" name="fileToUpload" id="fileToUpload" onchange="fileSelected();"/>
      <label id="progress">0%</label><br />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Done</button>
        
      </div>
    </div>
  </div>
</div>      

<nav class="navbar navbar-inverse" role="navigation">  
  <h3 style="color:White; text-align:center">PDF Editor by Aspose for .NET</h3>
</nav>
<div class="well well-sm">
    <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal" data-toggle="tooltip" data-placement="top" title="Upload File to Server">
      <span class=" glyphicon glyphicon-upload"></span>
    </button>
    <button onclick="javascript:LoadFile();return false;" class="btn btn-default btn-lg" data-toggle="tooltip" data-placement="top" title="Load File">
    <span class="glyphicon glyphicon-import"></span> 
    </button>
    <button onclick="javascript:AddPage();return false;" class="btn btn-default btn-lg" id="btnAddPage" data-toggle="tooltip" data-placement="top" title="Add Page">
    <span class="glyphicon glyphicon-plus"></span>
    </button>
     <button onclick="javascript:DeletePage();return false;" class="btn btn-default btn-lg" id="btnDeletePage" data-toggle="tooltip" data-placement="top" title="Delete Page">
    <span class="glyphicon glyphicon-minus"></span>
    </button>
    <button onclick="javascript:UploadPic();return false;" class="btn btn-default btn-lg" id="btnSave" data-toggle="tooltip" data-placement="top" title="Save Pdf File">
    <span class="glyphicon glyphicon-floppy-disk"></span>
    </button>
    <button runat="server" onclick="javascript:SaveToDisk();return false;"  id="btnExport" class="btn btn-default btn-lg" data-toggle="tooltip" data-placement="top" title="Export Pdf File">
    <span class="glyphicon glyphicon-export"></span>
    </button>
    <button runat="server" onclick="javascript:SaveText();return false;" type="submit" id="btnTextExport" class="btn btn-default btn-lg" data-toggle="tooltip" data-placement="top" title="Export as Text File">
    <span class="glyphicon glyphicon-save"></span>
    </button>

    <button onclick="javascript:Previous();return false;" class="btn btn-default btn-lg" data-toggle="tooltip" data-placement="top" title="Previous Page">
    <span class="glyphicon glyphicon-circle-arrow-left"></span> 
    </button>
     <button  class="btn btn-default btn-lg" data-toggle="tooltip" data-placement="top" id="lblPages">
    
    </button>
    <button onclick="javascript:Next();return false;" class="btn btn-default btn-lg" data-toggle="tooltip" data-placement="top" title="Next Page">
     <span class="glyphicon glyphicon-circle-arrow-right"></span>    
    </button>

    <div class="btn-group">
    <button id="btnRect" value="rect"  class="btn btn-default btn-lg" data-toggle="tooltip" data-placement="top" title="Highlight Mode">
     <span class="glyphicon glyphicon-header"></span>  
    </button>

     <button id="btnRead" value="rect" onclick="javascript:Read(); return false;" class="btn btn-default btn-lg" data-toggle="tooltip" data-placement="top" title="Read Mode">
     <span class="glyphicon glyphicon-hand-up"></span>  
    </button>
    </div>
</div>

    <div id="container">
       <canvas id="imageView" width="1138" height="760" >
      
        <p>Unfortunately, your browser is currently unsupported by our web
        application.  We are sorry for the inconvenience. Please use one of the
        supported browsers listed below, or draw the image you want using an offline tool.</p>    
        
       
      </canvas>

         
  <script type="text/javascript" src="example-5.js">
  </script>

</asp:Content>
