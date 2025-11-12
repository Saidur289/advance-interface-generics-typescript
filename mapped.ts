type ArrayNum = {
    high: number,
    low: number,

}
type ArrayString= {
    [key in keyof ArrayNum] : string
}
type Area<T> = {
    [key in keyof T] : T[key]
}
const area1: Area<{high: string, low: string}> = {high: '34', low: '55'}
const area2:Area<{high: number, low: number}> = {high: 33, low: 55}
console.log(area1, area2);