# Welcome to Quiz Me If You Can
***

## Task
A Qwasar collaborative coding session: as a team, turn a static HTML personality quiz into a working one with JavaScript. The challenge is to agree on the quiz logic first, then read the picked answers, score them, pick a winner with a clear tie rule, and show a result on the page without the page reloading.

## Description
The quiz tells you which car you are: BMW, Toyota, Tesla or Volvo. It has five questions, and in every question answer A points to BMW, B to Toyota, C to Tesla and D to Volvo, stored in each answer's `value`.

How `script.js` works:
1. It listens for the form's `submit` event and stops the page reload with `event.preventDefault()`.
2. It reads the checked answer of each question with `querySelector('input[name="q1"]:checked')` and collects the values in an array.
3. It counts one point per answer in a `scores` object and picks the car with the most points.
4. Tie rule: the car that reached the top score first wins, because a car only takes the lead with a strictly higher score.
5. It writes the result, e.g. "You're a Tesla: smart, connected and always looking where to plug in!", into the results box.

Extras: a "Play again" button clears the answers and the result, and a running score shows how many times each car has won since the page was opened. Every question is `required`, so the browser shows its own message if one is skipped.

## Installation
No installation or dependencies are needed, only a web browser. Keep `index.html`, `style.css` and `script.js` together in the same folder.

## Usage
Open `index.html` in a web browser, answer all five questions and click Submit to see which car you are. Click Play again to start a new round; the running score below the result keeps counting. Open the browser Console (right-click, Inspect, Console) to see the picked answers, the scores and the winner logged on every submit.

### The Core Team
TBD: team member names

<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px' /></span>
