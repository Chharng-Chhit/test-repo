<template>
  <div class="bg-gray-100 p-6">
    <!-- First Section -->
    <div class="mb-12">
      <!-- Section Header -->
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-gray-600 text-lg font-medium">SECTION_Thumbnails</h2>
        <button class="flex items-center text-gray-600 hover:text-gray-800 text-sm">
          Xem tất cả
          <ChevronRight class="w-4 h-4 ml-1" />
        </button>
      </div>

      <!-- Thumbnails Grid with Navigation -->
      <div class="relative">
        <!-- Navigation Buttons -->
        <button
          @click="prevSlide"
          :disabled="currentSlide === 0"
          :class="[
            'absolute left-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full p-2 shadow-lg transition-all duration-200',
            currentSlide === 0 
              ? 'bg-gray-300 opacity-50 cursor-not-allowed' 
              : 'bg-white bg-opacity-80 hover:bg-opacity-100'
          ]"
        >
          <ChevronLeft class="w-6 h-6 text-gray-600" />
        </button>
        
        <button
          @click="nextSlide"
          :disabled="currentSlide >= maxSlides - 1"
          :class="[
            'absolute right-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full p-2 shadow-lg transition-all duration-200',
            currentSlide >= maxSlides - 1
              ? 'bg-gray-300 opacity-50 cursor-not-allowed'
              : 'bg-white bg-opacity-80 hover:bg-opacity-100'
          ]"
        >
          <ChevronRight class="w-6 h-6 text-gray-600" />
        </button>

        <!-- Scrollable Thumbnails Container -->
        <div class="overflow-hidden px-12">
          <div 
            class="flex transition-transform duration-300 ease-in-out gap-4"
            :style="{ transform: `translateX(-${currentSlide * slideDistance}px)` }"
          >
            <ThumbnailCard
              v-for="thumbnail in firstSectionThumbnails"
              :key="thumbnail.id"
              :thumbnail="thumbnail"
              @click="handleThumbnailClick"
              class="flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Second Section -->
    <div class="mb-12">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-gray-600 text-lg font-medium">SECTION_Thumbnails</h2>
        <button 
          @click="toggleExpanded"
          class="flex items-center text-gray-600 hover:text-gray-800 text-sm"
        >
          {{ isExpanded ? 'Thu gọn' : 'Xem thêm' }}
          <ChevronRight :class="['w-4 h-4 ml-1 transition-transform', isExpanded ? 'rotate-90' : '']" />
        </button>
      </div>

      <!-- Three Rows of Thumbnails -->
      <div class="space-y-4">
        <div 
          v-for="(row, rowIndex) in secondSectionRows"
          :key="rowIndex"
          :class="['grid grid-cols-5 gap-4 transition-all duration-300', !isExpanded && rowIndex > 0 ? 'hidden' : '']"
        >
          <ThumbnailCard
            v-for="thumbnail in row"
            :key="thumbnail.id"
            :thumbnail="thumbnail"
            @click="handleThumbnailClick"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

interface Thumbnail {
  id: number
  sport: 'basketball' | 'esports' | 'soccer'
  teamA: string
  teamB: string
  commentator: string
  status: 'LIVE' | 'Huy lich' | 'Dat lich'
  statusColor: string
  hot: boolean
  date: string
  time: string
}

// Reactive state
const currentSlide = ref(0)
const isExpanded = ref(false)

// Carousel configuration
const itemsPerSlide = 5 // Number of items visible at once
const cardWidth = 240 // w-60 = 240px
const gapWidth = 16 // gap-4 = 16px
const slideDistance = cardWidth + gapWidth // Total distance per slide

// Computed properties
const maxSlides = computed(() => {
  return Math.max(0, firstSectionThumbnails.length - itemsPerSlide + 1)
})

