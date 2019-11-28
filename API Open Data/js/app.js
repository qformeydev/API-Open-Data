
function showRecentEvents(events) {
    events.forEach(event => {
        let excerptDescription = event.lead_text;
        let excerptTitle = event.title;
        let excerptDate = event.date_start;

		if (excerptDescription.length > 100){
			excerptDescription = excerptDescription.slice(0,100) + ' [...]'
        }
        if (excerptTitle.length > 16){
			excerptTitle = excerptTitle.slice(0,16) + ' [...]'
        }
        if (excerptDate.length > 10){
			excerptDate = excerptDate.slice(0,10)
        }
        

        $('#recent-event').append(`
        
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 template-event">
            <div class="card-all">
                <div class="vignette-contain">
                    <img class="vignette" src="${event.cover_url}">
                </div>
                <div class="card-content">
                    <div class="upper-card">
                        <h3>${excerptTitle}</h3>
                        <p class="date-added">${excerptDate}</p>
                    </div>
                    <div class="in-card">
                        <p>
                        ${excerptDescription}
                        </p>

                        <a class="add-fav" href="#"><img src="asset/fav.png"></a>
                        <a class="read-more" href="single.html">Voir plus</a>
                    </div>

                </div>
            </div>
        </div>
        `);
    });
}


function showAllEvents(events) {
    events.forEach(event => {
        let excerptDescription = event.lead_text;
        let excerptTitle = event.title;
        let excerptDate = event.date_start;

		if (excerptDescription.length > 100){
			excerptDescription = excerptDescription.slice(0,100) + ' [...]'
        }
        if (excerptTitle.length > 16){
			excerptTitle = excerptTitle.slice(0,16) + ' [...]'
        }
        if (excerptDate.length > 10){
			excerptDate = excerptDate.slice(0,10)
        }
        

        $('#all-event').append(`
        
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 template-event">
            <div class="card-all">
                <div class="vignette-contain">
                    <img class="vignette" src="${event.cover_url}">
                </div>
                <div class="card-content">
                    <div class="upper-card">
                        <h3>${excerptTitle}</h3>
                        <p class="date-added">${excerptDate}</p>
                    </div>
                    <div class="in-card">
                        <p>
                        ${excerptDescription}
                        </p>

                        <a class="add-fav" href="#"><img src="asset/fav.png"></a>
                        <a class="read-more" href="single.html">Voir plus</a>
                    </div>

                </div>
            </div>
        </div>
        `);
    });
}

(async function () {
    const [RecentEvents] = await Promise.all([getRecentEvents()]);

    showRecentEvents(RecentEvents);
})();

(async function () {
    const [AllEvents] = await Promise.all([getAllEvents()]);

    showAllEvents(AllEvents);
})();







