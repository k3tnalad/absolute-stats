export async function load({fetch}) {
    const url = 'https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=39&season=2023';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9b629c4000msh5f1e9f22f14de23p12cb4cjsn5860dd1d131a',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
    };
    if(localStorage.getItem('scorers')) {
        return {
           scorers: JSON.parse(localStorage.getItem('scorers'))
        };
    } else {
        const response = await fetch(url, options);
        const result = await response.json();
        localStorage.setItem('scorers', JSON.stringify(result.response));
        return {
            scorers: result.response,
        }
    }
}