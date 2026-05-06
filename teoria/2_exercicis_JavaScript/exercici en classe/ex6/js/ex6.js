let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let scale = window.devicePixelRatio;

canvas.width = 900 * scale;
canvas.height = 420 * scale;



//mar
ctx.fillStyle = '#156bc6';
ctx.fillRect(0, 270, 1000, 150);
//cel
ctx.fillStyle = '#90d4ff';
ctx.fillRect(0, 0, 1000, 270);
//sorra #e0c070
ctx.beginPath();
ctx.ellipse(450, 320, 248, 94, 0, 0, Math.PI * 2);

ctx.fillStyle = '#e0c070';
ctx.fill();
//tierra #3cb371
ctx.beginPath();
//          (x, y, radioX, radioY, rotacion, inicio, fin) 
ctx.ellipse(450, 300, 238, 74, 0, 0, Math.PI * 2);

ctx.fillStyle = '#3cb371';
ctx.fill();

//nuvol
ctx.beginPath();
ctx.ellipse(90, 100, 50, 30, 0, 0, Math.PI * 2);
ctx.ellipse(110, 80, 50, 30, 0, 0, Math.PI * 2);
ctx.ellipse(130, 110, 50, 30, 0, 0, Math.PI * 2);
ctx.fillStyle = 'white';
ctx.fill();
ctx.beginPath();
ctx.ellipse(280, 60, 70, 30, 0, 0, Math.PI * 2);
ctx.ellipse(300, 40, 70, 30, 0, 0, Math.PI * 2);
ctx.ellipse(340, 70, 70, 30, 0, 0, Math.PI * 2);
ctx.fillStyle = 'white';
ctx.fill();
ctx.beginPath();
ctx.ellipse(490, 120, 50, 30, 0, 0, Math.PI * 2);
ctx.ellipse(510, 100, 50, 30, 0, 0, Math.PI * 2);
ctx.ellipse(530, 130, 80, 30, 0, 0, Math.PI * 2);
ctx.fillStyle = 'white';
ctx.fill();
ctx.beginPath();
ctx.ellipse(660, 35, 50, 30, 0, 0, Math.PI * 2);
ctx.ellipse(680, 45, 80, 30, 0, 0, Math.PI * 2);
ctx.ellipse(700, 55, 50, 30, 0, 0, Math.PI * 2);
ctx.fillStyle = 'white';
ctx.fill();



//cuadrado gris
ctx.fillStyle = 'grey';
ctx.fillRect(370, 162, 160, 145);

//cuadrados blancos
ctx.fillStyle = 'white';
ctx.fillRect(380, 170, 60, 57);

// cuadrados negros
ctx.fillStyle = 'black';
ctx.fillRect(416, 204, 24, 23);

//cuadrados blancos
ctx.fillStyle = 'white';
ctx.fillRect(461, 170, 60, 57);

// cuadrados negros
ctx.fillStyle = 'black';
ctx.fillRect(461, 204, 24, 23);

//La puerta
ctx.fillStyle = 'cyan';
ctx.fillRect(429, 252, 42, 55);

//triangle
ctx.beginPath();
ctx.moveTo(450, 90);
ctx.lineTo(330, 162);
ctx.lineTo(570, 162);
ctx.closePath();

//color del triangle
ctx.fillStyle = 'pink';
ctx.fill();

//RECTANGLE de text
ctx.fillStyle = 'white';
ctx.fillRect(380, 132, 138, 26);

//texto
ctx.font = '20.5px Arial';
ctx.fillStyle = 'black';
ctx.fillText('KAME HOUSE', 380, 152);

ctx.beginPath();
ctx.arc(830, 60, 56, 0, Math.PI * 2);

ctx.fillStyle = '#ffd54f';
ctx.fill();

ctx.beginPath();
ctx.arc(450, 60, 8, 0, Math.PI * 2);

ctx.fillStyle = 'black';
ctx.fill();


ctx.fillStyle = 'black';
ctx.fillRect(447, 61, 6, 32);


ctx.fillStyle = '#8C615A';
ctx.fillRect(262, 210, 20, 120);

ctx.fillStyle = '#8C615A';
ctx.fillRect(617, 210, 20, 120);


ctx.beginPath();
ctx.arc(272, 210, 66, Math.PI, 0);
ctx.arc(627, 210, 66, Math.PI, 0);

ctx.fillStyle = '#448713';
ctx.fill();






























// ctx.fillStyle = '#448713';
// ctx.fillRect(213, 86, 50, 5);
// ctx.fillRect(218, 90, 40, 5);
// ctx.fillRect(222, 94, 10, 5);
// ctx.fillRect(244, 94, 10, 5);
// ctx.fillRect(225, 98, 5, 5);
// ctx.fillRect(246, 98, 5, 5);
// ctx.fillRect(213, 82, 50, 5);
// ctx.fillRect(219, 78, 38, 5);
// ctx.fillRect(225, 74, 27, 5);
// ctx.fillRect(231, 70, 16, 5);
// ctx.fillRect(237, 66, 5, 5);









