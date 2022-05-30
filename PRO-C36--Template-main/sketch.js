var canvas, backgroundImage;

var questions;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(1500,900);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
  
}


function draw(){
  background("pink");

}
