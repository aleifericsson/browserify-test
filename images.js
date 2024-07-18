import {render, remove, create, addClass, hasClass, remClass, find, findAll, write, detect, undetect, style, attribs, isElement} from "./qol.js"

export default function images(){
    const a = "blaxwjqaTuaz"
    const b = "aoFE7uND2cMg"
    const c = "rmMBeZ-t"
    const d = "oh2uZZKVhZS"
    const accessKey = c+d+a+b

    let inputData = "manchester"
    let page = 1

    searchImages()
        
    async function searchImages(){
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

        const response = await fetch(url)
        const data = await response.json()

        const results = data.results

        results.map((result)=>{
            const img = create("img")
            img.src = result.urls.small
            
            render(find(".images"),img)
        })

    }

}
