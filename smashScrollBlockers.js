javascript: (function(){
	/* Fix the Twitter modal obstructing content, and the document itself get is set to allow vertical overflow by scrolling. */
	let toDelete = document.getElementsByClassName("css-1dbjc4n r-l5o3uw");
	if (toDelete.length) { toDelete[0].remove(); }
	toDelete = document.getElementsByClassName("css-1dbjc4n r-1awozwy r-18u37iz r-1pi2tsx r-1777fci r-1xcajam r-ipm5af r-g6jmlv");
	if (toDelete.length) { toDelete[0].remove(); }
	document.querySelector('html').style.setProperty('overflow-y', 'scroll');
	
	/* Remove classes disabling scrolling on some NYT pages */
	const scrollBlockingClassMatches = document.querySelectorAll('[class*="noscroll"],[class*="no-scroll"],[class*="no_scroll"]');
	if (scrollBlockingClassMatches.length !== 0){
		const noScrollClassRegex = /[^ ]*(no[-_]?scroll)[^ ]*/;
		scrollBlockingClassMatches.forEach(ele => ele.className = ele.className.replace(noScrollClassRegex, '').trim())/*.forEach(ele => ele.classList.forEach(cls => noScrollClassRegex.test(cls) && ele.classList.remove(cls))*/
	}
	toDelete = document.querySelector('.modal_modal-window-container__1Gj4j.modal_show__2GqPp');
	if (toDelete) { toDelete.remove(); }
})(); void(0);

