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
           <font-awesome-icon icon="reply" @click="replyComment"/>
           <p v-if="items.Answers.length !==0" class="answer-length" @click="showAnswer">Prikaži {{items.Answers.length}} odgovora  <font-awesome-icon icon="chevron-down"/></p>
          </div>
        </div>
      </div>
      <div class="reply-form" v-if="reply===true">
        <input name="reply-name" v-model="replyname" placeholder="Ime (opciono)" type="text" autocomplete="off" class="reply-name">
        <textarea name="reply-message" v-model="replymessage" rows="4" placeholder="Poruka" class="reply-message"></textarea>
        <p v-if="success===true" class="comment-success">Vaš komentar se prvo šalje timu na odobrenje. Kofer psihoalata zadržava pravo da obriše neprimjereni dio ili cijeli komentar, bez najave i objašnjenja.</p>
        <p v-if="failed===true" class="comment-failed">Došlo je do greške. Molimo pokušajte ponovo.</p>
        <p v-if="errorMsg===true" class="comment-failed">Morate unijeti poruku.</p>
        <button class="reply-button comment-btn"  @click="onSubmit">Pošalji</button>
      </div>
      <div class="answer-wrap">
        <div class="answer-box" v-for="item in answersLoaded" :key="item.id">
          <answer-component :items="item"/>
        </div>
        <button v-if="this.items.Answers.length > this.length" @click="loadAnswers" class="load-answers">Prikaži više</button>
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
      errorMsg: false,
      length: 5
    }),

    computed: {
        answersLoaded() {
            return this.items.Answers.slice(0, this.length);
        },
    },

    methods: {
      loadAnswers(e) {
        const currentComment = e.target.parentNode.parentNode
        const reply = Array.from(currentComment.querySelectorAll(".answer-box"));
        reply.forEach(answer => {
          answer.classList.add("answer-visible")
        })
            if (this.length >= this.items.Answers.length) {
                e.target.style.display = "none";
                return
            }
            this.length = this.length + 1;
        },

      replyComment() {
        this.reply = !this.reply
      },

      showAnswer(e) {
        const currentComment = e.target.parentNode.parentNode.parentNode.parentNode
        const replyWrap = Array.from(currentComment.querySelectorAll(".answer-wrap"));
        const reply = Array.from(currentComment.querySelectorAll(".answer-box"));
        const load = Array.from(currentComment.querySelectorAll(".answer-wrap > button"))[0];
        console.log(load)
        replyWrap.forEach(answer => {
          answer.classList.toggle("answer-visible")
        })
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
  