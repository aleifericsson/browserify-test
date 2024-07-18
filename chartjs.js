import { Chart, registerables} from 'chart.js';
import date from 'date-and-time';

Chart.register(...registerables);

export default function draw_chart(){
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    const ctx2 = document.getElementById('weatherChart');
    const city = "Abu Dhabi"

    const api = (2265430818754).toString(16)+(211253961048211).toString(16)+(53305914612).toString(16)

    weather_chart()

    async function weather_chart(){ 
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${api}`

      const response = await fetch(url)
      const data = await response.json()

      const url2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=minutely,alerts&units=metric&appid=${api}`
      const response2 = await fetch(url2)
      const data2 = await response2.json()
      
      var times = data2.hourly.map(function(item) {
        return date.format(new Date(item['dt']*1000), 'hh:mm A');
      });  

      var temps = data2.hourly.map(function(item) {
        return item['temp'];
      });  


      new Chart(ctx2, {
        type: 'line',
        data: {
          labels: times,
          datasets: [{
            label: 'Temperature',
            data: temps,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
}


/* API INFO

find lon/lat
https://api.openweathermap.org/data/2.5/weather?q=london&APPID=20f7632ffc2c022654e4093c6947b4f4

find weather
https://api.openweathermap.org/data/2.5/onecall?lat=51.5085&lon=-0.1257&exclude=minutely,alerts&units=metric&appid=20f7632ffc2c022654e4093c6947b4f4

(new version is in the websites)
*/