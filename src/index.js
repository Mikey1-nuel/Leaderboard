import './style.css';

const AddScore = require('./modules/addscore.js');
const DisplayScores = require('./modules/displayscore.js');

document.addEventListener('DOMContentLoaded', AddScore.nameAndScore);
document.addEventListener('DOMContentLoaded', DisplayScores.scoreList);
