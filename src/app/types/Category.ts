import { typeProduct } from "./Product"

export type typeCategory = {
    _id: string,
    name: string,
    status: number
}
export type typeCateProduct = {
    category: {
        _id: string,
        name: string,
        status: number
    },
    products: typeProduct[]
}