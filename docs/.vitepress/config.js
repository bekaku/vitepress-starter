const primarySidebar = [
    { text: "Home", link: "/" },
    { text: "Guide", link: "/guide/" },
    { text: "API", link: "/api/" }
];

module.exports = {
  title: "Hello VitePress",
  description: "Just playing around.",
  base: "/",
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
      //   sidebar: "auto",
      "/guide/": primarySidebar, // everything in the /about/ subdirectory
      "/api/": primarySidebar, // contact page

      // we don't need to do anything to index
      // because the default sidebar is created via page headings
    },
  },
};
