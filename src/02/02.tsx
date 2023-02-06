import React from "react";

export type StudentType={
    id:number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies:Array<TechType>
}

type AddressType={
    street: string
    city: CityType
}

type CityType={
    title:string
    country:string
}

type TechType={
    id: number
    title:string
}

const student:StudentType = {
    id:1,
    name: 'Alex',
    age: 32,
    isActive: false,
    address: {
        street: 'Piramowicza',
        city: {
            title: 'Gdansk',
            country: 'Poland'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'JS'
        },
        {
            id: 3,
            title: 'React'
        },
    ]
}

console.log(student.technologies[2].title)