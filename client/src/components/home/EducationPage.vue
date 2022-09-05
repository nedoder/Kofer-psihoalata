<template>
    <div>
        <header-component/>
        <post-list/>
        <contact-form/>
        <footer-component/>
    </div>
</template>

<script>

import HeaderComponent from './HeaderComponent.vue';
import ContactForm from './ContactForm.vue';
import FooterComponent from './FooterComponent.vue';
import PostList from './PostList.vue';

export default {
    name: 'EducationPage',
    components: {
      HeaderComponent, PostList, ContactForm, FooterComponent
    },
}
</script>