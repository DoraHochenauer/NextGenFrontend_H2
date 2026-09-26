<script setup lang="ts">
import BaseCard from './BaseCard.vue'
import { type Note } from '../types/notes.ts'


import { getTagColor } from '../composables/getTagColor.ts';


const { note } = defineProps<{
    note: Note
}>()

const emit = defineEmits<{
    delete: [noteId: number]
}>()



</script>

<template>
    <div class="card-wrapper">

        <BaseCard>
            <template #header>
                <h4>{{ note.id }}:</h4>
                <h1>{{ note.title }}</h1>
            </template>
            <p>{{ note.content }}</p>
        </BaseCard>
        <div class="tag-container">

            <div v-for="tag in note.tags">
                <span class="tag" :style="{ backgroundColor: getTagColor(tag) }">{{ tag }}</span>

            </div>
        </div>

        <button @click="$emit('delete', note.id)">Löschen</button>

    </div>

</template>
