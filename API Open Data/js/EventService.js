async function getRecentEvents() {
    const data = await $.ajax(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?rows=3`);
    const events = data.records.map(record => record.record);
    return events;
}

async function getAllEvents() {
    const data = await $.ajax(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records`);
    const events = data.records.map(record => record.record);
    return events;
}

async function getSinglePost(idEvent){
	const url = 'https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/' + idEvent;
	const data = await $.ajax(`${url}`);
	const single = data.record;
	return single;
}

async function getKeyWord(search){
	const url = 'https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?rows=20&search=' + search;
	const data = await $.ajax(`${url}`);
	const events = data.records.map(record => record.record);
	return events;
}
