
async function getWeather() {

    const city = document.getElementById("city").value;
    const result = document.getElementById("result");

    if (city.trim() === "") {
        result.innerHTML = "Please enter a city name";
        return;
    }

    const apiKey = "f33f050f2b0d5c42f1faa4507198b3da";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        result.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;

    } catch (error) {
        result.innerHTML = "Error: " + error.message;
    }
}
