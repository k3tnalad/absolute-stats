export async function load({fetch, params}) {
    const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${params.slug}`;
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9b629c4000msh5f1e9f22f14de23p12cb4cjsn5860dd1d131a',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
    };
    if (localStorage.getItem(`fixtureID${params.slug}`)) {
        return {
             fixture: JSON.parse(localStorage.getItem(`fixtureID${params.slug}`))
        }    
    } else {
        const response = await fetch(url, options);
        const result = await response.json();
        localStorage.setItem(`fixtureID${params.slug}`, JSON.stringify(result));
        return {
            fixture: JSON.parse(localStorage.getItem(`fixtureID${params.slug}`))
        }
    }
}