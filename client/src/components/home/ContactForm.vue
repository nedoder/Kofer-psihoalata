<template>
<div class="contact">
<div class=contact-us>
    <form class="form" @submit="onSubmit">
		<input required name="name" v-model='contact.name' placeholder="Ime" type="text" autocomplete="off" class="contact-name">
		<input required name="email" v-model="contact.email" placeholder="E-mail" type="email" autocomplete="off" class="contact-email">
		<textarea name="message" v-model="contact.message" rows="4" placeholder="Poruka" class="contact-message"></textarea>
		<button class="button">Send</button>
	</form>
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

.contact {
  background: linear-gradient(to right, #C4CBC5, #A497A6);
  border-bottom-right-radius: 45%;
  z-index: 0;
}
.contact-us {
  display: flex;
  flex-direction: row;
  row-gap: 20px;
  column-gap: 20px;
  width: 100%;
  height: 300px;
  justify-content: flex-end;
  align-items: center;
  z-index: 100;
}

.contact-name, .contact-email, .contact-message {
  display: block;
  border-radius: 18px;
   border:0; outline:0;
   padding: 1em;
  resize: none;
  margin: 20px 0;
  box-shadow: 1px 1px 9px #c4cbc5, 2px -2px 4px #7e7e92;
}

.button {
  width: 100%;
   background: linear-gradient(to right, #C4CBC5, #A497A6);
  border-radius: 18px;
  outline: none;
  border: none;
  padding: 10px 0;
  box-shadow: 1px 1px 9px #c4cbc5, 2px -2px 4px #7e7e92;
}

.button:hover {
  cursor: pointer;
}


</style>
