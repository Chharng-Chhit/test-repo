<template>
  <div 
    class="relative"
    @mouseenter="showDropdown"
    @mouseleave="hideDropdown"
  >
    <button
      class="px-4 py-2 hover:bg-gray-700 rounded transition-colors duration-200 flex items-center space-x-1"
    >
      <span>{{ title }}</span>
      <IconChevronDown 
        :class="{ 'rotate-180': isOpen }"
        class="w-4 h-4 transition-transform duration-200"
      />
    </button>

    <!-- Dropdown Menu -->
    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-show="isOpen"
        class="absolute top-full left-0 mt-1 w-48 bg-gray-800 rounded-md shadow-lg z-50 py-1"
      >
        <div
          v-for="item in items"
          :key="item.id"
          class="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center space-x-2"
          @click="handleItemClick(item)"
        >
          <span v-if="item.icon" class="text-sm">{{ item.icon }}</span>
          <span>{{ item.label }}</span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import type { NavItem } from '~/types/navigation'

interface Props {
  title: string
  items: NavItem[]
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'item-click': [item: NavItem]
}>()

const isOpen = ref(false)
let hoverTimeout: NodeJS.Timeout | null = null

const showDropdown = () => {
  // Clear any existing timeout
  if (hoverTimeout) {
    clearTimeout(hoverTimeout)
    hoverTimeout = null
  }
  isOpen.value = true
}

const hideDropdown = () => {
  // Add a small delay to prevent flickering when moving mouse between elements
  hoverTimeout = setTimeout(() => {
    isOpen.value = false
  }, 150)
}

const handleItemClick = (item: NavItem) => {
  emit('item-click', item)
  isOpen.value = false
}

// Clean up timeout on component unmount
onUnmounted(() => {
  if (hoverTimeout) {
    clearTimeout(hoverTimeout)
  }
})
</script>