//browserify main.js -o bundle.js
import draw_chart from './chartjs';
import dictionary from './dictionary';
import images from './images';
import uniq from 'uniq';
import food from './food';
var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(uniq(data));

draw_chart()
images()
dictionary()
food()

/* API INFO

find lon/lat
https://api.openweathermap.org/data/2.5/weather?q=london&APPID=20f7632ffc2c022654e4093c6947b4f4

find weather
https://api.openweathermap.org/data/2.5/onecall?lat=51.5085&lon=-0.1257&exclude=minutely,alerts&units=metric&appid=20f7632ffc2c022654e4093c6947b4f4

(new version is in the websites)
*/