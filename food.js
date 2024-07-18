import { get_flag } from "./countries.js"
import {render, remove, create, addClass, hasClass, remClass, find, findAll, write, detect, undetect, style, attribs, isElement} from "./qol.js"

export default function food(){
    const ingr = "100g lean mince beef"
    const meal = "rendang"

    const appID = (1308443647).toString(16)
    const appKey = (461205033105).toString(16) + (11695554825232).toString(16) + (10029153581808).toString(16)

    nutrition()
    meals()

    async function nutrition(){         
        const url = `https://api.edamam.com/api/nutrition-data?app_id=${appID}&app_key=${appKey}&nutrition-type=cooking&ingr=${ingr}`

        const response = await fetch(url)
        const data = await response.json()

        write(find('.calories'), `Calories: ${data.calories}`)
        let thing = data.totalNutrients.FAT
        write(find('.fat'), `${thing.label}: ${thing.quantity} ${thing.unit}`)
        thing = data.totalNutrients.PROCNT
        write(find('.protein'), `${thing.label}: ${thing.quantity} ${thing.unit}`)
        thing = data.totalNutrients["CHOCDF.net"]
        write(find('.carbs'), `${thing.label}: ${thing.quantity} ${thing.unit}`)

    }

    async function meals(){         
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`

        const response = await fetch(url)
        const data = await response.json()
        console.log(data)

        write(find('.origin'), `Cuisine: ${data.meals[0].strArea}`)
        write(find('.instructions'), `Instructions: ${data.meals[0].strInstructions}`)
        find(".thumbnail").src = data.meals[0].strMealThumb
        find(".flag").src = await get_flag(data.meals[0].strArea)
    }
}