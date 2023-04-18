const DisplayScores = {
  scoreList: () => {
    const scores = document.querySelector('.sub-cont3');
    scores.innerHTML = `
<p class="paragraph">Name: 100</p>
<p class="paragraph">Name: 20</p>
<p class="paragraph">Name: 50</p>
<p class="paragraph">Name: 78</p>
<p class="paragraph">Name: 125</p>
<p class="paragraph">Name: 77</p>
<p class="paragraph">Name: 42</p>
`;
  },
};

module.exports = DisplayScores;
