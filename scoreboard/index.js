let homeScore = 0;
let awayScore = 0;
let homeScoreEl = document.getElementById("home-score");
let awayScoreEl = document.getElementById("away-score");

function homeIncrementOne(){
    // Implementation for incrementing home score by 1
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
};

function homeIncrementTwo(){
    // Implementation for incrementing home score by 2
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
};

function homeIncrementThree(){
    // Implementation for incrementing home score by 3
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
};

function awayIncrementOne(){
    // Implementation for incrementing away score by 1
    awayScore += 1;
    awayScoreEl.textContent = awayScore;
};

function awayIncrementTwo(){
    // Implementation for incrementing away score by 2
    awayScore += 2;
    awayScoreEl.textContent = awayScore;
};

function awayIncrementThree(){
    // Implementation for incrementing away score by 3
    awayScore += 3;
    awayScoreEl.textContent = awayScore;
};