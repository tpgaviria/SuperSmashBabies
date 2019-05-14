# Super Smash Babies

An RPG Style game built using jQuery and JavaScript.

## Game Functionality

Player chooses their character, then chooses their first opponent.
Characters have set Health Points, Attack Power, and Counter Attack Power. Once a battle begins, player clicks "Attack" button, and character stats are changed accordingly and displayed. If the player defeats the computer opponent, they are prompted to choose their next opponent.

Game ends when four opponents are defeated or if the player is defeated.


## Code Explanation

- Character stats initially declared in an array of objects. For each of the characters, a div box is created with their image and stats, and added to the character grid.

- Each character box has an 'on click' event listener, which will assign the character chosen as the player.

- The character boxes are then restyled, and a new 'on click' event listener will assign the chosen character as the first opponent.

- The displayed countdown is coded using JavaScript's built in setTimeout function.

- Every time the player clicks the attack button, the player and cpu's stats are updated, until either character's HP reaches 0.

- The game ends and a message appears once 'wins' reaches 4, or if the players HP reaches 0.
