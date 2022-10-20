<template>
    <div class="comments">
      <div class="single-comment" :id="items.id">
        <div class="comment-wrap">
          <img src="../../assets/user.webp" alt="Comment image"/>
        </div>
        <div class="comment-footer">
          <p class="comment-message">{{items.comment}}</p>
          <div class="comment-reply">
           <p class="comment-author"><span>Autor: </span>{{items.author}} <span> &comma; </span> {{new Date(items.createdAt).toUTCString().slice(5,-4)}}</p>
           <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" @click="replyComment"><path d="m5.66116524 3.36827202c5.18469776-.47094658 8.51890836 1.5289737 9.99999996 6-2.8248102-3.14044041-6.34158528-3.71816233-9.99999996-2v2.99999998l-5-4.99999998 5-5z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2.839 4.132)"/></svg>
           <p v-if="items.Answers.length !==0" class="answer-length" @click="show = !show">Prikaži {{items.Answers.length}} odgovora 
           <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="m8.5.5-4 4-4-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(6 8)"/></svg>
          </p>
          </div>
        </div>
      </div>
      <div class="reply-form" v-if="reply===true">
        <input name="reply-name" v-model="replyname" placeholder="Ime (opciono)" type="text" autocomplete="off" class="reply-name">
        <textarea name="reply-message" v-model="replymessage" rows="4" placeholder="Poruka" class="reply-message"></textarea>
        <p v-if="success===true && errorMsg===false" class="comment-success">Vaš komentar se prvo šalje timu na odobrenje. Kofer psihoalata zadržava pravo da obriše neprimjereni dio ili cijeli komentar, bez najave i objašnjenja.</p>
        <p v-if="failed===true" class="comment-failed">Došlo je do greške. Molimo pokušajte ponovo.</p>
        <p v-if="errorMsg===true && success===false" class="comment-failed">Morate unijeti poruku.</p>
        <button class="reply-button comment-btn"  @click="onSubmit">Pošalji</button>
      </div>
      <transition name="fade">
      <div class="answer-wrap" v-if="show">
        <transition-group name="fade">
          <div class="answer-box" v-for="item in answersLoaded" :key="item.id">
            <answer-component :items="item"/>
          </div>
        </transition-group>
        <button v-if="this.items.Answers.length > this.length" @click="loadAnswers" class="load-answers">Prikaži više</button>
      </div>
    </transition>
    </div>
  </template>
  
  <script>
  import requests from "../../services/services"
  import AnswerComponent from './AnswerComponent.vue';
  export default {
    name: 'CommentBox',
    components: {AnswerComponent},
    props: ["items"],
    data: () => ({
      replyname: '',
      replymessage: '',
      reply: false,
      success: false,
      failed: false,
      errorMsg: false,
      length: 5,
      show: false
    }),

    computed: {
        answersLoaded() {
            return this.items.Answers.slice(0, this.length);
        },
    },

    methods: {
      loadAnswers(e) {
        if (this.length > this.items.Answers.length) {
            return
        }
        if (this.length === this.items.Answers.length - 1) {
           e.target.style.display = "none";
        }
        this.length = this.length + 5;
      },

      replyComment() {
        this.reply = !this.reply
      },

      onSubmit(e) {
        if(this.replymessage === '') {
          this.errorMsg = true
        } else {
          e.target.classList.add('btn-load');
          e.target.classList.add('btn-fill');
          requests.newAnswer({
            "commentId" : this.items.id,
            "author" : this.replyname === "" ? "Anoniman" : this.replyname,
            "answer" : this.replymessage,
            "approved" : false
          })
          .then(response => {
            e.target.classList.remove('btn-load');
            e.target.classList.remove('btn-fill');
            this.replyname = ""
            this.replymessage = ""
            this.success = true
            this.errorMsg = false
            this.failed = false
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
    }
  }
  </script>
  
  