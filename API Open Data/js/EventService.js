async function getRecentEvents() {
    const data = await $.ajax(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?rows=3`);

    // Traitement du résultat
    const events = data.records.map(record => record.record.fields);
    
    return events;
}

async function getAllEvents() {
    const data = await $.ajax(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records`);

    // Traitement du résultat
    const events = data.records.map(record => record.record.fields);
    
    return events;
}