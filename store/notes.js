import Note from '~/model/note'
import DB from '~/model/db'

export const state = () => {
  const notes = []
  return {
    notes
  }
}

export const mutations = {
  saveNote(currentState, note) {
    currentState.notes.push(note)
    DB.addNotes(note)
  },
  deleteNote(currentState, id) {
    const note = currentState.notes.filter((note) => note.id === id)[0]
    const index = currentState.notes.indexOf(note)
    currentState.notes.splice(index, 1)
    DB.deleteNotes(id)
  },
  editNote(currentState, note) {
    const index = currentState.notes.indexOf(
      getters.noteById(currentState)(note.id)
    )
    const currentNote = currentState.notes[index]
    currentNote.color = note.color
    currentNote.setContent(note.content)
    currentState.notes.splice(index, 1)
    currentState.notes.push(currentNote)
    DB.putNotes(note)
  },
  setAllNotes(currentState, notes) {
    currentState.notes = notes
  }
}

export const getters = {
  noteById(currentState) {
    window.notes = currentState.notes
    return (id) => currentState.notes.filter((note) => note.id === id)[0]
  }
}

export const actions = {
  async fetchAllNotes(context) {
    if (!DB.connected) await DB.connect()
    let notes
    if (DB.connected) notes = await DB.getAllNotes()
    context.commit(
      'setAllNotes',
      notes.data.map((note) => Note.fromRAW(note))
    )
  }
}
