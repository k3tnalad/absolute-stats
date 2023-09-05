<script>
  import { fade, slide } from "svelte/transition";
export let data;
let standings = data.table[0].league.standings[0];
console.log(standings);
const nameShortener = (string) => {
    if (string === 'Nottingham Forest') {
      return 'N. Forest'
      } else if (string === 'Manchester City') {
      return 'Man City'
      } else if (string === 'Manchester United') {
        return 'Man United'
      } else if (string === 'Crystal Palace') {
        return 'C. Palace';
      } else {
        return string;
      }
    }
</script>

<div class="container">
    <h2>STANDINGS</h2>
    <div class="table">
          <div class="header">
            <div class="team-container">
              <span class="text-container index"><p>#</p></span>
              <span class="team">Team</span>
            </div>
            <div class="team-stats-container">
              <span class="text-container"><p>Pl</p></span>
              <span class="text-container"><p>+/-</p></span>
              <span class="text-container points"><p>Pts</p></span>
            </div>
          </div>
          {#each standings as team}
            <div class="position" id="id{team.rank}">
              <div class="team-container">
                <span class="text-container index"><p>{team.rank}</p></span>
                <span class="team">
                  <img src={team.team.logo} alt="teamLogo">
                  <span>{nameShortener(team.team.name)}</span>
                </span>
              </div>
              <div class="team-stats-container">
                <span class="text-container"><p>{team.all.played}</p></span>
                <span class="text-container"><p>{team.all.goals.for}/{team.all.goals.against}</p></span>
                <span class="text-container points"><p>{team.points}</p></span>
              </div>
            </div>
          {/each}
      </div>
</div>

<style>
    div.container {
        padding-top: 1em;
        width: 100%;
        display: grid;
        place-items: center;
        gap: 1em;
        margin-bottom: 3em;
        font-size: 20px;
    }
    div.table {
        width: 95%;
    }

    div.header {
        border-left: solid 5px var(--clr-main-light-bg);
    }
    div.header, div.position {
        padding: .4em 0;
        display: grid;
        grid-template-columns: 60% 40%;
        border-bottom: 1px solid black;
    }
    #id1,#id2,#id3,#id4 {
      border-left: solid 5px darkblue;
    }
    #id5, #id6 {
      border-left: solid 5px rgb(138, 117, 2);
    }
    #id7 {
      border-left: solid 5px green;
    }
    #id8, #id9, #id10, #id11, #id12, #id13, #id14, #id15, #id16, #id17, #id18, #id19, #id20 {
        border-left: solid 5px var(--clr-main-light-bg);
    }
    div.team-container {
      display: grid;
      grid-template-columns: 15% 85%;
      gap: .5em;
      justify-content: center;
      align-items: center;
    }
    div.team-container > span{
      text-align: left;
      padding-left: 0.3em;
    }
    div.team-stats-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
    div.team-stats-container > span {
      text-align: center;
    }
    span.team {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: .4em;
    }
    span.text-container.points {
      text-align: right;
      padding-right: .3em;
    }
    span.text-container.index {
      text-align: right;
      padding-right: .3em;
    }
    span.text-container {
      text-align: right;
    }
</style>