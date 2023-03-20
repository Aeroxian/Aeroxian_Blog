/**
 * vuepress 配置文件
 */
import autoGenSidebar from './autoSiderbar/DiffRouteDifSidebar';
import navbar from './config/navBar'
import { path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { defaultTheme } from '@vuepress/theme-default'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { docsearchPlugin  } from '@vuepress/plugin-docsearch'
const sidebar = autoGenSidebar();
module.exports = {
  lang: 'zh-CN',
  title: '吖冼的Blog',
  description: 'Aeroxian的Vuepress Blog',
  head: [['link', { rel: 'icon', href: '/images/favicon-32x32.png' }]], // icon设置
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    googleAnalyticsPlugin({
      id: 'G-G7CM4H37VB',
    }),
    docsearchPlugin({
      appId: '20P1NJDB7B',  // Add your own Application ID
      apiKey: '25cd701e07d0762388df4474cbf8c05d', // Set it to your own *search* API key
      indexName: 'docs'
    })
  ],
  theme: defaultTheme({
    // 默认主题配置
    logo: 'https://aeroxian.github.io/images/logo.png',
    lastUpdated: false,   // 禁用显示更新时间
    contributors: false,   // 禁用显示贡献者
    sidebar,
    navbar
  }),
}