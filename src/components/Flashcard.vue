<template>
  <div>
    <div v-if="showFront" @click="showFront = false">{{ front }}</div>
    <div v-else @click="showFront = true">{{ back }}</div>
  </div>
</template>

<script>
export default {
  props: {
    front: {
      type: String,
      required: true
    },
    back: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showFront: true
    }
  }
}
</script>