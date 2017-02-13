var dataString1 = "";
var dataString2 = "";
var dataString3 = "";

var currentColor = "hsl(0, 90%, 50%)";
var make = document.getElementById("")

var canF = document.querySelector('#canvasF'),
    canI1 = document.querySelector('#canvasI1'),
    canI2 = document.querySelector('#canvasI2'),
    //canS1 = document.querySelector('#sticker1');

    ctxF = canF.getContext('2d'),
    ctxI1 = canI1.getContext('2d'),
    ctxI2 = canI2.getContext('2d');
//ctxS1 = canS1.getContext('2d');



function backgroundColor(f, i1, i2){
    ctxF.beginPath();
    ctxF.rect(0,0, 440, 616);
    ctxF.fillStyle = f;
    ctxF.fill();
    ctxI1.beginPath();
    ctxI1.rect(0,0, 440, 616);
    ctxI1.fillStyle = i1;
    ctxI1.fill();
    ctxI2.beginPath();
    ctxI2.rect(0,0, 440, 616);
    ctxI2.fillStyle = i2;
    ctxI2.fill();
    console.log(f);
}


var draw_circle = function(can, ctx, x, y, color) {

    x = x - can.offsetLeft; // Get mouse pos. in relationship to canvas.
    y = y - can.offsetTop;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x ,y , brushW/2.2, 0, 2*Math.PI);
    ctx.fill();
};

var is_drawing = false;
var last_x, last_y, current_x, current_y;

//drawing functions
window.onmousedown = function (e) {
    currentColor = "hsl(" + brushH + ", 90%, " + brushL + "%)";
    last_x = e.x;
    last_y = e.y;
    current_x = e.x;
    current_y = e.y;

    if(currentCanvas == 1){
        draw_circle(canF, ctxF, current_x, current_y, currentColor);
    }else if(currentCanvas == 2){
        draw_circle(canI1, ctxI1, current_x, current_y, currentColor);
    }else if(currentCanvas == 3){
        draw_circle(canI2, ctxI2, current_x, current_y, currentColor);
    }

    is_drawing = true;
};

window.onmousemove = function (e) {
    if (is_drawing === true) {
        currentColor = "hsl(" + brushH + ", 90%, " + brushL + "%)";
        current_x = e.x;
        current_y = e.y;

        var progress = 0.0;

        while (progress <= 1.0) {
            var x_inside = last_x + (current_x - last_x) * progress;
            var y_inside = last_y + (current_y - last_y) * progress;
            if(currentCanvas == 1){
                draw_circle(canF, ctxF, x_inside, y_inside, currentColor);
            }else if(currentCanvas == 2){
                draw_circle(canI1, ctxI1, x_inside, y_inside, currentColor);
            }else if(currentCanvas == 3){
                draw_circle(canI2, ctxI2, x_inside, y_inside, currentColor);
            }
            progress = progress + 0.05;
        }

        last_x = current_x;
        last_y = current_y;
    }
};

window.onmouseup = function (e) {
    currentColor = "hsl(" + brushH + ", 90%, " + brushL + "%)";
    current_x = e.x;
    current_y = e.y;
    if(currentCanvas == 1){
        draw_circle(canF, ctxF, current_x, current_y, currentColor);
    }else if(currentCanvas == 2){
        draw_circle(canI1, ctxI1, current_x, current_y, currentColor);
    }else if(currentCanvas == 3){
        draw_circle(canI2, ctxI2, current_x, current_y, currentColor);
    }

    is_drawing = false;
};


$(done).hover(function(){
    dataString1 = canF.toDataURL("image/png");
    dataString2 = canI1.toDataURL("image/png");
    dataString3 = canI2.toDataURL("image/png");
});

 //make the card!!
 done.onclick = function makeCard(){


     var imageData = {front: dataString1, back: dataString2, inside: dataString3, myLink: link};
     var stringData = JSON.stringify(imageData);


     $.ajax({
         type: 'POST',
         data: stringData,
         contentType: 'text/json',
         url: '/',
         success: function(data) {
         var user_id = data;
         console.log('success');
         console.log(user_id)
         }
     });
 }

 // //make again
 // again.onclick = function(){
 // location.reload();
 // }



function getWidth() {
    if (self.innerWidth) {return self.innerWidth;}
    if (document.documentElement && document.documentElement.clientWidth) {
        return document.documentElement.clientWidth;}
    if (document.body) { return document.body.clientWidth;}}

function getHeight() {
    if (self.innerHeight) {return self.innerHeight;}
    if (document.documentElement && document.documentElement.clientHeight) {
        return document.documentElement.clientHeight;}
    if (document.body) { return document.body.clientHeight;}}
var pageWidth = getWidth();
var pageHeight = getHeight();



