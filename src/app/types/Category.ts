import { typeProduct } from "./Product"

export type typeCategory = {
    id: string,
    name: string,
    status: number
}
export type typeCateProduct = {
    category: {
        _id: string,
        name: string,
        status: number
    },
    product: typeProduct
}