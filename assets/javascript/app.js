$('#start').on('click', function(){
    game.start();
    
    })

var questions = [{
    question: "How many planets are in our solar system?",
    answers: ["9", "8", "10", "12"],
    correctAnswer: "8"
}, {
    question: "What is the largest planet in our solar system?",
    answers: ["Jupiter", "Saturn", "Neptune", "Earth"],
    correctAnswer: "Jupiter"
}, {
    question: "Which NASA space flight was the last manned mission to the moon?",
    answers: ["Apollo 13", "Apollo 17", "Gemini 4","Gemini 12"],
    correctAnswer: "Apollo 17"
}, {
    question: "How many moons are in our solar system?",
    answers: ["16", "95", "1", "181"],
    correctAnswer: "181"
}, {
    question: "What flavor ice cream did Baskin-Robins release in 1969 to commemorate America's landing on the moon?",
    answers: ["Moon Pie", "Lunar Cheesecake", "Moontacular", "Lunar Chocolate Chip"],
    correctAnswer: "Lunar Cheesecake"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 45,
    countdown: function (){
        game.counter --;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("Time is Up!");
            game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        $('#start').remove();
        for(var i=0;i<questions.length; i++){
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
            for(var j=0;j<questions[i].answers.length;j++){
                $("#subwrapper").append("<input type= 'radio' name='question- "+i+"' value ='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
          }
        }
      },
    done: function(){
        $.each($('input[name="question-0]":checked'),function(){
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1]":checked'),function(){
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-2]":checked'),function(){
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-3]":checked'),function(){
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
    },
    result:function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();
        $('#subwrapper').html("<h2>DONE!</h2>");
        $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
        $('#subwrapper').append("<h3>Unasnwered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");   
    }
}