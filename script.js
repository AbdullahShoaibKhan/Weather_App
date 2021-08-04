
let submit=document.querySelector('#submit');
submit.addEventListener('click',weather);

async function weather(){
    
    let city=document.querySelector('#searchbar').value;   
    console.log(city);
    let api='https://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=3d38279240a250b645c63d57f50902b6';
    let response = await fetch (api, {mode:'cors'});
    let data= await response.json();
    console.log(data);
    let inK=data.main.temp;
    let inC=inK-273.15;
    let inF=(inK-273.15)*(9/5)+(32);

    let hmdt=data.main.humidity+"%";
    let psr=data.main.pressure;
    let feel=data.main.feels_like-273.15;
    let wind=data.wind.speed*1.609;

    displayTemp(inK,inC,inF);
    displayExtra(hmdt,psr,feel,wind);
}
function displayTemp(inK,inC,inF){
    document.querySelector('#tempC').value=inC.toFixed(2)+'°C';
    document.querySelector('#tempF').value=inF.toFixed(2)+'°K';
    document.querySelector('#tempK').value=inK.toFixed(2)+'°F';
}
function displayExtra(hmdt,psr,feel,wind){
    document.querySelector('#hmdt').textContent='Humidity:'+ hmdt;
    document.querySelector('#psr').textContent='Pressure:'+ psr;
    document.querySelector('#feel').textContent='Feel like:'+ feel.toFixed(2) +'°C';
    document.querySelector('#wind').textContent='Wind Speed:'+ wind.toFixed(2) +'km/h';
}
