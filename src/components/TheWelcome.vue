<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'

</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Study Tools</template>

    The
    <a target="_blank" href="https://frameworkltc.com/">Flashcard</a>
    library offers a helpful way to learn pharmacy terms and definitions used within Softwriters' products. 
    You can also <a target="_blank" href="https://frameworkltc.com/">create</a> a deck or generate a pop quiz. Go wild!
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>The Softwriters Ecosystem</template>

    insert image of products with arrows and stuff here.

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Official Documentation Links</template>

    Here are some resources to bookmark:
    <br>
    <a target="_blank" href="https://frameworkltc.com/">Softwriters Website</a>
    <br>
    <a target="_blank" href="https://frameworkltc.com/support">Customer Engagement Zone</a>
    <br>
    <a target="_blank" href="https://softwriters.freshdesk.com/support/solutions">Knowledge Base</a>


  </WelcomeItem>

</template>

<style>

a:link {
  color: #f58320;
}

a:visited {
  color: #c15903;
}


</style>
