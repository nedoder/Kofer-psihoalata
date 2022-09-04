<template>
  <div class="contact">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="width: 100%;" viewBox="0 0 1440 320"><path fill="#F4CB82" fill-opacity="1" d="M0,192L720,32L1440,64L1440,320L720,320L0,320Z"></path></svg>
    </div>
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
        <button class="button"  @submit="onSubmit">Pošalji</button>
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
  margin-top: -1rem;
}
.contact-us {
  display: flex;
  flex-direction: row;
  row-gap: 1rem;
  column-gap: 1rem;
  height: 25rem;
  justify-content: center;
  align-items: flex-start;
  z-index: 100;
  margin: 0 auto;
  padding: 1rem calc(5% + 1rem);
  padding-top: 5rem;
}

.contact-name, .contact-email, .contact-message {
  display: block;
  border-radius: 1rem;
  border:0; 
  outline:0;
  padding: 1rem;
  resize: none;
  margin: 1.5rem 0;
  width: 100%;
  box-shadow: inset 0.1rem 0.1rem 0.4rem #f7e6c6, inset -0.2rem -0.1rem 0.3rem #f4cb82;
  backdrop-filter: blur(1rem);
}

.contact-name:focus, .contact-email:focus, .contact-message:focus {
  box-shadow:  0.1rem 0.1rem 0.4rem #ddb267,  -0.1rem -0.1rem 0.2rem #f7e6c6;
}

.button {
  width: 100%;
  background: var(--black);
  border-radius: 1rem;
  outline: none;
  border: none;
  padding: 1rem 0;
  color: var(--white);
  font-weight:600;
  box-shadow: inset 0.1rem 0.1rem 0.4rem rgb(196, 194, 194), inset -0.2rem -0.1rem 0.3rem #000;
  transition: all .5s ease;
}

.button:hover {
  cursor: pointer;
  letter-spacing: .5rem;
}

.contact-info h4 {
  font-family: 'Ribeye Marrow', cursive;
  font-size: 3rem;
  color: var(--light-black);
}

.contact-info {
  width: 39%;
  z-index: 1;
}

.form {
  width: 49%;
}
.contact-image {
  width: 9%;
  padding: 1rem;
}

.contact-image img {
  width: 10vh;
  height: 10vh;
  transform: translateY(125%) rotate(-23deg);
}

.contact svg {
  position:absolute;
  height: 25rem;
  pointer-events: none;
  z-index: -1;
}

@media (max-width: 820px) {
  .contact-info h4 {
    font-size: 2.5rem;
  }

}

@media (max-width: 768px) {

  .contact {
    background: var(--yellow);
  }
  .contact-us {
    flex-direction: column;
    height: auto;
  }
  .contact-info, .contact-form, .form {
    width: 100%;
  }

  .contact-image {
    position:absolute;
    z-index: 0;
  }

  .contact-image img {
    height: 20vh;
    width: 20vh;
    transform: rotate(-23deg);
  }

  .contact-info h4 {
    font-size: 2rem;
  }
}

</style>
