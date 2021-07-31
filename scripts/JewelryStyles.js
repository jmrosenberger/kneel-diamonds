import { getStyles, setStyle, getOrderBuilder } from "./dataAccess.js"
import { renderAllHTML } from "./main.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
            console.log("State of data has changed. Regenerating HTML...")
            renderAllHTML()
        }
    }
)

export const JewelryStyles = () => {
    const orderBuilder = getOrderBuilder()
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = styles.map(style => {
        if (style.id === orderBuilder.styleId) {
            return `<li>
            <input type="radio" name="style" value="${style.id}" checked="checked"/>${style.style}
            </li>`
        } else {
            return `<li>
            <input type="radio" name="style" value="${style.id}" />${style.style}
            </li>`
        }
    })


    // Join all of the strings in the array into a single string
    html += listItems.join(" ")

    html += "</ul>"
    return html
}

