<script setup lang="ts">
import { computed, ref } from 'vue'



import type { PropType } from 'vue'
import type { Restaurant } from '@/types'

// defineProps and defineEmits are not available in setup() function.
// defineProps and defineEmits are available in <script setup> only.

// importing defineProps and defineEmits from vue are not required.
// import { defineProps, defineEmits } from 'vue'
// defineProps and defineEmits are refered to as compiler macros.


// type PropTypes = {
//   restaurant: {
//     type: Restaurant
//   }
// }
type PropTypes = {
  restaurant: Restaurant
}

const props = defineProps<PropTypes>();
// defineEmits(['delete-restaurant'])

// define emits in typescript 
const emits = defineEmits<{
  (e: 'delete-restaurant', restaurant: Restaurant): void
}>()


// defineProps({
//   restaurant: {
//     type: Object as PropType<Restaurant>,
//     default: true,
//   },
// })


// export default defineComponent({
//   props: {
//     restaurant: {
//       type: Object as PropType<Restaurant>,
//       required: true,
//     },
//   },
// emits: ['delete-restaurant'],

// props are required by default so, no need to add type guard.
const statusColor = computed(() => {
  switch (props.restaurant.status) {
    case 'Want to Try':
      return 'is-warning'
    case 'Recommended':
      return 'is-success'
    case 'Do Not Recommend':
      return 'is-danger'
    default:

  }
  // return error in statusColor computed if props.restaurant is not required.
  // if (props.restaurant) {
  //   switch (props.restaurant.status) {
  //     case 'Want to Try':
  //       return 'is-warning'
  //     case 'Recommended':
  //       return 'is-success'
  //     case 'Do Not Recommend':
  //       return 'is-danger'
  //     default:

  //   }
  // }

})

const deleteRestaurant = () => {
  emits('delete-restaurant', props.restaurant)
  // emit('delete-restaurant', restaurant.id)
}




</script>

<template>
  <article class="box">
    <div class="media">
      <aside class="media-left">
        <img src="https://placehold.jp/150x150.png" alt="" />
      </aside>
      <div class="media-content">
        <p class="title is-4 is-spaced mb-1">
          {{ restaurant.name }}
        </p>
        <p class="subtitle mb-2">
          <span class="tag" :class="statusColor">{{ restaurant.status }}</span>
        </p>
        <div class="content mb-2">
          {{ restaurant.address }}
        </div>
        <div>
          <button @click="deleteRestaurant" class="button is-small is-danger is-light">Delete</button>
        </div>
      </div>
    </div>
  </article>
</template>

<style></style>
