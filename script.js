window.addEventListener('load', ()=> {
    const allSkeleton = document.querySelectorAll('.skeleton');
    // allSkeleton.forEach(item=>item.classList.remove('skeleton'));
})

function defaultFun() {
  const body= document.getElementsByClassName("body");
  body[0].classList.remove("one-data-light-style");
  body[0].classList.remove("one-bright-light-style");
  body[0].classList.remove("dark");
}

function oneDataFun() {
  const body= document.getElementsByClassName("body");
  body[0].classList.remove("one-bright-light-style");
  body[0].classList.remove("dark");
  body[0].classList.add("one-data-light-style");
}

function oneBrightFun() {
  const body= document.getElementsByClassName("body");
  body[0].classList.remove("one-data-light-style");
  body[0].classList.remove("dark");
  body[0].classList.add("one-bright-light-style");
}

function darkFun() {
  const body= document.getElementsByClassName("body");
  body[0].classList.remove("one-data-light-style");
  body[0].classList.remove("one-bright-light-style");
  body[0].classList.add("dark");
}