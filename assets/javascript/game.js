var charactersArray = [
{
    name: "Mario",
    healthPoints: 120,
    initialAttackPower: 8,
    attackPower: 8,
    counterAttackPower: 2,
    isPlayerOne: false,
    isPlayerTwo: false,
    //image: 'assets/images/mario.png',
    image: 'http://lorempixel.com/50/50',
}, 
{
    name: "Kirby",
    healthPoints: 100,
    initialAttackPower: 9,
    attackPower: 9,
    counterAttackPower: 5,
    isPlayerOne: false,
    isPlayerTwo: false,
    //image: 'assets/images/kirby.png',
    image: 'http://lorempixel.com/50/50',
},
{
    name: "Donkey Kong",
    healthPoints: 150,
    initialAttackPower: 2,	
    attackPower: 2,
    counterAttackPower: 20,
    isPlayerOne: false,
    isPlayerTwo: false,
 //   image: 'assets/images/donkeykong.png',
    image: 'http://lorempixel.com/50/50',
},
{
    name: "Link",
    healthPoints: 150,
    initialAttackPower: 2,	
    attackPower: 2,
    counterAttackPower: 20,
    isPlayerOne: false,
    isPlayerTwo: false,
  //  image: 'assets/images/link.png',
    image: 'http://lorempixel.com/50/50',
},
{
    name: "Ness",
    healthPoints: 150,
    initialAttackPower: 2,	
    attackPower: 2,
    counterAttackPower: 20,
    isPlayerOne: false,
    isPlayerTwo: false,
   // image: 'assets/images/ness.png',
    image: 'http://lorempixel.com/50/50',
},
{
    name: "Samus Aran",
    healthPoints: 150,
    initialAttackPower: 2,	
    attackPower: 2,
    counterAttackPower: 20,
    isPlayerOne: false,
    isPlayerTwo: false,
  //  image: 'assets/images/samus.png',
    image: 'http://lorempixel.com/50/50',
},
{
    name: "Fox McCloud",
    healthPoints: 150,
    initialAttackPower: 2,	
    attackPower: 2,
    counterAttackPower: 20,
    isPlayerOne: false,
    isPlayerTwo: false,
 //   image: 'assets/images/fox.png',
    image: 'http://lorempixel.com/50/50',
},
{
    name: "Zelda",
    healthPoints: 150,
    initialAttackPower: 2,	
    attackPower: 2,
    counterAttackPower: 20,
    isPlayerOne: false,
    isPlayerTwo: false,
  //  image: 'assets/images/captainfalcon.png',
    image: 'http://lorempixel.com/50/50',
},
{
    name: "Pikachu",
    healthPoints: 150,
    initialAttackPower: 2,	
    attackPower: 2,
    counterAttackPower: 20,
    isPlayerOne: false,
    isPlayerTwo: false,
  //  image: 'assets/images/captainfalcon.png',
    image: 'http://lorempixel.com/50/50',
},
{
    name: "Princess Peach",
    healthPoints: 150,
    initialAttackPower: 2,	
    attackPower: 2,
    counterAttackPower: 20,
    isPlayerOne: false,
    isPlayerTwo: false,
  //  image: 'assets/images/captainfalcon.png',
    image: 'http://lorempixel.com/50/50',
},
{
    name: "King Dedede",
    healthPoints: 150,
    initialAttackPower: 2,	
    attackPower: 2,
    counterAttackPower: 20,
    isPlayerOne: false,
    isPlayerTwo: false,
  //  image: 'assets/images/captainfalcon.png',
    image: 'http://lorempixel.com/50/50',
},
{
    name: "Captain Falcon",
    healthPoints: 150,
    initialAttackPower: 2,	
    attackPower: 2,
    counterAttackPower: 20,
    isPlayerOne: false,
    isPlayerTwo: false,
  //  image: 'assets/images/captainfalcon.png',
    image: 'http://lorempixel.com/50/50',
},
{
    name: "Captain Falcon",
    healthPoints: 150,
    initialAttackPower: 2,	
    attackPower: 2,
    counterAttackPower: 20,
    isPlayerOne: false,
    isPlayerTwo: false,
  //  image: 'assets/images/captainfalcon.png',
    image: 'http://lorempixel.com/50/50',
},
{
    name: "Captain Falcon",
    healthPoints: 150,
    initialAttackPower: 2,	
    attackPower: 2,
    counterAttackPower: 20,
    isPlayerOne: false,
    isPlayerTwo: false,
  //  image: 'assets/images/captainfalcon.png',
    image: 'http://lorempixel.com/50/50',
},
{
    name: "Yoshi",
    healthPoints: 180,
    initialAttackPower: 1,
    attackPower: 1,
    counterAttackPower: 25,
    isPlayerOne: false,
    isPlayerTwo: false,
 //   image: 'assets/images/yoshi.png',
    image: 'http://lorempixel.com/50/50',
}];

var player;
var opponent;
playerOneSelected = false;
playerTwoSelected = false;
gameStart = false;
var enemiesRemaining = charactersArray.length - 1;

function preGame() {
    if (gameStart = false) {
        for(var i = 0; i < charactersArray.length; i++) {
            var characterPictureSrc = charactersArray[i].image;
            $('img').attr('src', characterPictureSrc);
        //    $('#player').attr('src', characterPicture);
            $('#characterChoicesContainer').append($('<img>', ));
        };
    }
};
     //   var characterChoices = document.querySelector('#characterChoicesContainer');



    //    $('characters').each(function() {
        //    $('#characterChoicesContainer').append($('<img />')'<div><img src="$('characters.image)"></div>');

     //       $('<img /'>).attr('src', $('characters.image')).appendTo($('#characterChoicesContainer'));

    //    }
      

preGame();

function playerSelect(){
    
};


playerSelect();