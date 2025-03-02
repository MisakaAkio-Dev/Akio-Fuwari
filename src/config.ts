import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'MisakaAkio Website',
  subtitle: '不努力就只能听到别人的好消息',
  lang: 'zh_CN',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 250,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: 'https://act-webstatic.blueakio.com/2024/07/14/669372d098757.jpg',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center', // Equivalent to object-position, defaults center
    credit: {
      enable: true,         // Display the credit text of the banner image
      text: 'Pixiv 祝德莉莎生日快乐 - 青叶凌Y.r',              // Credit text to be displayed
      url: 'https://www.pixiv.net/artworks/80401159'                // (Optional) URL link to the original artwork or artist's page
    }
  },
  toc: {
    enable: true,           // Display the table of contents on the right side of the post
    depth: 2                // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [    // Leave this array empty to use the default favicon
    {
      src: 'https://webstatic.akio.top/user/NiuBoss123.jpg',    // Path of the favicon, relative to the /public directory
      theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
      sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [  
    LinkPreset.Home,
    LinkPreset.Archive,
    {
      name: '关于我',
      url: '/about/',
    },
    {
      name: '关于 Dev',
      url: '/development/',
    },
    {
      name: "友链",
      url: "https://www.akio.top/friends",
      external: true,
    },
    {
      name: '前往主站',
      url: 'https://www.akio.top',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'https://webstatic.akio.top/user/NiuBoss123.jpg',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'MisakaAkio 御坂秋生',
  bio: '是落寞之人，是舰长，是旅行者，是开拓者，更是时刻陪伴你的朋友',
  links: [
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/NiuBoss123',
    },
    {
      name: "Bilibili",
      icon: "fa6-brands:bilibili",
      url: "https://space.bilibili.com/384459594",
    },
    {
      name: '微博',
      icon: 'fa6-brands:weibo',
      url: 'https://weibo.com/7892649152',
    },
    {
      name: 'Twitter',
      icon: 'fa6-brands:x-twitter',
      url: 'https://x.com/NiuBoss123',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
