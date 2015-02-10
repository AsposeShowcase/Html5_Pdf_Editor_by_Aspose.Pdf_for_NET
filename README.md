## HTML5 PDF Editor by Aspose for .NET v2.3.0

### Introduction

This is a new and improved PDF Editor application developed in HTML5, jQuery Ajax and ASP.NET to edit PDF files using Aspose.Pdf for .NET. The enhancements in the editor's UI and the improvements in performance by the use of HTML5 with JQuery and Ajax makes it more user friendly and can be easily included in user applications. 

#### Note: The project works on Visual Studio 2010 and higher versions.

Portable Document Format (PDF) is one of the most commonly used file formats today. We come across a requirement quite often to edit a PDF files. [Aspose.Pdf for .NET API](http://goo.gl/opbcfA) provides comprehensive features to perform creation, manipulation and conversion of PDF files. 

#### Newly Supported Features in v2.3.0

This new release of HTML5 PDF Editor now supports the following important features:


 * Create new PDF files
 * Add Attachments to PDF Files
 * Highlighting Required Form Fields
 * Signing PDF File using Free Hand Drawing
 * Resizing Signature and Images
 
Following are some of the features we have already implemented in HTML5 PDF Editor's previous releases and more features will be implemented soon:
 
 * Loading and Viewing PDF files
 * Loading PDF and Image files from Dropbox
 * Inserting Images
 * Searching Text in PDF file
 * Replace Text in PDF file
 * Appending / Merging PDF files
 * Moving Pages in PDF file
 * Inserting Text in PDF file with formatting
 * Inserting New Pages
 * Deleting Pages
 * Highlight Text in PDF file
 * Dragging / Positioning inserted items
 * Loading PDF files with form fields
 * Fill Form fields using the Editor
 * Save and Export the updated PDF file with form fields data
 * Load Attachments from input PDF file
 * Download the Attachment files
 * Remove the Attachment files
 * Export the updated PDF file to different file formats
 

You can easily use the attached sample application to perform editing on your PDF documents. You can download the application and start using it to edit your PDF files. In the sample application, we are loading PDF files, converting them to image and viewing  them in our application using HTML5 Canvas control. We have kept the UI of the application simple so it is easy to understand the implementation of the features. 


![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/133600/1/main.png)
  

Let's see how we can use different features of the PDF editor.

 
### Create New PDF File 
 
You can create new PDF files using HTML5 PDF Editor. Use the "Create New File" menu item as shown below to create a new PDF file:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/133601/1/new.png)

  
After pressing the "Create New File" menu item, a new PDF file with one empty page is created and loaded in the editor as shown below:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/133603/1/new_done.png)


### Load and View PDF File 
 
We can use the editor to upload the existing PDF file. We can upload the files both from local machine and Dropbox as shown in the below image:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/133604/1/new.png)
  

We will choose the file from Dropbox by clicking the menu item "Open From Dropbox" and a popup will appear to select the file from Dropbox as shown below:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130289/1/choose_file_dropbox.png)

    
Below image shows the file loaded into the viewer:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130293/1/loaded_file.png)
  

### Sign PDF using Free Hand Drawing Tool
 
Now, you can draw the signatures on PDF file using the Drawing tool. To sign the document, select the "Signature" tool as shown below:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/133605/1/signature_select.png)

  
After selecting the "Signature" tool, you can click at the location where you want to add the signature. A dialog will appear where you can draw the signature using free hand drawing as shown below:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/133606/1/signature_popup.png)
  

You can draw the signature in the dialog as shown below:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/133607/1/signature_draw.png)

  
Once done with the signature, press the "Done" button to place the signature image on the PDF file as shown below:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/133608/1/signature_resize.png)

  
Once the signature image is added to the PDF viewer, you can drag and resize it and place it at the required location as shown below:


![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/133609/1/signature_done.png)
  
### Load and Fill Form Fields in PDF File
 
We can load a PDF file with form fields in the similar fashion as we have described above. Currently, we support the following form fields:

 * Textbox
 * Checkbox
 * ComboBox
 * Radio Buttons
 
After loading a PDF file with form fields, all the form fields are loaded in the editor as shown below:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/132063/1/field_open.png)
  
Once the file with form fields is loaded, you can fill the form using the PDF Editor. 

Following is the screenshot of filled form:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/132075/1/filled_form2.png)
  
The updated file with updated form fields can be saved using the *Save * button and following is the screenshot output PDF file:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/132087/1/pdf_export.png)
  
### Highlighting Required Form Fields
 
If a form has some fields which are required, those will get highlighted after loading in PDF Editor as shown below:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/133611/1/required_fields.png)
  
### Add Attachments in PDF file
 
HTML5 PDF Editor provides the feature to add attachments in the PDF file. To add the attachments, select "Add Attachments" from the Attachment menu as shown below:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/133612/1/add_attachment.png)
  

On selecting the "Add Attachment" option, file upload dialog will open which can be used to attach the file in the PDF document.

### Managing Attachments in PDF file

HTML5 PDF Editor now supports managing the PDF file attachments. Using the Attachments button, we can open the list of the Attachments in our PDF file as shown below:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/132088/1/attachments_loaded.png)

Once the attachments are loaded, we can download the attachments from the PDF file using the Download button. We can remove an attachment from PDF file using the Remove button. This will remove the attachment from the list as shown below:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/132090/1/attachment_removed2.png)

### Search Text in PDF File

Another important feature supported in PDF Editor is to search the text on all pages of a PDF file. Simply use 'Search Text' button and select 'Search Text' from the dropdown as shown below:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130294/1/search_menu.png)

On selecting 'Search Text' from the menu, a popup will appear where you can provide the text you want to search and press Search button as shown below:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130295/1/search_popup.png)

