import { hey, yo } from ".";

it('says yo', () => {
    expect(yo()).toBe('yo')
})

it('says hey', () => {
    expect(hey()).toBe('hey')
})