const goalkeepers = [
    {player: "Lev Yashin", born: 1929, country: "Soviet Union", message: "'The Black Spider' is an imposing, commanding presence in goal."},
    {player: "Gianluigi Buffon", born: 1978, country: "Italy", message: "Goalkeepers rarely ooze as much class as this man."}
]

const defenders = [
    {player: "Paolo Maldini", born: 1968, country: "Italy", message: "'Il Capitano' is one of the greatest defenders of all time."},
    {player: "Franz Beckenbauer", born: 1945, country: "Germany", message: "A versatile player, 'Der Kaiser' invented the role of the modern sweeper."},
    {player: "Roberto Carlos", born: 1973, country: "Brazil", message: "One of the greatest attacking full backs in history."}
]

const midfielders = [
    {player: "Xavi", born: 1980, country: "Spain", message: "A metronomic presence who will never lose the ball."},
    {player: "Zinedine Zidane", born: 1972, country: "France", message: "The king of ball control, just make sure he doesn't headbutt anyone!"},
    {player: "Johan Cruyff", born: 1947, country: "Netherlands", message: "The man who brought 'Total Football' to life."}
]

const attackers = [
    {player: "Cristiano Ronaldo", born: 1985, country: "Portugal", message: "'CR7' is the complete attacker - heading, dribbling, shooting, he's got it all."},
    {player: "Lionel Messi", born: 1987, country: "Argentina", message: "The GOAT who has won it all."},
    {player: "Erling Haaland", born: 2000, country: "Norway", message: "Man or machine? He can't stop scoring and has already won a treble."},
    {player: "Pele", born: 1940, country: "Brazil", message: "' O Rei', 'The King', the only man to win three world cups."},
    {player: "Ronaldo", born: 1976, country: "Brazil", message: "The original Ronaldo and a true phemonenon"}
]
// console.log(defenders[0].message);

function chooseRandomPlayer(position) {
    // This function will randomly pick players within each position
    return Math.floor(Math.random()*position.length);   
}

function selectTeam() {
    // This function will choose the 5-a-side team
    const goalkeeper = goalkeepers[chooseRandomPlayer(goalkeepers)];
    const defender = defenders[chooseRandomPlayer(defenders)];
    const midfielder = midfielders[chooseRandomPlayer(midfielders)];
    const attacker1 = attackers[chooseRandomPlayer(attackers)];
    let attacker2 = [];
    do {
        // Ensures that attacker 2 is not the same as attacker 1
        attacker2 = attackers[chooseRandomPlayer(attackers)];
    } while (attacker2 === attacker1);
    console.log(`Your team is ${goalkeeper.player}, ${defender.player}, ${midfielder.player}, ${attacker1.player} and ${attacker2.player}. Great team!`);
}

selectTeam();