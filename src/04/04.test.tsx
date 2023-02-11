test("ages should be > 90", () => {

    const predicate = (age: number) => {
        return age > 90
    }


    const ages = [18, 20, 22, 1, 100, 90, 14];
    const oldAges = ages.filter(predicate)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)

})
// type CourseType = {
//     title: string
//     price: number
// }
test("course price should be < 150", () => {
    const courses = [
        {title: 'JS', price: 110},
        {title: 'CSS', price: 200},
        {title: 'React', price: 150}
    ]

    const chipCourses = courses.filter(course => course.price < 160)

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].title).toBe('JS')
    expect(chipCourses[1].title).toBe('React')

})


test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Eggs', isDone: false},
    ]
    const completedTasks = tasks.filter((t) => t.isDone)

    expect(completedTasks.length).toBe(1)
    expect(completedTasks[0].id).toBe(2)
})


