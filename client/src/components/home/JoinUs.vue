<template>
  <div class="join">
    <header-component/>
      <div class=join-us>
        <div class="join-info">
          <h4>Postani volonter</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe error alias, odit ullam consectetur harum excepturi aperiam a ipsa soluta est esse atque repellendus recusandae exercitationem autem necessitatibus fugit earum! Harum molestias ipsam voluptatibus eos sit sunt incidunt deleniti delectus consequatur, minus id laborum mollitia facere porro rem minima! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus est vitae dolorem sint cumque, quibusdam aut repellendus adipisci animi aliquam.</p>
          <p>Ugovor o volontiranju možete preuzeti <a href="#">ovdje</a>.</p>
        </div>
        <div class="join-section">
          <div class="join-img">
            <img src="../../assets/message.png"/>
          </div>
          <div class="join-form">
              <h5>OCD "PORTRET"</h5>
              <p>PRIJAVA ZA VOLONTIRANJE</p>
              <p>Klub mladih volontera "Klupko"</p>
              <input required name="join-name" v-model='contact.name' placeholder="Mjesto i datum" type="text" autocomplete="off" class="join-name">
              <input required name="join-name" v-model='contact.name' placeholder="Ime i prezime" type="text" autocomplete="off" class="join-name">
              <input required name="join-date" v-model='contact.date' placeholder="Datum i godina rođenja" type="text" onfocus="(this.type='date')" autocomplete="off" class="join-date">
              <input required name="join-email" v-model="contact.email" placeholder="E-mail" type="email" autocomplete="off" class="join-email">
              <input required name="join-date" v-model='contact.date' placeholder="Škola i razred" type="text">
              <input required name="join-date" v-model='contact.date' placeholder="Broj telefona" type="number" autocomplete="off" class="join-date">
              <!-- <input required name="file" type="file" class="join-file" @change="handleFileChange($event, index)"> -->
              <textarea name="join-message" v-model="contact.message" rows="4" placeholder="Kako si saznao/la za klub mladih volontera 'Klupko'?" class="join-message"></textarea>
              <textarea name="join-message" v-model="contact.message" rows="4" placeholder="Koji su razlozi zbog kojih si odlučio-la da se prijaviš za volontiranje" class="join-message"></textarea>
              <input required name="join-yes" v-model='contact.yes' placeholder="Da li si nekad bio/bila angažovan/a kao volonter?" type="text" autocomplete="off" class="join-name">
              <textarea name="join-message" v-model="contact.message" rows="4" placeholder="Ako je tvoj odgovor DA, u kojoj organizacji je bio tvoj angažman?" class="join-message"></textarea>
              <textarea name="join-message" v-model="contact.message" rows="4" placeholder="Pokušaj da opišeš sebe kroz ono što voliš kod sebe" class="join-message"></textarea>
              <textarea name="join-message" v-model="contact.message" rows="4" placeholder="Šta bi kod sebe voljeo/la da unaprijediš?" class="join-message"></textarea>
              <textarea name="join-message" v-model="contact.message" rows="4" placeholder="Šta očekuješ da ćeš dobiti od ovog projekta?" class="join-message"></textarea>
              <textarea name="join-message" v-model="contact.message" rows="4" placeholder="Na koje načine možeš/želiš doprinijeti razvoju Kluba mladih volontera?" class="join-message"></textarea>
             
             
              
             
              <button class="join-submit"  @submit="onSubmit">Pošalji</button>
          </div>
        </div>
      </div>
    <footer-component/>
  </div>
</template>
    
    
<script>
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';

export default {
  name: 'JoinUs',
  components: { HeaderComponent, FooterComponent },
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
  padding: 0 1rem;
}

.join-info h4  {
  font-family: 'Ribeye Marrow', cursive;
  font-size: 2rem;
  color: var(--light-black);
  padding: 3rem 0;
}

.join-info {
  margin: 1rem 0;
}

.join-info a {
  text-decoration: underline;
  text-transform: uppercase;
  color: var(--light-black);
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
  transform: translateY(50%) rotate(-23deg);
}
.join-form {
  width: 100%;
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
  margin: .5rem auto;
}

.join-form input, .join-form textarea {
  padding: 1rem;
  border: none;
  width: 100%;
  outline: none;
  color: var(--black);
  background: rgba(255, 255, 255, 0.09);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1), 0px -2px 5px rgba(255, 255, 255, 0.5);
  border-radius: 1.5rem;
  margin: 1rem auto;
  
}

.join-form input:focus, .join-form textarea:focus {
  box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.1), inset 0px -2px 5px rgba(255, 255, 255, 0.5);
}
.join-form button {
  padding: .5rem 2rem;
  border-radius: 1.5rem;
  background: #F4CB82;
  margin: 1rem auto;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2), inset -2px -2px 5px rgba(255, 255, 255, 0.5);
  transition: all .3s linear;
}

.join-form button:hover  {
  cursor: pointer;
  letter-spacing: 5px;
  color: var(--white);
}

.join-img {
    position: absolute;
    width: 100%;
}

@media (max-width: 768px) {

  .join-info p {
    text-align: justify;
  }

  .join-img img{
    margin: 6rem auto;
  }


}
</style>