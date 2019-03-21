var charactersArray = [
{
    name: "Mario",
    healthPoints: 120,
    initialAttackPower: 8,
    attackPower: 8,
    counterAttackPower: 2,
    isPlayerOne: false,
    isPlayerTwo: false,
    img: 'mario.png',
}, 
{
    name: "Kirby",
    healthPoints: 100,
    initialAttackPower: 9,
    attackPower: 9,
    counterAttackPower: 5,
    isPlayerOne: false,
    isPlayerTwo: false,
    img: 'kirby.png',
},
{
    name: "Donkey Kong",
    healthPoints: 150,
    initialAttackPower: 2,	
    attackPower: 2,
    counterAttackPower: 20,
    isPlayerOne: false,
    isPlayerTwo: false,
    img: 'donkeykong.png',
{
    name: "Link",
    healthPoints: 150,
    initialAttackPower: 2,	
    attackPower: 2,
    counterAttackPower: 20,
    isPlayerOne: false,
    isPlayerTwo: false,
    img: 'link.png',
},
{
    name: "Ness",
    healthPoints: 150,
    initialAttackPower: 2,	
    attackPower: 2,
    counterAttackPower: 20,
    isPlayerOne: false,
    isPlayerTwo: false,
    img: 'ness.png',
},
{
    name: "Samus Aran",
    healthPoints: 150,
    initialAttackPower: 2,	
    attackPower: 2,
    counterAttackPower: 20,
    isPlayerOne: false,
    isPlayerTwo: false,
    img: 'samusaran.png',
},
{
    name: "Fox McCloud",
    healthPoints: 150,
    initialAttackPower: 2,	
    attackPower: 2,
    counterAttackPower: 20,
    isPlayerOne: false,
    isPlayerTwo: false,
    img: 'fox.png',
},
{
    name: "Zelda",
    healthPoints: 150,
    initialAttackPower: 2,	
    attackPower: 2,
    counterAttackPower: 20,
    isPlayerOne: false,
    isPlayerTwo: false,
    img: 'zelda.png',
},
{
    name: "Pikachu",
    healthPoints: 150,
    initialAttackPower: 2,	
    attackPower: 2,
    counterAttackPower: 20,
    isPlayerOne: false,
    isPlayerTwo: false,
    img: 'pikachu.png',
},
{
    name: "Princess Peach",
    healthPoints: 150,
    initialAttackPower: 2,	
    attackPower: 2,
    counterAttackPower: 20,
    isPlayerOne: false,
    isPlayerTwo: false,
    img: 'peach.png',
},
{
    name: "King Dedede",
    healthPoints: 150,
    initialAttackPower: 2,	
    attackPower: 2,
    counterAttackPower: 20,
    isPlayerOne: false,
    isPlayerTwo: false,
    img: 'kingdedede.png',
},
{
    name: "Captain Falcon",
    healthPoints: 150,
    initialAttackPower: 2,	
    attackPower: 2,
    counterAttackPower: 20,
    isPlayerOne: false,
    isPlayerTwo: false,
    img: 'falcon.png',
},
{
    name: "Jigglypuff",
    healthPoints: 150,
    initialAttackPower: 2,	
    attackPower: 2,
    counterAttackPower: 20,
    isPlayerOne: false,
    isPlayerTwo: false,
    img: 'jigglypuff.png',
},
{
    name: "Luigi",
    healthPoints: 150,
    initialAttackPower: 2,	
    attackPower: 2,
    counterAttackPower: 20,
    isPlayerOne: false,
    isPlayerTwo: false,
    img: 'luigi.png',
},
{
    name: "Yoshi",
    healthPoints: 180,
    initialAttackPower: 1,
    attackPower: 1,
    counterAttackPower: 25,
    isPlayerOne: false,
    isPlayerTwo: false,
    img: 'yoshi.png',
}];

var player;
var opponent;
playerOneSelected = false;
playerTwoSelected = false;
gameStart = false;
var enemiesRemaining = charactersArray.length - 1;

function characterDisplay() {
    $.each(charactersArray, function (index, value) {
        var $characterName = $('<p>').addClass('name text-center')
            .html(charactersArray[index].name);

        var $characterImg = $('<img>').addClass('img-character')
            .attr('src', 'assets/images/' + charactersArray[index].img);

        var $characterHP = $('<p>').addClass('hp text-center')
            .html('Health: ' + charactersArray[index].healthPoints);

        var $newCharacter = $('<div>').addClass('character')
            .attr('data-id', index)
            .append($characterName)
            .append($characterImg)
            .append($characterHP)
            .one('click', newPlayerSelection);

        $('#character-select').append($newCharacter);

    })
};

function newPlayerSelection(event) {}

// function preGame() {
//     if (gameStart = false) {
//         for(var i = 0; i < charactersArray.length; i++) {
//             var characterPictureSrc = charactersArray[i].img;
//             $('img').attr('src', characterPictureSrc);
//         //    $('#player').attr('src', characterPicture);
//             $('#characterChoicesContainer').append($('<img>', ));
//         };
//     }
// };
     //   var characterChoices = document.querySelector('#characterChoicesContainer');



    //    $('characters').each(function() {
        //    $('#characterChoicesContainer').append($('<img />')'<div><img src="$('characters.img)"></div>');

     //       $('<img /'>).attr('src', $('characters.img')).appendTo($('#characterChoicesContainer'));

    //    }
      

preGame();

function playerSelect(){
    
};


playerSelect();