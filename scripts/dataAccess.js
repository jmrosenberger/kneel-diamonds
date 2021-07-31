import { getDatabaseData } from "./database.js"

const databaseData = getDatabaseData()







export const getOrderBuilder = () => {
    return databaseData.orderBuilder
}

export const getMetals = () => {
    return databaseData.metals.map(metal => ({...metal}))
}

export const getSizes = () => {
    return databaseData.sizes.map(size => ({...size}))
}

export const getStyles = () => {
    return databaseData.styles.map(style => ({...style}))
}
export const getCustomOrders = () => {
    return databaseData.customOrders.map(order => ({...order}))
}
export const getTypes = () => {
    return databaseData.types.map(type => ({...type}))
}




export const setMetal = (id) => {
    databaseData.orderBuilder.metalId = id
}

export const setSize = (id) => {
    databaseData.orderBuilder.sizeId = id
}

export const setStyle = (id) => {
    databaseData.orderBuilder.styleId = id
}
export const setType = (id) => {
    databaseData.orderBuilder.typeId = id
}



export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...databaseData.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = databaseData.customOrders.length - 1
    newOrder.id = databaseData.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    databaseData.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    databaseData.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}



