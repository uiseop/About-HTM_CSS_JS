
$(document).ready(function(){
    'use strict'
    console.log('main.js loaded');
    paper.install(window)
    paper.setup(document.getElementById('mainCanvas'))
    
    var tool = new Tool();
    // Paper.js는 툴tool 객체를 통해 사용자의 입력을 처리
    // 객체는 이벤트 핸들러를 연결 가능 onMouseDown 이벤트핸들러를 연결
    tool.onMouseDown = function(event){
        // var c = Shape.Circle(event.point.x, event.point.y,20)
        var c = Shape.Circle(event.point, 20)
        c.fillColor = 'red'
    }
})