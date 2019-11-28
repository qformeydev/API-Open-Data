async function getLastEvents() {
    const data = await $.ajax(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?rows=3`);

    // Traitement du résultat
    const events = data.records.map(record => record.record.fields);
    
    return events;
}

async function getNextEvents() {
    const data = await $.ajax(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?rows=3&sort=-date_start`);

    // Traitement du résultat
    const events = data.records.map(record => record.record.fields);
    
    return events;
}


