<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ notesStore.getTotalNotesCount }}</td>
        </tr>
        <tr>
          <td>Total characters</td>
          <td>{{ notesStore.getTotalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
      v-model="loveNoteballs"
      v-Autofocus
      type="text"
      class="input"
      placeholder="Do you love noteballs?"
    />
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useNotesStore } from "../stores/storeNotes"
import { vAutofocus } from "@/directives/vAutofocus"
import { useWatchCharacters } from "@/use/useWatchCharacters"

const notesStore = useNotesStore()

const loveNoteballs = ref("")
useWatchCharacters(loveNoteballs, 50)
</script>

<style lang="scss" scoped></style>
