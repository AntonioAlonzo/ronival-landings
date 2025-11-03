document.addEventListener("DOMContentLoaded", () => {
  const bodyChildren = document.querySelectorAll("body > div, body > section");

  bodyChildren.forEach((el) => {
    const label = document.createElement("div");
    label.textContent = el.className || "(sin clase)";
    label.style.position = "absolute";
    label.style.top = "10px";
    label.style.left = "10px";
    label.style.background = "rgba(128, 128, 128, 0.7)";
    label.style.color = "white";
    label.style.padding = "4px 8px";
    label.style.borderRadius = "4px";
    label.style.fontFamily = "sans-serif";
    label.style.fontSize = "12px";
    label.style.zIndex = "9999";
    label.style.pointerEvents = "none";

    if (getComputedStyle(el).position === "static") {
      el.style.position = "relative";
    }

    el.appendChild(label);
  });
});
