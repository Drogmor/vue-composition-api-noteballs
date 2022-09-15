<template>
  <div class="notes">
    <TheAddAndEditNote
      ref="addEditNoteRef"
      v-model="newNote"
      placeholder="Add a new note"
    >
      <template #buttons>
        <div class="control">
          <button
            :disabled="!newNote"
            class="button is-link has-background-success"
            @click="addNote"
          >
            Add New Note
          </button>
        </div>
      </template>
    </TheAddAndEditNote>
    <TheNote
      v-for="note in notesStore.notes"
      :key="note.id"
      :note="note"
    />
  </div>
</template>

<script setup>
/*
  imports
*/
import { ref } from "vue"
import TheNote from "@/components/Notes/TheNote.vue"
import TheAddAndEditNote from "@/components/Notes/TheAddAndEditNote.vue"
import { useNotesStore } from "@/stores/storeNotes"
import { useWatchCharacters } from "@/use/useWatchCharacters"

/* 
  store
*/

const notesStore = useNotesStore()

/* 
  notes
*/
const newNote = ref("")
// const newNoteRef = ref(null)
const addEditNoteRef = ref(null)

const addNote = () => {
  notesStore.addNote(newNote.value)
  newNote.value = ""
  addEditNoteRef.value.focusTextarea()
  // newNoteRef.value.focus()
}

/* 
  watch characters
*/
useWatchCharacters(newNote, 100)
</script>

<style lang="scss" scoped></style>

<!--

  <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            ref="newNoteRef"
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note"
          />
        </div>
      </div>
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            :disabled="!newNote"
            class="button is-link has-background-success"
            @click="addNote"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div> 
const notes = ref([
  {
    id: "id1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ea unde, tenetur odit neque explicabo rerum doloribus nihil ratione eaque! Quis quia nemo quidem molestias dignissimos cumque, id sunt error!",
  },
  {
    id: "id2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ea unde, tenetur odit neque explicabo rerum doloribus.",
  },
])

// let currentDate = new Date().getTime(),
  //   id = currentDate.toString()

  // let note = {
  //   id,
  //   content: newNote.value,
  // }
  // notes.value.unshift(note)

/*
  deleteNote
*/

const deleteNote = (idToDelete) => {
  notes.value = notes.value.filter((note) => {
    return note.id !== idToDelete
  })
}
-->
