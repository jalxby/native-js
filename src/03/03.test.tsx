import {StudentType} from "../02/02";
import {addSkill, cityOfLiveIn, makeStudentActive} from "./03";


let student: StudentType

beforeEach(() => {
    student = {
        id: 1,
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
})
test('new tech skill added', () => {
    addSkill(student, 'JS')

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()
})

test('student should be active', () => {
    makeStudentActive(student)
    expect(student.isActive).toBe(true)
})

test('does student live in City?', () => {
    cityOfLiveIn(student, 'Warsaw')
    expect(cityOfLiveIn(student, 'Warsaw')).toBe(false)
    expect(cityOfLiveIn(student, 'Gdansk')).toBe(true)
})