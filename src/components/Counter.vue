<script lang="ts" setup>
import { ref } from 'vue';

let count = ref(0);
</script>

<template>
    <div class="card">
        <p>{{ count }}</p>
        <button class="btn" role="button" @click="count++">increment</button>
        <button class="btn" role="button" @click="count--">decrement</button>
    </div>
</template>