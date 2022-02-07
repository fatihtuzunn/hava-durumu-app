const url ='http://api.openweathermap.org/data/2.5/';
const key = 'private-key-here'; // openweatherdan alınan private key yazılacak


// 'enter' a basınca değer çekme fonskiyonu çalışsın.
const setQuery = (e) =>{
    if (e.keyCode == '13') {
        getResult(searchBar.value)
    }
}



const getResult = (cityName) => {
    
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
    console.log(query);
    
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult) 
}

const displayResult = (result) => {
    let city = document.querySelector(`.city`)
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector(`.temp`)
    temp.innerText = `${result.main.temp} `

    let desc = document.querySelector(`.desc`)
    desc.innerText = `${result.weather[0].description}`

}



// index.html deki inputumuzu çekiyoruz.
const searchBar = document.getElementById('search');
searchBar.addEventListener('keypress', setQuery);
