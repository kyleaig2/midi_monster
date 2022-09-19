import { getMaj7, getMajorScale, getMajorScaleNotes, getMin7, getMinorScale, getOctaveNote } from "./notes"

// single notes
it('gives me C3', () => {
    expect(getOctaveNote(48)).toBe('C3')
})

it('gives me E3', () => {
    expect(getOctaveNote(52)).toBe('E3')
})

it('gives me G3', () => {
    expect(getOctaveNote(55)).toBe('G3')
})

// major scales
it('gives me C major scale ints', () => {
    expect(getMajorScale(48)).toStrictEqual([48, 50, 52, 53, 55, 57, 59])
})

// Minor scales
it('gives me C minor scale ints', () => {
    expect(getMinorScale(48)).toStrictEqual([48, 50, 51, 53, 55, 56, 58])
})

it('gives me D minor scale ints', () => {
    expect(getMinorScale(50)).toStrictEqual([50, 52, 53, 55, 57, 58, 60])
})

it('gives me C major scale notes', () => {
    expect(getMajorScaleNotes(48)).toStrictEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B'])
})

// chords
it('gives me CM7 scale', () => {
    expect(getMaj7(48)).toStrictEqual([48, 52, 55, 59])
})

it('gives me Dm7 scale', () => {
    expect(getMin7(50)).toStrictEqual([50, 53, 57, 60])
})