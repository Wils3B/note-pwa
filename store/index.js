import DB from '~/model/db'

export const state = () => {
  return {
    colors: ['white', 'yellow', 'purple', 'green', 'red', 'blue', 'brown'],
    db: new DB()
  }
}
