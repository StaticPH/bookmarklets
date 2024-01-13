/* FULL-EDITOR VIEW ONLY */
javascript:(function(){
	var dummyElement = document.createElement('div');
	const failableQuerySelector = (selector) => document.querySelector(selector) || dummyElement;
	const failableQuerySelectorAll = (selector) => document.querySelectorAll(selector) || [dummyElement];
	/** Hide the button that opens the Google App suite sidebar thing; the one that lets you switch between "apps". Does anybody even use it? **/
	failableQuerySelector(':not([style*="display: none"]) > .companion-collapser-button-container').style.display = 'none';

	/** Hide the button that opens the "Explore" sidebar thing. I don't think I've ever used it. **/
	/*failableQuerySelector(':not([style*="display: none"]) > .waffle-assistant-entry').style.display = 'none';*/

	/** Remove the seemingly-unused '#waffle-disclaimer-bar'. Just because its one less entry to see in the DOM. **/
	let disclaimerEle = document.getElementById('waffle-disclaimer-bar');
	disclaimerEle && disclaimerEle.remove();

	/** Downscale the rather large buttons on the upper right of the title bar **/
	let titlebarBtnsContainer = failableQuerySelector('.docs-titlebar-buttons');
	/* titlebarBtnsContainer.style.transform = 'scale(0.75)'; */
	/** Tweak spacing **/
	titlebarBtnsContainer.style.setProperty('height', 'auto');
	titlebarBtnsContainer.style.setProperty('padding-right', '4px');
	failableQuerySelectorAll('.docs-material .docs-appbar-circle-button.jfk-button').forEach(function(e){
		e.style.setProperty('width', 'auto');
		e.style.setProperty('margin-left', '2px', true);
		e.style.setProperty('margin-right', '2px', true);
	});
	let presentationBtn = failableQuerySelectorAll('#docs-meet-in-editors-entrypointbutton');
	presentationBtn.style.setProperty('height', 'auto');
	presentationBtn.style.setProperty('width', '100%');
	/* presentationBtn.style.setProperty('display', 'inline-block'); */
	presentationBtn.style.setProperty('display', 'table-cell');
	presentationBtn.style.setProperty('margin-left', '2px');
	presentationBtn.style.setProperty('margin-right', '2px');
	presentationBtn.style.setProperty('padding-left', '2px');
	presentationBtn.style.setProperty('padding-right', '5px');
	presentationBtn.style.setProperty('padding-top', '2px');

	/* failableQuerySelector('#docs-meet-in-editors-entrypointbutton > .goog-flat-menu-button-dropdown').style.setProperty('margin-inline', '-2px'); */
	let shareableBtn = failableQuerySelector('.scb-container > [role="button"]');
	shareableBtn.style.setProperty('margin-left', '4px');
	shareableBtn.style.setProperty('margin-right', '4px');

	/** Demand more corners I can get hurt on!**/
	let docsToolbarWrapper = failableQuerySelector('#docs-toolbar-wrapper');
	docsToolbarWrapper.style.setProperty('border-radius', '0px');
	docsToolbarWrapper.style.setProperty('margin-top', '0px');

	/*  TODO: Chromium and Firefox support for scrollbar un-mangling */
})(); void(0);