import { create } from "zustand";

export const useProductStore = create((set,get)=>({
    products : [
        {
            id:1,
            name: 'Apple MacBook Pro 17"',
            color: 'Silver',
            category: 'Laptop',
            price: 2999,
            quantity: 50
        },
        {
            id:2,
            name: 'Microsoft Surface Pro',
            color: 'White',
            category: 'Laptop PC',
            price: 1999,
            quantity: 40
        },
        {
            id:3,
            name: 'Magic Mouse 2',
            color: 'Black',
            category: 'Accessories',
            price: 99,
            quantity: 30
        }
    ],
    addToList: (newProduct) => {
        // findIndex -> Devuelve -1 si no encuentra nada 
        const productInList = get().products.findIndex(
            product => product.id === newProduct.id
        ) 
        if(productInList >= 0){
            const updateProducts = get().products.map( product => {
                if(product.id === newProduct.id){
                    return newProduct
                }
                return product
            })
            set(()=>({products: updateProducts}))
            return
        }

        set(state => ({
            products: [...state.products,...newProduct]
        }))
    },
    removeFromList : (id) => {
        set(state =>{
            const newList = state.products.filter(product => product.id !== id)
            return {products : newList}
        })
    },
    cleanList: () => {
        set(
            () => ({products: []})
        )
    }
}))