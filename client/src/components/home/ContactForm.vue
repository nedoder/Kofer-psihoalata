<template>
<div class="contact">
  <!-- <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="width: 100%;" viewBox="0 0 1440 320"><path fill="#a497a6" fill-opacity="0.5" d="M0,288L30,282.7C60,277,120,267,180,234.7C240,203,300,149,360,133.3C420,117,480,139,540,165.3C600,192,660,224,720,224C780,224,840,192,900,154.7C960,117,1020,75,1080,58.7C1140,43,1200,53,1260,101.3C1320,149,1380,235,1410,277.3L1440,320L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg> -->
  <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="width: 100%;" viewBox="0 0 1440 320"><path fill="#F4CB82" fill-opacity="1" d="M0,192L720,32L1440,64L1440,320L720,320L0,320Z"></path></svg>
  <!-- <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="width: 100%;" viewBox="0 0 1440 320"><path fill="#A497A6" fill-opacity="0.5" d="M0,224L40,208C80,192,160,160,240,160C320,160,400,192,480,208C560,224,640,224,720,186.7C800,149,880,75,960,48C1040,21,1120,43,1200,58.7C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg> -->
  <!-- <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="width: 100%;" viewBox="0 0 1440 320"><path fill="#a497a6" fill-opacity="0.5" d="M0,128L60,160C120,192,240,256,360,282.7C480,309,600,299,720,245.3C840,192,960,96,1080,69.3C1200,43,1320,85,1380,106.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>  -->
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

/* .contact {
     background: linear-gradient(to right, #C4CBC5, #A497A6);
     border-top-right-radius: 45%;
     border-top-left-radius: 25%;

} */

/* .contact {
  background: rgba(164, 151, 166, 0.5);
  height: 1000px;
} */
.contact-us {
  display: flex;
  flex-direction: row;
  row-gap: 20px;
  column-gap: 20px;
  width: 90%;
  height: 400px;
  justify-content: center;
  align-items: flex-start;
  z-index: 100;
  margin: 0 auto;
  padding: 1rem;
  padding-top: 5rem;
}

.contact-name, .contact-email, .contact-message {
  display: block;
  border-radius: 1rem;
   border:0; outline:0;
   padding: 1em;
  resize: none;
  margin: 20px 0;
  width: 100%;
  box-shadow: inset 0.1rem 0.1rem 0.4rem #f7e6c6, inset -0.2rem -0.1rem 0.3rem #f4cb82;
  backdrop-filter: blur(10px);
}

.contact-name:focus, .contact-email:focus, .contact-message:focus {
  box-shadow:  0.1rem 0.1rem 0.4rem #ddb267,  -0.1rem -0.1rem 0.2rem #f7e6c6;
}

.button {
  width: 100%;
   background: #000;
  border-radius: 1rem;
  outline: none;
  border: none;
  padding: 10px 0;
  color: #fff;
  font-weight:600;
  box-shadow: inset 0.1rem 0.1rem 0.4rem rgb(196, 194, 194), inset -0.2rem -0.1rem 0.3rem #000;
  transition: all .5s ease;
}

.button:hover {
  cursor: pointer;
  /* box-shadow: 0.2rem 0.2rem 0.5rem #c4cbc5, -0.2rem -0.1rem 0.3rem #fff; */
  letter-spacing: 5px;
}



.contact-info h4 {
    font-family: 'Londrina Outline', cursive;
    font-size: 3rem;
}

.contact-info {
    width: 39%;
}

.form {
    width: 49%;
}
.contact-image {
    width: 9%;
    padding: 1rem;
}

.contact-image img {
    width: 100%;
    transform: translateY(125%) rotate(-23deg);
}

.contact svg {
  position:absolute;
  height: 400px;
  pointer-events: none;
  z-index: -1;
}

</style>
