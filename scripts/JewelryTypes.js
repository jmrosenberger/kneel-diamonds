import { getTypes, setType } from "./dataAccess.js"

const types = getTypes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "type") {
            setType(parseInt(event.target.value))
        }
    }
)

export const JewelryTypes = () => {
    let html = "<div>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = types.map(
        (type) => {
            return `
                <input type="radio" name="type" value="${type.id}" />${type.type}
                `
        }
    )  


    // Join all of the strings in the array into a single string
    html += listItemsArray.join(" ")

    html += "</div>"
    return html
}

