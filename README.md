# My bookmarklet collection
This repository contains an assortment of (generally trivial) bookmarklets I've written for my own use.<br>
Some of these are as simple as changing the current page URL to access it through an alternative view or service.<br>
I make no promises regarding the quality, utility, or continued usability of any of these snippets.<br>
In some cases, commented-out code is left in a file, as a reminder to myself of what *doesn't* work; otherwise, comments may be present to explain the intentions of my past-self.<br>
Regardless, comments should be block comments that will not interfere with the functionality of the code if included in the bookmark itself.<br>
Scripts in my repository include their comments and formatting solely for my own convenience, and that will not change.<br>
Pull requests for improvements or fixes are welcomed.<br>

Note that some browsers may require bookmarklets to url-encode some characters (spaces, for instance) in order to function. Furthermore, as a security feature, it is common for browsers to strip `javascript:` prefixes from text pasted directly into the address bar.<br>
<sub>I have also found on a number of ocassions, the browser has converted the "&lt;" character in a bookmarklet to the its hexadecimal unicode escape, <code>\u003C</code>.</sub>

----

## copyPageTitle.js
Self-explanatory

## setTabTitle.js
Display an input prompt for a string to use as the tab/window title for the current page, with the input field pre-populated by the current page title.<br>
If an empty string is submitted, the title remains unchanged.

## makeLinksAbsolute.js
As the name implies, this will rewrite relative addresses in the `src` and `href` attributes of page elements to use their absolute locations.<br>
Unfortunately, there's not much it can do about elements within iframes.

## screwNoSelect.js
Try various workarounds to take back control over text highlighting and context menu access from pages that have the audacity to take it away from users, even if they are justified in attempting to thwart content theft.<br>
Further work may be needed to restore use of these features by keyboard.

## smashScrollBlockers.js
Fix things some websites do to prevent the user from scrolling.

## getHrefDomains.js
Display a dialog listing all the unique domains found in href attributes of elements in the top-level-document on the current page.

## txtify.js
View the current page using [txtify.it](https://txtify.it)

## bypassPaywallWith12ft.js
Use [12ft.io](https://12ft.io) to view the current page without JavaScript.<br>
If a site relies on JavaScript to load in its regular plaintext content (which should really be recognized as a criminal offense by international regulating bodies), this won't be of any use.

## gotoGoogleCachedPage.js
If it wasn't clear from the name, this bookmarklet attempts to load a version of the current page previously cached by Google.

## setVideoPlaybackRate.js
Display an input prompt for a floating point number, and apply the submitted number as a playback speed multiplier to all `<video>` elements currently on the page.<br>
Unless the value is an empty string, in which case the default value of `1.0` is used, behavior is undefined if the submitted value is not a positive number.

## setAudioPlaybackRate.js
Display an input prompt for a floating point number, and apply the submitted number as a playback speed multiplier to all `<audio>` elements currently on the page.<br>
Unless the value is an empty string, in which case the default value of `1.0` is used, behavior is undefined if the submitted value is not a positive number.

## twitch_toggle_forced_player_controls.js
Toggle always showing video player controls on twitch.tv

## medium_workaround.js
Use farside.link to get around Medium's annoying article limit and arbitrarily biased browser detection practices.

----
### I can't remember where these came from...

#### Get all scripts on the page
```javascript
javascript:(function(){s=document.getElementsByTagName('SCRIPT');tx='';sr=[];for(i=0;i<s.length;i++){with(s.item(i)){t=text;if(t){tx+=t;}else{sr.push(src)};}};with(window.open()){document.write('<textarea id="t">'+(sr.join("\n"))+"\n\n-----\n\n"+tx+'</textarea><script src="https://beautifier.io/js/lib/beautify.js"></script><script>with(document.getElementById("t")){value=js_beautify(value);with(style){width="99%";height="99%";borderStyle="none";}};</script>');document.close();}})();
```

#### Highlight nofollow links
```javascript
javascript:var a = document.getElementsByTagName('a');for(var i=0; i<a.length; i++)if (a[i].rel === 'nofollow') {a[i].style.backgroundColor = 'red';a[i].style.fontSize = '2em'; }
```

#### Edit all the things
```javascript
javascript:(function(){document.designMode = 'on'; document.querySelectorAll('*').forEach(function (i){i.setAttribute('contenteditable', 'true')}); void(0);})()
```

#### Refetch page
This fetches the page contents again, and replaces the existing page `body` with the results. That includes duplicating the `head` into the `body`. It's ugly, but sometimes does just the trick to make a page behave itself. (Looking at you, GitHub Docs).
```javascript
javascript:(function(){
	fetch(document.location.href, {
		"credentials":"include",
		"headers":{
			"accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
			"accept-language":"en-US,en;q=0.9",
			"cache-control":"no-cache",
			"pragma":"no-cache",
			"upgrade-insecure-requests":"1"
		},
		"referrerPolicy":"strict-origin-when-cross-origin",
		"body":null,
		"method":"GET",
		"mode":"cors"
	}).then(
		resp => resp.text().then(html => document.body.innerHTML = html)
	);
})();
```

----
# Other useful things
- https://imgops.com
- https://builtwith.com
- https://selectorgadget.com
- https://github.com/pomber/git-history
- https://adrianroselli.com/2015/01/css-bookmarklets-for-testing-and-fixing.html#invert
