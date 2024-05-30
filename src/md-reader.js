// https://markdown-it.github.io/markdown-it/
import "https://cdn.jsdelivr.net/npm/markdown-it@13.0.1/dist/markdown-it.min.js";

// pre tag hide
const preNoscript = document.querySelector(
  "pre>noscript:first-child:last-child"
);

if (preNoscript) {
  preNoscript.parentNode.style = "display: none;";
}

// turn on Document styles
document.body.classList.add("Document");

// convert markdown
const md = document.querySelector("noscript").innerText;
const main = document.createElement("main");

main.insertAdjacentHTML(
  "afterbegin",
  window.markdownit({ html: true, xhtmlOut: true, linkify: true }).render(md)
);

document.body.appendChild(main);

// run highlightjs if there is at least one code block
if (document.querySelector("pre>code:first-child:last-child")) {
  (async () => {
    // https://highlightjs.org/usage/
    const { default: hljs } = await import(
      "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/es/highlight.min.js"
    );
    hljs.highlightAll();
  })();
}
