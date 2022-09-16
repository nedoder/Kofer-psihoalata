<template>
    <div class="single-answer">
      <div class="comment-wrap">
        <img src="../../assets/user.png" alt="Answer image"/>
      </div>
      <div class="answer-footer">
        <p class="answer-message">{{items.answer}}</p>
        <div class="answer-reply">
         <p class="answer-author"><span>Autor: </span>{{items.author}} <span> &comma; </span> {{new Date(items.createdAt).toUTCString().slice(5,-4)}}</p>
      </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AnswerBox',
  props: ["items"],
}
</script>
