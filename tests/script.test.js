let words = [];
let usedWords = [];
let score = 0;

beforeEach(() => {
    words = [
        { hungarian: 'alma', german: 'Apfel' },
        { hungarian: 'körte', german: 'Birne' },
        { hungarian: 'szilva', german: 'Pflaume' },
        { hungarian: 'barack', german: 'Pfirsich' },
        { hungarian: 'szőlő', german: 'Traube' }
    ];
    usedWords = [];
    score = 0;
});

function getRandomWords() {
    const availableWords = words.filter(word => !usedWords.includes(word));
    if (availableWords.length === 0) return [];
    const shuffled = availableWords.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(5, availableWords.length));
}

function checkMatch(selectedHungarian, selectedGerman) {
    return selectedHungarian.german === selectedGerman.german;
}

// Mocking startGame function for demonstration
async function startGame() {
    score = 0; // Reset score
}

describe('Game Functions', () => {
    describe('getRandomWords', () => {
        test('returns an array of random words', () => {
            const randomWords = getRandomWords();
            expect(randomWords.length).toBeGreaterThan(0);
            randomWords.forEach(word => {
                expect(words).toContainEqual(word);
            });
        });

        test('does not return already used words', () => {
            usedWords.push(words[0]);
            const randomWords = getRandomWords();
            expect(randomWords).not.toContainEqual(words[0]);
        });

        test('returns empty array when all words are used', () => {
            usedWords = [...words];
            const randomWords = getRandomWords();
            expect(randomWords).toEqual([]);
        });

        test('returns at most 5 random words', () => {
            const randomWords = getRandomWords();
            expect(randomWords.length).toBeLessThanOrEqual(5);
        });

        test('returns different results on multiple calls', () => {
            const firstCall = getRandomWords();
            const secondCall = getRandomWords();
            expect(firstCall).not.toEqual(secondCall);
        });

        test('returns empty array when words array is empty', () => {
            words = []; // Clear words array
            const randomWords = getRandomWords();
            expect(randomWords).toEqual([]);
        });

        test('does not return used words in repeated calls', () => {
            usedWords.push(words[0], words[1]); // Mark two words as used
            const randomWords1 = getRandomWords();
            const randomWords2 = getRandomWords();
            expect(randomWords1).not.toContainEqual(words[0]);
            expect(randomWords1).not.toContainEqual(words[1]);
            expect(randomWords2).not.toContainEqual(words[0]);
            expect(randomWords2).not.toContainEqual(words[1]);
        });
    });

    describe('checkMatch', () => {
        test('returns true for matching words', () => {
            const hungarianWord = { hungarian: 'alma', german: 'Apfel' };
            const germanWord = { hungarian: 'nicht relevant', german: 'Apfel' };
            expect(checkMatch(hungarianWord, germanWord)).toBe(true);
        });

        test('returns false for non-matching words', () => {
            const hungarianWord = { hungarian: 'alma', german: 'Apfel' };
            const germanWord = { hungarian: 'körte', german: 'Birne' };
            expect(checkMatch(hungarianWord, germanWord)).toBe(false);
        });

        test('returns false if the German word is different', () => {
            const hungarianWord = { hungarian: 'barack', german: 'Pfirsich' };
            const germanWord = { hungarian: 'nicht relevant', german: 'Apfel' };
            expect(checkMatch(hungarianWord, germanWord)).toBe(false);
        });


        test('returns true for matching words with additional properties', () => {
            const hungarianWord = { hungarian: 'alma', german: 'Apfel', category: 'fruit' };
            const germanWord = { hungarian: 'nicht relevant', german: 'Apfel', category: 'not relevant' };
            expect(checkMatch(hungarianWord, germanWord)).toBe(true);
        });
    });

    describe('startGame', () => {
        test('initializes score to 0', async () => {
            await startGame();
            expect(score).toBe(0);
        });

        test('reinitializes score even if previously set', async () => {
            score = 10;
            await startGame();
            expect(score).toBe(0);
        });

    });
});
