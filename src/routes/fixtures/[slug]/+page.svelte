<script>
    export let data;
    // console.log(data)
    let fixtureBlob = {
        teams: data.fixture.response[0].teams,
        goals: data.fixture.response[0].goals,
        events: data.fixture.response[0].events,
        lineups: data.fixture.response[0].lineups,
        statistics: data.fixture.response[0].statistics,
        fixture: data.fixture.response[0].fixture,
    };
    console.log(fixtureBlob)
    let homeTeam = fixtureBlob.teams.home.name;

    let lineupsVisibile = true;
    let eventsVisible = false;
    let statsVisible = false;
    let lastSelected = '';

    function navHandler(e) {
        let sectionSelected = e.target.textContent;
        lastSelected = sectionSelected;
        if (sectionSelected === 'line-ups') {
            eventsVisible = false;
            statsVisible = false;
            lineupsVisibile = true;
        } else if (sectionSelected === 'events') {
            statsVisible = false;
            lineupsVisibile = false;
            eventsVisible = true;
        } else if (sectionSelected === 'stats') {
            lineupsVisibile = false;
            eventsVisible = false;
            statsVisible = true;
        }
    }

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
    function eventTypeHandler(str) {
        if(str === 'Goal') {
            return '⚽'
        } else if (str === 'subst') {
            return '♻️'
        } else if (str === 'Card') {
            return '🟨'
        } else if (str === 'Var') {
            return '🖥️'
        }
    }

</script>

<main >
    <div class="container">
        <div class="result">
            <span class="homeTeam">
                <img src={fixtureBlob.teams.home.logo} alt="club logo" srcset="">
                <span class="teamName"> {nameShortener(fixtureBlob.teams.home.name)}</span>
            </span>
            <span class="score">{fixtureBlob.goals.home} - {fixtureBlob.goals.away}</span>
            <span class="awayTeam">
                <span class="teamName">{nameShortener(fixtureBlob.teams.away.name)} </span>
                <img src={fixtureBlob.teams.away.logo} alt="club logo" srcset="">
            </span>
        </div>
        <div class="generalInfo">
            <p class="date">📆 Date: {(fixtureBlob.fixture.date).split('T')[0]}</p>
            <p class="venue">🏟️ Venue: {fixtureBlob.fixture.venue.name}</p>
            <p class="referee">👀 Referee: {fixtureBlob.fixture.referee}</p>
        </div>
        <nav>
            <button on:click={navHandler}>line-ups</button>
            <button on:click={navHandler}>events</button>
            <button on:click={navHandler}>stats</button>
        </nav>
        <div class="mainDataContainer">
            {#if statsVisible}
                <div class="stats">
                    <div class="homeTeamStats">
                        {#each fixtureBlob.statistics[0].statistics as type}
                            <p>{type.value === null ? 0 : type.value}</p>
                        {/each}
                    </div>
                    <div class="statType">
                        {#each fixtureBlob.statistics[0].statistics as type}
                            <p>{type.type}</p>
                        {/each}
                    </div>
                    <div class="awayTeamStats">
                        {#each fixtureBlob.statistics[1].statistics as type}
                            <p>{type.value === null ? 0 : type.value}</p>
                        {/each}
                    </div>
                </div>
            {:else if eventsVisible}
                 <div class="events">
                {#each fixtureBlob.events as event}
                    <div class="event {homeTeam !== event.team.name ? 'align' : ''}">
                        <span>{eventTypeHandler(event.type)}</span>
                        <span>{event.player.name}</span>
                        <span>{event.time.elapsed}'</span>
                    </div>
                {/each}
            </div>
            {:else if lineupsVisibile}
            <div class="lineups">
                <section class="home">
                    {#each fixtureBlob.lineups[0].startXI as player}
                        <p class="homePlayer"><span class="pnum">{player.player.number}</span><span>{player.player.name}</span></p>
                    {/each}
                        <p class="coach">Coach: {fixtureBlob.lineups[0].coach.name}</p>
                </section>
                <section class="away">
                    {#each fixtureBlob.lineups[1].startXI as player}
                    <p class="awayPlayer"><span>{player.player.name}</span><span class="pnum">{player.player.number}</span></p>
                    {/each}
                    <p class="coachA">Coach: {fixtureBlob.lineups[1].coach.name}</p>
                </section>
            </div>
            {/if}
        </div>
    </div>
    <div class="spacer"></div>
    <div class="backBtnContainer">
        <a href="/fixtures">back</a>
    </div>
</main>

<style>
    main {
        font-size: 20px;
        width: 100%;
        height: 100%;
    }
    div.container {
        width: 100%;
    }
    div.result {
        display: grid;
        grid-template-columns: 41% 18% 41%;
        border-bottom: solid 2px black;
        padding: 0em .2em;
        color: black;
    }
    span.homeTeam {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: .3em;
    }
    span.awayTeam {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        gap: .3em;
    }
    span.score {
        height: 100%;
        padding: .5em .3em;
        color: aliceblue;
        display: grid;
        place-items: center;
        font-weight: 600;
    }
    nav {
        width: 100%;
        height: 3em;
        background-color: #444;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    nav > button {
        border: none;
        background: none;
        font-size: 18px;
        transition: all 300ms ease;
        letter-spacing: 3px;
        cursor: pointer;
        color: #FFF1D0;
        transition: all 150ms ease-in;
    }
    nav > button:hover,  nav > button:focus {
        color: #af2b36;
        letter-spacing: 5px;
    }
    div.lineups {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        font-size: 15px;
        line-height: 2;
    }
    p.homePlayer {
        display: grid;
        grid-template-columns: 7% 87%;
        gap: .8em;
       justify-items: start;
    }
    p.awayPlayer {
        display: grid;
        grid-template-columns: 87% 7%;
        gap: .8em;
        justify-items: end;
    }
    span.pnum {
        font-size: 12;
        color: rgb(70, 67, 67);
    }
    p.coachA {
        text-align: right;
    }
    div.event {
        text-align: left;
    }
    div.event.align {
        text-align: right;
    }
    div.result, div.generalInfo, div.mainDataContainer {
        padding: 1em;
        font-size: 18px;
    }
    div.stats {
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        justify-items: center;
    }
    div.backBtnContainer {
        left: 0;
        width: 100%;
        height: 3em;
        background-color: #444;
        display: grid;
        place-items: center;
    }
    div.backBtnContainer > a {
        font-size: 30px;
        font-weight: 500;
        text-decoration: none;
        color: #FFF1D0;
        transition: all 300ms ease;
        letter-spacing: 5px;
    }
    div.backBtnContainer > a:hover {
        color: #af2b36;
        letter-spacing: 7px;
    }
    div.spacer {
        width: 100%;
        height: 140px;
    }
</style>