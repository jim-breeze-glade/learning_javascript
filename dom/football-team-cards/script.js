const footballTeam = {
  team: "Generic Sports Team",
  year: 1999,
  headCoach: "Head Coachman",
  players: [
    { name: "Forward Player", position: "forward", isCaptain: true },
    { name: "Mike Midfielder", position: "midfielder", isCaptain: false },
    { name: "Dave Defense", position: "defender", isCaptain: false },
    { name: "Greg Goalkeeper", position: "goalkeeper", isCaptain: false },
  ],
};

const teamSpan = document.getElementById("team");
const yearSpan = document.getElementById("year");
const headCoachSpan = document.getElementById("head-coach");

teamSpan.textContent = footballTeam.team;
yearSpan.textContent = footballTeam.year;
headCoachSpan.textContent = footballTeam.headCoach;

const selectContainer = document.getElementById("players");
const playersContainer = document.getElementById("player-cards");

function playerCards(playerPos) {
  const playerInfo =
    playerPos === "all"
      ? footballTeam.players
      : footballTeam.players.filter(({ position }) => position === playerPos);

  return playerInfo
    .map(({ name, position, isCaptain }) => {
      const captainText = isCaptain ? "(Captain) " : "";
      return `
        <div class="player-card">
          <h2>${captainText}${name}</h2>
          <p>Position: ${position}</p>
        </div>
      `;
    })
    .join("");
}

selectContainer.addEventListener(
  "change",
  () => (playersContainer.innerHTML = playerCards(selectContainer.value)),
);
