<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'
import { ref } from 'vue';

function getTimeForTimezone(date: Date, timezone: string) {
    return new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hourCycle: 'h12',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
    }).format(date)
}

let timerId = 0
let time = ref('');
onMounted(() => {
    timerId = setInterval(() => {
        time.value = getTimeForTimezone(new Date(), 'US/Pacific')
    }, 1000)
})
onUnmounted(() => {
    clearInterval(timerId)
})
</script>

<template>
    <div class="text-xl">
        {{ time }}
    </div>
</template>