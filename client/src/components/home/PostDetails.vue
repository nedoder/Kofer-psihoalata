<template>
    <div class="single-post">
        <header-component/>
       
        <div class="post-details">
            <h4>{{item.title}}</h4>
            <div class="single-post-image">
                <img :src="$imagePath + item.image"/>
            </div>
            <p class="single-post-category">{{item.category.category}}</p>
            <p class="single-post-author">Kreirao/la <span class="post-username">{{item.user.username}}</span> <span>|</span> Datum objave: {{new Date(item.createdAt).toLocaleString('en-us',{month:'long', day: 'numeric', year:'numeric'})}}</p>
            <div  class="single-post-content">
                <p v-html=item.content></p>
            </div>
        </div>
        <contact-form/>
        <footer-component/>
    </div>
</template>
    
    
<script>
import requests from '../../services/services';    

import HeaderComponent from './HeaderComponent.vue';
import ContactForm from './ContactForm.vue'
import FooterComponent from './FooterComponent.vue'; 
export default {
   name: 'PostDetails',
   components: {HeaderComponent, ContactForm, FooterComponent},
    data: () => ({
     item: {
        date: '',
        category: '',
        comments: [],
        answers: [],
        user: '',
        title: '',
        image: ''
     }
    }),
    
    mounted() {
        requests.getPost(this.$route.params.id)
        .then(response => {
            this.item = response.data
        })
        .catch(error => {
            console.log(error.response)
        }) 
    }
     
}
</script>

<style scoped>
.single-post {
    width: 100%;
}

.post-details {
    width: 90%;
    margin: 0 auto;
    margin-top: 10rem;
}

.post-details h4  {
    font-family: 'Ribeye Marrow', cursive;
    font-size: 2rem;
    color: var(--light-black);
}

.single-post-image img {
    border-radius: 1rem;
    margin: 2rem 0;
    width: 100%;
}


.single-post-category {
    text-transform: uppercase;
    color: rgb(108, 110, 103)
}

.single-post-author {
    color: rgb(108, 110, 103);
    margin: 1rem 0;
}

.post-username {
    color: var(--pink);
}

.single-post-content {
    margin: 2rem 0;
    overflow: hidden;
}

.single-post-content p, .single-post-content blockquote, .single-post-content strong, .single-post-content u, .single-post-content s, .single-post-content em, .single-post-content hr, .single-post-content h2, .single-post-content ol, .single-post-content ul, .single-post-content h3, .single-post-content h4, .single-post-content h5, .single-post-content h6, .single-post-content a {
    display: contents;
}
  
.single-post-content p:after, .single-post-content blockquote::after, .single-post-content strong::after, .single-post-content s::after, .single-post-content u::after, .single-post-content em::after, .single-post-content hr::after, .single-post-content h2::after, .single-post-content ol::after, .single-post-content ul::after, .single-post-content h3::after, .single-post-content h4::after, .single-post-content h5::after, .single-post-content h6::after, .single-post-content a::after {
    content: "\A";
    white-space:pre;
}

.single-post-content img {
    border-radius: 1rem !important;
    margin: 2rem 0;
    max-width: 100%;
} 

img  {
    border-radius: 1rem !important;
    margin: 2rem 0;
    max-width: 100%;
}
</style>
    
        
   