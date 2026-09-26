<script setup lang="ts">

import { getTagColor } from '../composables/getTagColor.ts';


defineProps(['tags']);

</script>


<template>

    <div class="tag-container">
        <div v-for="tag in tags">
            <span class="tag" :style="{ backgroundColor: getTagColor(tag) }">{{ tag }}</span>
        </div>
    </div>

</template>