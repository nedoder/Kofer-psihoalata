<template>
<div class="contact">
<div class=contact-us>
     <div class="contact-info">
        <h4>Lorem ipsum dolor sit amet consectetur.</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus est vitae dolorem sint cumque, quibusdam aut repellendus adipisci animi aliquam.</p>
     </div>
     <div class="contact-image">
        <img src="../../assets/message.png"/>
     </div>
    <div class="form">
		<input required name="name" v-model='contact.name' placeholder="Ime" type="text" autocomplete="off" class="contact-name">
		<input required name="email" v-model="contact.email" placeholder="E-mail" type="email" autocomplete="off" class="contact-email">
		<textarea name="message" v-model="contact.message" rows="4" placeholder="Poruka" class="contact-message"></textarea>
		<button class="button"  @submit="onSubmit">Send</button>
	</div>
    
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

  methods: {
    onSubmit() {

    }
  }
 
}
</script>

	
<style scoped>

.contact {
     background: linear-gradient(to right, #C4CBC5, #A497A6);
     border-top-right-radius: 45%;
     border-top-left-radius: 25%;

}

.contact-us {
  display: flex;
  flex-direction: row;
  row-gap: 20px;
  column-gap: 20px;
  width: 90%;
  height: 400px;
  justify-content: center;
  align-items: center;
  z-index: 100;
  margin: 0 auto;
}

.contact-name, .contact-email, .contact-message {
  display: block;
  border-radius: 18px;
   border:0; outline:0;
   padding: 1em;
  resize: none;
  margin: 20px 0;
  width: 100%;
  box-shadow: 1px 1px 9px #c4cbc5, 2px -2px 4px #7e7e92;
  backdrop-filter: blur(10px);
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



.contact-info h4 {
    font-family: 'Londrina Outline', cursive;
    font-size: 3rem;
}

.contact-info {
    width: 40%;
}

.form {
    width: 50%;
}
.contact-image {
    width: 10%;
}

.contact-image img {
    width: 100%;
    transform: rotate(-23deg);
}


.contact::before {
    content: '';
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 55%;
    height: 100%;
    transform: translate(85%, 60%);
    background-color: hsl(216, 21%, 16%);
}

.contact::after {
    content: '';
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 55%;
    height: 100%;
    background-color: #3c31dd;
    transform: translate(-4%, 40%);
    z-index: -1;
}


</style>
