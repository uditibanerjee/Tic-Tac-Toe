var c11=0;
var c12=0;
var c13=0;
var c21=0;
var c22=0;
var c23=0;
var c31=0;
var c32=0;
var c33=0;
var bg;
var circle;
var cross;
var s11,s12,s13;
var s21,s22,s23;
var s31,s32,s33;

function preload(){
  bgImage=loadImage("tic tac toe bg.png");
  circle=loadImage("Circle.png");
  cross=loadImage("cross.png");
}

function setup(){
 createCanvas(400,400);
 var s11=createSprite(67,67,50,50);
 var s12=createSprite(200,67,50,50);
 var s13=createSprite(333,67,50,50);

 var s21=createSprite(67,185,50,50);
 var s22=createSprite(200,185,50,50);
 var s23=createSprite(333,185,50,50);

 var s31=createSprite(67,310,50,50);
 var s32=createSprite(200,310,50,50);
 var s33=createSprite(333,310,50,50);
}

function draw(){
  background(bgImage);
  drawSprites();

}