// Sample data - Add more items to test scrolling
const firstSectionThumbnails: Thumbnail[] = [
  {
    id: 1,
    sport: 'basketball',
    teamA: 'Team A',
    teamB: 'Team B',
    commentator: 'BLV NONAME',
    status: 'LIVE',
    statusColor: 'bg-red-500',
    hot: true,
    date: '25.06.2023',
    time: '20:30'
  },
  {
    id: 2,
    sport: 'esports',
    teamA: 'Team A',
    teamB: 'Team B',
    commentator: 'BLV NONAME',
    status: 'Huy lich',
    statusColor: 'bg-gray-600',
    hot: true,
    date: '25.06.2023',
    time: '20:30'
  },
  {
    id: 3,
    sport: 'soccer',
    teamA: 'Team A',
    teamB: 'Team B',
    commentator: 'BLV NONAME',
    status: 'Dat lich',
    statusColor: 'bg-yellow-600',
    hot: true,
    date: '25.06.2023',
    time: '20:30'
  },
  {
    id: 4,
    sport: 'basketball',
    teamA: 'Team A',
    teamB: 'Team B',
    commentator: 'BLV NONAME',
    status: 'Dat lich',
    statusColor: 'bg-yellow-600',
    hot: true,
    date: '25.06.2023',
    time: '20:30'
  },
  {
    id: 5,
    sport: 'esports',
    teamA: 'Team A',
    teamB: 'Team B',
    commentator: 'BLV NONAME',
    status: 'Dat lich',
    statusColor: 'bg-yellow-600',
    hot: true,
    date: '25.06.2023',
    time: '20:30'
  },
  {
    id: 6,
    sport: 'basketball',
    teamA: 'Team C',
    teamB: 'Team D',
    commentator: 'BLV ANOTHER',
    status: 'LIVE',
    statusColor: 'bg-red-500',
    hot: false,
    date: '26.06.2023',
    time: '21:00'
  },
  {
    id: 7,
    sport: 'soccer',
    teamA: 'Team E',
    teamB: 'Team F',
    commentator: 'BLV THIRD',
    status: 'Huy lich',
    statusColor: 'bg-gray-600',
    hot: true,
    date: '26.06.2023',
    time: '22:00'
  },
  {
    id: 8,
    sport: 'esports',
    teamA: 'Team G',
    teamB: 'Team H',
    commentator: 'BLV FOURTH',
    status: 'Dat lich',
    statusColor: 'bg-yellow-600',
    hot: false,
    date: '27.06.2023',
    time: '19:30'
  },
  {
    id: 1,
    sport: 'basketball',
    teamA: 'Team A',
    teamB: 'Team B',
    commentator: 'BLV NONAME',
    status: 'LIVE',
    statusColor: 'bg-red-500',
    hot: true,
    date: '25.06.2023',
    time: '20:30'
  },
  {
    id: 2,
    sport: 'esports',
    teamA: 'Team A',
    teamB: 'Team B',
    commentator: 'BLV NONAME',
    status: 'Huy lich',
    statusColor: 'bg-gray-600',
    hot: true,
    date: '25.06.2023',
    time: '20:30'
  },
  {
    id: 3,
    sport: 'soccer',
    teamA: 'Team A',
    teamB: 'Team B',
    commentator: 'BLV NONAME',
    status: 'Dat lich',
    statusColor: 'bg-yellow-600',
    hot: true,
    date: '25.06.2023',
    time: '20:30'
  },
  {
    id: 4,
    sport: 'basketball',
    teamA: 'Team A',
    teamB: 'Team B',
    commentator: 'BLV NONAME',
    status: 'Dat lich',
    statusColor: 'bg-yellow-600',
    hot: true,
    date: '25.06.2023',
    time: '20:30'
  },
  {
    id: 5,
    sport: 'esports',
    teamA: 'Team A',
    teamB: 'Team B',
    commentator: 'BLV NONAME',
    status: 'Dat lich',
    statusColor: 'bg-yellow-600',
    hot: true,
    date: '25.06.2023',
    time: '20:30'
  },
  {
    id: 6,
    sport: 'basketball',
    teamA: 'Team C',
    teamB: 'Team D',
    commentator: 'BLV ANOTHER',
    status: 'LIVE',
    statusColor: 'bg-red-500',
    hot: false,
    date: '26.06.2023',
    time: '21:00'
  },
  {
    id: 7,
    sport: 'soccer',
    teamA: 'Team E',
    teamB: 'Team F',
    commentator: 'BLV THIRD',
    status: 'Huy lich',
    statusColor: 'bg-gray-600',
    hot: true,
    date: '26.06.2023',
    time: '22:00'
  },
  {
    id: 8,
    sport: 'esports',
    teamA: 'Team G',
    teamB: 'Team H',
    commentator: 'BLV FOURTH',
    status: 'Dat lich',
    statusColor: 'bg-yellow-600',
    hot: false,
    date: '27.06.2023',
    time: '19:30'
  }
]

// Create multiple rows for second section
const secondSectionRows = computed(() => {
  const rows = []
  for (let i = 0; i < 3; i++) {
    rows.push([
      {
        id: 100 + i * 5 + 1,
        sport: 'basketball' as const,
        teamA: 'Team A',
        teamB: 'Team B',
        commentator: 'BLV NONAME',
        status: 'LIVE' as const,
        statusColor: 'bg-red-500',
        hot: true,
        date: '25.06.2023',
        time: '20:30'
      },
      {
        id: 100 + i * 5 + 2,
        sport: 'esports' as const,
        teamA: 'Team A',
        teamB: 'Team B',
        commentator: 'BLV NONAME',
        status: 'Huy lich' as const,
        statusColor: 'bg-gray-600',
        hot: true,
        date: '25.06.2023',
        time: '20:30'
      },
      {
        id: 100 + i * 5 + 3,
        sport: 'soccer' as const,
        teamA: 'Team A',
        teamB: 'Team B',
        commentator: 'BLV NONAME',
        status: 'Dat lich' as const,
        statusColor: 'bg-yellow-600',
        hot: true,
        date: '25.06.2023',
        time: '20:30'
      },
      {
        id: 100 + i * 5 + 4,
        sport: 'basketball' as const,
        teamA: 'Team A',
        teamB: 'Team B',
        commentator: 'BLV NONAME',
        status: 'Dat lich' as const,
        statusColor: 'bg-yellow-600',
        hot: true,
        date: '25.06.2023',
        time: '20:30'
      },
      {
        id: 100 + i * 5 + 5,
        sport: 'esports' as const,
        teamA: 'Team A',
        teamB: 'Team B',
        commentator: 'BLV NONAME',
        status: 'Dat lich' as const,
        statusColor: 'bg-yellow-600',
        hot: true,
        date: '25.06.2023',
        time: '20:30'
      }
    ])
  }
  return rows
})

// Functions
const nextSlide = () => {
  if (currentSlide.value < maxSlides.value - 1) {
    currentSlide.value++
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}

const handleThumbnailClick = (thumbnail: Thumbnail) => {
  console.log('Thumbnail clicked:', thumbnail)
  // Add your navigation logic here
  // Example: navigateTo(`/watch/${thumbnail.id}`)
}
</script>