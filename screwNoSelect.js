javascript:(function(){

	document.body.removeAttribute('oncontextmenu');
	document.body.removeAttribute('onselectstart');
	document.body.removeAttribute('onkeydown');

	/* Remove both attributes and classes likely used to prevent selecting page content */
	document.querySelectorAll('[unselectable]').forEach(ele => ele.removeAttribute('unselectable'));
	document.querySelectorAll('.unselectable').forEach(ele => ele.classList.remove('unselectable'));

	let stop_doc_listening = [];/*['DOMContentLoaded'];*/
	try{
		let stop_win_listening = [getEventListeners(window)['touchstart'][0], getEventListeners(window)['touchend'][0]];
		stop_win_listening.forEach( listener => window.removeEventListener(listener.type, listener.listener) );
	}
	catch(err){
		if (err.name === 'ReferenceError'){
			let stop_win_listening = [['touchstart', window.touchstart], ['touchend', window.touchend]];
			stop_win_listening.forEach( listener => window.removeEventListener(listener[0], listener[1]) );
		}
		else{
			console.warn('Listeners still exist for window.touchstart and window.touchend');
		}
	}
	delete stop_win_listening, delete stop_doc_listening;
	const noop = () => {void(0);};

	 /* Remove any body-scope event handlers likely to be used to prevent selecting page content */
	document.body.onselectstart = document.body.onmousedown = null;
	/* Remove any document-scope event handlers likely to be used to prevent selecting page content */
	document.ondragstart = document.oncontextmenu = document.onclick = document.onmousedown = document.onkeydown = document.onselectstart = null;
	/* Remove any window-scope event handlers likely to be used to prevent selecting page content */
	window.onload = null;

	/* Undefine the names of known methods used to block the selection of some part of the page content */
	/*to_nuke = [wccp_pro_is_passive, nocontext, onlongtouch, touchend, touchstart, elemtype, timer, touchduration, disableSelection, disable_copy_ie, disableEnterKey, disable_copy, wccp_free_iscontenteditable];*/ /*show_wpcp_message, image_save_msg, no_menu_msg, smessage, reEnable*/
	/*
		to_nuke.forEach(thing => delete(window[thing]));
	*/
	[
		'wccp_pro_is_passive',
		'disableSelection',
		'disable_copy_ie',
		'disableEnterKey',
		'disable_copy',
		'wccp_free_iscontenteditable',
		'nocontext',
		'oncontextmenu',
		'onmousedown',
		'onmouseup',
		'onselect',
		'onselectionchange',
		'onselectstart',
		'onlongtouch',
		'touchend',
		'touchstart',
		'elemtype',
		'timer',
		'touchduration',
	].forEach(function(name){
		if (window.hasOwnProperty(name)){ window[name] = noop; }
		delete window[name];
	});

	/* Remove known DOM elements associated with some method for preventing selection of page content */
	document.querySelectorAll('#wpcp_disable_selection , #wpcp_disable_Right_Click , #wpcp_css_disable_selection').forEach(ele => ele.remove());

	/* Specify that the document body should allow text selection, and any individual element should do the same */
	document.head.insertAdjacentHTML('beforeend','<style>body, *{ user-select:text !important; }</style>');

	/* Anything with a style attribute setting user-select:none needs that removed */
	document.querySelectorAll('[style*="user-select:none"],[style*="user-select: none"]').forEach(ele => ele.style.removeProperty('user-select'));
})();