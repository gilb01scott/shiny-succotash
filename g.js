const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove",(Event) =>{
    const xpos = Event.offsetX;
    const exps = Event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xpos + "px";
    spanEl.style.top = ypos  + "px";
    spanEl.appendChild(spanEl);
})