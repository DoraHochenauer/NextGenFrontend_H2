<script setup lang="ts">

import { ref } from 'vue';
import { type Ref } from 'vue';
import { getTagColor } from '../composables/getTagColor.ts';

//import { useLocalStorage } from '../composables/useLocalStorage.js';


//let note: Ref<Note> = ref({ id: 0, title: '', content: '', tags: [] });

let title: Ref<string> = ref('');
let content: Ref<string> = ref('');

let tags: Ref<string[]> = ref([]);


let currentTag: Ref<string> = ref('');

const emit = defineEmits<{
    add: [title: string, content: string, tags: string[]]
}>()



function AddTag(tag: string) {
    tags.value.push(tag);
    currentTag = ref('');
}
</script>


<template>
    <div class="note-form">

        <h2>Neue Notiz anlegen</h2>
        <input class="note-form-input" v-model="title" type="text" placeholder="Titel einfügen..." />
        <textarea class="note-form-input" v-model="content" placeholder="Inhalt einfügen" />
        <input class="note-form-input" v-model="currentTag" type="text" placeholder="Tag einfügen" />


        <button @click="AddTag(currentTag)"> Tag hinzufügen </button>
        <div class="tag-container">
            <div v-for="tag in tags">
                <span class="tag" :style="{ backgroundColor: getTagColor(tag) }">{{ tag }}</span>


            </div>
        </div>
        <button @click="$emit('add', title, content, tags)"> Notiz hinzufügen </button>
    </div>
</template>