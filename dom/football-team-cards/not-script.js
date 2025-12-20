const footballTeam = [
  {
    team: "Generic Sports Team",
    year: "1999",
    headCoach: "Head Coachman",
    players: [
      { name: "Forward Player", position: "forward", isCaptain: true },
      { name: "Mike Midfielder", position: "midfielder", isCaptain: false },
      { name: "Dave Defense", position: "defender", isCaptain: false },
      { name: "Greg Goalkeeper", position: "goalkeeper", isCaptain: false },
    ],
  },
];

const teamSpan = document.getElementById("team");
const yearSpan = document.getElementById("year");
const headCoachSpan = document.getElementById("head-coach");

teamSpan.textContent = footballTeam[0].team;
yearSpan.textContent = footballTeam[0].year;
headCoachSpan.textContent = footballTeam[0].headCoach;

const selectContainer = document.getElementById("players");
const playersContainer = document.getElementById("player-cards");

function playerCards(playerPos) {
  const playerInfo =
    playerPos === "all"
      ? footballTeam[0].players
      : footballTeam[0].players.filter(
          ({ position }) => position === playerPos,
        );
  playerInfo.forEach((player) => {
    if (player.isCaptain) {
      return playerInfo.map(({ name, position }) => {
        return `<div class="player-card"><h2>(Captain) ${name}</h2><p>${position}</p></div>`;
      });
      /*return playerInfo
    .map(({ name, position }) => {
      return `
        <div class="player-card">
          <h2>${name}</h2>
          <p>Position: ${position}</p>
        </div>
      `;
    })
    .join("");*/
    } else {
      return playerInfo.map(({ name, position }) => {
        return `<div class="player-card"><h2>(Captain) ${name}</h2><p>${position}</p></div>`;
      });
    }
  });
}
selectContainer.addEventListener(
  "change",
  () => (playersContainer.innerHTML = playerCards(selectContainer.value)),
);
