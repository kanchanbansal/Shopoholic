export const addToCartHelper = (product, cart, user, quantity = false) => {
    
    let newCartObject = {...cart}

    if(newCartObject.items.length > 0) {
       let productExist =  newCartObject.items.find(item => item.id === product.id)
       let productExistIndex =  newCartObject.items.findIndex(item => item.id === product.id)

       if(productExist) {
            if(quantity) {
                if(product.quantity === 0){
                    newCartObject.items.splice(productExistIndex, 1);

                }else {
                    productExist.quantity = product.quantity;
                    newCartObject.items.splice(productExistIndex,1,productExist)
                }
            }else {
                productExist.quantity += 1;
                newCartObject.items.splice(productExistIndex,1,productExist)
            }
       }else {
            newCartObject.items.push({...product, quantity: 1})
       }

    }else {
        newCartObject.items.push({...product, quantity: 1});
    }

    newCartObject.subTotal = 0;
    newCartObject.tax = 0;
    newCartObject.grandTotal = 0;

    for (const item of newCartObject.items) {
        newCartObject.subTotal += (+item.final_price * item.quantity);
        newCartObject.grandTotal += (+item.final_price * item.quantity);
    }

    newCartObject.user = user;

    return newCartObject;
}