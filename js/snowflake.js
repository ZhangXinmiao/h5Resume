function Snowflake(elementName) {
  var snowElement = document.getElementById(elementName);
  var canvasContext = snowElement.getContext("2d");
  var width = document.body.clientWidth;
  var height = document.body.clientHeight;

  //canvas尺寸修正
  snowElement.width = width;
  snowElement.height = height;

  //构建雪球的数量
  var snowNumber = 30;

  //构建雪球对象
  var snowArrObjs = initSnow(snowNumber, width, height);
  var snowArrNum = snowArrObjs.length;
  var render = function() {
      //清理之前的矩形数据
      canvasContext.clearRect(0, 0, width, height);
      for (var i = 0; i < snowArrNum; ++i) {
          snowArrObjs[i].render(canvasContext);
      }
  };

  var update = function() {
      for (var i = 0; i < snowArrNum; ++i) {
          snowArrObjs[i].update();
      }
  };

  var renderAndUpdate = function() {
      render();
      update();
      requestAnimationFrame(renderAndUpdate);
  };

  renderAndUpdate();
}
//雪球各项数据初始化
function initSnow(snowNumber, width, height) {
    //雪球参数
    var options = {
        //雪球的半球距离
        minRadius: 3,
        maxRadius: 10,
        // 运动的范围区域
        maxX: width,
        maxY: height,
        //速率
        minSpeedY: 0.05,
        maxSpeedY: 2,
        speedX: 0.05,
        //滤镜
        minAlpha: 0.5,
        maxAlpha: 1.0,
        minMoveX: 4,
        maxMoveX: 18
    };
    var snowArr = [];
    for (var i = 0; i < snowNumber; ++i) {
        snowArr[i] = new Snow(options);
    }
    return snowArr;
}
//画出雪球
function Snow(snowSettings) {
    this.snowSettings = snowSettings;
    this.radius = randomInRange(snowSettings.minRadius, snowSettings.maxRadius);
    //初始的x位置
    this.initialX = Math.random() * snowSettings.maxX;
    this.y = -(Math.random() * 500);
    //运行的速率
    this.speedY = randomInRange(snowSettings.minSpeedY, snowSettings.maxSpeedY);
    this.speedX = snowSettings.speedX;
    //滤镜
    this.alpha = randomInRange(snowSettings.minAlpha, snowSettings.maxAlpha);
    //角度.默认是360
    this.angle = Math.random(Math.PI * 2);
    //运行的距离
    this.x = this.initialX + Math.sin(this.angle);
    //x移动距离
    this.moveX = randomInRange(snowSettings.minMoveX, snowSettings.maxMoveX);
}

Snow.prototype.render = function(canvasContext) {
    //开始一个画布中的一条新路径（或者子路径的一个集合）
    canvasContext.beginPath();
    //填充的颜色
    canvasContext.fillStyle = "rgba(255, 255, 255, " + this.alpha + ")";
    //画出路径
    canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    //关闭子路径
    canvasContext.closePath();
    //填充
    canvasContext.fill();
};

Snow.prototype.update = function() {
    this.y += this.speedY;
    if (this.y > this.snowSettings.maxY) {
        this.y -= this.snowSettings.maxY;
    }
    this.angle += this.speedX;
    if (this.angle > Math.PI * 2) {
        this.angle -= Math.PI * 2;
    }
    this.x = this.initialX + this.moveX * Math.sin(this.angle);
};

function randomInRange(min, max) {
    var random = Math.random() * (max - min) + min;
    return random;
}


Snowflake("snowflake");
