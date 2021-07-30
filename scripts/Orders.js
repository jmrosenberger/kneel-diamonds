import { getCustomOrders, getMetals, getSizes, getStyles, getTypes } from "./database.js"


const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()
const types = getTypes()


const buildOrderListItem = (order) => {

    const findMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )

    const findSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )

    const findStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )

    const findType = types.find(
        (type) => {
            return type.id === order.typeId
        }
    )
    

    
    const totalCost = (findMetal.price + findSize.price + findStyle.price) * findType.price
    
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}



export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getCustomOrders()

    let html = "<ul>"

    const listItemsArray = orders.map(buildOrderListItem)

    html += listItemsArray.join(" ")
    html += "</ul>"

    return html
}

