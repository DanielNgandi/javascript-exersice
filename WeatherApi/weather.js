// // const apikey="4f9c77589eb5e1a53ec753937b355bbf"
// // const url=`https://api.openweathermap.org/data/2.5/weather?q=nairobi`

// const url='https://api.openweathermap.org/data/2.5/weather?q='
// const city='nairobi'
// const apikey='&appid=4f9c77589eb5e1a53ec753937b355bbf'
// async function weather(){
//     try {
//         const response=await fetch(url+city+apikey)
//     if(!response.ok){
//         throw new Error('invalid api')
//     }
   
//     const result=await response.json()
//     console.log(result)
        
//     } catch (error) {
//         throw error
        
//     }
// }
// weather()


const url='https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const apikey='&appid=4f9c77589eb5e1a53ec753937b355bbf'
const searchbox=document.querySelector(".searcher")
const searchbutton=document.querySelector('.button1')
const weatherclimate=document.querySelector('.weather')

async function weather(city){
    try {
                const response = await fetch(url + city + apikey);
                if (!response.ok) {
                    throw new Error('City not found');
                }

   
    const result=await response.json();
    console.log(result);

       document.querySelector('.city').innerHTML=result.name;
       document.querySelector('.temp').innerHTML=Math.round(result.main.temp) + '°C';
       document.querySelector('.status').innerHTML=result.weather[0].description;
       document.querySelector('.humidity').innerHTML=result.main.humidity;

       const weatherCondition = result.weather[0].main.toLowerCase();

       if (result.weather[0].main=== 'clouds'){
        weatherclimate.src="/cloudy.png"
       }else if (result.weather[0].main=== 'clear'){
        weatherclimate.src="/sunclear.png"
       }else if (result.weather[0].main=== 'sun'){
        weatherclimate.src="/sunny.png"
       }else if (result.weather[0].main=== 'Rain'){
        weatherclimate.src="/rainny.png"
    }else if(result.weather[0].main=== 'wind'){
        weatherclimate.src="/windy.png"
    }
 } catch (error) {
                alert(error.message);
                console.error(error);
            }
} 


searchbutton.addEventListener('click', () => {
          weather(searchbox.value)
        });