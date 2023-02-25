import {CityType} from "../02/02_02";
import {createMessages, getStreetTitlesOfGovernmentsBuildings, getStreetTitlesOfHouses} from "./05_02";

let city: CityType
beforeEach(() => {
    city = {
        title: 'NewYork',
        houses: [
            {
                id: 1,
                builtAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
                    }
                }
            },
            {
                id: 2,
                builtAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
            {
                id: 3,
                builtAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'White street'
                    }
                }
            }],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    number: 11,
                    street: {
                        title: 'Central'
                    }
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    number: 11,
                    street: {
                        title: 'South Str'
                    }
                }
            }],
        citizensNumber: 1000000
    }
})


test("list of streets titles of governments buildings", () => {
    let streets = getStreetTitlesOfGovernmentsBuildings(city.governmentBuildings);

    expect(streets.length).toBe(2)
    expect(streets[0]).toBe('Central')
    expect(streets[1]).toBe('South Str')
})

test("list of streets titles of houses", () => {
    let streets = getStreetTitlesOfHouses(city.houses);

    expect(streets.length).toBe(3)
    expect(streets[0]).toBe('White street')
    expect(streets[1]).toBe('Happy street')
    expect(streets[2]).toBe('White street')
})

test("Create greetings messages for streets", ()=>{
    let messages = createMessages(city.houses)
    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello guys from White street")
    expect(messages[1]).toBe("Hello guys from Happy street")
    expect(messages[2]).toBe("Hello guys from White street")
})