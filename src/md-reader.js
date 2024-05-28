// https://markdown-it.github.io/markdown-it/
import "https://cdn.jsdelivr.net/npm/markdown-it@13.0.1/dist/markdown-it.min.js";

const onload = async () => {
  const md = document.querySelector("noscript").innerText;

  document.body.classList.add("Document");
  document.body.appendChild(
    Object.assign(document.createElement("main"), {
      innerHTML: window
        .markdownit({ html: true, xhtmlOut: true, linkify: true })
        .render(md),
    })
  );

  // pre tag hide
  const preNoscript = document.querySelector(
    "pre>noscript:first-child:last-child"
  );

  if (preNoscript) {
    preNoscript.parentNode.style = "display: none;";
  }

  // https://highlightjs.org/usage/
  const { default: hljs } = await import(
    "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/es/highlight.min.js"
  );
  hljs.highlightAll();
};

document.readyState === "loading"
  ? document.addEventListener("DOMContentLoaded", onload)
  : onload();
