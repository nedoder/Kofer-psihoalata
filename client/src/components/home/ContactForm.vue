<template>
<div>
    <form class="form" @submit="onSubmit">
		<input required name="name" v-model='contact.name' placeholder="Ime" type="text" autocomplete="off">
		<input required name="email" v-model="contact.email" placeholder="E-mail" type="email" autocomplete="off">
		<textarea name="message" v-model="contact.message" rows="4" placeholder="Poruka"></textarea>
		<button class="button">Send</button>
	</form>
   <div class="wrapper">
  <div class="wave"></div>
</div>
</div>
</template>


<script>


export default {
   name: 'ContactForm',
   data: () => ({
    contact: {
			name: '',
			email: '',
			message: '',
		},
  }),
}
</script>

	
<style scoped>



.wrapper {
  width: 100%;
  height: 100px;
  position: absolute;
  border-radius: 5px;
  background: linear-gradient(to top, #fff 0%, #A497A6 100%);
  overflow: hidden;
}

.wave {
  width: 1000px;
  height: 1025px;
  position: absolute;
  top: -25%;
  left: 50%;
  margin-left: -500px;
  margin-top: -500px;
  border-radius: 35%;
  background: rgba(255, 255, 255, .75);
  animation: wave 15s infinite linear;
}

@keyframes wave {
  from { transform: rotate(0deg);}
  from { transform: rotate(360deg);}
}

</style>
