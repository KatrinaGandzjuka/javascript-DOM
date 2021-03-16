# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

Your reply here... 
No, because you refresh the page code starts all over again.

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

Your reply here...
It makes us to wait until web page is comletely loaded.
---

> Describe the the `addEventListener` method. (Remember that there is a specific, technical, methodical way to describe methods. Your reply should match that format.)

Your reply here...
The EventTarget method addEventListener() sets up a function that will be called whenever the specified event is delivered to the target. Common targets are Element, Document, and Window, but the target may be any object that supports events (such as XMLHttpRequest).