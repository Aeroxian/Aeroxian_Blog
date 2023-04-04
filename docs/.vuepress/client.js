import { defineClientConfig } from '@vuepress/client'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import { 
  Menu,
  MenuItem,
  MenuGroup,
  Icon,
  Submenu
} from 'view-ui-plus'

export default defineClientConfig({
  enhance({ app, router, siteData }){
    app.component('Menu', Menu)
    app.component('MenuItem', MenuItem)
    app.component('MenuGroup', MenuGroup)
    app.component('Icon', Icon)
    app.component('Submenu', Submenu)
  },
  setup(){},
  layouts: {},
  rootComponents: [],
})