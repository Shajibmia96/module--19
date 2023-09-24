const shoppingCart ={
    pen:23,
    books:22,
    pent :44,
    shart :66,
    shoes :4
}

// console.log(shoppingCart)
const keys=Object.keys(shoppingCart);
const values =Object.values(shoppingCart)
// console.log(keys ,values)
for(i=0;i<keys.length; i++){
    const propertiesName =keys[i]
    const propertiesValues=shoppingCart[propertiesName]
    console.log(propertiesName ,propertiesValues)
}

