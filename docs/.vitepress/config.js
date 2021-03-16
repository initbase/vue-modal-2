module.exports = {
  base: '/vue-modal-2/',
  title: 'Vue Modal 2 🎉', // appended to all page titles
  description: 'A simple and lightweight Vue modal component.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/burhanahmeed/vue-modal-2' },
      { text: 'Contact', link: '/contact' },
      { text: 'Release Note', link: 'https://github.com/burhanahmeed/vue-modal-2/releases' }
    ],
    sidebar: [
      { 
        text: 'Installation',
        children: [
          {text: 'Vue 2', link: '/installation/vue-2x'}
        ]
      },
      {
        text: 'Options',
        children: [
          {
            text: 'Props', link: '/options/props'
          },
          {
            text: 'API', link: '/options/api'
          }
        ]
      }
    ]
  }
}