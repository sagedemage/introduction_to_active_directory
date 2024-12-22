import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Introduction to Active Directory",
  description: "An article on the introduction to Active Directory.",
  base: "/introduction_to_active_directory/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sagedemage/introduction_to_active_directory' }
    ]
  }
})
