function loadScript(url) {
  const head = document.getElementsByTagName("head")[0];
  const script = document.createElement("script");
  script.src = url;
  script.type = "text/javascript";
  head.appendChild(script);
}

// loadScript("01-null-object/script.js");
loadScript("02-builder-pattern/script.js");
