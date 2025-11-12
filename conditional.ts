type A = null
type B = undefined ;
// type C = A extends null ? true : false;
type c = A extends number ?true : B extends undefined? true: false;
type Rice = {
    bike: string, car: string
}
type CheckVehicle<T> = T extends keyof Rice ? true : false
type hasVehicle = CheckVehicle<"ship">