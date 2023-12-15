export interface Receipt {
    place: string,
    sum: number,
    items: Item
}
export type Item = {
    name: string,
    price: number
}