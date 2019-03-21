// characters along with their name, health points, attack power, counter attack
// power, and their relative path image source

var charactersArray = [
    {name: "Mario", hp: 120, ap: 8, cap: 2, img: 'mario.png',}, 
    {name: "Kirby", hp: 100, ap: 9, cap: 5, img: 'kirby.png',},
    {name: "Donkey Kong", hp: 150, ap: 2, cap: 20, img: 'donkeykong.png',},
    {name: "Link", hp: 150, ap: 2, cap: 20, img: 'link.png',},
    {
    name: "Ness",
    hp: 150,
    ap: 2,
    cap: 20,
    img: 'ness.png',
},
    {
    name: "Samus Aran",
    hp: 150,
    ap: 2,
    cap: 20,
    img: 'samusaran.png',
},
    {
    name: "Fox McCloud",
    hp: 150,
    ap: 2,
    cap: 20,
    img: 'fox.png',
},
    {
    name: "Zelda",
    hp: 150,
    ap: 2,
    cap: 20,
    img: 'zelda.png',
},
    {
    name: "Pikachu",
    hp: 150,
    ap: 2,
    cap: 20,
    img: 'pikachu.png',
},
    {
    name: "Princess Peach",
    hp: 150,
    ap: 2,
    cap: 20,
    img: 'peach.png',
},
    {
    name: "King Dedede",
    hp: 150,
    ap: 2,
    cap: 20,
    img: 'kingdedede.png',
},
{
    name: "Captain Falcon",
    hp: 150,
    ap: 2,
    cap: 20,
    img: 'falcon.png',
},
{
    name: "Jigglypuff",
    hp: 150,
    ap: 2,
    cap: 20,
    img: 'jigglypuff.png',
},
{
    name: "Luigi",
    hp: 150,
    ap: 2,
    cap: 20,
    img: 'luigi.png',
},
{
    name: "Yoshi",
    hp: 180,
    ap: 1,
    cap: 25,
    img: 'yoshi.png',
}];

var player;
var cpu;


$(document).ready(function () {

function characterDisplay() {
    $.each(charactersArray, function (index, value) {
        var $characterName = $('<p>').addClass('name text-center')
            .html(charactersArray[index].name);

        var $characterImg = $('<img>').addClass('img-character')
            .attr('src', 'assets/images/' + charactersArray[index].img);

        var $characterHP = $('<p>').addClass('hp text-center')
            .html('Health: ' + charactersArray[index].hp);

        var $newCharacter = $('<div>').addClass('character')
            .attr('data-id', index)
            .append($characterName)
            .append($characterImg)
            .append($characterHP)
            .one('click', newPlayerSelection);

        $('#character-select').append($newCharacter);

    })
};

function newPlayerSelection(event) {
    player = charactersArray[$(this).attr('data-id')];

    $(this).appendTo('#player-character')
        .addClass('player');

    $('#characters-select').children()
        .appendTo('#enemy-select')
        .addClass('enemy')
        .one('click', newEnemySelected);


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



// Ends $(document).ready()
});