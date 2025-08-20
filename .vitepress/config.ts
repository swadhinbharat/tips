import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tips",
  description: "Tips and Tricks",
  base: '/tips/',
  // dir: './docs/',
  srcDir: 'docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tools', link: '/tools' }
    ],

    sidebar: [
      {
        text: 'Tools',
        items: [
          {
            text: 'Chrome', link: '/tools/chrome/',
            items: [
              { text: 'Tab Management', link: '/tools/chrome/tab-management' },
            ]
          },
          {
            text: 'Windows', link: '/tools/windows/',
            items: [
              { text: 'Windows Terminal', link: '/tools/windows/windows-terminal' },
              { text: 'Clipboard in Windows', link: '/tools/windows/clipboard-in-windows' },
              { text: 'Windows Subsystem for Linux (WSL)', link: '/tools/windows/wsl' },
              { text: 'PowerShell', link: '/tools/windows/powershell' },
              { text: 'Windows Package Manager (winget)', link: '/tools/windows/winget' },
            ]
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/swadhinbharat/tips' },
    ]
  }, 
  head: [
    [
      'script',
      {
        async: "true",
        src: 'https://www.googletagmanager.com/gtag/js?id=G-WCCPS50VF8',
      },
    ],
    [
      'script',
      {},
      
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-WCCPS50VF8');",
    ],
  ],
})
