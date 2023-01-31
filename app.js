const p1 = {
  score: 0,
  button: document.querySelector(`#p1Button`),
  display: document.querySelector(`#p1Display`),
};
const p2 = {
  score: 0,
  button: document.querySelector(`#p2Button`),
  display: document.querySelector(`#p2Display`),
};
const resetBtn = document.querySelector(`#reset`);
const playto = document.querySelector(`#playto`);
let gameOver = false;

function updateScores(player, opponent) {
  if (!gameOver) {
    player.score++;
    if (player.score >= playto.value) {
      gameOver = true;
      player.display.classList.add(`has-text-success`);
      player.button.disabled = true;
      opponent.display.classList.add(`has-text-danger`);
      opponent.button.disabled = true;
    }
    player.display.innerText = player.score;
  }
}

p1.button.addEventListener(`click`, function () {
  updateScores(p1, p2);
});

p2.button.addEventListener(`click`, function () {
  updateScores(p2, p1);
});

playto.addEventListener(`change`, reset);

resetBtn.addEventListener(`click`, reset);

function reset() {
  {
    gameOver = false;
    for (p of [p1, p2]) {
      p1.display.innerText = 0;
      p1.score = 0;
      p.display.classList.remove(`has-text-success`, `has-text-danger`);
      p.button.disabled = false;
    }
  }
}
