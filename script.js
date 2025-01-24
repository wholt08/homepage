// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Simple weather widget - replace with your own API key and URL
    fetch('https://api.openweathermap.org/data/2.5/weather?q=YourCityName&units=metric&appid=YourAPIKey')
        .then(response => response.json())
        .then(data => {
            document.getElementById('weather').innerHTML = `Weather in ${data.name}: ${data.main.temp}°C`;
        })
        .catch(error => {
            console.log('Weather API error:', error);
        });

    // To-do list functionality
    window.addTodo = function() {
        const input = document.getElementById('todoInput');
        if (input.value.trim() !== '') {
            const item = document.createElement('li');
            item.textContent = input.value;
            document.getElementById('todoItems').appendChild(item);
            input.value = ''; // Clear input after adding
        }
    };

    // Display current date in the calendar section
    const currentDate = new Date().toLocaleDateString();
    document.getElementById('calendar').innerHTML = `Today's date: ${currentDate}`;
});
