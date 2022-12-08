
var lentes
var pizza
var narizX = 0;
var narizY = 0;
function preload() {
  pizza = loadImage("https://i.postimg.cc/sfHFfKzd/noob-pizza-removebg-preview.png")
  lentes = loadImage("https://i.postimg.cc/SKYL8S2f/Sunglasses-removebg-preview.png")
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  poseNet = ml5.poseNet(video, cargarmodelo);
  poseNet.on('pose', obtenerpose);
}

function draw() {
  image(video, 0, 0, 300, 300);
  fill("blue");
  stroke("purple");
  image(lentes, narizX, narizX, 60, 40);
}

function take_snapshot() {
  save('myFilterImage.png');
}

function cargarmodelo() {
  console.log("cargandoelmodelo");
}

function obtenerpose(results) {
  if
    (
    results.length > 0
  ) {
    console.log(results)
    console.log("nariz x=" + results[0].pose.nose.x)
    console.log("nariz y=" + results[0].pose.nose.y)
    narizX = results[0].pose.nose.x - 10
    narizY = results[0].pose.nose.y - 20

  }
}