# FontAwesome Setup - Working Configuration

## ✅ Current Working Setup

### 1. Plugin File: `plugins/fontawesome.client.js`
```javascript
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faUser, 
  faBell, 
  faCog, 
  faHome, 
  faWallet, 
  faChartBar, 
  faSignOutAlt, 
  faTasks,
  faChevronDown,
  faNewspaper,
  faFilm,
  faPlay,
  faTrophy,
  faCamera,
  faRunning
} from '@fortawesome/free-solid-svg-icons'

// Add icons to library
library.add(
  faUser, 
  faBell, 
  faCog, 
  faHome, 
  faWallet, 
  faChartBar, 
  faSignOutAlt, 
  faTasks,
  faChevronDown,
  faNewspaper,
  faFilm,
  faPlay,
  faTrophy,
  faCamera,
  faRunning
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
```

### 2. Nuxt Config: `nuxt.config.ts`
```typescript
css: [
  '@/assets/css/main.css',
  '@fortawesome/fontawesome-svg-core/styles.css'
],
```

### 3. Package Dependencies
```json
{
  "@fortawesome/fontawesome-svg-core": "^6.7.2",
  "@fortawesome/free-solid-svg-icons": "^6.7.2", 
  "@fortawesome/vue-fontawesome": "^3.0.8"
}
```

## 🎯 Usage in Components

### Basic Usage
```vue
<template>
  <font-awesome-icon icon="user" />
</template>
```

### With Classes
```vue
<template>
  <font-awesome-icon icon="wallet" class="w-3 h-3 text-yellow-400" />
</template>
```

### Real Examples from NavBar
```vue
<!-- Balance Display -->
<font-awesome-icon icon="wallet" class="w-3 h-3" />

<!-- User Icons -->
<font-awesome-icon icon="cog" class="text-black text-xs" />
<font-awesome-icon icon="bell" class="text-black text-xs" />
<font-awesome-icon icon="user" class="text-black text-xs" />

<!-- Menu Items -->
<font-awesome-icon icon="home" class="mr-3 w-4 h-4" />
<font-awesome-icon icon="tasks" class="mr-3 w-4 h-4" />
<font-awesome-icon icon="chart-bar" class="mr-3 w-4 h-4" />

<!-- Bottom Menu -->
<font-awesome-icon icon="newspaper" class="text-[#e6bb67] w-3 h-3" />
<font-awesome-icon icon="film" class="w-3 h-3" />
<font-awesome-icon icon="play" class="w-3 h-3" />
```

## 📋 Available Icons

### Current Icons in Library
- `user` - User profile
- `bell` - Notifications
- `cog` - Settings
- `home` - Home/dashboard
- `wallet` - Wallet/money
- `chart-bar` - Charts/analytics
- `sign-out-alt` - Logout
- `tasks` - Tasks/checklist
- `chevron-down` - Dropdown arrow
- `newspaper` - News
- `film` - Movies/videos
- `play` - Play button
- `trophy` - Trophy/awards
- `camera` - Camera/photos
- `running` - Sports/running

## 🔧 Adding New Icons

### Step 1: Import the icon
```javascript
import { faNewIcon } from '@fortawesome/free-solid-svg-icons'
```

### Step 2: Add to library
```javascript
library.add(
  // ...existing icons,
  faNewIcon
)
```

### Step 3: Use in component
```vue
<font-awesome-icon icon="new-icon" />
```

## 🚀 Key Features

- ✅ **Client-side only** - Uses `.client.js` for optimal performance
- ✅ **Kebab-case component** - `<font-awesome-icon>` (lowercase)
- ✅ **Simple icon names** - Just `icon="user"` not `icon="fa-solid fa-user"`
- ✅ **Tree-shaking** - Only includes icons that are imported
- ✅ **TailwindCSS compatible** - Works perfectly with Tailwind classes
- ✅ **TypeScript support** - All icons are properly typed

## 🎨 Styling Tips

### Size Classes
```vue
<font-awesome-icon icon="user" class="w-3 h-3" />   <!-- Small -->
<font-awesome-icon icon="user" class="w-4 h-4" />   <!-- Medium -->
<font-awesome-icon icon="user" class="w-5 h-5" />   <!-- Large -->
```

### Color Classes
```vue
<font-awesome-icon icon="user" class="text-yellow-400" />
<font-awesome-icon icon="user" class="text-[#e6bb67]" />
<font-awesome-icon icon="user" class="text-red-400" />
```

### Combined with Spacing
```vue
<font-awesome-icon icon="home" class="mr-3 w-4 h-4" />
<span>Home</span>
```

This setup is now working perfectly in your Nuxt project! 🎉
