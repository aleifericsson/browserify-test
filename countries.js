import {render, remove, create, addClass, hasClass, remClass, find, findAll, write, detect, undetect, style, attribs, isElement} from "./qol.js"

function get_flag(demomym){
    const fla =  flag()
    return fla
    async function flag(){         
        const url = `https://restcountries.com/v3.1/demonym/${demomym}`

        const response = await fetch(url)
        const data = await response.json()
        
        for (const country of data[0].borders) {
            const url2 = `https://restcountries.com/v3.1/alpha/${country}`

            const response2 = await fetch(url2)
            const data2 = await response2.json()

            const img = create("img")
            img.src = data2[0].flags.png
            style(img,`
                max-height: 100px; 
                width:auto
                `)

            render(find(".borders"),img)         
        }

        return data[0].flags.png
        
    }
}

export {get_flag}