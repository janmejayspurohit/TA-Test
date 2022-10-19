const progressBar = document.getElementsByClassName("progress-bar")[0];

setInterval(() => {
  const styledCSS = getComputedStyle(progressBar);
  const width = parseFloat(styledCSS.getPropertyValue("--width")) || 0;
  if (width < 100) progressBar.style.setProperty("--width", width + 0.2);
  else progressBar.style.setProperty("--width", 0);
}, 5);
