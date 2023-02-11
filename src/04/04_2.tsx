import {CityType, GovernmentBuildingsType, HouseType} from "../02/02_02";

export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(b => b.address.street.title !== street)
}

export function getHousesOnTheStreet(houses: Array<HouseType>, street: string) {

    return houses.filter(h => h.address.street.title === street)

}

export const getBuildingsWithStaffCountGreaterThan = (governmentBuildings: Array<GovernmentBuildingsType>, number: number) => {
    return governmentBuildings.filter(g => g.staffCount > number)
}