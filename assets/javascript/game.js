var characters = [];
var characterChosen = false;
var yourChar;
var currentEnemy;
var enemyDead = true;
var gameOver = false;
var numDefeated = 0;

$( document ).ready(function(){
jQuery.each($(".character"), function(){
    characters.push(this);
    $(this).data("hp", Math.floor(Math.random()*175)+125);
    $(this).data("ap", Math.floor(Math.random()*10)+10);
    $(this).append("<p>"+$(this).data("hp")+" hp & "+$(this).data("ap")+" attack</p>");
});





$(".character").click(function(){
if(!(gameOver)){
    if(characterChosen===false){
        characterChosen = true;
        yourChar = $(this);
        yourChar.removeClass("character");
        yourChar.addClass("your-character-element");
        console.log(yourChar);
        $(".your-character").append(yourChar);
        $("#character-select-text").html("Now, choose an opponent");
    }
    else if((characterChosen)&&(enemyDead)){
        currentEnemy = $(this);
        currentEnemy.removeClass("character");
        currentEnemy.addClass("enemy-character-element");
        enemyDead = false;
        $(".enemy").append(currentEnemy);
        $("#character-select-text").html("Time to fight");
    }
}
});

$("#atk-btn").click(function(){
if(!(gameOver)){
    if(!(enemyDead)&&(characterChosen)){
        console.log("attack");
        var yourNewHP = yourChar.data("hp") - currentEnemy.data("ap");
        var enemyNewHP = currentEnemy.data("hp") - yourChar.data("ap");
        var yourNewAP = Math.floor(yourChar.data("ap")*1.2);
        yourChar.data("hp", yourNewHP);
        yourChar.data("ap", yourNewAP);
        currentEnemy.data("hp", enemyNewHP);
        $(".your-character p:last").text(yourChar.data("hp")+" hp & "+yourChar.data("ap")+" attack");
        $(".enemy p:last").text(currentEnemy.data("hp")+" hp & "+currentEnemy.data("ap")+" attack");
    }
    
    if(currentEnemy.data("hp")<1){
        $(".enemy-character-element").remove();
        enemyDead = true;
        numDefeated++;
        $("#character-select-text").html("Choose a new Opponent");
    }

    if(yourChar.data("hp")<1){
        gameOver = true;
        console.log("you lose D:");
        $("#character-select-text").html("You died; Try again");
    }

    if((numDefeated===8)&&(!(gameOver))){
        console.log("You Win!");
        $("#character-select-text").html("You've defeated all opponents!");
        gameOver = true;

    }
}
});


})