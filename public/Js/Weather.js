let result = document.getElementById("result");
let searchbtn = document.getElementById("search-btn");
let City = document.getElementById("City");

// function to fecth data from api and display:-

let getweather = () => {
    let cityvalue = City.value;
    // if input field is empty
    if(cityvalue.length == 0){
        result.innerHTML = '<h3> Please Enter a City Name </h3>'
    }

    // if input field is not empty
    else{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=${key}&units=metric`;
        fetch(url).then((resp) => resp.json())
        // is city name is valid
        .then((data) => {
            console.log(data);
            console.log(data.weather[0].icon);
            console.log(data.weather[0].main);
            console.log(data.weather[0].description);
            console.log(data.name);
            console.log(data.main);
            console.log(data.main.temp_min);
            console.log(data.main.temp_max);
            result.innerHTML = `<h2>${data.name}</h2>
            <h4 class="weather">${data.weather[0].main}</h4>
            <h4 class="descrp">${data.weather[0].description}</h4>
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <h1>${data.main.temp} &#176;</h1>        
            <div class="temp-cont">
               <div>
                 <h4 class="title">min</h4>
                 <h4 class="temp">${data.main.temp_min} &#176;</h4>
               </div>

               <div>
                 <h4 class="title">max</h4>
                 <h4 class="temp">${data.main.temp_max} &#176;</h4>
               </div>


            </div>
            `;
        })

        // if city name is NOT valid
        .catch(() => {
            result.innerHTML = `<h3> City not found! </h3>`
            
            

        })
    } 
}

searchbtn.addEventListener('click', getweather);
window.addEventListener("load", getweather);