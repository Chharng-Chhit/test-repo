<template>
  <div 
    class="relative w-60 h-50 dark:bg-gray-800 bg-blue-900 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-200"
    @click="$emit('click', thumbnail)"
  >
    <!-- Background Image -->
    <div class="relative h-36 bg-gradient-to-br from-blue-900 to-purple-900">
      
      <!-- Hot Badge -->
      <div 
        v-if="thumbnail.hot"
        class="absolute -top-1 -right-2 text-white text-xs px-2 py-1 rounded font-bold z-10"
      >
        <!-- HOT -->
         <img :src="HotIcon" alt="" class="h-10">
      </div>

      <!-- Sport Icon and Teams -->
      <div class="absolute inset-0">
        <!-- Basketball -->
        <div 
          v-if="thumbnail.sport === 'basketball'"
          class="w-full h-full flex items-center justify-center"
        >
            <img 
                :src="Basketball"
                alt="Basketball Icon"
                class="w-full h-full object-cover"
          />
        </div>

        <!-- Esports -->
        <div 
          v-else-if="thumbnail.sport === 'esports'"
          class="w-full h-full flex items-center justify-center"
        >
            <img 
                :src="Esport"
                alt="Esport Icon"
                class="w-full h-full object-cover"
          />
        </div>

        <!-- Soccer -->
        <div 
          v-else-if="thumbnail.sport === 'soccer'"
          class="w-full h-full flex items-center justify-center"
        >
            <img 
                :src="Soccer"
                alt="Soccer Icon"
                class="w-full h-full object-cover"
            />
        </div>
      </div>
    </div>

    <!-- Bottom Info Bar -->
    <div class="bg-gradient-to-r from-yellow-400 to-orange-400 p-3 text-black flex rounded-t-xl">
      <div class="text-center w-[70%]">
        <div class="text-xs font-medium">
          {{ thumbnail.teamA }} vs {{ thumbnail.teamB }}
        </div>
        <div class="text-xs font-bold">
          {{ thumbnail.commentator }}
        </div>
      </div>
      <div class="ml-auto text-xs font-medium w-[30%] h-9 justify-center flex items-center">
        <div v-if="thumbnail.status === 'LIVE'" class="text-white border border-red-500 bg-red-500 px-2 py-1 rounded">
            <span class="font-bold">LIVE</span>
        </div>
        <div v-if="thumbnail.status === 'Huy lich'" class="text-white border border-red-500 bg-red-500 px-2 py-1 rounded">
            <font-awesome icon="bell-slash" style="font-size: 30px" />
            <div class="font-bold">Huy lich</div>
        </div>
        <div v-if="thumbnail.status === 'Dat lich'" class="text-white border border-red-500 bg-red-500 px-2 py-1 rounded">
            <span class="font-bold">LIVE</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Basketball from '@/assets/image/ball.png'
import HotIcon from '@/assets/image/hot.png'
import Esport from '@/assets/image/esport.png'
import Soccer from '@/assets/image/soccer.png'
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

interface Props {
  thumbnail: Thumbnail
}

defineProps<Props>()
defineEmits<{
  click: [thumbnail: Thumbnail]
}>()
</script>

