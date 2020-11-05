const baseFaviconPath = '/images/favicons'

const faviconPaths = {
	calendar: `${baseFaviconPath}/calendar`,
	docs: `${baseFaviconPath}/docs.ico`,
	drawings: `${baseFaviconPath}/drawings.ico`,
	drive: `${baseFaviconPath}/drive-1.ico`,
	earth: `${baseFaviconPath}/earth.ico`,
	forms: `${baseFaviconPath}/forms.ico`,
	gmail: `${baseFaviconPath}/gmail.ico`,
	hangouts: `${baseFaviconPath}/hangouts.ico`,
	keep: `${baseFaviconPath}/keep.ico`,
	maps: `${baseFaviconPath}/maps.ico`,
	meet: `${baseFaviconPath}/meet.ico`,
	photos: `${baseFaviconPath}/photos.ico`,
	sheets: `${baseFaviconPath}/sheets.ico`,
	slides: `${baseFaviconPath}/slides.ico`,
	translate: `${baseFaviconPath}/translate.ico`,
	voice: `${baseFaviconPath}/voice.png`,
}

const debugPerformance = true;

function getURL(path) {
	return browser.runtime.getURL(path);
}

function codeInjection_ShortcutIcon(faviconUrl, indexNumber) {
	if (!indexNumber) indexNumber = 0;
	return `document.querySelectorAll('link[rel="shortcut icon"]')[${indexNumber}].href = "${faviconUrl}";`;
}

function codeInjection_Icon(faviconUrl, indexNumber) {
	if (!indexNumber) indexNumber = 0;
	return `document.querySelectorAll('link[rel="icon"]')[${indexNumber}].href = "${faviconUrl}";`;
}

function codeInjection_Favicon(faviconUrl) {
	return `document.querySelectorAll('link[rel="favicon"]')[0].href = "${faviconUrl}";`;
}

browser.webNavigation.onDOMContentLoaded.addListener(function () {
	
	if (debugPerformance) var startTime = Date.now();
	
	browser.tabs.query({
		active: true,
	}, tabs => {
		if (tabs && tabs[0]) {
			var tab = tabs[0];
			var tabId = tab.id;
			var url = tab.url;
			
			var faviconUrl, codeInjection;
			
			if (url.startsWith('https://calendar.google.com')) {
				// not needed yet
				
				//var dayOfMonth = new Date().getDate();
				//faviconUrl = getURL(`${faviconPaths.calendar}/${dayOfMonth}.ico`);
			}
			//all forms of google docs
			else if (url.startsWith('https://docs.google.com')) {
				switch(url.substring(24, 28)) {
					// slides (presentation)
					case 'pres': 
					
						break;
					// docs (document)
					case 'docu':
						
						break;
					// forms
					case 'form':
						
						break;
					// sheets (spreadsheets)
					case 'spre':
						
						break;
					default:
						console.warn(`Couldn't figure out what subset of google docs this url was: ${url.substring(0, 45)}...`);
				}
			}
			else if (url.startsWith('https://drawings.google.com')) {
				// not needed yet
			}
			else if (url.startsWith('https://drive.google.com')) {
				faviconUrl = getURL(faviconPaths.drive);
				codeInjection = codeInjection_Icon(faviconUrl);
			}
			else if (url.startsWith('https://www.google.com/earth')) {
				// not needed yet
			}
			else if (url.startsWith('https://mail.google.com')) {
				faviconUrl = getURL(faviconPaths.gmail);
				codeInjection = codeInjection_ShortcutIcon(faviconUrl);
			}
			else if (url.startsWith('https://hangouts.google.com')) {
				// not needed yet
				//faviconUrl = getURL(faviconPaths.hangouts);
				//codeInjection = codeInjection_Icon(faviconUrl);
			}
			else if (url.startsWith('https://keep.google.com')) {
				// not needed yet
				// It looks like there are two favicon links; "icon" links to an .ico, and "shortcut icon" links to a .png
				//	We might need to change both (which won't be difficult)
			}
			else if (url.startsWith('https://maps.google.com') || url.startsWith('https://www.google.com/maps')) {
				faviconUrl = getURL(faviconPaths.maps);
				codeInjection = codeInjection_ShortcutIcon(faviconUrl);
			}
			else if (url.includes('meet.google.com')) {
				// this one is a little more complicated; the page has 7 icon versions in the html
				// 	Editing the 2nd one in the list (32x32) seemed to do the trick, but maybe some people would experience problems with it? Keep this on our radar
				faviconUrl = getURL(faviconPaths.meet);
				codeInjection = codeInjection_ShortcutIcon(faviconUrl, 1);
			}
			else if (url.startsWith('https://photos.google.com')) {
				// This one also has multiple icon versions. Overriding the fifth one (64x64) seemed to do the trick
				faviconUrl = getURL(faviconPaths.photos);
				codeInjection = codeInjection_Icon(faviconUrl, 4);
			}
			else if (url.startsWith('https://translate.google.com')) {
				// not needed yet
				//	This one doesn't have any icon links in the document head; instead, it loads /favicon.ico. We might need to inject a link element if need be
			}
			else if (url.startsWith('https://voice.google.com')) {
				// not needed yet
			}
			
			if (faviconUrl && codeInjection) {
				browser.tabs.executeScript(tabId, {
					code: codeInjection,
				}, () => {
					if (debugPerformance) console.log(`${Date.now() - startTime} ms`);
				})
			}
		}
		else {
			console.log('couldn\'t get tab info');
		}
	})
}, 
{ url: [{ urlMatches: 'google.com' }] });