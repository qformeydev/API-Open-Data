(async function () {
    const allEvents = await Promise.resolve(getAllEvents());
    console.log(allEvents)
    showAllEvents(allEvents);
})();