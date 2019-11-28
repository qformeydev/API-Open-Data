
function showLastEvents(events) {
    events.forEach(event => {
        $('#last-events').append(`<div>
            <h3>${event.title}</h3>
            <img src="${event.cover_url}" width="200">
        </div>`);
    });
}

function showNextEvents(events) {
    events.forEach(event => {
        $('#next-events').append(`<div>
            <h3>${event.title}</h3>
            <img src="${event.cover_url}" width="200">
        </div>`);
    });
}

// ================================
// Avec la méthode async/await
// ================================

(async function() {
    const [lastEvents, nextEvents] = await Promise.all([getLastEvents(), getNextEvents()]);

    showLastEvents(lastEvents);
    showNextEvents(nextEvents);
})();

setInterval(function() {
    $('#timer').text(new Date().getMilliseconds())
}, 10);


// ================================
// Avec la méthode des Promesses
// ================================

/* $.ajax(url).then(data => {
    // Traitement du résultat
    const events = data.records.map(record => record.record.fields);
    console.log('UN')
        
    showLastEvents(events);
});

$.ajax(url2).then(data => {
    // Traitement du résultat
    const events = data.records.map(record => record.record.fields);
    console.log('DEUX')
        
    showNextEvents(events);
});

console.log('FIN'); */

// ================================
// Ancienne méthode avec "callback"
// ================================

/* $.ajax(url, {
    success : function(data) {
        console.log(data);

        // Traitement du résultat
        const events = data.records.map(record => record.record.fields);
        
        events.forEach(event => {
            $('#last-events').append(`<div>
                <h3>${event.title}</h3>
                <img src="${event.cover_url}" width="200">
            </div>`);
        });
    }
});

$.ajax(url2, {
    success : function(data) {
        console.log(data);

        // Traitement du résultat
        const events = data.records.map(record => record.record.fields);
        
        events.forEach(event => {
            $('#next-events').append(`<div>
                <h3>${event.title}</h3>
                <img src="${event.cover_url}" width="200">
            </div>`);
        });
    }
}); */