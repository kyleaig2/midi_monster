import * as easymidi from 'easymidi'
import { getMaj7, getMajorKey, getMin7, getNote } from './utils/notes'

const input = new easymidi.Input('LPK25')
const output = new easymidi.Output('MIDI MONSTER', true)

input.on('noteon', ({ note }) => {
    console.log(note, getNote(note))
})

const cmaj7 = getMaj7(48)
const fmaj7 = getMaj7(53)
const dmin7 = getMin7(50)

const stopNote = (num: number) => {
    output.send('noteoff', {
        note: num,
        velocity: 50,
        channel: 1
    })
}

const sendNote = (duration = 2000) => (num: number) => {
    output.send('noteon', {
        note: num,
        velocity: 50,
        channel: 1
    })

    setTimeout(() => stopNote(num), duration - 10)
}

setTimeout(() => cmaj7.forEach(sendNote(2000)), 2000)
setTimeout(() => fmaj7.forEach(sendNote(2000)), 4000)
setTimeout(() => dmin7.forEach(sendNote(2000)), 6000)
