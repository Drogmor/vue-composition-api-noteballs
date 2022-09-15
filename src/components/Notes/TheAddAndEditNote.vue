<template>
  <div
    class="card p-4 mb-5"
    :class="`has-background-${bgColor}-dark`"
  >
    <label
      v-if="label"
      class="label has-text-white"
      >{{ label }}</label
    >
    <div class="field">
      <div class="control">
        <textarea
          ref="textareaRef"
          v-model="modelValue"
          v-autofocus
          class="textarea"
          :placeholder="placeholder"
          @input="$emit('update:modelValue', modelValue)"
        />
      </div>
    </div>
    <div class="field is-grouped is-flex-wrap-nowrap is-justify-content-end">
      <slot name="buttons" />
    </div>
  </div>
</template>

<script setup>
/* 
  imports
*/
import { ref } from "vue"
import { vAutofocus } from "@/directives/vAutofocus"

/* 
    props
  */

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "success",
  },
  placeholder: {
    type: String,
    default: "Type something...",
  },
  label: {
    type: String,
    default: "",
  },
})

/* 
  emits
*/

const emit = defineEmits(["update:modelValue"])

const textareaRef = ref(null)

const focusTextarea = () => {
  textareaRef.value.focus()
}

defineExpose({
  focusTextarea,
})
</script>

<style lang="scss" scoped></style>
