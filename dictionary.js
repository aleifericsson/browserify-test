import {render, remove, create, addClass, hasClass, remClass, find, findAll, write, detect, undetect, style, attribs, isElement} from "./qol.js"

export default function dictionary(){
    const word = "funky"

    const keyDict = "0"+(17426336).toString(16) + "-"+ (57619).toString(16)+"-"+(17523).toString(16)+"-"+(45290).toString(16)+"-"+(257716780087694).toString(16)
    const keyThes = (3468151992).toString(16) + "-"+ (11003).toString(16)+"-"+(18651).toString(16)+"-"+(47247).toString(16)+"-"+(125850837810395).toString(16)

    dict()
    thes()

    async function dict(){         
        const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${keyDict}`

        const response = await fetch(url)
        const data = await response.json()

        //console.log(data)

        const shortdef = data[0].shortdef
        shortdef.forEach(def => {
            const thing = create("p")
            write(thing,def)
            render(find(".dic"),thing)
        });

    }
    async function thes(){         
        const url = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${keyThes}`

        const response = await fetch(url)
        const data = await response.json()

        const syns = data[0].meta.syns
        syns.forEach(syn => {
            const thing = create("p")
            write(thing,syn.join(', '))
            render(find(".thes"),thing)
        });

    }
}