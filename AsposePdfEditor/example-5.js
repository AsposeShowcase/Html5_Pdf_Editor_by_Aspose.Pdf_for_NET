var ratio = 1;
var canvasHeight;
var canvasWidth;
var currentPage;
Npages = [];
var dataLoad;
// Keep everything in anonymous function, called on window load.
if (window.addEventListener) {
    window.addEventListener('load', function () {
        var canvas, context, canvaso, contexto;

        var tempX;
        var tempY;
        var tempW;
        var tempH;
        var numShapes = 0;
        var dragIndex;
        var dragging;
        var mouseX;
        var mouseY;
        var dragHoldX;
        var dragHoldY;
        canvasWidth = 1138;
        canvasHeight = 760;

        // The active tool instance.
        var tool;
        var tool_default;

        function init() {
            // Find the canvas element.
            canvaso = document.getElementById('imageView');
            canvaso.width = canvasWidth;
            canvaso.height = canvasHeight;
            shapes = [];

            tempX = 0;
            tempY = 0;
            tempW = 0;
            tempH = 0;
            tool_default = "reading";

            if (!canvaso) {
                alert('Error: I cannot find the canvas element!');
                return;
            }

            if (!canvaso.getContext) {
                alert('Error: no canvas.getContext!');
                return;
            }

            // Get the 2D canvas context.
            contexto = canvaso.getContext('2d');

            if (!contexto) {
                alert('Error: failed to getContext!');
                return;
            }

            // Add the temporary canvas.
            var container = canvaso.parentNode;
            canvas = document.createElement('canvas');
            if (!canvas) {
                alert('Error: I cannot create a new canvas element!');
                return;
            }

            canvas.id = 'imageTemp';
            canvas.width = canvaso.width;
            canvas.height = canvaso.height;
            container.appendChild(canvas);
            context = canvas.getContext('2d');


            // Get the tool select input.
            var tool_select = document.getElementById('btnRect');
            var tool_select2 = document.getElementById('btnRead');

            if (!tool_select) {
                alert('Error: failed to get the dtool element!');
                return;
            }
            tool_select.addEventListener('click', ev_tool_change);
            tool_select2.addEventListener('click', ev_tool_change2);

            // Activate the default tool.
            if (tools[tool_default]) {
                tool = new tools[tool_default]();
                tool_select.value = tool_default;
            }

            // Attach the mousedown, mousemove and mouseup event listeners.
            canvas.addEventListener('mousedown', ev_canvas, false);
            canvas.addEventListener('mousemove', ev_canvas, false);
            canvas.addEventListener('mouseup', ev_canvas, false);
        }

        // The general-purpose event handler. This function just determines the mouse 
        // position relative to the canvas element.
        function ev_canvas(ev) {
            if (ev.layerX || ev.layerX == 0) { // Firefox
                ev._x = ev.layerX;
                ev._y = ev.layerY;
            } else if (ev.offsetX || ev.offsetX == 0) { // Opera
                ev._x = ev.offsetX;
                ev._y = ev.offsetY;
            }

            // Call the event handler of the tool.
            var func = tool[ev.type];
            if (func) {
                func(ev);
            }
        }

        // The event handler for any changes made to the tool selector.
        function ev_tool_change(ev) {

            if (tools['rect']) {
                tool = new tools['rect']();

            }
        }

        // The event handler for any changes made to the tool selector.
        function ev_tool_change2(ev) {

            if (tools['reading']) {
                tool = new tools['reading']();

            }
        }

        // This function draws the #imageTemp canvas on top of #imageView, after which 
        // #imageTemp is cleared. This function is called each time when the user 
        // completes a drawing operation.
        function img_update() {
            contexto.drawImage(canvas, 0, 0);
            context.clearRect(0, 0, canvas.width, canvas.height);
        }

        // This object holds the implementation of each drawing tool.
        var tools = {};

        // The rectangle tool.
        tools.rect = function () {
            var tool = this;
            this.started = false;

            this.mousedown = function (ev) {
                tool.started = true;
                tool.x0 = ev._x;
                tool.y0 = ev._y;
            };

            this.mousemove = function (ev) {
                if (!tool.started) {
                    return;
                }

                var x = Math.min(ev._x, tool.x0),
          y = Math.min(ev._y, tool.y0),
          w = Math.abs(ev._x - tool.x0),
          h = Math.abs(ev._y - tool.y0);

                context.clearRect(0, 0, canvas.width, canvas.height);

                if (!w || !h) {
                    return;
                }

                context.fillStyle = 'rgba(255, 230, 81, 0.5)';
                context.fillRect(x, y, w, h);

                tempX = x;
                tempY = y;
                tempW = w;
                tempH = h;
                numShapes = numShapes + 1;

            };

            this.mouseup = function (ev) {
                if (tool.started) {
                    tool.mousemove(ev);
                    tool.started = false;
                    img_update();
                    tempShape = { x: tempX, y: tempY, w: tempW, h: tempH, p: currentPage, f: Npages[currentPage - 1] };
                    shapes.push(tempShape);
                }
            };
        };

        // The reading tool.
        tools.reading = function () {
            var tool = this;
            this.started = false;
        };


        init();



    }, false);
}

var shapes;

function DrawPic(imageId) {



    var canvas = document.getElementById('imageView');

    var context = canvas.getContext('2d');

    var imageObj = new Image();

    imageObj.onload = function start() {

        context.clearRect(0, 0, this.width, this.width)
        canvas.width = this.width;
        canvas.height = this.height;
        context.drawImage(imageObj, 0, 0);
    };
    imageObj.src = 'Input/'.concat(imageId);

    return true;

}

