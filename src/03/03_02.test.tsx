import React from "react";
import {CityType} from "../02/02_02";
import {addMoneyToBudget, createMessage, repairHouse, stuffFired, stuffHire} from "./03";


let city: CityType

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
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
                builtAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'Ho Ho street'
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

test('budget changed for HOSPITAL', () => {
    addMoneyToBudget(city.governmentBuildings, 'HOSPITAL', 100_000)

    expect(city.governmentBuildings[0].budget).toBe(300_000)
    expect(city.governmentBuildings[1].budget).toBe(500_000)

})

test('budget changed for FIRE-STATION', () => {
    addMoneyToBudget(city.governmentBuildings, 'FIRE-STATION', -100_000)

    expect(city.governmentBuildings[0].budget).toBe(200_000)
    expect(city.governmentBuildings[1].budget).toBe(400_000)

})

test.skip('Houses should be destroyed', () => {
    // demolishHousesOnTheStreet(city, 'Happy street')

    expect(city.governmentBuildings[0].budget).toBe(200_000)
    expect(city.governmentBuildings[1].budget).toBe(400_000)

})

test('House should be repaired', () => {
    repairHouse(city.houses[1])
    expect(city.houses[1].repaired).toBeTruthy();
})

test('stuff decrease', () => {
    stuffFired(city.governmentBuildings[0], 20)
    expect(city.governmentBuildings[0].staffCount).toBe(180);
})

test('stuff increase', () => {
    stuffHire(city.governmentBuildings[1], 20)
    expect(city.governmentBuildings[1].staffCount).toBe(1020);
})

test('Greetings should be ok', () => {
    const message = createMessage(city)
    expect(message).toBe('Hello New York citizens. All 1000000');
})