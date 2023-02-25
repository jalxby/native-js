import {greetingsStudents, ManType} from "./05";

let people: Array<ManType> = []

beforeEach(() => {
    people = [
        {name: 'Andrey Ivanov', age: 23},
        {name: 'Alex Johnson', age: 24},
        {name: 'Dmitry Sores', age: 18},
    ]
})

test("should be array of greetings elements", () => {

    const messages = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to It-incubator`)
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello Andrey. Welcome to It-incubator")
    expect(messages[1]).toBe("Hello Alex. Welcome to It-incubator")
    expect(messages[2]).toBe("Hello Dmitry. Welcome to It-incubator")


})

test("testing of greeting function", () => {

    const messages = greetingsStudents(people)
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello Andrey. Welcome to It-incubator")
    expect(messages[1]).toBe("Hello Alex. Welcome to It-incubator")
    expect(messages[2]).toBe("Hello Dmitry. Welcome to It-incubator")


})