//console.log("The quiz brain is alive");

const form = document.getElementById("task-form");

const results = {
  bmw: "a BMW: bold, fast and always looking for the next corner!",
  toyota: "a Toyota: calm, reliable and never, ever late!",
  tesla: "a Tesla: smart, connected and three updates ahead of everyone!",
  volvo: "a Volvo: safe, cosy and quietly unstoppable!",
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

  const resultText = document.querySelector("#result p");
  resultText.textContent = "You're " + results[winner];
});
