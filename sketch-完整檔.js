let font;  // 載入字型文字
let points = [];  // 轉成點狀文字
let r = 10; // 增加上下幅度
let angle = 0; // 角度
let rotationSpeed = 0.5; // 旋轉速度

function preload() {  // 在執行 setup() 前載入字型
    font = loadFont("Fonts/Righteous-Regular.ttf"); 
}

function setup() { // 只會執行一次
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES); // 宣告角度使用 0-360

    // 將文字 "pop" 轉成點狀表示，設定位置和大小
    points = font.textToPoints("pop", width / 2, height / 2, 200, {
        sampleFactor: 0.08
    });
}

function draw() { // 畫圖
    background("#ffcad4");

    // 計算 "o" 的位置 (第二個字母)
    let oIndex = 1; // "o" 是第二個字母
    let oX = points[oIndex].x; // "o" 的 x 座標
    let oY = points[oIndex].y; // "o" 的 y 座標

    // 繪製旋轉和翻轉的點狀文字和連接線條
    push(); // 保存當前狀態
    translate(oX, oY); // 移動到 "o" 的位置
    rotate(angle); // 根據角度旋轉
    
    // 上下翻轉
    scale(1, -1); // 上下翻轉
    
    // 前後翻轉
    scale(-1, 1); // 前後翻轉

    // 繪製點狀文字的動態效果
    for (let i = 0; i < points.length - 1; i++) { 
        let xOffset = points[i].x - oX; // 計算相對於 "o" 的 x 座標
        let yOffset = points[i].y - oY; // 計算相對於 "o" 的 y 座標

        fill("#a9def9"); // 圓充滿顏色
        noStroke(); // 圓不要框
        ellipse(xOffset + r * sin(angle + i * 1), yOffset + r * sin(angle + i * 1), 10);

        strokeWeight(2);
        stroke("#ff8fab"); // 畫線的顏色
        line(xOffset + r * sin(angle + i * 0.1), yOffset + r * sin(angle + i * 0.1), 
             points[i + 1].x - oX, points[i + 1].y - oY); 
    }

    pop(); // 恢復之前的變換狀態

    // 更新角度
    angle += rotationSpeed; // 每畫一次圖就調整角度

    // 繪製其他圖形
    rectMode(CENTER);
    noFill();
  
    let any = map(mouseX, 0, width, 0, 50);
    let any1 = map(mouseY, 0, height, 0, 100);
  
    for (let y = 50; y <= height + 100; y += 100) { 
        for (let x = 50; x <= width + 100; x += 100) {
            stroke("#c8b6ff");
            strokeWeight(2);
            ellipse(x, y, 100 + any);
        
            stroke("#9dd9d2");
            strokeWeight(2);
            rect(x, y, 100 + any1, 100 + any1);
  
            stroke("#b388eb");
            strokeWeight(2);
            ellipse(x + 50, y + 100, 150 + any);
        }
    }
}

function mousePressed() {
    // 可以根據需要添加互動功能
}
