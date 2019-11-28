// jQuery 1 & 2
$.ajax()
    XMLHttpRequest

// jQuery 3
$.ajax()
    Promise


// Ancienne méthode avec "Callback" (jQ 1 & 2)
const url = 'https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?rows=3'
$.ajax(url, {
    success : function(data){
        console.log(data);

        // Traitement du résultat
        const events = data.records.map(record => record.record.fields);
        console.log(events);

        events.forEach(event)
        $('#id-div')
    }
});

// Parametre Sup 
?rows=3