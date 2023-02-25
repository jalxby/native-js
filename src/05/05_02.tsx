import {GovernmentBuildingsType, HouseType} from "../02/02_02";

export const getStreetTitlesOfGovernmentsBuildings =
    (buildings: GovernmentBuildingsType[]) => buildings.map(g => g.address.street.title)

export const getStreetTitlesOfHouses = (houses: Array<HouseType>) => houses.map(h => h.address.street.title)

export const createMessages = (houses: Array<HouseType>) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}