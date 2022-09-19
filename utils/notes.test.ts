import { getMaj7, getMajorKey, getMin7, getMinorKey, getNote } from "./notes"

// single notes
it('gives me C3', () => {
    expect(getNote(48)).toBe('C3')
})

it('gives me E3', () => {
    expect(getNote(52)).toBe('E3')
})

it('gives me G3', () => {
    expect(getNote(55)).toBe('G3')
})

// major scales
it('gives me C major', () => {
    expect(getMajorKey(48)).toStrictEqual([48, 50, 52, 53, 55, 57, 59, 60])
})

// Minor scales
it('gives me C minor', () => {
    expect(getMinorKey(48)).toStrictEqual([48, 50, 51, 53, 55, 56, 58, 60])
})

it('gives me D minor', () => {
    expect(getMinorKey(50)).toStrictEqual([50, 52, 53, 55, 57, 58, 60, 62])
})

// chords
it('gives me CM7', () => {
    expect(getMaj7(48)).toStrictEqual([48, 52, 55, 59])
})

it('gives me Dm7', () => {
    expect(getMin7(50)).toStrictEqual([50, 53, 57, 60])
})