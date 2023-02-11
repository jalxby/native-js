import React from "react";
import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02/02_02";


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({id: new Date().getTime(), title: skill})
}

export function makeStudentActive(st: StudentType) {
    st.isActive = true
}

export const cityOfLiveIn = (student: StudentType, city: string) => student.address.city.title === city

export function addMoneyToBudget(gb: Array<GovernmentBuildingsType>, b: 'HOSPITAL' | 'FIRE-STATION', addingValue: number) {
    for (const gbElement of gb) {
        if (gbElement.type === b) {
            gbElement.budget += addingValue
        }
    }
}


// export const demolishHousesOnTheStreet = (city: CityType, happyStreet: string) => {
//     // let deleted = city.houses.filter(s => s.address.street.title !== happyStreet)
//     city.houses
// }

export function repairHouse(house: HouseType) {
    house.repaired = true
}

export const stuffFired = (governmentBuilding: GovernmentBuildingsType, stuffNumber: number) => {
    governmentBuilding.staffCount -= stuffNumber
}

export const stuffHire = (governmentBuilding: GovernmentBuildingsType, stuffNumber: number) => {
    governmentBuilding.staffCount += stuffNumber
}


export function createMessage(city: CityType) {
    // return "Hello " + city.title + " citizens. All " + city.citizensNumber
    return `Hello ${city.title} citizens. All ${city.citizensNumber}`
}
