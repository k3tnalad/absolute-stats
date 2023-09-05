<script>
    import dayjs from 'dayjs';
    import '../../app.css';
    export let data;
    let fixtures = data.fixtures;
    console.log(fixtures);

    const nullHandler = (input) => {
        if (input === null || 'null') {
            return '0';
        } else {
            return input;
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
</script>


<div class="container">
    <h2>FIXTURES</h2>
    <div class="table">
        {#each fixtures as fixture}
            <a  href={`/fixtures/${fixture.fixture.id}`} class="fixture">
                <div class="mainData">
                    <span class="homeTeam">
                        <img src={fixture.teams.home.logo} alt="club logo" srcset="">
                        <span class="teamName"> {nameShortener(fixture.teams.home.name)}</span>
                    </span>
                    <span class="score">
                        <p class="scoreNums">{fixture.goals.home} - {fixture.goals.away}</p>
                        <p>{fixture.fixture.status.short}</p>
                    </span>
                    <span class="awayTeam">
                        <span class="teamName">{nameShortener(fixture.teams.away.name)} </span>
                        <img src={fixture.teams.away.logo} alt="club logo" srcset="">
                    </span>
                </div>
                <div class="secondaryData">
                    <span class="date">{dayjs((fixture.fixture.date)).format('MMMM D, YYYY h:mm A')}</span>
                </div>
            </a>
        {/each}
    </div>
    <div class="weekNavigationContainer">
        <div class="played">
            old
        </div>
        <div class="upcoming">
            upcoming
        </div>
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
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: .5em;
    }
    a.fixture {
        display: grid;
        grid-template-rows: 1fr .5fr;
        width: 100%;
        color: inherit;
        text-decoration: none;
        border: 2px solid var(--clr-accent);
    }
    div.mainData {
        display: grid;
        grid-template-columns: 1fr .35fr 1fr;
        height: auto;
    }
    span.homeTeam, span.awayTeam {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .2em;
    }
    span.homeTeam {
        justify-content: flex-start;
        padding-left: .2em;
    }
    span.awayTeam {
        justify-content: flex-end;
        padding-right: .2em;
    }
    span.score {
        display: grid;
        place-items: center;
    }
    span.score > p:first-of-type {
        display: grid;
        place-items: center;
        font-size: 18px;
        font-weight: 500;
    }
    span.score > p:last-of-type {
        font-size: smaller;
        color: #333;
    }
    div.secondaryData {
        text-align: center;
        background-color: #33333355;
    }
    div.weekNavigationContainer {
        display: flex;
        gap: 1em;
        font-size: larger;
    }
    div.upcoming, div.played {
        padding: .5em;
        border-radius: 10px;
    }
    div.upcoming:hover, div.played:hover {
        cursor: pointer;
        color: var(--clr-accent);
    }
</style>