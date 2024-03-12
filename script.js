const hourEl = document.querySelector("#hour");
const minuteEl = document.querySelector("#minutes");
const secondEl = document.querySelector("#seconds");
const ampmEl = document.querySelector("#ampm");

function updateClock() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let ampm = h >= 12 ? "PM" : "AM";

  h = (h % 12) || 12; // Convert 24-hour time to 12-hour time
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;
}

setInterval(updateClock, 1000); // Update every second
