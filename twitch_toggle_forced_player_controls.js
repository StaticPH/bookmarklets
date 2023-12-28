javascript:(function(){
	let controls = document.querySelector('div.Layout-sc-nxg1ff-0.video-player__default-player > div.video-player__overlay > .ScTransitionBase-sc-eg1bd7-0.tw-transition > div.Layout-sc-nxg1ff-0.player-controls');
	let playerTransitionEle = controls.parentElement;
	playerTransitionEle.style.getPropertyValue('opacity') === '1' ? playerTransitionEle.style.removeProperty('opacity') : playerTransitionEle.style.setProperty('opacity', 1, 'important');
	controls.style.getPropertyValue('overflow') === 'visible' ? controls.style.removeProperty('overflow') : controls.style.setProperty('overflow', 'visible', 'important');
})();void(0);