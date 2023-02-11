import {CityType} from "../02/02_02";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThan, getHousesOnTheStreet} from "./04_2";


let city: CityType
beforeEach(() => {
    city = {
        title: 'NewYork',
        houses: [
            {
                id:1,
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
                id:2,
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
                id:3,
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
            {type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    number: 11,
                    street: {
                        title: 'South Str'
                    }
                }}],
        citizensNumber: 1000000
    }
})

test("Houses should be de", ()=>{

    demolishHousesOnTheStreet(city, 'Happy street');

    expect (city.houses.length).toBe(2)
    expect (city.houses[0].id).toBe(1)
})



test("list of street titles of houses", ()=>{
    let happyHouses = getHousesOnTheStreet(city.houses, "Happy street")
    let whiteHouses = getHousesOnTheStreet(city.houses, "White street")

    expect(happyHouses.length).toBe(1)
    expect(whiteHouses.length).toBe(2)
})

test("building with correct staff count", ()=>{
    let buildings = getBuildingsWithStaffCountGreaterThan(city.governmentBuildings, 500)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe("FIRE-STATION")

})