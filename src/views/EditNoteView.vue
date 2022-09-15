<template>
  <div class="edit-note">
    <TheAddAndEditNote
      ref="addEditNoteRef"
      v-model="noteContent"
      bg-color="link"
      placeholder="Edit note"
    >
      <template #buttons>
        <div class="control">
          <RouterLink
            :to="{ name: 'notes' }"
            class="button is-link is-light"
            >Cancel</RouterLink
          >
        </div>
        <div class="control">
          <button
            class="button is-link has-background-success"
            :disabled="!noteContent"
            @click="handleSaveClicked"
          >
            Save Note
          </button>
        </div>
      </template>
    </TheAddAndEditNote>
  </div>
</template>

<script setup>
/*
  imports
*/
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import TheAddAndEditNote from "@/components/Notes/TheAddAndEditNote.vue"
import { useNotesStore } from "@/stores/storeNotes"

/*
  router
*/

const route = useRoute()
const router = useRouter()

/*
  store
*/
const notesStore = useNotesStore()

/*
note
*/

const noteContent = ref("")
// console.log(route.params.id)
noteContent.value = notesStore.getNoteContent(route.params.id)

/*
  Save clicked
*/

const handleSaveClicked = () => {
  notesStore.updateNote(route.params.id, noteContent.value)
  router.push("/")
}
</script>

<style scoped></style>
