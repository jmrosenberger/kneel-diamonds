import { getMetals, setMetal, getOrderBuilder } from "./database.js"
import { renderAllHTML } from "./main.js"


const metals = getMetals()



document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
            console.log("State of data has changed. Regenerating HTML...")
            renderAllHTML()
        }
    }
)

export const Metals = () => {
    const orderBuilder = getOrderBuilder()

    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    const listItems = metals.map(metal => {
        if (metal.id === orderBuilder.metalId) {
            return `<li>
            <input type="radio" name="metal" value="${metal.id}" checked="checked"/>${metal.metal}
            </li>`
        } else {
            return `<li>
            <input type="radio" name="metal" value="${metal.id}" />${metal.metal}
            </li>`
        }
    })
    html += listItems.join("")
    html += "</ul>"
    return html
}

