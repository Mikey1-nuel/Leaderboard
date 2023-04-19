import './style.css';

const DisplayScores = require('./modules/displayscore.js');

document.addEventListener('DOMContentLoaded', DisplayScores.scoreList);

const form = document.getElementById('form');
const refresh = document.querySelector('.btn');

refresh.addEventListener('click', DisplayScores.scoreList);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userName = document.getElementById('name').value;
  const userScore = document.getElementById('score').value;

  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/En2iENvSMzzZDyKRElz6/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: userName,
      score: userScore,
    }),
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw new Error(`Incorrect HTTP! status: ${error}`);
    });
  form.reset();
});