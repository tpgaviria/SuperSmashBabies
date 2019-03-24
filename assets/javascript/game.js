// characters along with their name, health points, attack power, counter attack
// power, and their relative path image source

var charArray = [
    { name: "Mario", hp: 150, ap: 13, cap: 15, img: 'mario.png', facing: 'right', },
    { name: "Kirby", hp: 120, ap: 16, cap: 11, img: 'kirby.png', facing: 'right', },
    { name: "Donkey Kong", hp: 120, ap: 11, cap: 13, img: 'donkeykong.png', facing: 'left', },
    { name: "Link", hp: 140, ap: 15, cap: 12, img: 'link.png', facing: 'left', },
    { name: "Ness", hp: 110, ap: 12, cap: 10, img: 'ness.png', facing: 'right', },
    { name: "Samus Aran", hp: 180, ap: 10, cap: 14, img: 'samusaran.png', facing: 'left', },
    { name: "Fox McCloud", hp: 150, ap: 13, cap: 12, img: 'fox.png', facing: 'right', },
    { name: "Zelda", hp: 145, ap: 10, cap: 14, img: 'zelda.png', facing: 'left', },
    { name: "Pikachu", hp: 150, ap: 11, cap: 12, img: 'pikachu.png', facing: 'left', },
    { name: "Princess Peach", hp: 120, ap: 15, cap: 10, img: 'peach.png', facing: 'right', },
    { name: "King Dedede", hp: 135, ap: 12, cap: 13, img: 'kingdedede.png', facing: 'left', },
    { name: "Captain Falcon", hp: 130, ap: 14, cap: 12, img: 'falcon.png', facing: 'left', },
    { name: "Jigglypuff", hp: 115, ap: 11, cap: 11, img: 'jigglypuff.png', facing: 'left', },
    { name: "Luigi", hp: 120, ap: 12, cap: 13, img: 'luigi.png', facing: 'left', },
    { name: "Yoshi", hp: 110, ap: 14, cap: 10, img: 'yoshi.png', facing: 'left', }
];


// initialize global variables
// declared all here to avoid scope issue

var player;
var cpu;
var playerDiv;
var cpuDiv;
var wins = 0;
var hits = 1;
var actionDiv;
var playerStats;
var playerImage;
var cpuImage;
var cpuStats;
var attackButton;
var newAP;
var restartButton;
var charName;
var charImg;
var charStats;
var charBox;

//display characters to choose from - data pulled from array
function characterDisplay() {

    for (var i = 0; i < charArray.length; i++) {

        charName = $('<div>').addClass('name')
            .html('<p id="name-text">' + charArray[i].name + '</p>');

        charImg = $('<img src="assets/images/' + charArray[i].img + '">').addClass('char-img');

        charStats = $('<div><p id="stats-text">HP: ' + charArray[i].hp + ' / Power: ' + charArray[i].ap + '</p></div>').addClass('char-stats');


        //creating box for each character
        charBox = $('<div>').addClass('char-box')
            .append(charName)
            .append(charImg)
            .append(charStats)
            .attr('data-id', i)
            .one('click', choosePlayer)

        //appending new character boxes to main character display container div
        $('#char-disp').append(charBox);

    }
};


// function to assign clicked character as 'player'
function choosePlayer(event) {

    // 'this' refers to div that was clicked
    // data-id returns index of character in original array
    player = $(this).attr('data-id');

    $(this).addClass('selected');

    $('#char-disp').children().not('.selected')
        .addClass('not-selected')

    // after character was been chosen, clicking another character div will not run choosePlayer function
    $('#char-disp').children()
        .unbind('click', choosePlayer);

    // changes instruction text
    $('#console').html('<p>Choose your first opponent!</p>');

    // character boxes are now listening for click and will run chooseCPU function
    $('#char-disp').children()
        .on('click', chooseCPU);

    console.log('player: ' + player);

    playerImage = $('<img src="assets/images/' + charArray[player].img + '">')
        .addClass('player-img');

    playerStats = $('<div><p id="player-stats">HP: ' + charArray[player].hp + ' / Current Power: ' + charArray[player].ap + '</p></div>');

    playerDiv = $('<div>').addClass('player-div')
        .append(playerImage)
        .append(playerStats);

        
    player = charArray[player];

};


