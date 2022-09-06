<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="white">{{ msg }}</h1>
    <h3>
      Let's Learn About Framework LTC!
      <div class = "link_stuff">
      <a target="blank" href="https://frameworkltc.com/"> A Softwriters, Inc. Product</a>
      </div>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  color: #f58320;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.link_stuff {
  color: white;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

a:any-link {
  color:#f58320;
}

a:hover {
  color: grey;
}
</style>
