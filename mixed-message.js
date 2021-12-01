// array of movieQuote objects to iterate through.
const movieQuotes = [
    {
        quote: 'To infinity, and beyond!',
        character: 'Buzz Lightyear',
        movie: 'Toy Story'
    },
    {
        quote: 'Cargo and ship destroyed. I should reach the frontier in about 6 weeks. With a little luck, the network will pick me up. This is Ripley, last survivor of The Nostromo, signing off.',
        character: 'Ripley',
        movie: 'Alien'
    },
    {
        quote: 'Listen! And understand! That terminator is out there. It can\'t be bargained with! It can\'t be reasoned with! It doesn\'t feel pity, or remorse, or fear. And it absolutely will not stop, ever, until you are dead!',
        character: 'Kyle Reese',
        movie: 'Terminator'
    },
    {
        quote: 'Hello, my name is Inigo Montoya. You killed my father: prepare to die.',
        character: 'Inigo Montoya',
        movie: 'Princess Bride'
    },
    {
        quote: 'Mama always said life was like a box a chocolates, never know what you\'re gonna get.',
        character: 'Forest Gump',
        movie: 'Forest Gump'
    },
    {
        quote: 'If I\'m not back in five minutes... just wait longer.',
        character: 'Ace Ventura',
        movie: 'Ace Ventura: When Nature Calls'
    },
    {
        quote: 'Yea, I called her up. She gave me a bunch of crap about me not listening to her enough or something. I don\'t know I wasn\'t really paying attention.',
        character: 'Harry Dunne',
        movie: 'Dumb and Dumber'
    },
    {
        quote: 'I make it a rule, never get involved with possessed people......actually, it\'s more of a guideline than a rule.',
        character: 'Doctor Peter Venkman',
        movie: 'Ghostbusters'
    },
    {
        quote: 'I\'ve fallen for you like a blind roofer.',
        character: 'Topper Harley',
        movie: 'Hot Shots'
    },
    {
        quote: 'Snakes. Why did it have to be snakes?',
        character: 'Indiana Jones',
        movie: 'Raiders of the Lost Ark'
    }
];

// Grabs a random object from the quotes array and returns it
const generateRandomQuoteObj = () => {
    const quoteObj = movieQuotes[Math.floor(Math.random() * movieQuotes.length)];
    return quoteObj;
}

const displayMixedMessage = () => {
    let quoteObj1 = generateRandomQuoteObj();
    let quoteObj2 = generateRandomQuoteObj();
    let quoteObj3 = generateRandomQuoteObj();

    if (quoteObj1 === quoteObj2 || quoteObj1 === quoteObj3) {
        quoteObj1 = generateRandomQuoteObj();
    }
    else if (quoteObj2 === quoteObj1 || quoteObj2 === quoteObj3){
        quoteObj2 = generateRandomQuoteObj();
    }

    console.log('\nIncorrect quote of the day: \n');
    console.log(`${quoteObj1.quote} -- ${quoteObj2.character}, (${quoteObj3.movie})`);

}

displayMixedMessage();