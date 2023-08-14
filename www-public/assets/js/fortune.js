const fishElement = document.querySelector(".fish");

const randomFortune = () => {
    const fortunes = [
        "A wise person will give advice, a fool will take it.",
        "Hard work is the key to success, but laziness is the lock.",
        "The early bird gets the worm, but the second mouse gets the cheese.",
        "Your road to glory will be rocky, but fulfilling.",
        "The best revenge is massive success.",
        "You will find a great love this year.",
        "You learn from your mistakes... You will learn a lot today.",
        "If you have something worth fighting for, then fight for it.",
        "You will inherit a large sum of money.",
        "Don’t let statistics do a number on you.",
        "All your fingers can’t be of the same length.",
        "Be on the lookout for coming events; they cast their shadows beforehand.",
        "Your hard work will soon pay off.",
        "You are never too old to learn.",
        "You will travel to many exotic places in your lifetime.",
        "Good things come to those who wait.",
        "Your future is as boundless as the lofty heavens.",
        "The best way to predict your future is to create it.",
        "You will discover your hidden talents.",
        "People find it difficult to resist your persuasive manner.",
        "Your heart is pure, and your mind clear, and your soul devout.",
        "There is excitement in the air.",
        "You will meet a new friend today.",
        "A new voyage will fill your life with untold memories.",
        "You will be successful in your work.",
        "You are talented in many ways.",
        "A dream you have will come true.",
        "The man on the top of the mountain did not fall there.",
        "Believe in yourself and others will too.",
        "You will be rewarded for your efforts.",
    ];

    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
}

fishElement.addEventListener("click", function setRandomFortune() {
    fishElement.querySelector("p").innerText = randomFortune();
})

