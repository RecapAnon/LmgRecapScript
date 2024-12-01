# /lmg/ Recap Script

## Bookmarklet
```
Javascript:const previousThreadUrl = document.querySelector('blockquote a[href*="thread"]').href,threadId = previousThreadUrl.match(/thread\/(\d{9})/)[1];document.querySelectorAll('span.quote').forEach(quoteSpan => {const quoteIds = quoteSpan.textContent.match(/>(\d{9})/g);if (quoteIds) quoteSpan.outerHTML = quoteIds.map(id => `<a href="/g/thread/${threadId}#p${id.slice(1)}" class="quotelink">>>${id.slice(1)}</a>`).join(' ');});
```

![](https://files.catbox.moe/cz9rb1.png)

## User Script
```
// ==UserScript==
// @name     4chan Linkify Greentext
// @version  1
// @include  http://boards.4chan.org/*
// @include  https://boards.4chan.org/*
// @include  http://www.4chan.org/*
// @include  https://www.4chan.org/*
// @grant    none
// ==/UserScript==
const previousThreadUrl = document.querySelector('blockquote a[href*="thread"]').href,
    threadId = previousThreadUrl.match(/thread\/(\d{9})/)[1];
document.querySelectorAll('span.quote').forEach(quoteSpan => {
    const quoteIds = quoteSpan.textContent.match(/>(\d{9})/g);
    if (quoteIds) quoteSpan.outerHTML = quoteIds.map(id => `<a href="/g/thread/${threadId}#p${id.slice(1)}" class="quotelink">>>${id.slice(1)}</a>`).join(' ');
});
```

## F.A.Q.

#### Why?

Since Friday September 20th, posts with more than 9 replies are rejected as spam.
Links have been replaced with greentext in the recap to avoid mass-replying while still providing sources. Those who find the recaps useful can use this script to restore link functionality.

#### 4chan-x? Post Previews? (You)s?

GreaseMonkey: Everything should just work.
TamperMonkey: Go to the settings of the user script, and set it to Run at: document-body.
