
export type UserType={
    name:string
    age: number
}
const user={
    name:'Alex',
    age:36
}

function increaseAge(user:UserType){
    user.age++
}