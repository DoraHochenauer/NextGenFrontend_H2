<script setup lang="ts">
//import BaseCard from './components/BaseCard.vue'
import NoteCard from './components/NoteCard.vue'
import NoteForm from './components/NoteForm.vue';
import SearchBar from './components/SearchBar.vue';
import { ref } from 'vue';
import { type Ref } from 'vue';

import { useNotes } from './composables/useNotes.js'
import { type Note } from './types/notes.ts'


let search: Ref<string> = ref('');


const { addNote, deleteNote, filteredNotes } = useNotes();



function Delete(noteId: number) {
  deleteNote(noteId);
}
function Add(title: string, content: string, tags: string[]) {
  const note: Note = { id: 0, title: title, content: content, tags: tags }
  addNote(note);
}


</script>

<template>

  <SearchBar v-model="search" class="searchbar" />


  <div class="note-board">
    <NoteCard @delete="Delete" v-for="note in filteredNotes(search)" :note="note" />
  </div>
  <NoteForm @add="Add" />
</template>
