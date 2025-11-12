type GenericArray<value> = Array<value>
const arrNum :GenericArray<number> = [3, 5]
const stringArr: GenericArray<string> = ["e", "f"]
// tuple 
type Coordinates<X,Y> = [X, Y]
const coordinates: Coordinates<string, string> = ["ab", "ac"]
const coordinatesNum: Coordinates<number, number> = [23, 34]
type users = {name : string, age: number}
const userList: GenericArray<users> = [{name: 'saidur', age: 50}]
// generic with interface 
interface Developer<T, S=null>{
    name: string, age: number, stopWatch: T , bike?:S
}
type Option = {brands: string, model: string}
const richDeveloper: Developer<Option, {brands: string}>={
    name: "Tarik", age: 34, stopWatch:{brands: 'lenovo', model: 'a34'}, bike:{brands: "Gixer"}
}
console.log(richDeveloper);
// generics with function 
const createArrayWithGenerics= <T>(value: T) => [value]
const arrNums = createArrayWithGenerics(5)
console.log(arrNums);
const arrsString = createArrayWithGenerics("saidur")
console.log(arrsString);
const createObj = createArrayWithGenerics({id: 33, name: 'jhankar'})
console.log(createObj);
const createTupleWithGenerics = <X,Y>(param1: X, param2: Y) => [param1, param2

]
const createNumberArray = createTupleWithGenerics(34, 45)
const createStringArray = createTupleWithGenerics('A', "B")
const createObjective = createTupleWithGenerics(350,{student: "riam"})
console.log(createNumberArray, createStringArray, createObjective);
const student1={
    id: 45, 
    name: "xkdkjdkj",
    hasBike: false
}
const student2 = {
    id: 46,
    name: "saidur",
    hasHappiness: false
}
const studentAddToCourse = <T>(studentInfo: T) => {
    return {
        course: "next level",
        ...studentInfo
    }
}
console.log(studentAddToCourse(student1));
console.log(studentAddToCourse(student2));