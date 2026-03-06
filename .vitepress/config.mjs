import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "graphieros",
  description: "Charting words",
  base: '/graphieros-blog/',
  head: [
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'graphieros' }],
    ['meta', { property: 'og:description', content: 'Charting words' }],
    ['meta', { property: 'og:image', content: 'https://graphieros.github.io/graphieros-blog/og-default.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://graphieros.github.io/graphieros-blog/og-default.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/graphieros' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/graphieros.com'}
    ]
  }
})
