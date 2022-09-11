<template>
    <div class="single-post">
        <header-component/>
       
        <div class="post-details">
            <h3>{{item.title}}</h3>
            <div class="single-post-image">
                <img :src="$imagePath + item.image" alt="Post image"/>
            </div>
            <p class="single-post-category">{{item.category.category}}</p>
            <p class="single-post-author">Kreirao/la <span class="post-username">{{item.user.username}}</span> <span>|</span> Datum objave: {{new Date(item.createdAt).toLocaleString('en-us',{month:'long', day: 'numeric', year:'numeric'})}}</p>
            <div  class="single-post-content" id="post-content" v-html=item.content>
            </div>
        </div>
        <div class="comment-box">
            <h4>Komentari ({{item.comments.length}})</h4>
            <div class="comment-form">
                <input required name="name" v-model="comment" placeholder="Ime (opciono)" type="text" autocomplete="off" class="name">
                <textarea name="message" v-model="message" rows="4" placeholder="Poruka" class="message"></textarea>
                <button class="button"  @submit="onSubmit">Pošalji</button>
            </div>
            <div class="comment-list" v-for="comment in item.comments" :key="comment.id">
                <comment-component :items="comment"/>
            </div>
        </div>
        <footer-component/>
    </div>
</template>
    
    
<script>
import requests from '../../services/services';    

import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue'; 
import CommentComponent from './CommentComponent.vue';

export default {
   name: 'PostDetails',
   components: {HeaderComponent, CommentComponent, FooterComponent},
    data: () => ({
     item: {
        date: '',
        category: '',
        comments: [],
        answers: [],
        user: '',
        title: '',
        image: '',
     },
     comment: '',
    message: ''
    }),

    methods: {

        onSubmit() {
            // 
        }
    },
    
    mounted() {
        requests.getPost(this.$route.params.id)
        .then(response => {
            this.item = response.data
            console.log(response.data)
        })
        .catch(error => {
            console.log(error.response)
        }) 
    }
     
}
</script>

<style>

.single-post {
    width: 100%;
}

.post-details, .comment-box {
    width: 90%;
    margin: 0 auto;
    margin-top: 8rem;
    padding: 0 1rem;
}

.post-details h3, .comment-box h4  {
    font-family: 'Ribeye Marrow', cursive;
    font-size: 2rem;
    color: var(--light-black);
}

.comment-form, .reply-form {
    text-align: center;
}
.name, .reply-name, .message, .reply-message {
  display: block;
  border-radius: 1rem;
  border:0; 
  outline:0;
  padding: 1rem;
  resize: none;
  margin: 1.5rem 0;
  width: 100%;
  box-shadow:  0px 2px 5px rgba(0, 0, 0, 0.1), 0px -2px 5px rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(1rem);
}

.name:focus, .reply-name:focus, .message:focus, .reply-message:focus {
  box-shadow:  inset 0px 2px 5px rgba(0, 0, 0, 0.1), inset 0px -2px 5px rgba(255, 255, 255, 0.5);
}

.button, .reply-button {
  width: 9rem;
  background: var(--black);
  border-radius: 1rem;
  outline: none;
  border: none;
  padding: .5rem 0;
  color: var(--white);
  font-weight:600;
  box-shadow:  inset 0px 2px 5px rgba(0, 0, 0, 0.1), inset 0px -2px 5px rgba(255, 255, 255, 0.5);
  transition: all .5s ease;
}

.button:hover, .reply-button:hover {
  cursor: pointer;
  letter-spacing: .5rem;
}

.reply-form {
    height: 0;
    display: none;
    transition: all .5s ease;
}

.single-comment, .single-answer {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem 0;
    box-shadow:  0px 2px 5px rgba(0, 0, 0, 0.1),  0px -2px 5px rgba(255, 255, 255, 0.5);
    border-radius: 1rem;
    padding: 1rem;
}

.single-answer {
    margin-left: 4rem;
}

.image-wrap {
    width: 4rem;
    height: 4rem;
    padding-right: 1rem;
}

.image-wrap img {
    width: 3rem;
}

.comment-footer, .answer-footer {
    font-size: .7rem;
    color: rgb(108, 110, 103);
    width: 100%;
}

.comment-reply {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
}

.comment-reply svg {
    font-size: 1.2rem;
}

.comment-message, .answer-message {
    font-size: 1rem;
    color: var(--black);
}


.single-post-image img {
    border-radius: 1rem;
    margin: 2rem 0;
    max-width: 50%;
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

.single-post-content p > img {
    border-radius: 1rem;
    margin: 2rem 0;
    max-width: 50%;
} 

@media (max-width: 992px) {
    .single-post-content p > img, .single-post-image img {
        max-width: 100%;
} 

}

</style>
    
        
   