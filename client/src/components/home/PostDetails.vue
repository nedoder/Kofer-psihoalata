<template>
    <div class="single-post">
        <header-component/>
        <div class="post-details" v-if="loading===false">
            <h3>{{item.title}}</h3>
            <div class="single-post-image">
                <img :src="$imagePath + item.image" alt="Post image"/>
            </div>
            <p class="single-post-category">{{item.Category.category}}</p>
            <p class="single-post-author">Kreirao/la <span class="post-username">{{item.User.username}}</span> <span>|</span> Datum objave: {{new Date(item.createdAt).toLocaleString('en-us',{month:'long', day: 'numeric', year:'numeric'})}}</p>
            <div  class="single-post-content" id="post-content" v-html=item.content></div>
        </div>
        <div class="comment-box" v-if="loading===false">
            <h4>Komentari ({{item.Comments.length}})</h4>
            <div class="comment-form">
                <input name="name" v-model="commentname" placeholder="Ime (opciono)" type="text" autocomplete="off" class="name">
                <textarea name="message" v-model="message" rows="4" placeholder="Poruka" class="message"></textarea>
                <p v-if="success===true && errorMsg===false" class="comment-success">Vaš komentar se prvo šalje timu na odobrenje. Kofer psihoalata zadržava pravo da obriše neprimjereni dio ili cijeli komentar, bez najave i objašnjenja.</p>
                <p v-if="failed===true" class="comment-failed">Došlo je do greške. Molimo pokušajte ponovo.</p>
                <p v-if="errorMsg===true && success===false" class="comment-failed">Morate unijeti poruku.</p>
                <button class="button"  @click="submitComment">Pošalji</button>
            </div>
            <transition-group name="fade">
                <div class="comment-list" v-for="comment in commentsLoaded" :key="comment.id">
                    <comment-component :items="comment"/>
                </div>
            </transition-group>
            <button @click="loadMore" class="load-more" v-if="this.item.Comments.length > this.length">Prikaži više</button>
        </div>
        <div class="loading-post" v-if="loading===true">
            <img src="../../assets/post-load.webp" alt="Loading post"/>
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
        Category: '',
        Comments: [],
        Answers: [],
        User: '',
        title: '',
        image: '',
        id: '',
     },
     length: 5,
     commentname: '',
     message: '',
     success: false,
     failed: false,
     errorMsg: false,
     loading: false
    }),

    computed: {
        commentsLoaded() {
            return this.item.Comments.slice(0, this.length);
        },
    },

    methods: {
        loadMore(e) {
            if (this.length > this.item.Comments.length) {
                return
            }
            if (this.length === this.item.Comments.length - 1) {
                e.target.style.display = "none";
            }
            this.length = this.length + 5;
        },
        submitComment(e) {
            if(this.message === '') {
                this.errorMsg = true
            } else {
                e.target.classList.add('btn-fill');
                e.target.classList.add('btn-load');
                requests.newComment({
                    "comment" : this.message,
                    "author" : this.commentname==="" ? "Anoniman" : this.commentname,
                    "postId" : this.item.id,
                    "approved" : false
                })
                .then(response => {
                    e.target.classList.remove('btn-load');
                    e.target.classList.remove('btn-fill');
                    this.message = ""
                    this.commentname = ""
                    this.success = true
                    this.failed = false
                    this.errorMsg = false
                    console.log(response)
                })
                .catch(error => {
                    e.target.classList.remove('btn-load');
                    e.target.classList.remove('btn-fill');
                    this.failed = true
                    console.log(error)
                })
            }
            
           
        }
    },
    
    mounted() {
        this.loading = true
        requests.getPost(this.$route.params.id)
        .then(response => {
            this.item = response.data
            this.item.Comments = this.item.Comments.filter(item => {
                return item.approved === true
            })
            this.item.Comments.forEach(comment => {
                comment.Answers = comment.Answers.filter(item => {
                    return item.approved === true
                })
            })
        })
        .catch(error => {
            console.log(error.response)
        }) 
        .finally(() => (this.loading = false))
    }
     
}
</script>

<style>

/* LOAD MORE TRANSITION */
.fade-enter-active, .fade-leave-active {
  transition: all .5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(4rem);
}

/* LOAD MORE BUTTON */
.load-more, .load-answers {
    display: block;
    margin: 0 auto;
    font-size: .9rem;
    color: var(--light-black);
    text-align: center;
    padding: 1rem 0;
}

/* LOADER */
.loading-post {
  text-align: center;
  margin-top: 5rem;
}

.loading-post img {
  width: 30%;
  padding: 2rem 0;
  opacity: .5;
}

.single-post {
    width: 100%;
}

.post-details, .comment-box {
    width: 90%;
    margin: 0 auto;
    margin-top: 8rem;
    padding: 0 1rem;
}

.post-details h3 {
    padding: 0;
}

/* COMMENT AND ANSWER FORM */
.comment-form, .reply-form {
    text-align: center;
    margin: 1rem 0;
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
  width: 6rem;
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
  letter-spacing: .1rem;
}

/* COMMENT AND ANSWER CONTAINER */
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

.answer-length {
    width: 100%;
    font-size: .9rem;
    padding-top: .5rem;
}

.answer-length svg {
    font-size: .7rem !important;
    margin: -.4rem 0;
}

.answer-length:hover {
    text-decoration: underline;
    cursor: pointer;
}

.comment-wrap {
    width: 4rem;
    height: 4rem;
    padding-right: 1rem;
}

.comment-wrap img {
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
    cursor: pointer;
}

.comment-message, .answer-message {
    font-size: 1rem;
    color: var(--black);
}

/* POST CONTAINER */
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
    color: var(--violet);
}

.single-post-content {
    margin: 2rem 0;
    overflow: hidden;
}

.single-post-content h1, .single-post-content h2, .single-post-content h3, 
.single-post-content h4, .single-post-content h5, .single-post-content h6 {
    font-size: 1rem;
    line-height: 2rem;
}

.single-post-content p > img,
.single-post-content p > em > img {
    border-radius: 1rem;
    margin: 2rem 0;
    max-width: 100%;
    height: auto;
} 

/* SUCCESS AND FAIL MESSAGE FOR COMMENT AND ANSWER */
.comment-success {
  color: var(--green);
  text-align: left;
  font-size: .9rem;
  padding: 1rem 0;
}

.comment-failed {
  color: var(--red);
  text-align: left;
  font-size: .9rem;
  padding: 1rem 0;
}

  
.btn-fill{
  font-size: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #fff;
  border-right: 4px solid var(--black);
}

.btn-load{
    animation: loader .7s linear infinite;
}

@keyframes loader{
  0%{transform: rotateZ(0);}
  25%{transform: rotateZ(0);}
  100%{transform: rotateZ(360deg);}
}


@media (max-width: 992px) {
    .single-post-content p > img, .single-post-image img {
        max-width: 100%;
    }
}    

@media (max-width: 768px) {
    .loading-post img {
      width: 50%;
    }
}

@media (max-width: 600px) {
    .loading-post img {
      width: 70%;
    }
}

@media (max-width: 450px) {
    .single-comment, .single-answer, .comment-reply {
        flex-direction: column;
        align-items: flex-end;
    }

    .answer-length svg {
        padding: 0;
    }
}

@media (max-height: 400px) {
    .loading-post  {
        margin-top: 0;
    }

    .loading-post img {
        padding: 0;
    }

}

</style>
    
        
   