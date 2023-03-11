export type UserType = {
    name: string
    hair: number
    address: { city: string, house: number }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & { laptop: LaptopType }

export type UserWithBooksType = {
    books: Array<string>
}

export type UserWithCompaniesType = {
    companies: Array<{ id: number, title: string }>
}

export function makeHairStyle(u: UserType, power: number): UserType {
    return {
        ...u,
        hair: u.hair / power
    }
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {...u.address, city: city}
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {...u.address, house: house}
    }
}

export function laptopUpgrade(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {...u.laptop, title: laptop}
    }
}

export function addNewBooks(u: UserWithLaptopType & UserWithBooksType, books: Array<string>) {
    return {
        ...u,
        books: [...u.books, ...books]
    }
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, book: string, toChange: string) {
    return {
        ...u,
        books: u.books.map(b => b === book ? toChange : b)
    }
}

export const removeBook = (u: UserWithLaptopType & UserWithBooksType, book: string) => {
    return {
        ...u,
        books: u.books.filter(b => b !== book)
    }
}

export type UserTypes = UserWithLaptopType & UserWithBooksType & UserWithCompaniesType

export const addCompany = (u: UserTypes, company: string) => {
    return {
        ...u,
        companies: [...u.companies, {id: 3, title: company}]
    }
}

export const updateCompany = (u: UserWithCompaniesType, id: number, companyToChange: string) => {
    return {
        ...u,
        companies: u.companies.map(c => c.id === id ? {...c, title: companyToChange} : c)
    }
}

export type CompaniesType = {
    [id: string]: Array<{ id: number, title: string }>
}

export function changeCompany(companies: CompaniesType,
                              userName: string,
                              companyId: number,
                              newTitle: string) {
    return {
        ...companies,
        [userName]: companies[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)
    }
}