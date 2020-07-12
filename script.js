var s = function( p ) {
let mattone;
p.preload= function () {
mattone = p.loadFont('/mattone.otf');
};
p.setup =function() {
p.createCanvas(p.windowWidth, p.windowHeight);
p.frameRate(10);
p.textFont(mattone);
p.textSize(p.width / 30);
p.textAlign(p.CENTER, p.CENTER);
p.text('WEBDEVELOPING - CREATIVE CODING', p.windowWidth/2, p.windowHeight/2);
};

p.draw= function(){
  
p.noFill();
p.scale(p.random(2));
p.strokeWeight(2);
p.ellipse(p.random(p.windowWidth),p.random(p.windowHeight), 100,100);
};
};
var myp5 = new p5(s, 'presentazione_webdeveloping');