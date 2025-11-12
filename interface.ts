interface  IUser{
    name: string, age: number
}
interface IUserWithRole extends IUser {
    role: "admin" | "user"
}
const user : IUserWithRole = {
    name : "saidur",
    age: 40,
    role: "user"
}
// console.log(user);
interface IFriends {
    [index: number] : string
}
const friends : IFriends = ["a", "b"]
// interface with function 
interface IAdd{
    (num1: number, num2: number) : number
}
const add: IAdd = (num1, num2) => num1 + num2
