<script lang="ts" setup>
import { ref, computed } from 'vue';

let remainingSpots = ref(0)
setInterval(() => {
    remainingSpots.value = Math.floor(Math.random() * 20)
}, 5000)
let color = computed(() => remainingSpots.value > 5 ? 'text-green-600' : 'text-red-600')
</script>

<template>
    <div class="py-4 font-bold text-lg">
        <span :class="color">{{ remainingSpots }}</span>&nbsp;Remaining Spots
    </div>
</template>