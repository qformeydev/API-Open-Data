
// Homepage Recent Events
function showRecentEvents(events) {
    events.forEach(event => {
        const single = event.fields
        let excerptDescription = single.lead_text;
        let excerptTitle = single.title;
        let excerptDate = single.date_start;

        if (excerptDescription.length > 100) {
            excerptDescription = excerptDescription.slice(0, 100) + ' [...]'
        }
        if (excerptTitle.length > 16) {
            excerptTitle = excerptTitle.slice(0, 16) + ' [...]'
        }
        if (excerptDate.length > 10) {
            excerptDate = excerptDate.slice(0, 10)
        }


        $('#recent-event').append(`
        
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 template-event">
            <div class="card-all">
                <div class="vignette-contain">
                    <img class="vignette" src="${single.cover_url}">
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
                        <a class="read-more" href="single.html?${event.id}">Voir plus</a>
                    </div>

                </div>
            </div>
        </div>
        `);
    });
}

// Show All Events
function showAllEvents(events) {
    events.forEach(event => {
        const single = event.fields
        let excerptDescription = single.lead_text;
        let excerptTitle = single.title;
        let excerptDate = single.date_start;

        if (excerptDescription.length > 100) {
            excerptDescription = excerptDescription.slice(0, 100) + ' [...]'
        }
        if (excerptTitle.length > 16) {
            excerptTitle = excerptTitle.slice(0, 16) + ' [...]'
        }
        if (excerptDate.length > 10) {
            excerptDate = excerptDate.slice(0, 10)
        }


        $('#all-event').append(`
        
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 template-event">
            <div class="card-all">
                <div class="vignette-contain">
                    <img class="vignette" src="${single.cover_url}">
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
                        <a class="read-more" href="single.html?${event.id}">Voir plus</a>
                    </div>

                </div>
            </div>
        </div>
        `);
    });
}


// Show Single Post

function showSinglePost(recordsEvent) {

    const single = recordsEvent.fields
    let excerptDate = single.date_start;

    
    if (excerptDate.length > 10) {
        excerptDate = excerptDate.slice(0, 10)
    }
    if (single.cover_url) {
        $('#set-single-img').css("background-image", "url(" + single.cover_url + ")")
    }

    $('#single-post').append(`
        
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="card-content">
                <div class="upper-card">
                    <h3>${single.title}</h3>
                    <p class="date-added">${excerptDate}</p>
                </div>
                <div class="in-card">
                    <p>
                        ${single.description}
                    </p>

                    <!-- 
                        <a class="add-fav" href="#"><img src="asset/fav.png"></a>
                        <a class="read-more" href="#">Voir plus</a>
                        -->
                </div>

            </div>

            <div class="row information-sup">
                <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 info-range">
                    <h4>Téléphone :</h4>
                    <p>${single.contact_phone}</p>
                    <h4>Adresse :</h4>
                    <p>${single.address_name}</p>
                    <h4>Transport disponible :</h4>
                    <p>${single.transport}</p>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 info-range">
                    <h4>Prix :</h4>
                    <p>${single.price_detail}</p>
                    <h4>Type d'acces :</h4>
                    <p>${single.access_type}</p>
                    <h4>Site Web :</h4>
                    <p><a href="${single.contact_url}" target="_blank" class="link-single-more">Cliquez ici</a></p>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 info-range">
                    <a class="add-fav single-fav" href="#"><img src="asset/fav.png"></a>
                </div>
            </div>
        </div>
    </div>
    `);
}









