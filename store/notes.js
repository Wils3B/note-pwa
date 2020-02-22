export const state = () => {
  return {
    notes: []
  }
}

export const mutations = {
  saveNote(currentState, note) {
    currentState.notes.push(note)
  }
}

export const getters = {
  noteById(currentState) {
    window.notes = currentState.notes
    return (id) => currentState.notes.filter((note) => note.id === id)
  }
}
