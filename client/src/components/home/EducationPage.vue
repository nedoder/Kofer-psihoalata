<template>
    <div>
        <header-component/>
        <post-list/>
        <footer-component/>
    </div>
</template>

<script>

import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';
import PostList from './PostList.vue';

export default {
    name: 'EducationPage',
    components: {
      HeaderComponent, PostList, FooterComponent
    },
}
</script>