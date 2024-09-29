let words = [];
let usedWords = [];
let score = 0;
let highScore = 0;
let selectedHungarian = null;
let selectedGerman = null;

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const restartButton = document.getElementById('restartButton');
const gameDiv = document.getElementById('game');
const hungarianList = document.getElementById('hungarianList');
const germanList = document.getElementById('germanList');
const scoreDisplay = document.getElementById('score');
const highScoreDisplay = document.getElementById('highScore');
const message = document.getElementById('message');

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);
stopButton.addEventListener('click', stopGame);

async function loadWords() {
    try {
        const response = await fetch('words.json');
        words = await response.json();
    } catch (error) {
        console.error('Hiba a JSON betöltésekor:', error);
    }
}

async function startGame() {
    await loadWords();
    score = 0;
    scoreDisplay.textContent = `Pontszám: ${score}`;
    message.textContent = '';
    selectedHungarian = null;
    selectedGerman = null;
    usedWords = [];
    gameDiv.classList.remove('hidden');
    restartButton.classList.add('hidden');
    startButton.classList.add('hidden');
    stopButton.classList.remove('hidden');
    renderWords();
}


function restartGame() {
    message.textContent = '';
    message.classList.remove('new-record');
    selectedHungarian = null;
    selectedGerman = null;
    hungarianList.innerHTML = '';
    germanList.innerHTML = '';
    startButton.classList.remove('hidden');
    stopButton.classList.add('hidden');
    startGame();
}


function stopGame() {
    message.textContent = "A játék leállt!";
    message.style.opacity = 1;
    restartButton.classList.remove('hidden');
    stopButton.classList.add('hidden');
}

function getRandomWords() {
    const availableWords = words.filter(word => !usedWords.includes(word));
    if (availableWords.length === 0) return [];
    const shuffled = availableWords.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(5, availableWords.length));
}

function renderWords() {
    hungarianList.innerHTML = '';
    germanList.innerHTML = '';

    const randomWords = getRandomWords();

    if (randomWords.length === 0) {
        endGame();
        return;
    }

    const shuffledHungarian = [...randomWords].sort(() => 0.5 - Math.random());
    const shuffledGerman = [...randomWords].sort(() => 0.5 - Math.random());

    shuffledHungarian.forEach(word => {
        const hungarianItem = document.createElement('li');
        hungarianItem.textContent = word.hungarian;
        hungarianItem.classList.add('word-item');
        hungarianItem.addEventListener('click', () => selectHungarian(word, hungarianItem));
        hungarianList.appendChild(hungarianItem);
    });

    shuffledGerman.forEach(word => {
        const germanItem = document.createElement('li');
        germanItem.textContent = word.german;
        germanItem.classList.add('word-item');
        germanItem.addEventListener('click', () => selectGerman(word, germanItem));
        germanList.appendChild(germanItem);
    });


    usedWords.push(...randomWords);
}

function selectHungarian(word, element) {
    if (selectedHungarian === null) {
        clearSelections('hungarian');
        element.classList.add('selected');
        selectedHungarian = word;
    }
}

function selectGerman(word, element) {
    if (selectedHungarian && selectedGerman === null) {
        element.classList.add('selected');
        selectedGerman = word;
        checkMatch();
    }
}

function checkMatch() {
    if (selectedHungarian.german === selectedGerman.german) {
        markCorrect(selectedHungarian, selectedGerman);
        score++;
        scoreDisplay.textContent = `Pontszám: ${score}`;
        removePair(selectedHungarian, selectedGerman);
        resetSelection();
        if (hungarianList.childElementCount === 0) {
            renderWords();
        }

    } else {
        let breakRecord = checkHighScore();
        if (breakRecord) {
            markWrong();
            message.style.opacity = 1;
            stopButton.classList.add('hidden');
            restartButton.classList.remove('hidden');
        } else {
            markWrong();
            message.textContent = "Game Over!";
            message.style.opacity = 1;
            stopButton.classList.add('hidden');
            restartButton.classList.remove('hidden');
        }
    }
}

function endGame() {
    message.textContent = "Nincs több szó! Játék vége!";
    message.style.opacity = 1;
    stopButton.classList.add('hidden');
    restartButton.classList.remove('hidden');
    checkHighScore();
}

function checkHighScore() {
    if (score > highScore) {
        highScore = score; // Update high score
        highScoreDisplay.textContent = `Legmagasabb Pontszám: ${highScore}`;
        message.textContent = " Gratulálunk! Új rekordot állítottál fel!";
        message.classList.add('new-record');
        return true;
    }
    return false;
}

function removePair(hungarian, german) {
    const hungarianItems = hungarianList.querySelectorAll('li');
    const germanItems = germanList.querySelectorAll('li');

    hungarianItems.forEach(item => {
        if (item.textContent === hungarian.hungarian) {
            item.remove();
        }
    });

    germanItems.forEach(item => {
        if (item.textContent === german.german) {
            item.remove();
        }
    });
}

function markCorrect(hungarian, german) {
    const hungarianItems = hungarianList.querySelectorAll('li');
    const germanItems = germanList.querySelectorAll('li');

    hungarianItems.forEach(item => {
        if (item.textContent === hungarian.hungarian) {
            item.classList.add('correct');
        }
    });

    germanItems.forEach(item => {
        if (item.textContent === german.german) {
            item.classList.add('correct');
        }
    });
}

function markWrong() {
    const hungarianItems = hungarianList.querySelectorAll('li.selected');
    const germanItems = germanList.querySelectorAll('li.selected');

    hungarianItems.forEach(item => {
        item.classList.add('wrong');
    });

    germanItems.forEach(item => {
        item.classList.add('wrong');
    });
}

function resetSelection() {
    selectedHungarian = null;
    selectedGerman = null;
}

function clearSelections(type) {
    const selectedItems = type === 'hungarian' ? hungarianList.querySelectorAll('li.selected') : germanList.querySelectorAll('li.selected');
    selectedItems.forEach(item => item.classList.remove('selected'));
}

module.exports = { loadWords, startGame, getRandomWords, checkMatch, words, usedWords, score };
