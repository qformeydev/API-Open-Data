$(function(){

	$('.search-bar').submit(function(event) {
		const search = $('.search').val()
		searchedEvent(search)
		event.preventDefault()
	})
})

async function searchedEvent(search) {
    $('#all-event').empty()
	const eventSearched = await Promise.resolve(getKeyWord(search));
    showAllEvents(eventSearched)
    console.log(eventSearched)
}