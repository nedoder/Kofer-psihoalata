<template>
    <div class="comments">
      <div class="single-comment">
        <div class="image-wrap">
          <img src="../../assets/comment.png" alt="Comment image"/>
        </div>
        <div class="comment-footer">
          <p class="comment-message">{{items.comment}}</p>
          <div class="comment-reply">
           <p class="comment-author"><span>Autor: </span>{{items.author}} <span> &comma; </span> {{new Date(items.createdAt).toUTCString().slice(5,-4)}}</p>
           <font-awesome-icon icon="reply" @click="replyComment"/>
        </div>
        </div>
      </div>
      <div class="answer-box" v-for="item in items.answers" :key="item.id">
        <answer-component :items="item"/>
      </div>
      <div class="reply-form">
        <input required name="reply-name" v-model="replyname" placeholder="Ime (opciono)" type="text" autocomplete="off" class="reply-name">
        <textarea name="reply-message" v-model="replymessage" rows="4" placeholder="Poruka" class="reply-message"></textarea>
        <button class="reply-button"  @submit="onSubmit">Pošalji</button>
      </div>
    </div>
  </template>
  
  <script>
  import AnswerComponent from './AnswerComponent.vue';
  export default {
    name: 'CommentBox',
    components: {AnswerComponent},
    props: ["items"],
    data: () => ({
      replyname: '',
      replymessage: ''
    }),
    methods: {
      replyComment(e) {
        const reply = document.getElementsByClassName("reply-form")
        console.log(reply)
        console.log(e.target)
      },

      onSubmit() {
        //
      } 
    }
  }
  </script>
  