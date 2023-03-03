import {UserType} from "./09_01";

function increaseAge(u: UserType) {
    u.age++
}

test('big test', () => {
    const user = {
        name: 'Alex',
        age: 36
    }
    const superman = user
    superman.age = 1000
    increaseAge(user)
    expect(user.age).toBe(1001)
    expect(superman.age).toBe(1001)
})

test('array test', () => {
    const users = [
        {
            name: 'Alex',
            age: 36
        },
        {
            name: 'Alex',
            age: 36
        }]
    const admins = users
    admins.push({name: 'villain', age: 10})

    expect(admins[2]).toEqual({name: 'villain', age: 10})
    expect(users[2]).toEqual({name: 'villain', age: 10})
})

test('primitive values assign test', () => {
    let usersCount = 100
    let adminCount = usersCount
    adminCount++
    expect(usersCount).toBe(100)
    expect(adminCount).toBe(101)
})

test('reference type test', () => {
    const address = {
        title: 'Gdansk'
    }
    const user = {
        name: 'Alex',
        age: 36,
        address: address
    }
    const user2 = {
        name: 'Nobody',
        age: 35,
        address: address
    }
    address.title = 'Moon'

    expect(user.address.title).toBe('Moon')
})

test('reference type array test', () => {
    const address = {
        title: 'Gdansk'
    }
    const user = {
        name: 'Polly',
        age: 36,
        address: address
    }
    const user2 = {
        name: 'Nobody',
        age: 35,
        address: address
    }

    const users = [user, user2, {name: 'Katya', age: 18, address: address}]
    const admins = [user, user2]

    admins[0].name = 'Alex'

    expect(users[0].name).toBe('Alex')
    expect(user.name).toBe('Alex')
    expect(admins[0].name).toBe('Alex')
})

test('sort array test', () => {
    const letters = ['c', 'd', 'a', 'z', 'e']
    letters.sort()
    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])
})