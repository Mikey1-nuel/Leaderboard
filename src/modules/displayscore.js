const scores = document.querySelector('.sub-cont3');
const DisplayScores = {
  scoreList: () => {
    const ApiResponse = async () => {
      const response = await fetch(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/En2iENvSMzzZDyKRElz6/scores/',
        {
          method: 'GET',
        },
      );
      if (!response.ok) {
        throw new Error(`Incorrect HTTP! status: ${response.status}`);
      }
      const data = response.json();
      return data;
    };

    ApiResponse().then((data) => {
      const newData = data.result;
      newData.sort((prev, curr) => prev.score - curr.score);
      scores.innerHTML = newData.map((num) => `
        <p class="paragraph">${num.user}: ${num.score}</p>
        `).join('');
    });
  },
};

module.exports = DisplayScores;
