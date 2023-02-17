<template>
  <div>
    <div v-for="card in cards" :key="card.id">
      <Flashcard :front="card.front" :back="card.back" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Flashcard from '@/components/Flashcard.vue'

export default {
  components: {
    Flashcard
  },
  data() {
    return {
      cards: []
    }
  },
  mounted() {
    axios
      .get('/path/to/cards.json')
      .then(response => {
        this.cards = response.data
      })
  }
}
</script>
    

<style>
    .flashcard {
  border: 1px whitesmoke;
  border-style: solid;
  padding: 30px;
  margin: 10px;
}

    p {
        text-align: center;
    }


</style>