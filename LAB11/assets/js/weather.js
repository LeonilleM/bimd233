const temperatures = [
    { day: "Fri", hi: 82, lo: 55, condition: "sunny" },
    { day: "Sat", hi: 75, lo: 52, condition: "cloudy" },
    { day: "Sun", hi: 69, lo: 52, condition: "showers" },
    { day: "Mon", hi: 69, lo: 48, condition: "cloudy" },
    { day: "Tue", hi: 68, lo: 51, condition: "showers" }
];

// Calculate the average of an array of numbers
function average(arr) {
    const total = arr.reduce((acc, cur) => acc + cur, 0);
    return total / arr.length;
}

// Calculate the averages and display them on the webpage
const avgHigh = average(temperatures.map(temp => temp.hi));
const avgLow = average(temperatures.map(temp => temp.lo));
const avgTemp = average(temperatures.map(temp => (temp.hi + temp.lo) / 2));

document.getElementById("avg-high").innerHTML = `${avgHigh}°F`;
document.getElementById("avg-low").innerHTML = `${avgLow}°F`;
document.getElementById("avg-temp").innerHTML = `${avgTemp}°F`;