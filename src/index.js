import { registerApplication, start } from 'single-spa'

registerApplication(
  'root',
  () => {
    return window.System.import('main')
  },
  () => {
    return true
  }
)

registerApplication(
  'app1',
  () => {
    return window.System.import('app1')
  },
  () => {
    return location.href.includes('/sub-app')
  }
)

window.System.import('main').then(data => {
  console.log('main', data)
})

start()