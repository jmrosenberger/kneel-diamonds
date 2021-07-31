import { getSizes, setSize, getOrderBuilder} from "./database.js"
import { renderAllHTML } from "./main.js"


const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
            console.log("State of data has changed. Regenerating HTML...")
            renderAllHTML()
        }
    }
)

export const DiamondSizes = () => {
    const orderBuilder = getOrderBuilder()
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        if (size.id === orderBuilder.sizeId) {
            return `<li>
            <input type="radio" name="size" value="${size.id}" checked="checked"/>${size.carets}
            </li>`
        } else {
            return `<li>
            <input type="radio" name="size" value="${size.id}" />${size.carets}
            </li>`
        }
    })

    html += listItems.join(" ")
    html += "</ul>"

    return html
}

