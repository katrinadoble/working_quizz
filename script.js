//console.log("The quiz brain is alive");

const form = document.getElementById("task-form");
const resultText = document.querySelector("#result p");
const startText = resultText.textContent;
const tallyText = document.getElementById("tally");

const wins = { bmw: 0, toyota: 0, tesla: 0, volvo: 0 };

const results = {
  bmw: "a BMW: going straight to Slāvu aplis!",
  toyota: "a Toyota: calm, reliable and BORING!",
  tesla: "a Tesla: smart, connected and always looking where to plug in!",
  volvo: "a Volvo: safe and cosy, but the only problem that it's not a BMW!",
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Submitted!");
  const picked = [];

  const answer1 = document.querySelector('input[name="q1"]:checked');
  picked.push(answer1.value);

  const answer2 = document.querySelector('input[name="q2"]:checked');
  picked.push(answer2.value);

  const answer3 = document.querySelector('input[name="q3"]:checked');
  picked.push(answer3.value);

  const answer4 = document.querySelector('input[name="q4"]:checked');
  picked.push(answer4.value);

  const answer5 = document.querySelector('input[name="q5"]:checked');
  picked.push(answer5.value);
  console.log(picked);

  const scores = { bmw: 0, toyota: 0, tesla: 0, volvo: 0 };
  let winner = picked[0];

  for (const car of picked) {
    scores[car] = scores[car] + 1;
    if (scores[car] > scores[winner]) {
      winner = car;
    }
  }
  console.log(scores);
  console.log("Winner:", winner);

  resultText.textContent = "You're " + results[winner];

  wins[winner] = wins[winner] + 1;
  tallyText.textContent =
    "Wins so far: BMW " +
    wins.bmw +
    ", Toyota " +
    wins.toyota +
    ", Tesla " +
    wins.tesla +
    ", Volvo " +
    wins.volvo;
});

form.addEventListener("reset", function () {
  resultText.textContent = startText;
});
