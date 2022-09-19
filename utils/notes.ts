import { Note } from "../types/notes";
import { MAJOR_STEPS, MINOR_STEPS, NOTES } from "./constants";

export const getNote = (num: number): Note => {
    return NOTES[num % 12]
}

export const getOctaveNote = (num: number): string => {
    const octave = Math.floor(num / 12) - 1
    const note = NOTES[num % 12]
    return `${note}${octave}`;
}

export const getMinorScale = (note: Note): number[] => {
    const scale: number[] = []
    if (typeof note === 'number') {
        let current = note;
        MINOR_STEPS.forEach((s) => scale.push(current += s))
    }
    return scale
}

export const getMajorScale = (note: Note): number[] => {
    const scale: number[] = []
    if (typeof note === 'number') {
        let current = note;
        MAJOR_STEPS.forEach((s) => scale.push(current += s))
    }
    return scale
}

export const getMajorScaleNotes = (note: Note): Note[] => {
    const scale = getMajorScale(note)
    return scale.map(getNote)
}

export const getMaj7 = (note: Note) => {
    const scale = getMajorScale(note)
    return [0, 2, 4, 6].map((i) => scale[i])
}

export const getMin7 = (note: Note) => {
    const scale = getMinorScale(note)
    return [0, 2, 4, 6].map((i) => scale[i])
}