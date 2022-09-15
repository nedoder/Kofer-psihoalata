<template>
    <div class="comments">
      <div class="single-comment" :id="items.id">
        <div class="comment-wrap">
          <img src="../../assets/comment4.png" alt="Comment image"/>
        </div>
        <div class="comment-footer">
          <p class="comment-message">{{items.comment}}</p>
          <div class="comment-reply">
           <p class="comment-author"><span>Autor: </span>{{items.author}} <span> &comma; </span> {{new Date(items.createdAt).toUTCString().slice(5,-4)}}</p>
           <font-awesome-icon icon="reply" @click="replyComment"/>
           <p v-if="items.answers.length !==0" class="answer-length" @click="showAnswer">Prikaži {{items.answers.length}} odgovora  <font-awesome-icon icon="chevron-down"/></p>
        </div>
        </div>
      </div>
      <div class="reply-form" v-if="reply===true">
        <input required name="reply-name" v-model="replyname" placeholder="Ime (opciono)" type="text" autocomplete="off" class="reply-name">
        <textarea name="reply-message" v-model="replymessage" rows="4" placeholder="Poruka" class="reply-message"></textarea>
        <p v-if="success===true" class="comment-success">Vaš komentar se prvo šalje timu na odobrenje. Kofer psihoalata zadržava pravo da obriše neprimjereni dio ili cijeli komentar, bez najave i objašnjenja.</p>
        <p v-if="failed===true" class="comment-failed">Došlo je do greške. Molimo pokušajte ponovo.</p>
        <p v-if="errorMsg===true" class="comment-failed">Morate unijeti poruku.</p>
        <button class="reply-button comment-btn"  @click="onSubmit">Pošalji</button>
      </div>
      <div class="answer-box" v-for="item in items.answers" :key="item.id">
        <answer-component :items="item"/>
      </div>
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
      errorMsg: false
    }),
    methods: {
      replyComment() {
        this.reply = !this.reply
      },

      showAnswer() {
        const reply = Array.from(document.getElementsByClassName("answer-box"));
        reply.forEach(answer => {
          answer.classList.toggle("answer-visible")
        })
      },

      onSubmit(e) {
        if(this.replymessage === '') {
          this.errorMsg = true
        } else {
          e.target.classList.add('btn-load');
          e.target.classList.add('btn-fill');
          requests.newAnswer({
            "commentId" : this.items.id,
            "author" : this.replyname,
            "answer" : this.replymessage,
            "approved" : false
          })
          .then(response => {
            e.target.classList.remove('btn-load');
            e.target.classList.remove('btn-fill');
            this.success = true
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
  