class Question {

  constructor() {
    this.title = createElement('h1')
    this.question = createElement('h3');
    this.option1 = createButton('h4');
    this.option2 = createButton('h4');
    this.option3 = createButton('h4');
    this.option4 = createButton('h4');
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.message.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(650, 0);

   
    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
  

    this.question.position(450, 80);
    this.option1.html("Everyone");
    this.option1.position(350, 220);
    this.option1.size(250,50);
    this.option2.html("Envelope");
    this.option2.position(350, 420);
    this.option2.size(250,50)
    this.option3.html("Estimate" );
    this.option3.position(900, 220);
    this.option3.size(250,50);
    this.option4.html("Example" );
    this.option4.position(900, 420);
    this.option4.size(250,50);
    
    

    this.option2.mousePressed(()=>{
      
      this.option2.style('background-color', 'lightgreen');
      this.message.html("Correct Answer");
      this.message.position(650, 350);
      this.option1.style('background-color', 'white')
      this.option4.style('background-color', 'white')
      this.option3.style('background-color', 'white')
    });
    this.option1.mousePressed(()=>{
      this.option1.style('background-color', 'red');
      this.message.html("Wrong Answer");
      this.message.position(650, 350);
      this.option2.style('background-color', 'white')
      this.option4.style('background-color', 'white')
      this.option3.style('background-color', 'white')
   });
   this.option3.mousePressed(()=>{
    this.option3.style('background-color', 'red');
    this.message.html("Wrong Answer");
    this.message.position(650, 350);
    this.option1.style('background-color', 'white')
    this.option4.style('background-color', 'white')
    this.option2.style('background-color', 'white')
 });
 this.option4.mousePressed(()=>{
  this.option4.style('background-color', 'red');
  this.message.html("Wrong Answer");
  this.message.position(650, 350);
  this.option1.style('background-color', 'white')
  this.option2.style('background-color', 'white')
  this.option3.style('background-color', 'white')
});
  }
}
