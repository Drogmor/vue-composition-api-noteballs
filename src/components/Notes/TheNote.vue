<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characterLength }} </small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink
        :to="`/editNote/${note.id}`"
        class="card-footer-item"
        >Edit</RouterLink
      >
      <a
        href="#"
        class="card-footer-item"
        @click.prevent="modals.deleteNote = true"
        >Delete</a
      >
    </footer>
    <TheModalDeleteNote
      v-if="modals.deleteNote"
      :noteId="note.id"
      v-model="modals.deleteNote"
    ></TheModalDeleteNote>
  </div>
</template>

<script setup>
/*
  imports
*/

import { computed, reactive } from "vue"
import { useNotesStore } from "@/stores/storeNotes"
import TheModalDeleteNote from "@/components/Notes/TheModalDeleteNote.vue"

/*
  props
*/

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
})

/*
  store
*/

const notesStore = useNotesStore()

/*
  character length
*/

const characterLength = computed(() => {
  let length = props.note.content.length
  let description = length > 1 ? "characters" : "character"
  return `${length} ${description}`
})

/*
  modals
*/

const modals = reactive({
  deleteNote: false,
})
</script>

<style lang="scss" scoped></style>
