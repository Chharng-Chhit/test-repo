<template>
  <div class="text-white bg-[#e6bb67]">
    <!-- Top row with logo and navigation -->
    <div class="flex items-center">
      <!-- Logo Section -->
      <div class="bg-black text-white font-bold text-[60px] px-6 py-3 w-[280px] h-10 flex justify-end items-center rounded-tr-[50px]">
        <div class="-mb-7">LOGO</div>
      </div>

      <!-- Main Navigation -->
      <div class="flex items-center space-x-6 px-4 flex-1">
          <NavDropdown 
              title="LỊCH TRỰC TIẾP"
              :items="liveScheduleItems"
              @item-click="handleNavClick"
              class="text-black hover:text-yellow-400 text-xs font-medium uppercase"
          />
          <NavDropdown 
              title="LỊCH THI ĐẤU"
              :items="matchScheduleItems"
              @item-click="handleNavClick"
              class="text-black hover:text-yellow-400 text-xs font-medium uppercase"
          />
          <NavDropdown 
              title="TỶ LỆ KÈO"
              :items="oddsItems"
              @item-click="handleNavClick"
              class="text-black hover:text-yellow-400 text-xs font-medium uppercase"
          />
          <NavDropdown 
              title="KẾT QUẢ"
              :items="resultsItems"
              @item-click="handleNavClick"
              class="text-black hover:text-yellow-400 text-xs font-medium uppercase"
          />
          <NavDropdown 
              title="PHÒNG CHAT"
              :items="chatItems"
              @item-click="handleNavClick"
              class="text-black hover:text-yellow-400 text-xs font-medium uppercase"
          />
          <NavDropdown 
              title="TIN TỨC"
              :items="newsItems"
              @item-click="handleNavClick"
              class="text-black hover:text-yellow-400 text-xs font-medium uppercase"
          />

          <!-- Language and User Section -->
          <div class="flex items-center space-x-2 px-3">
            <!-- Balance Display -->
            <div class="bg-gray-700 px-2 py-1 rounded text-yellow-400 text-xs font-medium flex items-center space-x-1">
                <Icon name="fa6-solid:wallet" class="w-3 h-3" />
                <span>1000</span>
            </div>
            
            <!-- User Avatar and Icons -->
            <div class="flex items-center space-x-1">
                <div class="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center">
                    <!-- <font-awesome-icon :icon="['fas', 'gear']" /> -->
                  <Icon name="fa6-solid:gear" class="text-black text-xs" />
                </div>
                <div class="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center">
                  <Icon name="fa6-solid:bell" class="text-black text-xs" />
                </div>
                <div class="relative">
                  <button 
                      @click="toggleUserMenu"
                      class="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                  >
                      <Icon name="fa6-solid:user" class="text-black text-xs" />
                  </button>
                  
                  <!-- User Dropdown Menu -->
                  <div 
                      v-if="showUserMenu"
                      class="absolute right-0 top-8 bg-gray-800 border border-gray-600 rounded-lg shadow-lg w-64 z-50"
                  >
                      <div class="py-2">
                        <a href="#" class="flex items-center px-4 py-2 text-white hover:bg-gray-700 text-sm">
                            <Icon name="fa6-solid:house" class="mr-3 w-4 h-4" />
                            <span>TRUNG TÂM TÀI KHOẢN</span>
                        </a>
                        <a href="#" class="flex items-center px-4 py-2 text-white hover:bg-gray-700 text-sm">
                            <Icon name="fa6-solid:list-check" class="mr-3 w-4 h-4" />
                            <span>NHIỆM VỤ</span>
                        </a>
                        <a href="#" class="flex items-center px-4 py-2 text-white hover:bg-gray-700 text-sm">
                            <Icon name="fa6-solid:wallet" class="mr-3 w-4 h-4" />
                            <span>VÍ CỦA BẠN</span>
                        </a>
                        <a href="#" class="flex items-center px-4 py-2 text-white hover:bg-gray-700 text-sm">
                            <Icon name="fa6-solid:chart-bar" class="mr-3 w-4 h-4" />
                            <span>LỊCH SỬ GIAO DỊCH</span>
                        </a>
                        <hr class="border-gray-600 my-1">
                        <a href="#" class="flex items-center px-4 py-2 text-red-400 hover:bg-gray-700 text-sm">
                            <Icon name="fa6-solid:right-from-bracket" class="mr-3 w-4 h-4" />
                            <span>THOÁT TÀI KHOẢN</span>
                        </a>
                      </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </div>

    <!-- Bottom row with full-width black background -->
    <div class="flex items-center space-x-1 bg-black w-full p-2 px-8">
        <div class="mr-[280px]"></div>
        <div class="flex items-center space-x-1  px-2 py-1   text-xs font-medium">
            <Icon name="fa6-solid:newspaper" class="text-[#e6bb67] w-3 h-3" />
            <span class="text-[#e6bb67]">Bảng Tin</span>
        </div>
        <div class="flex items-center space-x-1  px-2 py-1  text-[#e6bb67] text-xs">
            <Icon name="fa6-solid:film" class="w-3 h-3" />
            <span>Reels</span>
        </div>
        <div class="flex items-center space-x-1  px-2 py-1  text-[#e6bb67] text-xs">
            <Icon name="fa6-solid:play" class="w-3 h-3" />
            <span>Highlight</span>
        </div>
        <div class="flex items-center space-x-1  px-2 py-1  text-[#e6bb67] text-xs">
            <Icon name="fa6-solid:trophy" class="w-3 h-3" />
            <span>Tip Kèo</span>
        </div>
        <div class="flex items-center space-x-1  px-2 py-1  text-[#e6bb67] text-xs">
            <Icon name="fa6-solid:camera" class="w-3 h-3" />
            <span>Phim Ảnh</span>
        </div>
        <div class="flex items-center space-x-1  px-2 py-1  text-[#e6bb67] text-xs">
            <Icon name="fa6-solid:person-running" class="w-3 h-3" />
            <span>Truyền Tranh</span>
        </div>

        <div class="ml-8 flex items-center space-x-2">
        <div class="flex items-center space-x-2 bg-white px-3 py-1 rounded-full shadow-sm">
          <div class="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            <span class="text-white text-xs font-bold">★</span>
          </div>
          <span class="text-gray-800 font-medium text-xs">TIẾNG VIỆT</span>
        </div>

        <div 
          class="relative w-10 h-5 bg-gray-800 rounded-full cursor-pointer transition-colors duration-200 flex items-center"
        >
          <div 
            class="w-4 h-4 rounded-full transition-all duration-200 flex items-center justify-center"
          >
            <svg 
              className="w-2.5 h-2.5 text-gray-800" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  { id: 'live-football', label: 'Bóng Đá', icon: '⚽', path: '#' },
  { id: 'live-basketball', label: 'Bóng Rổ', icon: '🏀', path: '#' },
  { id: 'live-tennis', label: 'Tennis', icon: '🎾', path: '#' },
  { id: 'live-esports', label: 'Esports', icon: '🎮', path: '#' },
]

