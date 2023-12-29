const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const displayWeather = (city, displayType) => {
    return fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            if (displayType === 'default') {
                cityName.innerHTML = city;
                temp.innerHTML = response.temp;
                feels_like.innerHTML = response.feels_like;
                humidity.innerHTML = response.humidity;
                min_temp.innerHTML = response.min_temp;
                max_temp.innerHTML = response.max_temp;
                wind_speed.innerHTML = response.wind_speed;
                wind_degrees.innerHTML = response.wind_degrees;
                sunrise.innerHTML = response.sunrise;
                sunset.innerHTML = response.sunset;
            } else if (displayType === 'table') {
                const table = document.getElementById('weather-table');
                const row = table.insertRow();
                const values = [
                    city,
                    response.temp,
                    response.max_temp,
                    response.min_temp,
                    response.humidity,
                    response.sunrise,
                    response.sunset,
                    response.wind_speed,
                    response.wind_degrees
                ];
                values.forEach((value) => {
                    const cell = row.insertCell();
                    cell.innerHTML = value;
                });
            }
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    const cityValue = city.value;
    displayWeather(cityValue, 'default');
});

function validateForm() {
    const name = document.forms["contact-form"]["name"].value;
    const email = document.forms["contact-form"]["email"].value;
    const message = document.forms["contact-form"]["message"].value;
    if (name == "" || email == "" || message == "") {
        alert("All fields must be filled out");
        return false;
    }
}

// call the funcation for default city
displayWeather('Delhi', 'default');

// Call the function for specific cities
const cities = ['Leh', 'Shimla', 'Pune', 'Indore'];
cities.forEach(city => {
    displayWeather(city, 'table');
});
