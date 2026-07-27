const apiKey = "446f22791ec04b39c2e617eb52df14b0";

async function getWeather(){

    const city = document.getElementById("cityInput").value;

    if(city===""){
        alert("Please enter a city.");
        return;
    }

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        const response=await fetch(url);

        if(!response.ok){
            throw new Error("City not found");
        }

        const data=await response.json();

        document.getElementById("city").innerText=data.name;
        document.getElementById("temperature").innerText=Math.round(data.main.temp)+"°C";
        document.getElementById("description").innerText=data.weather[0].description;
        document.getElementById("humidity").innerText=data.main.humidity;
        document.getElementById("wind").innerText=data.wind.speed;

    }catch(error){

        alert(error.message);

    }

}
