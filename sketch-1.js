let font;  //載入字型文字
let points = [];  //轉成點狀文字
let r=10 //增加上下幅度
let angle=0 //三角函數內的角度
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的Fonts/Righteous-Regular.ttf字型
    font = loadFont("Fonts/Righteous-Regular.ttf") 
}
//===================================================


function setup() { //只會執行一次
  createCanvas(windowWidth, windowHeight);
  background("#ffcad4")
  points = font.textToPoints("pop", width/2,height/2, 200, {
    sampleFactor:0.08
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小 (點數越小數字越少)
  //for (let i=0; i<points.length; i++) { 
  //text(str(i),points[i].x,points[i].y)
  //ellipse(points[i].x,points[i].y,10)
  // rect(points[i].x,points[i.y,10])
 //} 
  angleMode(DEGREES);//宣告角度使用0-360
}

function draw() { //畫圖
  background("#ffcad4");
  for (let i=0; i<points.length-1; i++) { 
 // text(str(i),points[i].x,points[i].y)
 fill("#a9def9") //圓充滿顏色
 noStroke()//圓不要框
 ellipse(points[i].x+r*sin(angle+i*1),points[i].y+r*sin(angle+i*1),10)
 strokeWeight(2)
 stroke("#720026")//畫線的顏色
line(points[i].x+r*sin(angle+i*0.1),points[i].y+r*sin(angle+i*0.1),points[i+1].y) //兩點間畫一條線
 } 
 angle=angle+10 //每畫一次圖就調整角度+10
}
