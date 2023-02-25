export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Andrey Ivanov', age: 23},
    {name: 'Alex Johnson', age: 24},
    {name: 'Dmitry Sores', age: 18},
]

const transformation = (man: ManType) => ({

    stack: ['css,html', 'js', 'tdd', 'react'],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]

})


const devs = [
    {
        stack: ['css,html', 'js', 'tdd', 'react'],
        firstname: 'Andrey', lastName: 'Ivanov'
    },
    {
        stack: ['css,html', 'js', 'tdd', 'react'],
        firstname: 'Alex', lastName: 'Johnson'
    },
    {
        stack: ['css,html', 'js', 'tdd', 'react'],
        firstname: 'Dmitry', lastName: 'Sores'
    },
]


const devs3 = people.map(transformation)

const dev4 = people.map(man => ({

    stack: ['css,html', 'js', 'tdd', 'react'],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]

}))


export const greetingsStudents = (peopleArray: Array<ManType>) => {
    return peopleArray.map(man=>`Hello ${man.name.split(" ")[0]}. Welcome to It-incubator`)
}



const message = people.map(man=>`Hello ${man.name.split(" ")[0]}. Welcome to It-incubator`);
