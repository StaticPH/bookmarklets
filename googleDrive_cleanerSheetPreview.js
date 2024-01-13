/* PREVIEW ONLY */

javascript:(function(){
	const dummyElement = document.createElement('div');
	const failableQuerySelector = (selector, scope = document) => scope.querySelector(selector) || dummyElement;
	
	/* hide zoom controller */
	failableQuerySelector('.a-b-Kb-ac-L').style.display = 'none';
	/* hide sheet switcher */
	/* July 2023: sheet switcher seems to have been moved into an iframe
	failableQuerySelector(':not([style*="display: none"]) > div.a-b-Xb.a-b-ah > .a-b-Xb-e').style.display = 'none';
	*/

	/*document.querySelector('div.a-b-Xb-ra:not([style*="display: none"]) > .a-b-Xb-gd-j.a-b-lc.a-b-lc-Da').style.position = 'fixed';*/
	/* fix vertical offset on horizontal scroll bar */
	/* July 2023: horizontal scroll bar seems to have been moved into an iframe
	failableQuerySelector('div.a-b-Xb-ra:not([style*="display: none"])').style.position='static';
	failableQuerySelector('div.a-b-Xb-ra:not([style*="display: none"]) > .a-b-Xb-gd-j.a-b-lc.a-b-lc-Da > .a-b-Xb-gd-Sg').style.bottom='-93px';
	*/
	const previewSelector = 'div.a-b.a-b-Oe-n.a-b-L.a-b-Na.a-b-ja-el-db';
	/* Shrink top bar "height" from 56px to 36px*/
	/* July 2023: removed '.a-b-K-yh' from 2nd level of selector. */
	failableQuerySelector(previewSelector + ' > div.a-b-K').style.height = '36px';
	/* Enlarge preview content to fill space created by shrinking top bar, by reducing its "padding-top" from 56px to 36px */
	/* July 2023: removed '.a-b-Xb' from last level of selector, replaced 'padding-top' with 'top', and set height to 94% */
	const contentFrameHolder = failableQuerySelector('div.a-b-Sh-ng.a-b-va-Zf:not([style*="display: none"]) > div.a-b-ah');
	contentFrameHolder.style.setProperty('top', '36px');
	contentFrameHolder.style.setProperty('height', '94%');
	/* Shift the whole top bar, but primarily the "Open With" menu, by setting "padding-top" (and "padding-bottom" for good measure)
	from 8px to 0px (although "padding-bottom" is already 0px), and "height" from 48px to 36px*/
	/*July 2023: removed '.a-b-K-yh' from 2nd level of selector */
	const topbar = failableQuerySelector(previewSelector + ' > div.a-b-K > div.a-b-K-Wb');
	topbar.style.height = '36px';
	topbar.style.setProperty('padding-top', '0px');
	topbar.style.setProperty('padding-bottom', '0px');
	/* July 2023: Resize "Open With" menu sub-elements to look somewhat decent again. */
	topbar.querySelector('.a-b-Da-d.a-b-d.a-b-K-pb').style.setProperty('max-height', '30px');
	topbar.querySelector('.a-b-Da-d.a-b-d.a-b-K-cd').style.setProperty('max-height', '30px');
	topbar.querySelector('.a-b-Da-d.a-b-d.a-b-K-cd > .a-b-K-pb-vc').style.setProperty('max-height', '30px');
	/* Shift the close preview button by changing both "padding-top" and "padding-bottom" from 8px to 0px. Might be overkill*/
	/* July 2023: removed from selector start: preview + ' > div.a-b-K.a-b-K-yh > div.a-b-K-Wb > div.a-b-K-bh > ' */
	const closePreviewBtn = failableQuerySelector('div.a-b-va-d.a-b-Da-d.h-sb-Ic.a-b-d');
	closePreviewBtn.style.setProperty('padding-bottom', '0px');
	closePreviewBtn.style.setProperty('padding-top', '0px');
	/* Shift the file icon, by changing "margin-top" from 3px to 0px and "top" from 8px to 5px)*/
	/* July 2023: No longer necessary
	const fileIcon = failableQuerySelector(preview + ' > div.a-b-K.a-b-K-yh > div.a-b-K-Wb > div.a-b-K-bh > div.a-b-K-c');
	fileIcon.style.setProperty('margin-top', '0px');
	fileIcon.style.setProperty('top', '5px');
	*/
	/* Shift the document label, by changing "line-height" from 40px to 30px */
	/* July 2023: removed '.a-b-K-yh' from 2nd level of selector. */
	failableQuerySelector(previewSelector + ' > div.a-b-K > div.a-b-K-Wb > div.a-b-K-bh > div.a-b-K-Jc > div.a-b-K-T.a-b-cg-Zf').style.setProperty('line-height', '30px');
	/* TODO: Shift/shrink right-hand icons, improve alignment of things, enable scroll (both vert+horiz) while cursor is over frozen columns */
})();