function Previous() {


    if (currentPage > 1) {
        currentPage = currentPage - 1;
        DrawPic(Npages[currentPage - 1]);
        var promise = jQuery.when().promise();
        promise = promise.then(wait);
        promise.done(function () {
            DrawShapes();
        });
    }
    
    document.getElementById('lblPages').innerHTML = 'Page ' + currentPage + '  Of ' + Npages.length; ;

    
}

function AddPage() {

    sendAdd();
    
}

function sendAdd() {

    
    // Sending the image data to Server
    $.ajax({
        type: 'POST',
        url: 'CanvasSave.aspx/AddPage_Click',
        data: '{ "lastpage" : "' + Npages[Npages.length - 1] + '" }',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {
            Npages.push(data.d);
            document.getElementById('lblPages').innerHTML = 'Page ' + currentPage + '  Of ' + Npages.length; ;
        },
        //call on ajax call failure
        error: function (xhr, textStatus, error) {
        //called on ajax call success
        alert("Error: " + error);
        }

    });

}


function DeletePage() {

    sendDelete();
    
}

function sendDelete() {

    // Sending the image data to Server
    return $.ajax({
        type: 'POST',
        url: 'CanvasSave.aspx/DeletePage_Click',
        data: '{ "imageData" : "' + currentPage + '" }',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) { updateIndexesDelete(); }

    });

}

function updateIndexesDelete() {

    DeleteShapes();

    Npages.splice(currentPage - 1, 1);

    if (currentPage > Npages.length) {

       currentPage = Npages.length
        }


   DrawPic(Npages[currentPage - 1]);
   document.getElementById('lblPages').innerHTML = 'Page ' + currentPage + '  Of ' + Npages.length;
}

function DeleteShapes() {

    var i;

    for (i = 0; i < shapes.length; i++) {
        if (shapes[i].p == Npages[currentPage-1]) {

            shapes.splice(i, 1);
        }
    }
    
}


function Next() {

    if (currentPage < Npages.length) {
        currentPage = currentPage + 1;
        DrawPic(Npages[currentPage - 1]);
        var promise = jQuery.when().promise();
        promise = promise.then(wait);
        promise.done(function () {
            DrawShapes();
        });
        
        
    }

    document.getElementById('lblPages').innerHTML = 'Page ' + currentPage + '  Of ' + Npages.length; ;
}

function wait(ms) {
    var deferred = jQuery.Deferred();
    var intervalId = setInterval(function () {
        clearInterval(intervalId);
        deferred.resolve();
    }, 100);
    return deferred.promise();
}


function LoadFile() {

    // Sending the image data to Server
    $.ajax({
        type: 'POST',
        url: 'CanvasSave.aspx/ImageConverter',
        data: '{}',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) { dataLoad = data.d; First(); },
        //call on ajax call failure
        error: function (xhr, textStatus, error) {
            //called on ajax call success
            alert("Error: " + error);
        }

    });

}

function btnExportClick() {

    // Sending the image data to Server
    $.ajax({
        type: 'POST',
        url: 'Default.aspx/btnExportPDFClick',
        data: '{}',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json'
        
    });

}
function First() {

    Npages = dataLoad.split(',');
    ratio = Npages[0];
    Npages.splice(0, 1);
    currentPage = 1;

    DrawPic(Npages[currentPage - 1]);

    document.getElementById('lblPages').innerHTML = 'Page ' + currentPage + '  Of ' + Npages.length; ;

}
function UploadPic() {

    sendFile().then(alert('File Saved'));

}

function sendFile() {
   
    var filename = 'image'.concat(currentPage).concat('.png');  

    wholedata = JSON.stringify({ 'shapes': shapes, 'filename': filename, 'aspectRatio': ratio });

    // Sending the image data to Server
    return $.ajax({
        type: 'POST',
        url: 'CanvasSave.aspx/UploadPic',
        data: wholedata,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json'

    });
}

function DrawShapes() {

    var canvas = document.getElementById('imageView');

    var context = canvas.getContext('2d');

    var i;
    for (i = 0; i < shapes.length; i++) {
        if (shapes[i].f == Npages[currentPage-1]) {
            
            context.fillStyle = 'rgba(255, 230, 81, 0.5)';
            context.fillRect(shapes[i].x, shapes[i].y, shapes[i].w, shapes[i].h);
        }
    }

}

function fileSelected() {
    var progress = document.getElementById('progress');
    var fd = new FormData();
    fd.append("fileToUpload", document.getElementById('fileToUpload').files[0]);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "CanvasSave.aspx");
    xhr.onload = function () {
        progress.value = progress.innerHTML = 100 + '%';
    };
    xhr.upload.onprogress = function (event) {
        if (event.lengthComputable) {
            var complete = (event.loaded / event.total * 100 | 0);
            progress.value = progress.innerHTML = complete;
        }
    }
    xhr.send(fd);
}



function SaveToDisk() {

    window.open('Convert/input.pdf', '_blank');
}

function SaveToText() {

    window.open('Convert/output.txt', '_blank');
}

function SaveText() {

    // Sending the image data to Server
    $.ajax({
        type: 'POST',
        url: 'CanvasSave.aspx/btnTextExport_Click',
        data: '{}',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) { SaveToText(); },
        //call on ajax call failure
        error: function (xhr, textStatus, error) {
            //called on ajax call success
            alert("Error: " + error);
        }

    });

}