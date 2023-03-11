import {
    addCompany,
    addNewBooks,
    laptopUpgrade,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse,
    removeBook,
    updateBook,
    updateCompany,
    UserType, UserTypes,
    UserWithBooksType,
    UserWithCompaniesType,
    UserWithLaptopType
} from "./10_01";

test('reference type test', () => {
    let user: UserType = {
        name: 'Alexander',
        hair: 36,
        address: {
            city: 'Gdansk',
            house: 16,
        }
    }

    const cut = makeHairStyle(user, 2)

    expect(cut.hair).toBe(18)
    expect(user.hair).toBe(36)
    expect(user.address).toBe(cut.address)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Alexander',
        hair: 36,
        address: {
            city: 'Gdansk',
            house: 16,
        },
        laptop: {title: 'Lenovo'}

    }

    const movedUser = moveUser(user, 'Poznan')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Poznan')
    expect(user.address.city).toBe('Gdansk')
})

test('upgraded laptop', () => {
    let user: UserWithLaptopType = {
        name: 'Alexander',
        hair: 36,
        address: {
            city: 'Gdansk',
            house: 16,
        },
        laptop: {title: 'Lenovo'}

    }

    const newLaptopUser = laptopUpgrade(user, 'Mac')

    expect(user).not.toBe(newLaptopUser)
    expect(user.address).toBe(newLaptopUser.address)
    expect(user.laptop).not.toBe(newLaptopUser.laptop)
    expect(newLaptopUser.address.city).toBe(user.address.city)
    expect(user.laptop.title).toBe('Lenovo')
    expect(newLaptopUser.laptop.title).toBe('Mac')
})

test('upgraded house', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Alexander',
        hair: 36,
        address: {
            city: 'Gdansk',
            house: 16,
        },
        laptop: {title: 'Lenovo'},
        books: ['css', 'html', 'js', 'react']

    }

    const newHouseUser = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(newHouseUser)
    expect(user.books).toBe(newHouseUser.books)
    expect(user.laptop).toBe(newHouseUser.laptop)
    expect(newHouseUser.address.house).not.toBe(user.address.house)
    expect(user.address.house).toBe(16)
    expect(newHouseUser.address.house).toBe(99)
})

test('add new books to users', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Alexander',
        hair: 36,
        address: {
            city: 'Gdansk',
            house: 16,
        },
        laptop: {title: 'Lenovo'},
        books: ['css', 'html', 'js', 'react']

    }

    const newUserBooks = addNewBooks(user, ['TypeScrypt', 'RestAPI'])

    expect(user).not.toBe(newUserBooks)
    expect(user.books).not.toBe(newUserBooks.books)
    expect(user.laptop).toBe(newUserBooks.laptop)
    expect(newUserBooks.address.house).toBe(user.address.house)
    expect(user.address.house).toBe(16)
    expect(newUserBooks.address.house).toBe(16)
    expect(newUserBooks.books).toStrictEqual(['css', 'html', 'js', 'react', 'TypeScrypt', 'RestAPI'])
    expect(user.books).toStrictEqual(['css', 'html', 'js', 'react'])
    expect(newUserBooks.books).not.toBe(user.books)
})

test('update book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Alexander',
        hair: 36,
        address: {
            city: 'Gdansk',
            house: 16,
        },
        laptop: {title: 'Lenovo'},
        books: ['css', 'html', 'js', 'react']

    }

    const updatedBook = updateBook(user, 'js', 'TypeScript')

    expect(user).not.toBe(updatedBook)
    expect(user.books).not.toBe(updatedBook.books)
    expect(user.laptop).toBe(updatedBook.laptop)
    expect(updatedBook.address.house).toBe(user.address.house)
    expect(user.address.house).toBe(16)
    expect(updatedBook.address.house).toBe(16)
    expect(updatedBook.books).toStrictEqual(['css', 'html', 'TypeScript', 'react'])
    expect(user.books).toStrictEqual(['css', 'html', 'js', 'react'])
    expect(updatedBook.books).not.toBe(user.books)
    expect(user.books.length).toBe(4)
    expect(updatedBook.books[2]).toBe('TypeScript')
    expect(user.books[2]).toBe('js')
})

test('remove book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Alexander',
        hair: 36,
        address: {
            city: 'Gdansk',
            house: 16,
        },
        laptop: {title: 'Lenovo'},
        books: ['css', 'html', 'js', 'react']

    }

    const removedBook = removeBook(user, 'js')

    expect(user).not.toBe(removedBook)
    expect(user.books).not.toBe(removedBook.books)
    expect(user.laptop).toBe(removedBook.laptop)
    expect(removedBook.address).toBe(user.address)
    expect(removedBook.books).toStrictEqual(['css', 'html', 'react'])
    expect(user.books).toStrictEqual(['css', 'html', 'js', 'react'])
    expect(user.books.length).toBe(4)
    expect(removedBook.books.length).toBe(3)
    expect(removedBook.books[2]).toBe('react')
})

test('change company', () => {
    let user: UserWithLaptopType & UserWithBooksType & UserWithCompaniesType = {
        name: 'Alexander',
        hair: 36,
        address: {
            city: 'Gdansk',
            house: 16,
        },
        laptop: {title: 'Lenovo'},
        books: ['css', 'html', 'js', 'react'],
        companies: [
            {
                id: 1,
                title: 'Dserver'
            },
            {
                id: 2,
                title: 'It-Incubator'
            }
        ]

    }

    const addedCompany = addCompany(user, 'Google')

    expect(user).not.toBe(addedCompany)
    expect(user.address).toBe(addedCompany.address)
    expect(user.laptop).toBe(addedCompany.laptop)
    expect(user.books).toBe(addedCompany.books)
    expect(user.companies).not.toBe(addedCompany.companies)
    expect(user.companies).toStrictEqual([
            {
                id: 1,
                title: 'Dserver'
            },
            {
                id: 2,
                title: 'It-Incubator'
            }
        ]
    )
    expect(addedCompany.companies).toStrictEqual([
            {
                id: 1,
                title: 'Dserver'
            },
            {
                id: 2,
                title: 'It-Incubator'
            },
            {
                id: 3,
                title: 'Google'
            }
        ]
    )

})

test('update company', () => {
    let user: UserWithLaptopType & UserWithBooksType & UserWithCompaniesType = {
        name: 'Alexander',
        hair: 36,
        address: {
            city: 'Gdansk',
            house: 16,
        },
        laptop: {title: 'Lenovo'},
        books: ['css', 'html', 'js', 'react'],
        companies: [
            {
                id: 1,
                title: 'Dserver'
            },
            {
                id: 2,
                title: 'It-Incubator'
            }
        ]

    }

    const updatedCompany = updateCompany(user, 2, 'Amazon') as UserTypes

    expect(user).not.toBe(updatedCompany)
    expect(user.address).toBe(updatedCompany.address)
    expect(user.laptop).toBe(updatedCompany.laptop)
    expect(user.books).toBe(updatedCompany.books)
    expect(user.companies).not.toBe(updatedCompany.companies)
    expect(user.companies).toStrictEqual([
            {
                id: 1,
                title: 'Dserver'
            },
            {
                id: 2,
                title: 'It-Incubator'
            }
        ]
    )
    expect(updatedCompany.companies).toStrictEqual([
            {
                id: 1,
                title: 'Dserver'
            },
            {
                id: 2,
                title: 'Amazon'
            },
        ]
    )

})