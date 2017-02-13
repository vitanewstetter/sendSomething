

var currentCanvas = 1;

var fH = 255;
var fL = 100;



var brushH = 60;
var brushL = 50;
var brushW = 20;

var link = '';

$("#sectionThree").hide();
$("#sectionThree").hide();
$("#sectionTwo").hide();
$("#canvasI1").hide();
$("#canvasI2").hide();


$("#colorPicker").mousemove(function(){
    fH = $("#fH").val();
    fL = $("#fL").val();
    $("#fH").css("background", "linear-gradient(to right, hsl(0, 90%, " + fL +"%), hsl(30, 90%, " + fL +"%), hsl(60, 90%, " + fL +"%), hsl(90, 90%, " + fL +"%), hsl(120, 90%, " + fL +"%), hsl(150, 90%, " + fL +"%), hsl(180, 90%, " + fL +"%), hsl(210, 90%, " + fL +"%), hsl(240, 90%, " + fL +"%), hsl(270, 90%, " + fL +"%), hsl(300, 90%, " + fL +"%), hsl(330, 90%, " + fL +"%), hsl(360, 90%, " + fL +"%))");
    $("#fL").css("background", "linear-gradient(to right, hsl(" + fH + ", 90%, 0%), hsl(" + fH + ", 90%, 50%), hsl(" + fH + ", 90%, 100%))");
});
$(".background").click(function(){
    fH = $("#fH").val();
    fL = $("#fL").val();
    $(this).css("background-color", 'hsl('+ fH + ', 90%,' + fL + '%)');
    if(fL>95){
        $(this).css("border", "solid rgb(200,200,200) 2px");
        $(this).find("h3").css("color", "rgb(200,200,200)");
    }else{
        $(this).css("border", "solid white 2px");
        $(this).find("h3").css("color", "white");
    }


});

$("#continueOne").click(function(){
    $("#brush").css("background-color", "hsl(60" + ", 90%, " + brushL + "%)");
    $("#brush").css("width", brushW);
    $("#brush").css("height", brushW);
           var F = $("#fColor").css("background-color");
            var I1 = $("#i1Color").css("background-color");
            var I2 = $("#i2Color").css("background-color");
        //set card backgrounds
        // $('#canvasF').css('background-color', 'hsl(' + fH + ', 90%, ' + fL + '%)');
        // $('#canvasI1').css('background-color', 'hsl(' + fH + ', 90%, ' + fL + '%)');
        // $('#canvasI2').css('background-color', 'hsl(' + fH + ', 90%, ' + fL + '%)');

    ctxF.clearRect(0, 0, canF.width, canF.height);
    backgroundColor(F, I1, I2);
    //change to canvas view part
    $("#sectionOne").fadeOut(600);
    $("#sectionTwo").delay(600).fadeIn(400);
});

$("#fButton").click(function(){
    $("#canvasF").show();
    $("#canvasI1").hide();
    $("#canvasI2").hide();
    $("#fButton").css("opacity", "1");
    $("#i1Button").css("opacity", "0.6");
    $("#i2Button").css("opacity", "0.6");
    currentCanvas = 1;
});

$("#i1Button").click(function(){
    $("#canvasF").hide();
    $("#canvasI1").show();
    $("#canvasI2").hide();
    $("#fButton").css("opacity", "0.6");
    $("#i1Button").css("opacity", "1");
    $("#i2Button").css("opacity", "0.6");
    currentCanvas = 2;
});

$("#i2Button").click(function(){
    $("#canvasF").hide();
    $("#canvasI1").hide();
    $("#canvasI2").show();
    $("#fButton").css("opacity", "0.6");
    $("#i1Button").css("opacity", "0.6");
    $("#i2Button").css("opacity", "1");
    currentCanvas = 3;
});

$("#brushColor").mousemove(function(){
    brushH = $("#brushH").val();
    brushL = $("#brushL").val();
    brushW = $("#brushW").val();

    $("#brushH").css("background", "linear-gradient(to right, hsl(0, 90%, " + brushL +"%), hsl(30, 90%, " + brushL +"%), hsl(60, 90%, " + brushL +"%), hsl(90, 90%, " + brushL +"%), hsl(120, 90%, " + brushL +"%), hsl(150, 90%, " + brushL +"%), hsl(180, 90%, " + brushL +"%), hsl(210, 90%, " + brushL +"%), hsl(240, 90%, " + brushL +"%), hsl(270, 90%, " + brushL +"%), hsl(300, 90%, " + brushL +"%), hsl(330, 90%, " + brushL +"%), hsl(360, 90%, " + brushL +"%))")
    $("#brushL").css("background", "linear-gradient(to right, hsl(" + brushH + ", 90%, 0%), hsl(" + brushH + ", 90%, 50%), hsl(" + brushH + ", 90%, 100%))");
    $("#brush").css("background-color", "hsl(" + brushH + ", 90%, " + brushL + "%)");
    $("#brush").css("width", brushW);
    $("#brush").css("height", brushW);
});


$("#done").click(function(){
    link = $("#typeLink").val();

});

$("#stickerColor").mousemove(function(){
    brushH = $("#stickerH").val();
    brushL = $("#stickerL").val();
    brushW = $("#stickerW").val();

    $("#stickerH").css("background", "linear-gradient(to right, hsl(0, 90%, " + brushL +"%), hsl(30, 90%, " + brushL +"%), hsl(60, 90%, " + brushL +"%), hsl(90, 90%, " + brushL +"%), hsl(120, 90%, " + brushL +"%), hsl(150, 90%, " + brushL +"%), hsl(180, 90%, " + brushL +"%), hsl(210, 90%, " + brushL +"%), hsl(240, 90%, " + brushL +"%), hsl(270, 90%, " + brushL +"%), hsl(300, 90%, " + brushL +"%), hsl(330, 90%, " + brushL +"%), hsl(360, 90%, " + brushL +"%))")
    $("#stickerL").css("background", "linear-gradient(to right, hsl(" + brushH + ", 90%, 0%), hsl(" + brushH + ", 90%, 50%), hsl(" + brushH + ", 90%, 100%))");
    $("#stickerBrush").css("background-color", "hsl(" + brushH + ", 90%, " + brushL + "%)");
    $("#stickerBrush").css("width", brushW);
    $("#stickerBrush").css("height", brushW);
});


