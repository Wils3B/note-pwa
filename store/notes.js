import Note from '~/model/note'

export const state = () => {
  return {
    notes: [
      new Note('Note 1'),
      new Note('Note 2 of 2002'),
      new Note('Note 3 is the best note of my store'),
      new Note('In this great future, where is the very')
    ]
  }
}
