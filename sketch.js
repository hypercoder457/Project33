const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var backgroundImg;

var engine, world;

var snowCrystal;
var snowCrystalsArr = [];

const randomNum = Math.random(100, 1000);

function preload() {
  backgroundImg = loadImage('snow2.jpg');
}

function setup() {
  createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  for(var i = 0; i < randomNum; i++) {
    snowCrystal = new Snow(random(0, 800), 30, 10);
    snowCrystalsArr.push(snowCrystal);
  }

  for(var j = 0; j < snowCrystalsArr.length; j++) {
    snowCrystalsArr[j].display();
  }
}