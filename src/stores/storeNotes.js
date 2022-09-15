// stores/counter.js
import { defineStore } from "pinia"
import { v4 as uuidv4 } from "uuid"

export const useNotesStore = defineStore("notesStore", {
  state: () => {
    return {
      notes: [
        {
          id: uuidv4(),
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ea unde, tenetur odit neque explicabo rerum doloribus nihil ratione eaque! Quis quia nemo quidem molestias dignissimos cumque, id sunt error!",
        },
        {
          id: uuidv4(),
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ea unde, tenetur odit neque explicabo rerum doloribus.",
        },
        {
          id: uuidv4(),
          content:
            "Lorem Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ea unde, tenetur odit neque explicabo rerum doloribus.",
        },
      ],
    }
  },
  actions: {
    addNote(newNoteContent) {
      let id = uuidv4()

      let note = {
        id,
        content: newNoteContent,
      }
      this.notes.unshift(note)
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => note.id !== idToDelete)
    },
    updateNote(id, content) {
      let index = this.notes.findIndex((note) => note.id === id)
      this.notes[index].content = content
    },
  },
  getters: {
    getNoteContent: (state) => {
      // return state.notes[0].content
      return (id) => {
        return state.notes.filter((note) => note.id === id)[0].content
      }
    },
    getTotalNotesCount: (state) => {
      return state.notes.length
    },
    getTotalCharactersCount: (state) => {
      let counter = 0
      state.notes.forEach((note) => {
        counter += note.content.length
      })
      return counter
    },
  },
})
