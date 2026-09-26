import { computed } from 'vue'
import { useLocalStorage } from './useLocalStorage.js'


export function useNotes() {
  const notes = useLocalStorage('quicknotes', [])

  function addNote(note) {
    const maxId = notes.value.reduce(
      (max, note) => Math.max(max, note.id),
      0
    )
    note.id = maxId + 1;

    notes.value.push(note);
  }

  function deleteNote(id) {
    notes.value = notes.value.filter(function (note) {
      return note.id !== id
    })
  }

  function filteredNotes(search) {

    
    if (search == '' || search == null) {
      
      console.log('search empty');
      return notes.value;
    }
    
    else {
      
      console.log('search not empty');
      return notes.value.filter(note =>
        note.title.toLowerCase().includes(search.toLowerCase().trim()) ||
        note.content.toLowerCase().includes(search.toLowerCase().trim()) ||
        note.tags.some(tag =>
          tag.toLowerCase().includes(search.toLowerCase().trim())
        )
      )


    }


  }

  return { notes, addNote, deleteNote, filteredNotes }
}
