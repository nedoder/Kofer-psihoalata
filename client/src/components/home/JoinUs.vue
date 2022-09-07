<template>
  <div class="join">
    <div class="shape-blob"></div>
    <div class="shape-blob one"></div>
    <div class="shape-blob two"></div>
    <div class="shape-blob three"></div>
    <div class="shape-blob five"></div>
    <div class="shape-blob six"></div>
    <div class="shape-blob seven"></div>
    <div class="shape-blob eight"></div>
    <div class="shape-blob nine"></div>
    <div class="shape-blob ten"></div>

    <header-component/>
     
    <div class=join-us  v-if="loading===false && success===false"> 
      <div class="join-info">
        <h4>Postani volonter</h4>
        <div class="join-img">
          <img src="../../assets/message.png"/>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe error alias, odit ullam consectetur harum excepturi aperiam a ipsa soluta est esse atque repellendus recusandae exercitationem autem necessitatibus fugit earum! Harum molestias ipsam voluptatibus eos sit sunt incidunt deleniti delectus consequatur, minus id laborum mollitia facere porro rem minima! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus est vitae dolorem sint cumque, quibusdam aut repellendus adipisci animi aliquam.</p>
        <p>Ugovor o volontiranju možete preuzeti <a href="#">ovdje</a>.</p>
      </div>
      
      <div class="join-section">
        <div class="join-form">
          <h5>OCD "PORTRET"</h5>
          <p>PRIJAVA ZA VOLONTIRANJE</p>
          <p>Klub mladih volontera "Klupko"</p>
          <input required name="join-place" v-model='contact.place' placeholder="Mjesto i datum" type="text" class="join-place">
          <input required name="join-name" v-model='contact.name' placeholder="Ime i prezime" type="text" class="join-name">
          <input required name="join-date" v-model='contact.date' placeholder="Datum i godina rođenja" type="text" onfocus="(this.type='date')" autocomplete="off" class="join-date">
          <input required name="join-email" v-model="contact.email" placeholder="E-mail" type="email" class="join-email">
          <input required name="join-school" v-model='contact.school' placeholder="Škola i razred" type="text" class="join-school">
          <input required name="join-phone" v-model='contact.phone' placeholder="Broj telefona" type="tel" autocomplete="off" class="join-phone">
          
          <textarea required name="join-questionone" v-model="contact.questionone" rows="4" placeholder="Kako si saznao/la za klub mladih volontera 'Klupko'?" class="join-message"></textarea>
          <textarea required name="join-questiontwo" v-model="contact.questiontwo" rows="4" placeholder="Koji su razlozi zbog kojih si odlučio-la da se prijaviš za volontiranje" class="join-message"></textarea>
          <textarea required name="join-questionthree" v-model='contact.questionthree' rows="4" placeholder="Da li si nekad bio/bila angažovan/a kao volonter?" class="join-message"></textarea>
          <textarea required name="join-questionfour" v-model="contact.questionfour" rows="4" placeholder="Ako je tvoj odgovor DA, u kojoj organizacji je bio tvoj angažman?" class="join-message"></textarea>
          <textarea required name="join-questionfive" v-model="contact.questionfive" rows="4" placeholder="Pokušaj da opišeš sebe kroz ono što voliš kod sebe" class="join-message"></textarea>
          <textarea required name="join-questionsix" v-model="contact.questionsix" rows="4" placeholder="Šta bi kod sebe voljeo/la da unaprijediš?" class="join-message"></textarea>
          <textarea required name="join-questionseven" v-model="contact.questionseven" rows="4" placeholder="Šta očekuješ da ćeš dobiti od ovog projekta?" class="join-message"></textarea>
          <textarea required name="join-questioneight" v-model="contact.questioneight" rows="4" placeholder="Na koje načine možeš/želiš doprinijeti razvoju Kluba mladih volontera?" class="join-message"></textarea>
          
          <button class="join-submit"  @click="onSubmit">Pošalji</button>
        </div>
      </div>
    </div>

    <div class="loading-mail" v-if="loading===true">
     <img src="../../assets/mail.gif"/>
    </div>
    <div class="success-message" v-if="success===true">
      <h4>Uspješna prijava</h4>
      <img src="../../assets/success.png"/>
    </div>

    <footer-component/>
  </div>
</template>
    
    
<script>
  
import requests from '../../services/services'
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';

