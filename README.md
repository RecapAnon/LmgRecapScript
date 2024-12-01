# /lmg/ Recap Script

## Bookmarklet
```
javascript:document.querySelectorAll('span.quote').forEach(quoteSpan => { const post = quoteSpan.parentNode; const previousThreadUrl = post.querySelector('a[href*="thread"]'), threadId = previousThreadUrl && previousThreadUrl.href.match(/thread\/(\d{9})/)[1]; const quoteIds = quoteSpan.textContent.match(/>(\d{9})/g); if (quoteIds) quoteSpan.outerHTML = quoteIds.map(id => { const linkUrl = threadId ? `/g/thread/${threadId}#p${id.slice(1)}%60 : %60#p${id.slice(1)}%60; return %60<a href="${linkUrl}" class="quotelink">>>${id.slice(1)}</a>%60; }).join(' '); });
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
document.querySelectorAll('span.quote').forEach(quoteSpan => {
    const post = quoteSpan.parentNode;
    const previousThreadUrl = post.querySelector('a[href*="thread"]'),
        threadId = previousThreadUrl && previousThreadUrl.href.match(/thread\/(\d{9})/)[1];
    const quoteIds = quoteSpan.textContent.match(/>(\d{9})/g);
    if (quoteIds) quoteSpan.outerHTML = quoteIds.map(id => {
      const linkUrl = threadId ? `/g/thread/${threadId}#p${id.slice(1)}` : `#p${id.slice(1)}`;
      return `<a href="${linkUrl}" class="quotelink">>>${id.slice(1)}</a>`;
    }).join(' ');
  });
```

## F.A.Q.

#### Why?

Since Friday September 20th, posts with more than 9 replies are rejected as spam.
Links have been replaced with greentext in the recap to avoid mass-replying while still providing sources. Those who find the recaps useful can use this script to restore link functionality.

#### 4chan-x? Post Previews? (You)s?

GreaseMonkey: Everything should just work.
TamperMonkey: Go to the settings of the user script, and set it to Run at: document-body.