After providing the text to search and pressing 'Search' button, all the instances of the text search will be highlighted in the PDF file as shown in the figure below:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130296/1/search_result.png)

### Replace Text in PDF file

Another very useful feature is to replace text in a PDF file. You can use the 'Search' menu and select 'Replace Text' menu item as shown below:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130297/1/replace_menu.png)

On selecting 'Replace Text', a popup dialog will appear and you will be required to provide the text to find and the text to replace it with as shown below:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130298/1/replace_popup.png)

After providing the required fields, simply press 'Replace' button and all the occurrences of the required text will be replace with the new text as shown below:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130300/1/replace_result.png)

### Insert Image in PDF File

Another very useful feature supported by PDF Editor is to insert images in your PDF file. The images can be inserted from local machine or from Dropbox as per the requirement. You can use 'Insert Image' button and select your desired image import location as shown below:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130301/1/insert_image_menu.png)

You can select your desired image from any of the location on your local machine or dropbox and insert it into the PDF file. Below image shows the inserted image in our PDF file:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130304/1/insert_image.png)

Using the drag mode, you can select the image and reposition it at a location where you want to insert it. Below image shows the repositioned image:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130306/1/select_delete.png)

### Append / Merge PDF Files

After loading the file, now we will perform different operations on the PDF file. First, let's see how we can append another PDF file to our loaded PDF file. For that, we will use the 'Append File' button to upload the file as shown below:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130307/1/append.png)

Pressing the 'Append File' button will open the File Upload Dialog and you will be required to upload the file you need to append as shown below:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130308/1/append_upload.png)

Once the upload completes, you will see that newly uploaded file will get appended at the end of the existing PDF file. Following screenshot shows the result of append process:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130310/1/append_result.png)
 
### Moving Pages in PDF file

Another feature supported by our Html5 PDF Editor is to move pages within PDF file. You can click 'Move Page' button as shown below:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130312/1/move.png)

Once you click the button, an input dialog Move Page After will be shown which requires the page number after which you want to move the current page as shown below:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130314/1/move_popup.png)

After providing the page number, you simply need to click 'Move button' and your current page will be moved from current location to after the page number you entered.

### Highlight Text in PDF file

An important feature of the PDF Editor is to highlight the content of the PDF file. For that, you can simply click the 'Highlight Mode' button as shown in the below figure:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130316/1/highlight.png)

Now, in highlight mode, you can simply highlight the content using your mouse drawing. Following image shows the highlighted text in the PDF file:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130318/1/highlight_result.png)

### Insert Text in PDF file

Another important feature which is supported by the PDF Editor is to insert text in the PDF file by clicking the 'Text Mode' button.

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130319/1/insert_text.png)

Now, once the text mode is active, you can click anywhere on the viewer to add text using text edit dialog as shown below:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130320/1/insert_text_popup.png)

After adding and formatting the text, you can press the OK button in the editor dialog and the text will be inserted to the PDF file as shown in the image below:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130321/1/insert_text_result.png)

You can also edit the text by clicking the inserted text in the 'Text Mode'. It will again open the text editor dialog with the text you need to edit. The below image shows once we edit the text we just added:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130322/1/edit_text_popup.png)

After performing the changes and pressing 'OK' button, the updated text will be shown. We have changed some text and the color of the text and the updated text is shown below:

(https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130323/1/edit_text_result.png)

### Dragging / Positioning / Deleting Inserted Content

Another feature supported in the PDF editor is to drag, reposition or delete the content i.e. Text, image and highlight section inserted in the PDF file. For that, you need to click the 'Drag Mode' button as shown below:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130324/1/drag.png)

Once you select a highlighted section or some text, it will get a dotted rectangle around it and you can drag it anywhere on your page. The result of dragging feature is shown below:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130327/1/drag_result.png)

### Adding Pages in PDF File

Another feature is to add pages in PDF file. You can use the Add Page button as shown below and an empty page will be added to the end of the PDF file:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130328/1/add.png)

### Delete Pages from PDF File

As we can add a new page in our PDF file, we can also delete an existing page from PDF file using the editor. By clicking the Delete Page button, the page in view will get deleted from PDF file:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130329/1/delete.png)

### Saving the PDF File

After you are done with the editing of PDF file, you can press the 'Save PDF File' button to save the changes you made to the PDF file.

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130333/1/save.png)

### Export PDF File to Different File Formats

This feature allows to export the saved PDF file to different file formats including PDF, Text, HTML, Word, Excel, XPS and SVG. You can simply click the Export File button and choose the format in which you want to export the resultant file.

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130331/1/export.png)

Following is the resultant PDF file:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/130332/1/export_result.png)

You can download the sample application and try it at your end.  The complete source code is available and you can use it to further modify the application as per your needs. You can also suggest any changes and we will try to implement them.

### Note: 
I am using a free trial license of Aspose.Pdf for .NET in the application which removes any trial limitations of Aspose.Pdf API. You can also get a [free trial license](http://goo.gl/AxGy9H) to further explore the features of Aspose.Pdf API as per your requirement. In case no license file is used, the application will work in evaluation mode and will have some restrictions. So, it is recommended to have a free trial license (without any credit card information requirement or any payment).

In evaluation version (without the use of a free trial license or paid subscription of Aspose.Pdf for .NET) only 4 items from any of the collections will be loaded in the editor. Following warning message will be shown in such case:

![](https://i1.code.msdn.s-msft.com/pdf-editor-to-edit-pdf-5fb73b8d/image/file/132105/1/license.png)

In such case, please get a free trial license to test the HTML5 PDF Editor without any evaluation restrictions as mentioned above.