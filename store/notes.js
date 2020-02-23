export const state = () => {
  return {
    notes: []
  }
}

export const mutations = {
  saveNote(currentState, note) {
    currentState.notes.push(note)
  },
  deleteNote(currentState, id) {
    const note = currentState.notes.filter((note) => note.id === id)[0]
    const index = currentState.notes.indexOf(note)
    currentState.notes.splice(index, 1)
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
  }
}

export const getters = {
  noteById(currentState) {
    window.notes = currentState.notes
    return (id) => currentState.notes.filter((note) => note.id === id)[0]
  }
}
