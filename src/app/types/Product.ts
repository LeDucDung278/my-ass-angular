export type typeProduct = {
    _id: string, 
    name: string,
    img: string,
    price: number,
    sale_price: number,
    desc: string,
    status: number
}
export type ProductCart = {
    _id: string,
    name: string,
    value: number,
}
export type listCart = {
    _id: string,
    name:string,
    price: number,
    img: string,
    value:number
}