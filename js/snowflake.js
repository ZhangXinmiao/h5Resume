function snow(){
  var snowElement = document.getElementById("snowflake");
  var canvasContext = snowElement.getContext("2d");
  canvasContext.beginPath();
  canvasContext.fillStyle = "rgba(255, 255, 255, 0.8)";
  canvasContext.arc(10, 10, 5, 0, 2 * Math.PI, true);
  canvasContext.closePath();
  canvasContext.fill();
}

snow();
