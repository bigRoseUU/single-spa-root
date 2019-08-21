import { registerMicroApps, start } from 'qiankun'

let appDom = document.getElementById('app')

function registerAppItem ({ name, devPort, publicPath, router }) {
  return {
    name: name,
    entry: process.env.NODE_ENV === 'development' ?
                                    `//localhost:${devPort}/index.html` :
                                    `${window.location.origin}${publicPath}`,
    render: ({ appContent, loading }) => {
      if (loading) {
        appDom.innerHTML = appContent
      }
    },
    activeRule: () => location.href.includes(router)
  }
}

registerMicroApps(
  [
    registerAppItem({
      name: 'main',
      devPort: 9000,
      publicPath: '/single-app/main/',
      router: '/home'
    }),
    registerAppItem({
      name: 'sub-app',
      devPort: 9001,
      publicPath: '/single-app/sub-app/',
      router: '/sub-app'
    })
  ],
  {
    beforeLoad: [async app => {
      console.log('before load', app);
    }],
    beforeMount: [async app => {
      console.log('before mount', app);
    }],
    afterMount: [async app => {
      console.log('before mount', app);
    }],
    afterUnmount: [async app => {
      console.log('after unload', app);
      appDom.innerHTML = ''
    }],
  }
)
start({ prefetch: true, jsSandbox: true })