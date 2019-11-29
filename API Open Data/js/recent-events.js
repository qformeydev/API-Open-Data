(async function () {
    const recentEvents = await Promise.resolve(getRecentEvents());
    console.log(recentEvents)
    showRecentEvents(recentEvents);
})();
