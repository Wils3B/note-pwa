import Note from '~/model/note'

export const state = () => {
  const notes = []
  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i)
    if (/^note-\d{1,}$/.test(key)) {
      notes.push(Note.fromJSON(localStorage.getItem(key)))
    }
  }
  return {
    notes
  }
}

export const mutations = {
  saveNote(currentState, note) {
    currentState.notes.push(note)
    localStorage.setItem(`note-${note.id}`, JSON.stringify(note))
  },
  deleteNote(currentState, id) {
    const note = currentState.notes.filter((note) => note.id === id)[0]
    const index = currentState.notes.indexOf(note)
    currentState.notes.splice(index, 1)
    localStorage.removeItem(`note-${id}`)
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
    localStorage.setItem(`note-${currentNote.id}`, JSON.stringify(currentNote))
  }
}

export const getters = {
  noteById(currentState) {
    window.notes = currentState.notes
    return (id) => currentState.notes.filter((note) => note.id === id)[0]
  }
}