export default {
  name: 'JoinUs',
  components: { HeaderComponent, FooterComponent },
  data: () => ({
    contact: {
      name: 'bbb',
      place: '',
      date: '',
      school: '',
      email: '',
      phone: '',
      questionone: '',
      questiontwo: '',
      questionthree: '',
      questionfour: '',
      questionfive: '',
      questionsix: '',
      questionseven: '',
      questioneight: '',
    },
    loading: false,
    success: false,
  }),

  computed: {
    newMessage() {
        return `
                1. Mjesto i datum: ${this.contact.place}\n
                2. Ime i prezime : ${this.contact.name}\n
                3. Datum i godina rođenja: ${this.contact.date}\n
                4. Škola i razred: ${this.contact.school}\n
                5. Broj telefona: ${this.contact.phone}\n
                6. Kako si saznao/la za klub mladih volontera 'Klupko'?: ${this.contact.questionone}\n
                7. Koji su razlozi zbog kojih si odlučio-la da se prijaviš za volontiranje: ${this.contact.questiontwo}\n
                8. Da li si nekad bio/bila angažovan/a kao volonter?: ${this.contact.questionthree}\n
                9. Ako je tvoj odgovor DA, u kojoj organizacji je bio tvoj angažman?: ${this.contact.questionfour}\n
                10. Pokušaj da opišeš sebe kroz ono što voliš kod sebe: ${this.contact.questionfive}\n
                11. Šta bi kod sebe voljeo/la da unaprijediš?: ${this.contact.questionsix}\n
                12. Šta očekuješ da ćeš dobiti od ovog projekta?: ${this.contact.questionseven}\n
                13. Na koje načine možeš/želiš doprinijeti razvoju Kluba mladih volontera?: ${this.contact.questioneight}\n
        `
    }
  },
    
  methods: {
    onSubmit() {
      this.loading = true
      requests.sendMail({"message": this.newMessage,})
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        this.loading = false
        this.success = true
      })
    },

  }
     
}

</script>
    
<style scoped>

body, html {
  overflow: hidden;
}

.loading-mail, .success-message {
  top: 50%;
  left: 50%;
  transform: translate(0%, 50%);
  text-align: center;
  height: 78vh;
}

.success-message {
  transform: translate(0%, 25%);
}
.success-message h4 {
  font-family: 'Ribeye Marrow', cursive;
  font-size: 3rem;
  margin: 1rem 0;
  color: var(--light-black);
}

.success-message img {
  width: 70%;
}
.join {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}


.shape-blob{
  z-index: -1;
}

.shape-blob.seven{
	left: 5%;
	top: 80%;
	transform: rotate(-180deg);
	animation: transform 30s ease-in-out infinite both alternate, movement_two 60s ease-in-out infinite both;
}

.shape-blob.eight{
	left: 80%;
	top: 65%;
	transform: rotate(-180deg);
	animation: transform 30s ease-in-out infinite both alternate, movement_two 60s ease-in-out infinite both;
}

.shape-blob.nine{
	left: 10%;
	top: 30%;
	transform: rotate(-180deg);
	animation: transform 30s ease-in-out infinite both alternate, movement_two 60s ease-in-out infinite both;
}


.shape-blob.ten{
	left: 30%;
	top: 10%;
	transform: rotate(-180deg);
	animation: transform 30s ease-in-out infinite both alternate, movement_two 60s ease-in-out infinite both;
}

.join-us {
  width: 90%;
  margin: 0 auto;
  margin-top: 5rem;
  padding: 0 1rem;
  overflow: hidden;
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
  overflow: hidden;
}

.join-img {
  position: absolute;
  width: 100%;
  right: -70%;
  top: 15%;
  transform: rotate(23deg);
  z-index: -1;
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
  padding: 1rem 0;
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
  min-height: 4rem;
  max-height: 20rem;
  
}

.join-form input:placeholder-shown {
  text-overflow: ellipsis;
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


@media (max-width: 768px) {

  .join-info p {
    text-align: justify;
  }

  .join-img img{
    margin: 6rem auto;
  }

  .join-info h4, .success-message h4 {
    font-size: 2rem;
  }


}

@media (max-width: 400px) {
  .join-img {
    transform: translateY(0%) rotate(0deg);
  }

  .join-img img {
    width: 70%;
  }

}

</style>