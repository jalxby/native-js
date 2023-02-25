export type LessonType = { title: string }

export type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    address: {
        street: {
            title: string
        }
    }

}

let props: ManType
beforeEach(() => {
    props = {
        name: "Aleksander",
        age: 36,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "Piramowicza"
            }
        }
    }
})
test("", () => {

    const {age, lessons,} = props
    const {age: a, lessons: l,} = props

    const {title} = props.address.street

})

test("destr arrays", () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [ls1, ls2] = props.lessons

    expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")

    expect(ls1.title).toBe("1")
    expect(ls2.title).toBe("2")

})