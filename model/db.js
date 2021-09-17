export class DB {
  constructor() {
    this.db = null
    this.request = null
    this.version = 1
    this.connected = false
  }

  connect() {
    const { promise, ok, no } = this.createPrommise()

    this.request = indexedDB.open('notes', this.version)
    this.request.onerror = (event) => no(event.target.errorCode)
    this.request.onsuccess = (event) => {
      this.db = event.target.result
      this.connected = true
      ok()
    }
    this.request.onupgradeneeded = this.upgradeShema

    return promise
  }

  upgradeShema(event) {
    const db = event.target.result
    if (db.objectStoreNames.contains('notes')) {
      db.deleteObjectStore('notes')
    }
    db.createObjectStore('notes', { keyPath: 'id' })
  }

  async addNotes(...notes) {
    this.preventConnection()
    const transaction = this.db.transaction('notes', 'readwrite')
    const notesStore = transaction.objectStore('notes')
    let passed = 0
    const results = await Promise.all(
      notes.map((note) => {
        return this.addSingleNote(note, notesStore)
      })
    )
    results.forEach((r) => {
      if (r) passed += 1
    })
    return {
      passed,
      failed: notes.length - passed,
      isFailed: passed === 0,
    }
  }

  async putNotes(...notes) {
    this.preventConnection()
    const transaction = this.db.transaction('notes', 'readwrite')
    const notesStore = transaction.objectStore('notes')
    let passed = 0
    const results = await Promise.all(
      notes.map((note) => {
        return this.putSingleNote(note, notesStore)
      })
    )
    results.forEach((r) => {
      if (r) passed += 1
    })
    return {
      passed,
      failed: notes.length - passed,
      isFailed: passed === 0,
    }
  }

  addSingleNote(note, store) {
    const { promise, ok } = this.createPrommise()

    const request = store.add(note)
    request.onsuccess = () => ok(true)
    request.onerror = (event) => ok(false)

    return promise
  }

  putSingleNote(note, store) {
    const { promise, ok } = this.createPrommise()

    const request = store.put(note)
    request.onsuccess = () => ok(true)
    request.onerror = (event) => ok(false)

    return promise
  }

  getAllNotes() {
    this.preventConnection()
    const transaction = this.db.transaction('notes')
    const notesStore = transaction.objectStore('notes')
    const { promise, ok } = this.createPrommise()
    const request = notesStore.getAll()

    request.onsuccess = () => {
      ok({
        isError: false,
        data: request.result,
      })
    }
    request.onerror = (event) => {
      ok({
        isError: true,
        error: event,
      })
    }

    return promise
  }

  async deleteNotes(...ids) {
    this.preventConnection()
    const transaction = this.db.transaction('notes', 'readwrite')
    const notesStore = transaction.objectStore('notes')
    let passed = 0
    const results = await Promise.all(
      ids.map((id) => {
        return this.deleteSingleNote(id, notesStore)
      })
    )
    results.forEach((r) => {
      if (r) passed += 1
    })
    return {
      passed,
      failed: ids.length - passed,
      isFailed: passed === 0,
    }
  }

  deleteSingleNote(id, store) {
    const { promise, ok } = this.createPrommise()

    const request = store.delete(id)
    request.onsuccess = () => ok(true)
    request.onerror = (event) => ok(false)

    return promise
  }

  createPrommise() {
    let ok, no
    const promise = new Promise((resolve, reject) => {
      ok = resolve
      no = reject
    })

    return { promise, ok, no }
  }

  async preventConnection() {
    if (!this.connected) await this.connect()
  }
}

export default new DB()
