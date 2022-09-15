import { createRouter, createWebHashHistory } from "vue-router"
import ViewNotesView from "@/views/ViewNotesView.vue"

const routes = [
  {
    path: "/",
    name: "notes",
    component: ViewNotesView,
  },
  {
    path: "/editNote/:id",
    name: "edit-note",
    component: () => import("@/views/EditNoteView.vue"),
  },
  {
    path: "/stats",
    name: "stats",
    component: () => import("@/views/ViewStatsView.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
