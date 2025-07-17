<template>
  <nav class="text-white w-full bg-black flex items-center h-12 relative">
    <!-- Logo Section -->
    <div class="bg-[#e6bb67] text-black font-bold text-2xl px-6 py-3 h-full flex items-center">
      LOGO
    </div>

    <!-- Main Navigation -->
    <div class="flex items-center space-x-6 px-4 flex-1">
      <NavDropdown 
        title="LỊCH TRỰC TIẾP"
        :items="liveScheduleItems"
        @item-click="handleNavClick"
        class="text-white hover:text-yellow-400 text-xs font-medium uppercase"
      />
      <NavDropdown 
        title="LỊCH THI ĐẤU"
        :items="matchScheduleItems"
        @item-click="handleNavClick"
        class="text-white hover:text-yellow-400 text-xs font-medium uppercase"
      />
      <NavDropdown 
        title="TỶ LỆ KÈO"
        :items="oddsItems"
        @item-click="handleNavClick"
        class="text-white hover:text-yellow-400 text-xs font-medium uppercase"
      />
      <NavDropdown 
        title="KẾT QUẢ"
        :items="resultsItems"
        @item-click="handleNavClick"
        class="text-white hover:text-yellow-400 text-xs font-medium uppercase"
      />
      <NavDropdown 
        title="PHÒNG CHAT"
        :items="chatItems"
        @item-click="handleNavClick"
        class="text-white hover:text-yellow-400 text-xs font-medium uppercase"
      />
      <NavDropdown 
        title="TIN TỨC"
        :items="newsItems"
        @item-click="handleNavClick"
        class="text-white hover:text-yellow-400 text-xs font-medium uppercase"
      />
    </div>

    <!-- Right Side Icons Menu -->
    <div class="flex items-center space-x-1 px-2">
      <div class="flex items-center space-x-1 bg-[#e6bb67] px-2 py-1 rounded text-black text-xs font-medium">
        <span>📰</span>
        <span>Bảng Tin</span>
      </div>
      <div class="flex items-center space-x-1 bg-gray-700 px-2 py-1 rounded text-white text-xs">
        <span>🎬</span>
        <span>Reels</span>
      </div>
      <div class="flex items-center space-x-1 bg-gray-700 px-2 py-1 rounded text-white text-xs">
        <span>▶️</span>
        <span>Highlight</span>
      </div>
      <div class="flex items-center space-x-1 bg-gray-700 px-2 py-1 rounded text-white text-xs">
        <span>🏆</span>
        <span>Tip Kèo</span>
      </div>
      <div class="flex items-center space-x-1 bg-gray-700 px-2 py-1 rounded text-white text-xs">
        <span>📸</span>
        <span>Phim Ảnh</span>
      </div>
      <div class="flex items-center space-x-1 bg-gray-700 px-2 py-1 rounded text-white text-xs">
        <span>🏃</span>
        <span>Truyền Tranh</span>
      </div>
    </div>

    <!-- Language and User Section -->
    <div class="flex items-center space-x-2 px-3">
      <!-- Balance Display -->
      <div class="bg-gray-700 px-2 py-1 rounded text-yellow-400 text-xs font-medium flex items-center space-x-1">
        <span>💰</span>
        <span>1000</span>
      </div>
      
      <!-- Language -->
      <span class="bg-red-600 px-2 py-1 rounded text-white text-xs font-medium">TIẾNG VIỆT</span>
      
      <!-- User Avatar and Icons -->
      <div class="flex items-center space-x-1">
        <div class="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center">
          <span class="text-black text-xs">⚙️</span>
        </div>
        <div class="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center">
          <span class="text-black text-xs">🔔</span>
        </div>
        <div class="relative">
          <button 
            @click="toggleUserMenu"
            class="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
          >
            <span class="text-black text-xs">👤</span>
          </button>
          
          <!-- User Dropdown Menu -->
          <div 
            v-if="showUserMenu"
            class="absolute right-0 top-8 bg-gray-800 border border-gray-600 rounded-lg shadow-lg w-64 z-50"
          >
            <div class="py-2">
              <a href="#" class="flex items-center px-4 py-2 text-white hover:bg-gray-700 text-sm">
                <span class="mr-3">🏠</span>
                <span>TRUNG TÂM TÀI KHOẢN</span>
              </a>
              <a href="#" class="flex items-center px-4 py-2 text-white hover:bg-gray-700 text-sm">
                <span class="mr-3">📋</span>
                <span>NHIỆM VỤ</span>
              </a>
              <a href="#" class="flex items-center px-4 py-2 text-white hover:bg-gray-700 text-sm">
                <span class="mr-3">💼</span>
                <span>VÍ CỦA BẠN</span>
              </a>
              <a href="#" class="flex items-center px-4 py-2 text-white hover:bg-gray-700 text-sm">
                <span class="mr-3">📊</span>
                <span>LỊCH SỬ GIAO DỊCH</span>
              </a>
              <hr class="border-gray-600 my-1">
              <a href="#" class="flex items-center px-4 py-2 text-red-400 hover:bg-gray-700 text-sm">
                <span class="mr-3">🚪</span>
                <span>THOÁT TÀI KHOẢN</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import type { NavItem } from '~/types/navigation'

