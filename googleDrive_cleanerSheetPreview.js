javascript:(function(){
	/* hide zoom controller */
	document.querySelector('.a-b-Kb-ac-L').style.display = 'none';
	/* hide sheet switcher */
	document.querySelector(':not([style*="display: none"]) > div.a-b-Xb.a-b-ah > .a-b-Xb-e').style.display = 'none';
	/*document.querySelector('div.a-b-Xb-ra:not([style*="display: none"]) > .a-b-Xb-gd-j.a-b-lc.a-b-lc-Da').style.position = 'fixed';*/
	/* fix vertical offset on horizontal scroll bar */
	document.querySelector('div.a-b-Xb-ra:not([style*="display: none"])').style.position = 'static';
	document.querySelector('div.a-b-Xb-ra:not([style*="display: none"]) > .a-b-Xb-gd-j.a-b-lc.a-b-lc-Da > .a-b-Xb-gd-Sg').style.bottom = '-93px';
	/* Shrink top bar "height" from 56px to 36px*/
	document.querySelector('div.a-b.a-b-Oe-n.a-b-L.a-b-Na.a-b-ja-el-db > div.a-b-K.a-b-K-yh').style.height = '36px';
	/* Enlarge preview content to fill space created by shrinking top bar, by reducing its "padding-top" from 56px to 36px */
	document.querySelector('div.a-b-Sh-ng.a-b-va-Zf:not([style*="display: none"]) > div.a-b-Xb.a-b-ah').style.setProperty('padding-top', '36px');
	/* Shift the whole top bar, but primarily the "Open With" menu, by setting "padding-top" (and "padding-bottom" for good measure) from 8px to 0px (although "padding-bottom" is already 0px), and "height" from 48px to 36px*/
	document.querySelector('div.a-b.a-b-Oe-n.a-b-L.a-b-Na.a-b-ja-el-db > div.a-b-K.a-b-K-yh > div.a-b-K-Wb').style.height = '36px';
	document.querySelector('div.a-b.a-b-Oe-n.a-b-L.a-b-Na.a-b-ja-el-db > div.a-b-K.a-b-K-yh > div.a-b-K-Wb').style.setProperty('padding-top', '0px');
	document.querySelector('div.a-b.a-b-Oe-n.a-b-L.a-b-Na.a-b-ja-el-db > div.a-b-K.a-b-K-yh > div.a-b-K-Wb').style.setProperty('padding-bottom', '0px');
	/* Shift the close preview button by changing both "padding-top" and "padding-bottom" from 8px to 0px. Might be overkill*/
	document.querySelector('div.a-b.a-b-Oe-n.a-b-L.a-b-Na.a-b-ja-el-db > div.a-b-K.a-b-K-yh > div.a-b-K-Wb > div.a-b-K-bh > div.a-b-va-d.a-b-Da-d.h-sb-Ic.a-b-d').style.setProperty('padding-bottom', '0px');
	document.querySelector('div.a-b.a-b-Oe-n.a-b-L.a-b-Na.a-b-ja-el-db > div.a-b-K.a-b-K-yh > div.a-b-K-Wb > div.a-b-K-bh > div.a-b-va-d.a-b-Da-d.h-sb-Ic.a-b-d').style.setProperty('padding-top', '0px');
	/* Shift the file icon, by changing "margin-top" from 3px to 0px and "top" from 8px to 5px)*/
	document.querySelector('div.a-b.a-b-Oe-n.a-b-L.a-b-Na.a-b-ja-el-db > div.a-b-K.a-b-K-yh > div.a-b-K-Wb > div.a-b-K-bh > div.a-b-K-c').style.setProperty('margin-top', '0px');
	document.querySelector('div.a-b.a-b-Oe-n.a-b-L.a-b-Na.a-b-ja-el-db > div.a-b-K.a-b-K-yh > div.a-b-K-Wb > div.a-b-K-bh > div.a-b-K-c').style.setProperty('top', '5px');
	/* Shift the document label, by changing "line-height" from 40px to 30px */
	document.querySelector('div.a-b.a-b-Oe-n.a-b-L.a-b-Na.a-b-ja-el-db > div.a-b-K.a-b-K-yh > div.a-b-K-Wb > div.a-b-K-bh > div.a-b-K-Jc > div.a-b-K-T.a-b-cg-Zf').style.setProperty('line-height', '30px');
	/* TODO: Shift/shrink right-hand icons, improve alignment of things, enable scroll (both vert+horiz) while cursor is over frozen columns */
})();
