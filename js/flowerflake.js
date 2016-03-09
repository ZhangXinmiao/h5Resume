function flowerflake(){
  var flowerflakeURl = [
    './image/0.png',
    './image/1.png',
    './image/2.png',
    './image/3.png',
    './image/4.png',
    './image/5.png',
    './image/6.png'
  ];
  //花瓣容器
  var $flowerContainer = $("#flowerflake");
  //获取七张花瓣中的随机一个
  function getImagesName(){
    return flowerflakeURl[[Math.floor(Math.random() * 7)]];
  }
  //创建一个花瓣
  function createFlower(){
    var url = getImagesName();
    return $('<div class="snowbox" />').css({
                'width': 41,
                'height': 41,
                'position': 'absolute',
                'backgroundSize': 'cover',
                'zIndex': 100000,
                'top': '-41px',
                'backgroundImage': 'url(' + url + ')'
            }).addClass('snowRoll');
  }
  //飘花
  setInterval(function() {
    visualWidth = document.body.clientWidth;
    visualHeight = document.body.clientHeight;
    // 运动的轨迹
    var startPositionLeft = Math.random() * visualWidth - 100,
        startOpacity    = 1,
        endPositionTop  = visualHeight,
        endPositionLeft = startPositionLeft - 100 + Math.random() * 500,
        duration        = visualHeight * 10 + Math.random() * 5000;

    // 随机透明度，不小于0.5
    var randomStart = Math.random();
    randomStart = randomStart < 0.5 ? startOpacity : randomStart;

    // 创建一个雪花
    var $flake = createFlower();
    // 设计起点位置
    $flake.css({
        left: startPositionLeft,
        opacity : randomStart
    });

    // 加入到容器
    $flowerContainer.append($flake);

    // 开始执行动画
    $flake.transition({
        top: endPositionTop,
        left: endPositionLeft,
        opacity: 0.7
    }, duration, 'ease-out', function() {
        $(this).remove(); //结束后删除
    });
  }, 200);
}
flowerflake();
