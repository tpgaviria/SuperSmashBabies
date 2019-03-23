// characters along with their name, health points, attack power, counter attack
// power, and their relative path image source

var charArray = [
    { name: "Mario", hp: 120, ap: 8, cap: 2, img: 'mario.png', facing: 'right', },
    { name: "Kirby", hp: 100, ap: 9, cap: 5, img: 'kirby.png', facing: 'right', },
    { name: "Donkey Kong", hp: 150, ap: 2, cap: 20, img: 'donkeykong.png', facing: 'left', },
    { name: "Link", hp: 150, ap: 2, cap: 20, img: 'link.png', facing: 'left', },
    { name: "Ness", hp: 150, ap: 2, cap: 20, img: 'ness.png', facing: 'right', },
    { name: "Samus Aran", hp: 150, ap: 2, cap: 20, img: 'samusaran.png', facing: 'left', },
    { name: "Fox McCloud", hp: 150, ap: 2, cap: 20, img: 'fox.png', facing: 'right', },
    { name: "Zelda", hp: 150, ap: 2, cap: 20, img: 'zelda.png', facing: 'left', },
    { name: "Pikachu", hp: 150, ap: 2, cap: 20, img: 'pikachu.png', facing: 'left', },
    { name: "Princess Peach", hp: 150, ap: 2, cap: 20, img: 'peach.png', facing: 'right', },
    { name: "King Dedede", hp: 150, ap: 2, cap: 20, img: 'kingdedede.png', facing: 'left', },
    { name: "Captain Falcon", hp: 150, ap: 2, cap: 20, img: 'falcon.png', facing: 'left', },
    { name: "Jigglypuff", hp: 150, ap: 2, cap: 20, img: 'jigglypuff.png', facing: 'left', },
    { name: "Luigi", hp: 150, ap: 2, cap: 20, img: 'luigi.png', facing: 'left', },
    { name: "Yoshi", hp: 180, ap: 1, cap: 25, img: 'yoshi.png', facing: 'left', }
];


// initialize player and opponent variables

var player;
var cpu;
var playerDiv;
var cpuDiv;

//display characters to choose from - data pulled from array
function characterDisplay() {
    for (var i = 0; i < charArray.length; i++) {

        var charName = $('<div>').addClass('name')
            .html('<p id="name-text">' + charArray[i].name + '</p>');

        var charImg = $('<img src="assets/images/' + charArray[i].img + '">').addClass('char-img');

        var charStats = $('<div><p id="stats-text">HP: ' + charArray[i].hp + ' / Power: ' + charArray[i].ap + '</p></div>').addClass('char-stats');


        //creating box for each character
        var charBox = $('<div>').addClass('char-box')
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

    var playerImage = $('<img src="assets/images/' + charArray[player].img + '">')
        .addClass('player-img');

    var playerStats = $('<div><p id="stats-text">HP: ' + charArray[player].hp + ' / Power: ' + charArray[player].ap + '</p></div>')
        .addClass('player-stats');

    playerDiv = $('<div>').addClass('player-div')
    .append(playerImage)
    .append(playerStats);

};


function chooseCPU(event) {

    cpu = $(this).attr('data-id');

    $(this).addClass('selected-cpu');

    $('#char-disp').children()
        .unbind('click', chooseCPU);

    var cpuImage = $('<img src="assets/images/' + charArray[cpu].img + '">')
        .addClass('cpu-img');

    var cpuStats = $('<div><p id="stats-text">HP: ' + charArray[cpu].hp + ' / Power: ' + charArray[cpu].ap + '</p></div>')
        .addClass('cpu-stats');

    cpuDiv = $('<div>').addClass('cpu-div')
        .append(cpuImage)
        .append(cpuStats);

    countdown();

};

function countdown() {

    $('#console').html('<p>Ready in 3</p>');

    setTimeout(function () {
        $('#console').html('<p>Ready in 3.</p>');
    }, 200);

    setTimeout(function () {
        $('#console').html('<p>Ready in 3..</p>');
    }, 400);

    setTimeout(function () {
        $('#console').html('<p>Ready in 3...</p>');
    }, 600);

    setTimeout(function () {
        $('#console').html('<p>Ready in 3... 2</p>');
    }, 800);

    setTimeout(function () {
        $('#console').html('<p>Ready in 3... 2.</p>');
    }, 1000);

    setTimeout(function () {
        $('#console').html('<p>Ready in 3... 2..</p>');
    }, 1200);

    setTimeout(function () {
        $('#console').html('<p>Ready in 3... 2...</p>');
    }, 1400);

    setTimeout(function () {
        $('#console').html('<p>Ready in 3... 2... 1</p>');
    }, 1600);

    setTimeout(function () {
        $('#console').html('<p>Ready in 3... 2... 1.</p>');
    }, 1800);

    setTimeout(function () {
        $('#console').html('<p>Ready in 3... 2... 1..</p>');
    }, 2000);

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


function battle () {

    player = charArray[player];

    cpu = charArray[cpu];

    $('#char-disp').remove();    

    $('#console').html('<p>Click Attack Button!</p>');

    var attackButton = $('<button>')
        .addClass('attack-button')
        .text('ATTACK!')
        .on('click', attack);

    $('#field').append(playerDiv)
        .append(cpuDiv)
        .append(attackButton);

    var hits = 1;

    function attack() {
        hits++;
        cpu.hp -= player.ap * hits;
        player.hp -= cpu.cap;
        var newAP = player.ap * hits;

        $('#stats-text').html('<p>HP: ' + player.hp + ' / Power: ' + newAP + '</p></div>');

        if (cpu.hp <= 0) {
            win();
        }

        if (player.hp <= 0) {
            lose();
        }

    };
      
    function win() {

    
    };

    function lose () {

    };



}


characterDisplay();
