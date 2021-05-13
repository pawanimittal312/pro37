class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      contestant= new Contestant();
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
     question.hideIt();
    //write code to change the background color here
     background("yellow");
    //write code to show a heading for showing the result of Quiz
      textSize(30);
      text(" Result of the Quiz",150,70);
      textSize(20);
      text("Note: Contestants who answered correct are highlighted in green colour",130,250);
    //call getContestantInfo( ) here
        Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
       if(allContestants !== undefined){
        var displayPosition=130;
        textSize(20);
        fill("blue")
        text("contestant2 answer correct is in green colour",130,230)
        for(var plr in allContestants){
          var correctAns="2";
          if(correctAns === allContestants[plr].answer){
            fill("green")
          }
          else{
            fill("red")
          }
          displayPosition+=30;
    
          textSize(15);
          text(allContestants[plr].name+ ":"+ allContestants[plr].answer,250,displayPosition)
        }
       
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }
  }
  }
