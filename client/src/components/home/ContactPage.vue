<template>
    <div>
        <header-component/>
        <contact-form/>
        <footer-component/>
    </div>
</template>

<script>

import HeaderComponent from './HeaderComponent.vue';
import ContactForm from './ContactForm.vue';
import FooterComponent from './FooterComponent.vue';

export default {
  name: 'ContactPage',
  components: {
      HeaderComponent, ContactForm, FooterComponent
  },
}
</script>