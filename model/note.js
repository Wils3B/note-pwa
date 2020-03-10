export default class Note {
  constructor(content = '') {
    this.createdAt = new Date().toISOString()
    this.modifiedAt = this.createdAt
    this.content = content
    this.voices = []
    this.color = 'white'
    this.id = new Date().getTime()
  }

  static hasImage(note) {
    return /<img src=".+">/.test(note.content)
  }

  static hasVoices(note) {
    return note.voices.length >= 0
  }

  static getFirstImage(note) {
    const match = note.content.match(/<img src=".+">/)
    if (match) {
      return match[0].match(/(?<=src=").+(?=">)/)[0]
    }
    return null
  }

  static setContent(note, content) {
    Note.updateModified(note)
    note.content = content
  }

  static textContent(note) {
    const el = document.createElement('p')
    let copy = note.content
    while (copy.search('<br>') >= 0) copy = copy.replace('<br>', ' ')
    el.innerHTML = copy
    return el.textContent
  }

  static updateModified(note) {
    note.modifiedAt = new Date().toISOString()
  }

  static addVoice(note, voice) {
    Note.updateModified(note)
    note.voices.push(voice)
  }

  static removeVoice(note, voice) {
    Note.updateModified(note)
    note.voices.splice(note.voices.indexOf(voice), 1)
  }
}