function chooseCPU(event) {

    cpu = $(this).attr('data-id');

    $(this).addClass('selected-cpu');

    $('#char-disp').children()
        .unbind('click', chooseCPU);

    cpuImage = $('<img src="assets/images/' + charArray[cpu].img + '">')
        .addClass('cpu-img');

    cpuStats = $('<div><p id="cpu-stats">HP: ' + charArray[cpu].hp + ' / Counter Attack: ' + charArray[cpu].cap + '</p></div>');

    cpuDiv = $('<div>').addClass('cpu-div')
        .append(cpuImage)
        .append(cpuStats);

    countdown();

};

function countdown() {

    $('#console').html('<p>Ready in 3</p>');

    setTimeout(function () {
        $('#console').html('<p>Ready in 3...</p>');
    }, 600);

    setTimeout(function () {
        $('#console').html('<p>Ready in 3... 2...</p>');
    }, 1400);

    setTimeout(function () {
        $('#console').html('<p>Ready in 3... 2... 1...</p>');
    }, 2200);

    setTimeout(function () {
        $('#console').html('<p>FIGHT!</p>');
    }, 2400);

    setTimeout(function () {
        $('#console').html('<p></p>');
    }, 2500);

    setTimeout(function () {
        $('#console').html('<p>FIGHT!</p>');
    }, 2600);

    setTimeout(function () {
        $('#console').html('<p></p>');
    }, 2700);

    setTimeout(function () {
        $('#console').html('<p>FIGHT!</p>');
    }, 2800);

    setTimeout('battle()', 4000);

};


function battle() {


    cpu = charArray[cpu];

    $('#char-disp').css("display", "none");

    $('#field').css("display", "");

    $('#console').html('<p>Click Attack Button!</p>');

    actionDiv = $('<div>')
        .addClass('action-div')

    attackButton = $('<button>')
        .addClass('attack-button')
        .text('ATTACK!')
        .on('click', attack);

    $('#field').append(playerDiv)
        .append(actionDiv)
        .append(attackButton)
        .append(cpuDiv);

};

function attack() {
    hits++;
    cpu.hp -= player.ap * hits;

    player.hp -= cpu.cap;
    newAP = player.ap * hits;

    $('#player-stats').html('<p>HP: ' + player.hp + ' / Power: ' + newAP + '</p></div>');

    $('#cpu-stats').html('<p>HP: ' + cpu.hp + ' / Counter Attack: ' + cpu.cap + '</p></div>');

    if (cpu.hp <= 0) {
        win();
        wins++;
    }

    if (player.hp <= 0) {
        lose();
    }

};



function win() {
    if (wins < 4) {
        $('#console').html('<p>You won this round!<br>Choose your next opponent.</p>');

        $('#field').empty();
        $('#field').css("display", "none");


        $('div.selected-cpu').remove();
        $('#char-disp').children()
            .on('click', chooseCPU);
        $('#char-disp').css("display", "");



    }

    else if (wins === 4) {
        $('#console').html('<p>You defeated 4 Smash Babies!<br>You win!!!</p><br><center><img src="assets/images/trophy.png" width="500px"></center>');
        $('#field').css("display", "none");

    }

};


function lose() {

    $('#console').html('<p>You have been defeated. :( </p>');

    hits = 0;

    newAP = 0;

    restartButton = $('<button>')
        .addClass('restart-button')
        .text('restart')
        .one('click', characterDisplay());

    $('button').replaceWith(restartButton);



};







characterDisplay();
