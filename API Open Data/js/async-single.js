(async function() {
	const idEvent = window.location.search.slice(1)
    const single = await Promise.resolve(getSinglePost(idEvent));
    console.log(single)
	
	showSinglePost(single)

})();