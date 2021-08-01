console.log('main.js loaded');

$(document).ready(function(){
    console.log('hi jquery!!')
})

paper.install(window)
paper.setup(document.getElementById('mainCanvas'))
paper.view.draw()

var c = Shape.Circle(200,200,50)
c.fillColor = 'green'