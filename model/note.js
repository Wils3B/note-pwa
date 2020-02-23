export default class Note {
  constructor(content = '') {
    this.createdAt = new Date().toISOString()
    this.modifiedAt = this.createdAt
    this.content = content
    this.voices = []
    this.color = 'white'
    this.id = new Date().getTime()
  }

  get hasImage() {
    return /<img src=".+">/.test(this.content)
  }

  hasVoices() {
    return this.voices.length >= 0
  }

  getFirstImage() {
    const match = this.content.match(/<img src=".+">/)
    if (match) {
      return match[0].match(/(?<=src=").+(?=">)/)[0]
    }
    return null
  }

  setContent(content) {
    this.updateModified()
    this.content = content
  }

  get textContent() {
    const el = document.createElement('p')
    let copy = this.content
    while (copy.search('<br>') >= 0) copy = copy.replace('<br>', ' ')
    el.innerHTML = copy
    return el.textContent
  }

  updateModified() {
    this.modifiedAt = new Date().toISOString()
  }

  addVoice(voice) {
    this.updateModified()
    this.voices.push(voice)
  }

  removeVoice(voice) {
    this.updateModified()
    this.voices.splice(this.voices.indexOf(voice), 1)
  }
}
