const AddScore = {
  nameAndScore: () => {
    const input = document.querySelector('.sub-cont4');
    input.innerHTML = `
  <h3 class="header2">Add your score</h3>
  <form action="" id="form">
  <label for="name">
  <input type="text" placeholder="Your name" required>
  </label>
  <label for="score">
  <input type="number" placeholder="Your score" required>
  </label>
  <button type="submit" class="btn2" value="submit">Submit</button>
  </form>
  `;
  },
};

module.exports = AddScore;
