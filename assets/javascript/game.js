// characters along with their name, health points, attack power, counter attack
// power, and their relative path image source

var charArray = [
    {name: "Mario", hp: 120,ap: 8, cap: 2, img: 'mario.png',}, 
    {name: "Kirby", hp: 100,ap: 9, cap: 5, img: 'kirby.png',},
    {name: "Donkey Kong", hp: 150,ap: 2, cap: 20, img: 'donkeykong.png',},
    {name: "Link", hp: 150,ap: 2, cap: 20, img: 'link.png',},
    {name: "Ness", hp: 150,ap: 2, cap: 20, img: 'ness.png',},
    {name: "Samus Aran", hp: 150, ap: 2, cap: 20, img: 'samusaran.png',},
    {name: "Fox McCloud", hp: 150, ap: 2, cap: 20, img: 'fox.png',},
    {name: "Zelda", hp: 150, ap: 2, cap: 20, img: 'zelda.png',},
    {name: "Pikachu", hp: 150, ap: 2, cap: 20, img: 'pikachu.png',},
    {name: "Princess Peach", hp: 150, ap: 2, cap: 20, img: 'peach.png',},
    {name: "King Dedede", hp: 150, ap: 2, cap: 20, img: 'kingdedede.png',},
    {name: "Captain Falcon", hp: 150, ap: 2, cap: 20, img: 'falcon.png',},
    {name: "Jigglypuff", hp: 150, ap: 2, cap: 20, img: 'jigglypuff.png',},
    {name: "Luigi", hp: 150, ap: 2, cap: 20, img: 'luigi.png',},
    {name: "Yoshi", hp: 180, ap: 1, cap: 25, img: 'yoshi.png',}
];


// initialize player and opponent variables
var player;
var cpu;


$(document).ready(function () {


    //display characters to choose from
    function characterDisplay() {
        for (var i=0; i < charArray.length; i++) {
            var charName = $('<p>').addClass('name')
                .html(charArray[i].name);
            
            var charImg = $('<img src="assets/images/' + charArray[i].img + '">').addClass('char-img');

            var charStats = $('<div><p id="stats-text">HP: ' + charArray[i].hp + ' / Power: ' + charArray[i].ap + '</p></div>').addClass('char-stats');
           
            var charBox = $('<div>').addClass('char-box')
                .append(charName)
                .append(charImg)
                .append(charStats)
                .one('click', playerChoice)

            $('#char-disp').append(charBox);

        }
    };



    function playerChoice(event) {
        player = charArray[i].name;


        
        $('#characters-select').children()
            .appendTo('#enemy-select')
            .addClass('enemy')
            .one('click', cpuSelect);
    };

console.log(player);


characterDisplay();

// Ends $(document).ready()
});

