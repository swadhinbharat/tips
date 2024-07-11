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
            text: 'Windows', link: '/tools/windows/',
            items: [
              { text: 'Windows Terminal', link: '/tools/windows/windows-terminal' },
              { text: 'Windows Subsystem for Linux (WSL)', link: '/tools/windows/wsl' },
              { text: 'PowerShell', link: '/tools/windows/powershell' },
              { text: 'Windows Clipboard', link: '/tools/windows/clipboard-in-windows' }
            ]
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/swadhinbharat/tips' },
    ]
  }
})
