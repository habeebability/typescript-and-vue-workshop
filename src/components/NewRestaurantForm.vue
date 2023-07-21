<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'

import { defineComponent, onMounted, ref } from 'vue';

import { restaurantStatusList } from '@/constants'
import type { Restaurant } from '@/types'

const elNameInput = ref<HTMLInputElement | null>(null)

// emits: ['add-new-restaurant', 'cancel-new-restaurant'],

const emits = defineEmits<{
  (e: 'add-new-restaurant', restaurant: Restaurant): void,
  (e: 'cancel-new-restaurant'): void
}>()
const newRestaurant = ref<Restaurant>({
  id: uuidv4(),
  name: '',
  address: '',
  website: '',
  status: 'Want to Try',
})
// restaurantStatusList

// input event
// KeyboardEvent

const updateName = (e: KeyboardEvent) => {
  // hijacking event.
  newRestaurant.value.name = (e.target as HTMLInputElement).value
}

// const updateName = (event: InputEvent) => {
//   if (event.data == ' ') {
//     // console.log((event.target as HTMLInputElement).value);
//     if (event.target) {

//       console.log((event.target as HTMLInputElement).value);
//     }


//   }
// }

const addRestaurant = () => {
  emits('add-new-restaurant', newRestaurant.value)
}
const cancelRestaurant = () => {
  emits('cancel-new-restaurant')
}

onMounted(() => {
  // if(elNameInput.value) {
  //   elNameInput.value.focus()
  // }
  elNameInput.value?.focus()
})


</script>

<template>
  <form @submit.prevent>
    <div class="field">
      <div class="field">
        <label for="name" class="label">Name</label>
        <div class="control">
          <input :value="newRestaurant.name" @keyup.space="updateName" type="text" class="input is-large"
            placeholder="Beignet and the Jets" required ref="elNameInput" />
        </div>
      </div>
      <div class="field">
        <label for="website" class="label">Website</label>
        <div class="control">
          <input v-model="newRestaurant.website" type="text" class="input" placeholder="www.beignetandthejets.com" />
        </div>
      </div>
      <div class="field mb-5">
        <label for="status" class="label">Status</label>
        <div class="select">
          <select v-model="newRestaurant.status" id="status">
            <option v-for="status in restaurantStatusList" :value="status" :key="`option-${status}`">
              {{ status }}
            </option>
          </select>
        </div>
      </div>
      <div class="field">
        <div class="buttons">
          <button @click="addRestaurant" class="button is-success">Create</button>
          <button @click="cancelRestaurant" class="button is-light">Cancel</button>
        </div>
      </div>
    </div>
  </form>
</template>

<style></style>
