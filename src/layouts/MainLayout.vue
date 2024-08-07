<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-lightnude">
        <q-btn v-if="$q.screen.width < 600" style="color: brown;" flat dense round icon="menu" aria-label="Menu"
          @click="toggleLeftDrawer" />
        <q-space />
        <div v-if="$q.screen.width >= 600" style="color: brown;">
          <q-btn v-for="item in menuItems" :key="item.label" flat :label="item.label" @click="goTo(item.route)" />
        </div>
        <q-space />
      </q-toolbar>
    </q-header>
    <q-drawer v-if="$q.screen.width < 600" v-model="leftDrawerOpen" show-if-above bordered side="left" overlay>
      <q-list>
        <q-item-label header>
          Menu
        </q-item-label>

        <q-item v-for="item in menuItems" :key="item.label" clickable @click="goTo(item.route)">
          <q-item-section>
            {{ item.label }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="accent" />
      </q-page-scroller>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const leftDrawerOpen = ref(false)

const menuItems = [
  { label: 'Início', route: 'inicio' },
  { label: 'Nossa História', route: 'nossa-historia' },
  { label: 'Lista de Presentes', route: 'lista-de-presentes' },
  { label: 'Recados', route: 'recados' }
]

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const goTo = (route) => {
  router.push({ name: route })
}
</script>

<style scoped></style>
