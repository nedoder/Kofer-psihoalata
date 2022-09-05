<template>
    <div>
        <header-component/>
        <footer-component/>
    </div>
</template>

<script>

import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';

export default {
  name: 'SupportPage',
  components: {
      HeaderComponent, FooterComponent
  },
 
}
</script>