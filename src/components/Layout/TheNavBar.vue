<template>
  <nav
    class="navbar is-dark"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <RouterLink
          :to="{ name: 'notes' }"
          class="navbar-item is-size-4 is-family-monospace"
          >Noteballs</RouterLink
        >
        <a
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': showMobileNav }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click.prevent="showMobileNav = !showMobileNav"
          ref="navBarBurger"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileNav }"
        ref="navbarMenuRef"
      >
        <div class="navbar-end">
          <RouterLink
            :to="{ name: 'notes' }"
            class="navbar-item"
            active-class="is-active"
            @click="showMobileNav = false"
          >
            Notes
          </RouterLink>
          <RouterLink
            :to="{ name: 'stats' }"
            class="navbar-item"
            active-class="is-active"
            @click="showMobileNav = false"
          >
            Stats
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
/* 
    imports
*/

import { ref } from "vue"
import { onClickOutside } from "@vueuse/core"

/* 
  mobile nav
*/

const showMobileNav = ref(false)

/* 
  click outside to close
*/

const navbarMenuRef = ref(null)
const navBarBurger = ref(null)

onClickOutside(
  navbarMenuRef,
  () => {
    showMobileNav.value = false
  },
  {
    ignore: [navBarBurger],
  }
)
</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
