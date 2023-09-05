export async function load({fetch}) {
    const url = 'https://api-football-v1.p.rapidapi.com/v3/standings?season=2023&league=39';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9b629c4000msh5f1e9f22f14de23p12cb4cjsn5860dd1d131a',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
    };
    if(localStorage.getItem('table')) {
        return {
            table: JSON.parse(localStorage.getItem('table'))
        };
    } else {
        const response = await fetch(url, options);
        const result = await response.json();
        localStorage.setItem('table', JSON.stringify(result.response));
        return {
            table: JSON.parse(localStorage.getItem('table'))
        };
    }
}