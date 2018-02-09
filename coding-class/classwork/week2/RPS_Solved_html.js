<!DOCTYPE html>
<html lang="en-us">

<head>
  <meta charset="UTF-8">
  <title>Rock Paper Scissors Part 1</title>
</head>

<body>

  <div id="game">
    <!-- Element to hold user's guess -->
    <h2>User's guess:
      <span id="user-guess"></span>
    </h2>

    <!-- Element to hold computer's guess -->
    <h2>Computer's guess:
      <span id="computer-guess"></span>
    </h2>

    <!-- Elements to hold wins/losses/ties -->
    <p>Wins:
      <span id="wins"></span>
    </p>
    <p>Losses:
      <span id="losses"></span>
    </p>
    <p>Ties:
      <span id="ties"></span>
    </p>
  </div>

  <script type="text/javascript">
    // Possible computer choices
    var computerChoices = ['r','p','s'];

    // Grab all HTML Elements
    var userHTML = document.getElementById('user-guess');
    var computerHTML = document.getElementById('computer-guess');
    var winsHTML = document.getElementById('wins');
    var lossesHTML = document.getElementById('losses');
    var tiesHTML = document.getElementById('ties');

    // Wins/Losses/Ties
    var wins = 0;
    var losses = 0;
    var ties = 0;

    
    document.onkeyup = function(event) {
      // capture user input
      var userChoice = event.key;

      // randomly pick a letter from the computerChoices array using Math.random()
      var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      // run if/else statement checking to see if user input matches r/p/s
      if (userChoice === 'r' || userChoice === 'p' || userChoice === 's'){
        // Run Game
        if (userChoice === computerChoice) {
          ties++;
        } else if (userChoice === 'r' && computerChoice === 'p') {
          losses++;
        } else if (userChoice === 'r' && computerChoice === 's') {
          wins++;
        } else if (userChoice === 'p' && computerChoice === 'r') {
          wins++;
        } else if (userChoice === 'p' && computerChoice === 's') {
          losses++;
        } else if (userChoice === 's' && computerChoice === 'p') {
          wins++;
        } else if (userChoice === 's' && computerChoice === 'r') {
          losses++;
        } else {
          alert('you broke the game');
        }

        userHTML.textContent = userChoice;
        computerHTML.textContent = computerChoice;
        winsHTML.textContent = wins;
        lossesHTML.textContent = losses;
        tiesHTML.textContent = ties;

      } else {
        alert("you aren't very good")
      }




    };
  </script>

</body>

</html>