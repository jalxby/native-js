export const usersArray = ['Alex', 'Valera', 'Julia', 'Pelageja', 'Matwei']

export const usersObj = {
    '0': 'Alex',
    '1': 'Valera',
    '2': 'Julia',
    '3': 'Pelageja',
    '4': 'Matwei',
}

export type UsersType = {
    [key: string]: { id: number, name: string }
}

export const users: UsersType = {
    '101': {id: 101, name: 'Alex'},
    '14': {id: 14, name: 'Valera'},
    '16': {id: 16, name: 'Julia'},
    '1061': {id: 1061, name: 'Pelageja'},
    '34': {id: 34, name: 'Matwei'},

}


const user = {id: 34, name: 'Sofia'}
users[user.id] = user //to add
delete users[user.id] //to delete


export const usersArrayObj = [
    {id: 101, name: 'Alex'},
    {id: 14, name: 'Valera'},
    {id: 16, name: 'Julia'},
    {id: 1061, name: 'Pelageja'},
    {id: 34, name: 'Matwei'}
]

usersArrayObj.find(u => u.id === 1)
usersArrayObj.push(user)                     //to add
usersArrayObj.filter(u => u.id !== user.id)  //to delete