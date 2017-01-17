var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;

function setup() {
    var myCanvas = createCanvas(800, 250);
    myCanvas.parent('mySketch');
    strokeWeight (7);
    background("#FFEDC6");
}
               
function draw() {
    fill(255,0);
  if (mouseIsPressed == true){
     background("#FFEDC6");
  stroke("#ffcc00");
    ellipse(mouseX,mouseY,a,a);
    stroke("#FFDD62");
    ellipse(mouseX,mouseY,b,b);
    stroke("#FFF9ED");
    ellipse(mouseX,mouseY,c,c);
    stroke("#FFCF31");
    ellipse(mouseX,mouseY,d,d);
    stroke("#FAC000");
    ellipse(mouseX,mouseY,e,e);
    stroke("#FFDB64");
    ellipse(mouseX,mouseY,f,f);
  }
        
  a=a+3;
  if (a>=1700){
    a=0;
  }
  b=b+2;
  if (b>=1700){
    b=0;
  }
  c=c+1;
  if (c>=1700){
    c=0;
  }
  d=d+.5;
  if (d>=1700){
    d=0;
  }
  e=e+1.5;
  if (e>=1700){
    e=0;
  }
  f=f+.8;
  if (f>=1700){
    f=0;
  }
}               