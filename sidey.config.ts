// sidey.config.ts

export const sideyConfig = {
  /**
   * Global SEO and Site Identity
   * -------------------------------------------------------------------------
   * These values populate your HTML meta tags, RSS feed definitions,
   * and structural header components across the template.
   */
  site: {
    // The main title displayed in browser tabs and search engine results
    title: "乃々 恵の個人サイト",

    // A short fallback summary of your site used for SEO and social share cards
    description: "現在製作中です。",

    // The production domain where your site is deployed (no trailing slash)
    url: "https://nonomegumi.pages.dev",

    // Your name, utilized in copyright strings and author meta tags
    author: "Megumi Nono",

    // The primary language attribute for HTML accessibility engines (e.g., "en", "id")
    locale: "ja",
  },

  /**
   * Primary Sidebar Navigation
   * -------------------------------------------------------------------------
   * Controls the links rendered inside your fixed navigation panel.
   * You can add, reorder, or remove objects here to update your site's structure.
   */
  navigation: [
    { label: "Home", href: "/" },
    { label: "Writings", href: "/writings" },
    { label: "About", href: "/about" },
    { label: "RSS", href: "/rss.xml" },
  ],
}

export type SideyConfigType = typeof sideyConfig
