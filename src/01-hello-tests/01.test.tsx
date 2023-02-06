import {mult, splitIntoWords, sum} from "./01";

let a: number
let b: number
let c: number

beforeEach(() => {
    a = 1
    b = 2
    c = 3
})

test('sum should be corrected', () => {


    //action
    const result = sum(a, b)
    const result2 = sum(a, c)

    //expect result
    expect(result).toBe(3)
    expect(result2).toBe(4)
})

test('mult should be corrected', () => {


    //action
    const result = mult(a, b)
    const result2 = mult(a, c)

    //expect result
    expect(result).toBe(2)
    expect(result2).toBe(3)
})

test('spit in words should be ok', () => {
    const aa = 'hello my friend'
    const bb = 'JS - programming language'

    //action
    const result = splitIntoWords(aa)
    const result2 = splitIntoWords(bb)

    //expect result
    expect(result.length).toBe(3)
    expect(result[0]).toBe('hello')
    expect(result[1]).toBe('my')
    expect(result[2]).toBe('friend')

    expect(result2.length).toBe(3)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('programming')
    expect(result2[2]).toBe('language')
})