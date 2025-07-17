<template>
  <div class="relative">
    <button
      class="flex items-center space-x-2 hover:bg-gray-700 rounded px-2 py-1"
      @click="toggleUserMenu"
    >
      <div class="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
        <IconUser class="w-4 h-4" />
      </div>
      <IconChevronDown 
        :class="{ 'rotate-180': isUserMenuOpen }"
        class="w-4 h-4 transition-transform duration-200"
      />
    </button>

    <!-- User Dropdown -->
    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-show="isUserMenuOpen"
        class="absolute right-0 top-full mt-1 w-48 bg-gray-800 rounded-md shadow-lg z-50 py-1"
      >
        <div class="px-4 py-2 border-b border-gray-700 text-sm font-medium">
          TRUNG TÂM TÀI KHOẢN
        </div>
        <div
          v-for="item in userMenuItems"
          :key="item.id"
          class="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center space-x-2"
          @click="handleUserMenuClick(item)"
        >
          <component :is="getIconComponent(item.icon ?? '')" class="w-4 h-4" />
          <span>{{ item.label }}</span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import type { NavItem } from '~/types/navigation'

const isUserMenuOpen = ref(false)

const userMenuItems: NavItem[] = [
  { id: 'profile', label: 'THÔNG TIN CÁ NHÂN', icon: 'user', path: '/profile' },
  { id: 'mission', label: 'NHIỆM VỤ', icon: 'target', path: '/mission' },
  { id: 'feedback', label: 'Ý KIẾN BẠN', icon: 'message', path: '/feedback' },
  { id: 'history', label: 'LỊCH SỬ GIAO DỊCH', icon: 'history', path: '/history' },
  { id: 'logout', label: 'THOÁT TÀI KHOẢN', icon: 'logout', path: '/logout' },
]

const toggleUserMenu = () => {
  isUserMenuOpen.value = !isUserMenuOpen.value
}

const handleUserMenuClick = async (item: NavItem) => {
  if (item.id === 'logout') {
    // Handle logout logic
    console.log('Logging out...')
  } else {
    await navigateTo(item.path)
  }
  isUserMenuOpen.value = false
}

const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, string> = {
    user: 'IconUser',
    target: 'IconTarget',
    message: 'IconMessage',
    history: 'IconHistory',
    logout: 'IconLogout'
  }
  return iconMap[iconName] || 'IconUser'
}

// Close dropdown when clicking outside
onMounted(() => {
  const handleClickOutside = () => {
    isUserMenuOpen.value = false
  }
  
  document.addEventListener('click', handleClickOutside)
  
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})
</script>