const timeContainer = document.getElementById("time-container");
const BIRTH_DAY = "01-09-2019";
const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
const intlNumberFormatter = new Intl.NumberFormat("en-US");
let isDayTheme = true; // Initial theme is day

const customCursor = document.getElementById("custom-cursor");

document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    customCursor.style.left = mouseX + "px";
    customCursor.style.top = mouseY + "px";
});

// Define the theme switch icon and attach the event listener
const themeSwitchIcon = document.getElementById("theme-switch-icon");
themeSwitchIcon.addEventListener("click", () => {
    const body = document.body;
    body.classList.toggle("day-theme");
    body.classList.toggle("night-theme");

    // Toggle the theme state
    isDayTheme = !isDayTheme;

    // Update the file icon based on the theme state
    themeSwitchIcon.innerHTML = `<i class="fa ${isDayTheme ? 'fa-moon-o' : 'fa-sun-o'}" style="font-size:48px"></i>`;
});

// Interval logic for updating time
setInterval(() => {
    const now = new Date();
    const difference = Math.floor(
    (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000
    );

    timeContainer.innerText = intlNumberFormatter.format(difference);
}, 1000);
