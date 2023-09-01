const timeContainer = document.getElementById("time-container");
const BIRTH_DAY = "2019-09-01";
const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
const intlNumberFormatter = new Intl.NumberFormat("en-US");
let isDayTheme = true; // Initial theme is day

const customCursor = document.getElementById("custom-cursor");

document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    customCursor.style.left = mouseX + "px";
    customCursor.style.top = mouseY + "px";

    // Change cursor color based on theme
    const cursorColor = isDayTheme ? "rgba(0, 0, 0, 0.5)" : "rgba(224, 225, 225, 0.5)";
    customCursor.style.backgroundColor = cursorColor;
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

    // Update cursor color based on theme
    const cursorColor = isDayTheme ? "rgba(0, 0, 0, 0.5)" : "rgba(224, 225, 225, 0.5)";
    customCursor.style.backgroundColor = cursorColor;
});

// Interval logic for updating time
setInterval(() => {
    const now = new Date();
    const difference = Math.floor(
    (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000
    );

    timeContainer.innerText = intlNumberFormatter.format(difference);
}, 1000);
