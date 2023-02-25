export type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Alex'},
        '14': {id: 14, name: 'Valera'},
        '16': {id: 16, name: 'Julia'},
        '1061': {id: 1061, name: 'Pelageja'},
        '34': {id: 34, name: 'Matwei'}
    }
})

test('should update user', () => {
    users['14'].name = 'brother'
    expect(users['14'].name).toBe('brother');
    expect(users['14']).toEqual({id: 14, name: 'brother'});
    // expect(users[1]).toBe('Valera');
    // expect(users[2]).toBe('Julia');
    // expect(users[3]).toBe('Pelageja');
    // expect(users[4]).toBe('Matwei');
})

test('should delete user', () => {
    delete users['14']
    expect(users['14']).toBeUndefined()
})