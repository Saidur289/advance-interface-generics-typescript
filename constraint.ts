type RickVehicle = {
    bike: string,
    car: string
}
type MyVehicle = keyof RickVehicle;
// const myVehicle: MyVehicle = "ship"give me error 
type User ={
    id: number, name: string
 }
const user3: User = {
    id: 33, name: 'saidur'
}
const getProperty = <X>(obj: X, key: keyof X) => obj[key];
console.log(getProperty(user3, "id"));
const pro = {
    brands: 'reiaij'
}
console.log(getProperty(pro, 'brands'));
// const userRoles = {
//     Admin : "Admin",
//      Editor: "Editor"
//  } as const;
//  const canEdit = (role: keyof typeof userRoles) => {
//     if(role === userRoles.Admin || role === userRoles.Editor){
//         return true
//     }
//      return false
//  }
//  console.log(canEdit(userRoles.Admin));
// //   keyof typeof student1
const userRoles = {
    Admin: 'ADMIN',
    Editor: 'EDITOR'
} as const;
const getEdit = (role: (typeof userRoles[keyof typeof userRoles])) =>{
    if(role === userRoles.Admin || role === userRoles.Editor){
       return true
   }      return false
 }  
console.log(getEdit(userRoles.Admin));