<template>
    <div class="flashcard" @click="flipCard">
      <div v-show="!isToggle">
        <div class="card-content center">
          <p>{{ front }}</p>
        </div>
      </div>
      <div v-show="isToggle">
        <div class="card-content center">
          <p>{{ back }}</p>
        </div>
      </div>
    </div>
  </template>

<script>
    export default {
  props: {
    front: {
      type: String,
      default: 'default front',  //needs to call json file with questions
    },
    back: {
      type: String,
      default: 'default back', //needs to call json file with answers
    }
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