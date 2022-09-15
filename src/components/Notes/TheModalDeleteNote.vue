<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div
      class="modal-card"
      ref="modalCardRef"
    >
      <header class="modal-card-head">
        <p class="modal-card-title">Delete note?</p>
        <button
          class="delete"
          aria-label="close"
          @click="closeModal"
        ></button>
      </header>
      <section class="modal-card-body">Are you sure you want to delete this note?</section>
      <footer class="modal-card-foot is-justify-content-end">
        <button
          class="button"
          @click="closeModal"
        >
          Cancel
        </button>
        <button
          class="button is-danger"
          @click="notesStore.deleteNote(noteId)"
        >
          Delete
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup>
/*
    imports
*/
import { ref, onMounted, onUnmounted } from "vue"
import { onClickOutside } from "@vueuse/core"
import { useNotesStore } from "@/stores/storeNotes"
/* props */
const props = defineProps({
  modelValue: {
    type: Boolean,
  },
  noteId: {
    type: String,
    required: true,
  },
})

/*
  emits
*/

const emit = defineEmits(["update:modelValue"])
/*
  Close modal
*/

const closeModal = () => {
  emit("update:modelValue", false)
}

/*
  click outside to close
*/

const modalCardRef = ref(null)

onClickOutside(modalCardRef, closeModal)

/*
  keyboard control
*/

const handleEscape = (e) => {
  if (e.key === "Escape") closeModal()
}

onMounted(() => {
  document.addEventListener("keyup", handleEscape)
})

onUnmounted(() => {
  document.removeEventListener("keyup", handleEscape)
})

/* 
  store
*/
const notesStore = useNotesStore()
</script>

<style lang="scss" scoped></style>
