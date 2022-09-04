<template>
  <div class="join">
    <header-component/>
      <div class=join-us>
        <div class="join-info">
          <h4>Postanite volonter i pridružite se našem timu</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus est vitae dolorem sint cumque, quibusdam aut repellendus adipisci animi aliquam.</p>
        </div>
        <div class="join-section">
          <div class="join-img">
            <img src="../../assets/join.png"/>
          </div>
          <div class="join-form">
              <input required name="join-name" v-model='contact.name' placeholder="Ime" type="text" autocomplete="off" class="join-name">
              <input required name="join-email" v-model="contact.email" placeholder="E-mail" type="email" autocomplete="off" class="join-email">
              <input required name="file" type="file" class="join-file" @change="handleFileChange($event, index)">
              <textarea name="join-message" v-model="contact.message" rows="4" placeholder="Poruka" class="join-message"></textarea>
              <button class="join-submit"  @submit="onSubmit">Pošalji</button>
          </div>
        </div>
      </div>
    <contact-form/>
    <footer-component/>
  </div>
</template>
    
    
<script>
import HeaderComponent from './HeaderComponent.vue';
import ContactForm from './ContactForm.vue';
import FooterComponent from './FooterComponent.vue';

export default {
  name: 'JoinUs',
  components: { HeaderComponent, ContactForm, FooterComponent },
  data: () => ({
    contact: {
    name: '',
    email: '',
    message: '',
    file: ''
    },
  }),
    
  methods: {
    onSubmit() {
    },

    handleFileChange(e, index) {
      console.log(e.target.files)
      console.log(index)
    }
  }
     
}

</script>
    
<style scoped>

.join {
  width: 100%;
}

.join-us {
  width: 90%;
  margin: 0 auto;
  margin-top: 10rem;
}

.join-info h4  {
  font-family: 'Ribeye Marrow', cursive;
  font-size: 2rem;
  color: var(--light-black);
}

.join-info {
  margin: 1rem 0;
}

.join-section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.join-img {
  width: 50%;
  margin: auto;
  text-align: center;
}
.join-form {
  width: 50%;
  border-radius: 1.5rem;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border-radius: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem auto;
}

.join-form input, .join-form textarea {
  padding: 1rem;
  border: none;
  width: 100%;
  outline: none;
  color: var(--black);
  background: rgba(255, 255, 255, 0.09);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1),
            0px -2px 5px rgba(255, 255, 255, 0.5);
  border-radius: 1.5rem;
  margin: 1rem auto;
  
}

.join-form button {
  padding: .5rem 2rem;
  border-radius: 1.5rem;
  background: #F4CB82;
  margin: 1rem auto;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1),
            0px -2px 5px rgba(255, 255, 255, 0.5);
  transition: all .3s linear;
}

.join-form button:hover  {
  cursor: pointer;
  letter-spacing: 5px;
}

@media (max-width: 768px) {

  .join-img {
    position: absolute;
    width: 100%;
  }

  .join-img img{
    margin: 6rem auto;
  }

  .join-form {
    width: 100%;
  }

}
</style>