// Reactive state for user menu
const showUserMenu = ref(false)

// Toggle user menu function
const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value
}

// Close menu when clicking outside
const closeUserMenu = () => {
  showUserMenu.value = false
}

// Close menu when clicking outside (you can add this to a composable later)
onMounted(() => {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement
    if (!target.closest('.relative')) {
      closeUserMenu()
    }
  })
})

// Navigation items data
const liveScheduleItems: NavItem[] = [
  { id: 'live-football', label: 'Bóng Đá', icon: '⚽', path: '/live/football' },
  { id: 'live-basketball', label: 'Bóng Rổ', icon: '🏀', path: '/live/basketball' },
  { id: 'live-tennis', label: 'Tennis', icon: '🎾', path: '/live/tennis' },
  { id: 'live-esports', label: 'Esports', icon: '🎮', path: '/live/esports' },
]

const matchScheduleItems: NavItem[] = [
  { id: 'schedule-today', label: 'Hôm nay', path: '/schedule/today' },
  { id: 'schedule-tomorrow', label: 'Ngày mai', path: '/schedule/tomorrow' },
  { id: 'schedule-week', label: 'Tuần này', path: '/schedule/week' },
  { id: 'schedule-month', label: 'Tháng này', path: '/schedule/month' },
]

const oddsItems: NavItem[] = [
  { id: 'odds-football', label: 'Bóng Đá', icon: '⚽', path: '/odds/football' },
  { id: 'odds-basketball', label: 'Bóng Rổ', icon: '🏀', path: '/odds/basketball' },
  { id: 'odds-tennis', label: 'Tennis', icon: '🎾', path: '/odds/tennis' },
  { id: 'odds-esports', label: 'Esports', icon: '🎮', path: '/odds/esports' },
]

const resultsItems: NavItem[] = [
  { id: 'results-football', label: 'Bóng Đá', icon: '⚽', path: '/results/football' },
  { id: 'results-basketball', label: 'Bóng Rổ', icon: '🏀', path: '/results/basketball' },
  { id: 'results-tennis', label: 'Tennis', icon: '🎾', path: '/results/tennis' },
  { id: 'results-esports', label: 'Esports', icon: '🎮', path: '/results/esports' },
]

const chatItems: NavItem[] = [
  { id: 'chat-general', label: 'Chat Tổng', path: '/chat/general' },
  { id: 'chat-vip', label: 'Chat VIP', path: '/chat/vip' },
  { id: 'chat-support', label: 'Hỗ trợ', path: '/chat/support' },
  { id: 'chat-rooms', label: 'Phòng Chat', path: '/chat/rooms' },
]

const newsItems: NavItem[] = [
  { id: 'news-sports', label: 'Tin Thể Thao', path: '/news/sports' },
  { id: 'news-betting', label: 'Tin Cá Cược', path: '/news/betting' },
  { id: 'news-analysis', label: 'Phân Tích', path: '/news/analysis' },
  { id: 'news-highlights', label: 'Highlight', path: '/news/highlights' },
]

const handleNavClick = async (item: NavItem) => {
  await navigateTo(item.path)
}
</script>