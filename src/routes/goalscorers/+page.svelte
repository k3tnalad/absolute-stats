<script>
import '../../app.css';
import {slide} from 'svelte/transition';
export let data;
let scorers = data.scorers;


const nullHandler = (x) => {
    if(x === null) {
        return 0;
    } else {
        return x;
    }
}
</script>

<div class="container">
    <h2>GOALSCORERS</h2>
    <div class="header">
        <div class="name">Player</div>
        <div class="stats">
            <span class="games">Pl</span>
            <span class="goals">G</span>
            <span class="pens">Pn</span>
        </div>
    </div>
    <div class="table">
        {#each scorers as player}
            <div in:slide="{{duration:400, delay:30, x: -300}}" class="player">
                <div class="name">
                    <img src={player.statistics[0].team.logo} alt="club logo"/>
                    <span class="name">{player.player.name}</span>
                </div>
                <div class="stats">
                    <span class="games">{player.statistics[0].games.appearences}</span>
                    <span class="goals">{player.statistics[0].goals.total}</span>
                    <span class="pens">{nullHandler(player.statistics[0].penalty.scored)}</span>
                </div>
            </div>
        {/each}
    </div>
    <div class="spacer"></div>
</div>

<style>
    div.container {
        width: 95%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        font-size: 20px;
        padding: .5em;
        line-height: 1.71em;
    }
    div.header, div.player {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid black;
        padding: .5em;
    }
    h2 {
        text-align: center;
    }
    div.stats {
        width: 65px;
        display: flex;
        gap: .6em;
        justify-content: center;
        align-items: center;
    }
    div.spacer {
        width: 100%;
        height: 6em;
    }
    div.name {
        display: flex;
        align-items: center;
        justify-content: center; 
        gap: .5em;
    }
    span.goals {
        font-size: 18px;
        font-weight: 600;
        color: crimson;
    }
</style>