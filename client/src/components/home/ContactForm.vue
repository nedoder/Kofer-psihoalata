<template>
  <div class="contact">
    <div class=contact-us v-if="loading===false && success===false && failed===false">
      <div class="contact-info">
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus est vitae dolorem sint cumque, quibusdam aut repellendus adipisci animi aliquam.</p>
      </div>
      <div class="contact-image">
        <img src="../../assets/message.webp" alt="Envelope"/>
      </div>
      <div class="form">
        <input required name="name" v-model='contact.name' placeholder="Ime" type="text" autocomplete="off" class="contact-name">
        <input required name="email" v-model="contact.email" placeholder="E-mail" type="email" autocomplete="off" class="contact-email">
        <span class="email-validate" v-if="email">{{email}}</span>
        <textarea name="message" v-model="contact.message" rows="4" placeholder="Poruka" class="contact-message"></textarea>
        <p v-if="errorMsg===true" class="comment-failed">Morate unijeti ispravnu email adresu.</p>
        <button class="button"  @click="onSubmit">Pošalji</button>
      </div>
    </div>
    <div class="loading-mail" v-if="loading===true">
     <img src="../../assets/mail.gif" alt="Loading"/>
    </div>
    <div class="success-message" v-if="success===true">
      <h3>Poruka poslata</h3>
      <img src="../../assets/success.webp" alt="Success message"/>
    </div>
    <div class="success-message" v-if="failed===true">
      <h3>Došlo je do greške. Molimo pokušajte ponovo.</h3>
      <img src="../../assets/success.webp" alt="Error message"/>
    </div>
  </div>
</template>


<script>
import requests from "../../services/services"
export default {
   name: 'ContactForm',
   data: () => ({
    contact: {
			name: '',
			email: '',
			message: '',
		},
    email: '',
    loading: false,
    success: false,
    failed: false,
    errorMsg: false
  }),
  watch: {
    contact : {
      // binding this to the data value in the email input
      deep: true,
      handler() {
        this.validateEmail(this.contact.email);
      }
    }
  },
  methods: {
    validateEmail(value){
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) { // eslint-disable-line
        this.email = '';
      } else{
        this.email = 'Nesipravna email adresa';
      } 
    },
    onSubmit() {
      window.scrollTo(0,0);
      if(this.email !== '' || this.contact.email === '') {
        this.errorMsg = true
      } else {
        this.loading = true
        requests.sendMessage({
          "message": "Email: " + this.contact.email + "\n\n" + "Poruka: " +  this.contact.message, 
          "name": this.contact.name === "" ? "Poruka sa sajta" : this.contact.name
        })
        .then(response => {
          console.log(response)
          this.success = true
        })
        .catch(error => {
          console.log(error)
          this.failed = true
        })
        .finally(() => {
          this.loading = false
        })
      }
    },

  }
 
}
</script>

	
<style scoped>

/* EMAIL VALIDATION MESSAGE */
.email-validate {
  color: var(--red);
  font-size: .9rem;
}

/* SUCCESS AND SENDING MESSAGE */
.loading-mail, .success-message {
  width: 90%;
  margin: 0 auto;
  text-align: center;
  padding: 1rem;
  padding-top: 6rem;
}
.success-message h3 {
  margin: 1rem 0;
  text-align: center;
}
.success-message img {
  max-height: 75vh;
}

/* SENDING FAILED */
.comment-failed {
  color:var(--red);
  padding: 1rem 0;
}

/* CONTACT FORM */
.contact {
  padding: 4rem 0;
}
.contact-us {
  display: flex;
  flex-direction: row;
  row-gap: 1rem;
  column-gap: 1rem;
  justify-content: center;
  align-items: flex-start;
  z-index: 100;
  margin: 0 auto;
  padding: 1rem calc(5% + 1rem);
  margin-top: 7rem;
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
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1), 0px -2px 5px rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(1rem);
}
.contact-name:focus, .contact-email:focus, .contact-message:focus {
  box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.1), inset 0px -2px 5px rgba(255, 255, 255, 0.5);
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
.contact-info h3 {
  line-height: 3rem;
  padding: 1rem 0;
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

@media (max-width: 768px) {
  .contact-us {
    flex-direction: column;
    height: auto;
  }
  .contact-info, .contact-form, .form {
    width: 100%;
  }
  .contact-image {
    position:absolute;
  }
  .contact-image img {
    height: 20vh;
    width: 20vh;
    transform: rotate(-23deg);
  }

}

@media (max-width: 600px) {
  .contact {
    padding: 0;
  }
}

</style>
