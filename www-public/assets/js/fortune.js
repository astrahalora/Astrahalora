const fishElement = document.querySelector(".fish");

const randomFortune = () => {
    const fortunes = [
        "Don't be afraid to step into the high unknown, you have wings.",
        "Your were born to inspire awe, give and create with passion.",
        "All the light you cannot see is just around the corner.",
        "It's okay. They know you did the best you could.",
        "The best revenge is massive success.",
        "Your efforts have not gone unnoticed, a hidden smile awaits.",
        "The Universe is never gonna give you up, never gonna let you down.",
        "If you have something worth fighting for, then fight for it.",
        "Your level of success is directly proportional with the number of uncomfortable conversations you're willing to have.",
        "You already know the answer, ask the question.",
        "It will hurt, but it will be worth it.",
        "Smile, the world's not ending just yet.",
        "You think it’s a secret, but they know.",
        "You are never too old to learn new things, your future is limitless.",
        "If you glance back, you’ll soon be going that way. Look up, move ahead.",
        "Good things come to those who take the initiative, so go for it.",
        "Your future is as boundless as the lofty heavens.",
        "An alien of some sort will be appearing to you shortly.",
        "A ship in harbor is safe, but that’s not why ships are built. Set sail, Captain.",
        "People find it difficult to resist your persuasive manner.",
        "You don’t need strength to let go of something. What you really need is understanding.",
        "Don't be cold, your warmth is a treasure that will be reflected back to you.",
        "There's a life out there that only you can save.",
        "Remember your childhood dream, you're ready to see it again.",
        "A long time ago, you wanted to go there but didn't. Destiny awaits you there now.",
        "This version of you can see things the way they are, it's time to accept them too.",
        "If you let go, the ground will fall, but the door that will open will lead somewhere you belong.",
        "The man on the top of the mountain did not fall there.",
        "Credendo vides. The more you believe, the more you will get to see; to be.",
        "At least this time, trust what you know, not what you feel. It's time.",
    ];

    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
};

fishElement.addEventListener("click", function setRandomFortune() {
    fishElement.querySelector("p").innerText = randomFortune();
});
