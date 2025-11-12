const kgConverter = (input: string | number) :string |number |undefined => {
    if(typeof input === "number"){
        return (input * 1000)
    }else if(typeof input === "string"){
         const [value] = input.split(" ")
         return (Number(value) * 1000)
    }else{
        return undefined
    }
}
console.log(kgConverter(1));
console.log(kgConverter("2"));