let time = 25 * 60;
let timeout = false;
let process = false;
let interval;

const timer = document.getElementById("timer");
const stbtn = document.getElementById("startButton");
const theme = document.getElementById("colorTheme");
const box = document.getElementById("boxCounter");
const mode = document.getElementById("modo");

function timeFormat(seconds) {
  const min = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const sec = (seconds % 60).toString().padStart(2, "0");
  return `${min}:${sec}`;
}

function refresh() {
  timer.textContent = timeFormat(time);
  mode.textContent = timeout ? "Descanso" : "Foco";
}

function changeButtonColor() {
  stbtn.classList.remove("bg-emerald-500", "bg-red-600");
  stbtn.classList.add(process ? "bg-red-600" : "bg-emerald-500");
}

function startTemp() {
  if (!process) {
    process = true;
    stbtn.textContent = "Stop";
    changeButtonColor();
    interval = setInterval(() => {
      time--;
      refresh();

      if (time <= 0) {
        clearInterval(interval);
        process = false;
        timeout = !timeout;
        time = timeout ? 5 * 60 : 25 * 60;
        mode.classList.remove("text-sky-300", "text-red-600");
        mode.classList.add(timeout ? "text-red-600" : "text-sky-300");
        theme.classList.remove("bg-black");
        theme.classList.add("bg-emerald-700");
        box.classList.remove("bg-slate-900");
        box.classList.add("bg-emerald-800");
        startTemp();
      }
    }, 1000);
  } else {
    process = false;
    stbtn.textContent = "Start";
    changeButtonColor();
    clearInterval(interval);
  }
}

stbtn.addEventListener("click", startTemp);
