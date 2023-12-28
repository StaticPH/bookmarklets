javascript: (function(){

	const messageExplanation = 'These are all the unique domains found in href attributes in the top level document on this page:';
	const message = (`${[...new Set(Array.from(document.querySelectorAll('[href]'), e => e.href.replace(/^https?:\/\//, '').replace(/\/.*$/, '')))]}`);

	document.querySelectorAll('.domainDialog, #domainDialogStyle').forEach(e => e.remove());
	document.head.insertAdjacentHTML('beforeEnd', '<style type="text/css" id="domainDialogStyle"> .domainDialog { min-width: 50%; max-width: 75%; /*overflow-wrap: break-word;*/ width: fit-content; position: fixed; /*max-height: 50%;*/ top: 50%; bottom: 50%; } .domainDialog .msgBody { outline: 1px solid lightgray; overflow-y: scroll; /*resize: vertical; */} .domainDialog > form { margin-bottom: 0px; } .ignoredText { user-select: none; }</style>');
	const dialog = document.createElement('dialog');
	dialog.className = 'domainDialog';
	dialog.insertAdjacentHTML('beforeEnd', `<div><p class='ignoredText'>${messageExplanation}</p><p class='msgBody'>${message.replaceAll('\n', '<br><br>\n')}</p></div><form method='dialog'><button class='ignoredText'>Close Dialog</button></form>`);
	document.body.prepend(dialog);
	dialog.showModal();
})(); void(0);
