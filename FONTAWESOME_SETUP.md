# FontAwesome Setup in Nuxt Project

## Current Setup

This project uses FontAwesome icons through a custom plugin. Here's how it's configured:

### 1. Plugin Configuration
- **File**: `plugins/fontawesome.client.ts`
- **Purpose**: Registers FontAwesome component globally and adds required icons to the library

### 2. Available Icons
The following icons are currently available:

#### User Interface Icons
- `fa-solid fa-user` - User icon
- `fa-solid fa-bell` - Notification bell
- `fa-solid fa-cog` - Settings/gear icon
- `fa-solid fa-chevron-down` - Dropdown arrow

#### Menu Icons
- `fa-solid fa-home` - Home
- `fa-solid fa-tasks` - Tasks/checklist
- `fa-solid fa-wallet` - Wallet/money
- `fa-solid fa-chart-bar` - Charts/analytics
- `fa-solid fa-sign-out-alt` - Logout

#### Content Icons
- `fa-solid fa-newspaper` - News
- `fa-solid fa-film` - Movies/video
- `fa-solid fa-play` - Play button
- `fa-solid fa-trophy` - Trophy/awards
- `fa-solid fa-camera` - Camera/photos
- `fa-solid fa-running` - Sports/running

#### Navigation Icons
- `fa-solid fa-chevron-left` - Left arrow
- `fa-solid fa-chevron-right` - Right arrow

## Usage Examples

### Basic Icon Usage
```vue
<template>
  <FontAwesomeIcon icon="fa-solid fa-user" />
</template>
```

### With Custom Classes
```vue
<template>
  <FontAwesomeIcon 
    icon="fa-solid fa-bell" 
    class="w-4 h-4 text-yellow-400" 
  />
</template>
```

### With Dynamic Classes
```vue
<template>
  <FontAwesomeIcon 
    icon="fa-solid fa-chevron-down"
    :class="{ 'rotate-180': isOpen }"
    class="w-4 h-4 transition-transform duration-200"
  />
</template>
```

## Adding New Icons

To add new icons to the project:

1. **Import the icon** in `plugins/fontawesome.client.ts`:
```typescript
import { faNewIcon } from '@fortawesome/free-solid-svg-icons'
```

2. **Add to library**:
```typescript
library.add(
  // ...existing icons,
  faNewIcon
)
```

3. **Use in components**:
```vue
<FontAwesomeIcon icon="fa-solid fa-new-icon" />
```

## Available Icon Libraries

The project has these FontAwesome packages installed:
- `@fortawesome/fontawesome-svg-core` - Core library
- `@fortawesome/vue-fontawesome` - Vue component
- `@fortawesome/free-solid-svg-icons` - Solid style icons
- `@fortawesome/free-regular-svg-icons` - Regular style icons

To use regular icons:
```typescript
import { faUser } from '@fortawesome/free-regular-svg-icons'
// Then use as: icon="fa-regular fa-user"
```

## Configuration Files

### `nuxt.config.ts`
```typescript
css: [
  '@/assets/css/main.css',
  '@fortawesome/fontawesome-svg-core/styles.css'
],
```

### `plugins/fontawesome.client.ts`
```typescript
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
```

## Troubleshooting

### Component Not Found Error
If you see "Failed to resolve component: FontAwesomeIcon":
1. Make sure the plugin file exists and is properly named
2. Restart the development server
3. Check that all dependencies are installed

### Icon Not Displaying
If an icon doesn't show:
1. Verify the icon is imported in the plugin
2. Check the icon name spelling
3. Ensure the icon is added to the library

### CSS Issues
If icons look broken:
1. Make sure FontAwesome CSS is imported in nuxt.config.ts
2. Check for CSS conflicts with Tailwind classes
