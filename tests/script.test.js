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
    });
});
