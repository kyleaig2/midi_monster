const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'] as const
const minor = [0, 2, 1, 2, 2, 1, 2, 2]
const major = [0, 2, 2, 1, 2, 2, 2, 1]

interface Key {
    notes: any[]
}

export const getNote = (num: number) => {
    const octave = Math.floor(num / 12) - 1
    const note = notes[num % 12]
    return `${note}${octave}`;
}

export const getNotes = (arr: number[]) => {
    return arr.map(getNote)
}

export const getMinorKey = (note: number | typeof notes[number]): number[] => {
    const key: number[] = []
    if (typeof note === 'number') {
        let current = note;
        minor.forEach((s) => key.push(current += s))
    }
    return key
}

export const getMajorKey = (note: number | typeof notes[number]): number[] => {
    const key: number[] = []
    if (typeof note === 'number') {
        let current = note;
        major.forEach((s) => key.push(current += s))
    }
    return key
}

export const getMaj7 = (note: number) => {
    return getMajorKey(note).filter((_, i) => [0, 2, 4, 6].includes(i))
}

export const getMin7 = (note: number) => {
    return getMinorKey(note).filter((_, i) => [0, 2, 4, 6].includes(i))
}