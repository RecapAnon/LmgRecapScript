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
