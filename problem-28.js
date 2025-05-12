//create a basic digital clock
{
  /**
   <p class="watch"></p>
    <button id="watch-btn">Stop the watch</button>
  */
}
const watchElement = document.querySelector(".watch");

const watchButton = document.querySelector("#watch-btn");

const updateClock = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;
  watchElement.textContent = timeString;
};

const intervalId = setInterval(updateClock, 1000);

const stopWatch = () => {
  clearInterval(intervalId);
};

watchButton?.addEventListener("click", stopWatch);
