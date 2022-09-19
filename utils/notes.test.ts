import { getMaj7, getMajorKey, getMin7, getMinorKey } from "./notes"

it('gives me C major', () => {
    expect(getMajorKey(48)).toStrictEqual([48, 50, 52, 53, 55, 57, 59, 60])
})

it('gives me C minor', () => {
    expect(getMinorKey(48)).toStrictEqual([48, 50, 51, 53, 55, 56, 58, 60])
})

it('gives me CM7', () => {
    expect(getMaj7(48)).toStrictEqual([48, 52, 55, 59])
})

it('gives me D minor', () => {
    expect(getMinorKey(50)).toStrictEqual([50, 52, 53, 55, 57, 58, 60, 62])
})

it('gives me Dm7', () => {
    expect(getMin7(50)).toStrictEqual([50, 53, 57, 60])
})