const matchScheduleItems: NavItem[] = [
  { id: 'schedule-today', label: 'Hôm nay', path: '#' },
  { id: 'schedule-tomorrow', label: 'Ngày mai', path: '#' },
  { id: 'schedule-week', label: 'Tuần này', path: '#' },
  { id: 'schedule-month', label: 'Tháng này', path: '#' },
]

const oddsItems: NavItem[] = [
  { id: 'odds-football', label: 'Bóng Đá', icon: '⚽', path: '#' },
  { id: 'odds-basketball', label: 'Bóng Rổ', icon: '🏀', path: '#' },
  { id: 'odds-tennis', label: 'Tennis', icon: '🎾', path: '#' },
  { id: 'odds-esports', label: 'Esports', icon: '🎮', path: '#' },
]

const resultsItems: NavItem[] = [
  { id: 'results-football', label: 'Bóng Đá', icon: '⚽', path: '#' },
  { id: 'results-basketball', label: 'Bóng Rổ', icon: '🏀', path: '#' },
  { id: 'results-tennis', label: 'Tennis', icon: '🎾', path: '#' },
  { id: 'results-esports', label: 'Esports', icon: '🎮', path: '#' },
]

const chatItems: NavItem[] = [
  { id: 'chat-general', label: 'Chat Tổng', path: '#' },
  { id: 'chat-vip', label: 'Chat VIP', path: '#' },
  { id: 'chat-support', label: 'Hỗ trợ', path: '#' },
  { id: 'chat-rooms', label: 'Phòng Chat', path: '#' },
]

const newsItems: NavItem[] = [
  { id: 'news-sports', label: 'Tin Thể Thao', path: '#' },
  { id: 'news-betting', label: 'Tin Cá Cược', path: '#' },
  { id: 'news-analysis', label: 'Phân Tích', path: '#' },
  { id: 'news-highlights', label: 'Highlight', path: '#' },
]

const handleNavClick = async (item: NavItem) => {
  await navigateTo(item.path)
}
</script>