$(document).ready(function() {  
  var generateGrid = function(size) {
    for(var i = 0; i < size; i++) {
      for (var j =0; j < size; j++) {
        $('#gridWrapper').append("<div class='box'> </div>");
      }
    }
  }
  
  var setWidth = function(size) {
  	var variableWidthStr = Math.floor(100/size)+ "%";
    $('.box').css({"width": variableWidthStr, "padding-bottom": variableWidthStr});
  }
  
  var clearBoard = function() {
  	$('.box').css("background-color", "rgb(255,255,255)");
  }
  
  var draw = function(color) {
  	$('.box').mouseover(function() {
 		$(this).css("background-color", color);
    });
  }
  // Initialization
	var limit = 25;
  var pencilColor = "rgb(0,0,0)";
  generateGrid(limit);
  setWidth(limit);
  draw(pencilColor);
  
  $(".basic").spectrum({
    color: "#000",
    change: function(color) {
        pencilColor = color.toHexString();
        draw(pencilColor);
    }
	});
    
  $('#pencilBtn').click(function() {
  	draw(pencilColor);
  });
  
  $('#eraserBtn').click(function() {
  	draw("rgb(255,255,255)");
  });
  
  $('#sizeBtn').click(function() {
  	limit = prompt("How many squares per side?");
    clearBoard();
    $('#gridWrapper').html('');
    generateGrid(limit);
    setWidth(limit);
  })
  
  $('#clearBtn').click(function() {
  	clearBoard();
  });
  
});