const apiKey = "4f3ec4b5b3b028828db825fdcb3cb83b";

async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();

    if (city === "") {
        alert("Please enter a city.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        if (data.cod != 200) {
            alert(data.message);
            return;
        }

        document.getElementById("city").innerText = data.name;
        document.getElementById("temperature").innerText =
            Math.round(data.main.temp) + "°C";

        document.getElementById("description").innerText =
            data.weather[0].description;

        document.getElementById("humidity").innerText =
            data.main.humidity + "%";

        document.getElementById("wind").innerText =
            data.wind.speed + " km/h";

    } catch (error) {
        console.error(error);
        alert("Failed to connect to Weather API.");
    }
}
