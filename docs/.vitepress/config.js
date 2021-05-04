//https://github.com/vuejs/vitepress/tree/master/docs
module.exports = {
  title: "Hello VitePress",
  description: "Just playing around.",
  base: "/docs",
  lang: "en-US",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    logo: "/logo.png",
    docsDir: "docs",
    // editLinks: true,
    editLinkText: "Edit this page on GitHub",

    lastUpdated: "Last Updated",
    // repo: 'vuejs/vitepress',
    displayAllHeaders: true, // Default: false
    activeHeaderLinks: false, // Default: true
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "API", link: "/api/" },
      {
        text: "External",
        link: "https://google.com",
        target: "_self",
        rel: false,
      },
      {
        text: "Settings",
        ariaLabel: "Settings Menu",
        items: [
          { text: "Chinese", link: "/guide/" },
          { text: "Japanese", link: "/guide/one" },
        ],
      },
    ],
    sidebar: {
        // sidebar: "auto",
      '/guide/': getGuideSidebar(),
      '/config/': getConfigSidebar(),
      '/': getGuideSidebar()
      // we don't need to do anything to index
      // because the default sidebar is created via page headings
    },
  },
};

function getGuideSidebar() {
  return [
    {
      text: 'Guide',
      children: [
        { text: 'Getting Started', link: '/guide/' },
        { text: 'Chapter One', link: '/guide/getting-start' },
        { text: 'Chapter two', link: '/guide/two' },
        { text: 'API', link: '/api/' },
      ]
    },
    {
      text: 'Introduction',
      children: [
        { text: 'What is VitePress?', link: '/' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Asset Handling', link: '/guide/assets' },
        { text: 'Markdown Extensions', link: '/guide/markdown' },
        { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
        { text: 'Deploying', link: '/guide/deploy' }
      ]
    },
    {
      text: 'Advanced',
      children: [
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Global Computed', link: '/guide/global-computed' },
        { text: 'Global Component', link: '/guide/global-component' },
        { text: 'Customization', link: '/guide/customization' },
        {
          text: 'Differences from Vuepress',
          link: '/guide/differences-from-vuepress'
        }
      ]
    }
  ]
}

function getConfigSidebar() {
  return [
    {
      text: 'App Config',
      children: [{ text: 'Basics', link: '/config/basics' }]
    },
    {
      text: 'Theme Config',
      children: [
        { text: 'Homepage', link: '/config/homepage' },
        { text: 'Algolia Search', link: '/config/algolia-search' },
        { text: 'Carbon Ads', link: '/config/carbon-ads' }
      ]
    }
  ]
}