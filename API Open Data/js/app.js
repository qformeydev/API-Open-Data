
function showLastEvents(events) {
    events.forEach(event => {
        $('#recent-event').append(`<div>
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

   



