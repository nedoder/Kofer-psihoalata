<template>
  <div class="join">
    <div class="shape-blob"></div>
    <div class="shape-blob six"></div>
    <div class="shape-blob seven"></div>
    <div class="shape-blob eight"></div>
    <div class="shape-blob nine"></div>
    <div class="shape-blob ten"></div>

    <header-component/>
     
    <div class=join-us  v-if="loading===false && success===false && failed===false"> 
      <div class="join-info">
        <h3>Postani volonter</h3>
        <div class="join-img">
          <img src="../../assets/message.webp" alt="Mail envelope" />
        </div>
        <img src="../../assets/klupko logo.png" class="join-klupko" alt="Logo klupko"/>
        <p>Nevladina organizacija “PORTRET” iz Bara sprovodi projekat “KOFER PSIHO-ALATA” podržan kroz
          program “Odgovorno i solidarno: građani preuzimaju inicijativu, koji realizuje Fond za aktivno
          građanstvo iz Podgorice - fAKT, u partnerstvu sa nevladinim organizacijama Udruženje roditelja
          djece sa teškoćama u razvoju “Zračak nade” i Aktivna zona, uz finansijsku podršku Evropske unije i
          kofinansiranje Ministarstva javne uprave.
        </p>
        <p>Ugovor o volontiranju možete preuzeti <a href="/files/ugovor-o-volontiranju.pdf" download>ovdje</a>.</p>
      </div>
      
      <div class="join-section">
        <div class="join-form">
          <h4>OCD "PORTRET"</h4>
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
     <img src="../../assets/mail.gif" alt="Loading"/>
    </div>
    <div class="success-message" v-if="success===true">
      <h3>Uspješna prijava</h3>
      <img src="../../assets/success.webp" alt="Success message"/>
    </div>
    <div class="success-message" v-if="failed===true">
      <h3>Došlo je do greške. Molimo pokušajte ponovo.</h3>
      <img src="../../assets/success.webp" alt="Error message"/>
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
      name: '',
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
    failed: false
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
      window.scrollTo(0,0);
      requests.sendMail({"message": this.newMessage,})
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
    },

  }
     
}

</script>
    
<style scoped>

body, html {
  overflow: hidden;
}

/* LOADING AND SUCCESS MESSAGE */
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

/* JOIN TEXT */
.join {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}
.join-klupko {
  float: left;
  height: 7rem;
}

/* BACKGROUND SHAPES */
.shape-blob{
  background: var(--gradient);
	height: 10rem;
	width: 10rem;
	border-radius: 30% 50% 20% 40%;
  transform: rotate(-180deg);
  animation: transform 20s ease-in-out infinite both alternate, movement_one 40s ease-in-out infinite both;
	opacity:.5;
	position: absolute;
	right: 0%;
	bottom: 10%;
  left: 75%;
	top: 20%;
}

@keyframes transform
{
  0%,
  100% { border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%; } 
  20% { border-radius: 37% 63% 51% 49% / 37% 65% 35% 63%; } 
  40% { border-radius: 36% 64% 64% 36% / 64% 48% 52% 36%; } 
  60% { border-radius: 37% 63% 51% 49% / 30% 30% 70% 70%; } 
  80% { border-radius: 40% 60% 42% 58% / 41% 51% 49% 59%; } 
}

@keyframes movement_one
{
  0%,
  100% { transform: none; }
  50% { transform: translate(50%, 20%) rotateY(10deg) scale(1.2); }
}


.shape-blob.six{
	left: 5%;
	top: 50%;
}
.shape-blob.seven{
	left: 5%;
	top: 63%;
}
.shape-blob.eight{
	left: 80%;
	top: 59%;
}
.shape-blob.nine{
	left: 10%;
	top: 30%;
}
.shape-blob.ten{
	left: 0%;
	top: -1%;
}

/* JOIN SECTION */
.join-us {
  width: 90%;
  margin: 0 auto;
  margin-top: 5rem;
  padding: 0 1rem;
  overflow: hidden;
}
.join-info h3  {
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
  top: 40%;
  transform: rotate(23deg);
}

/* JOIN FORM */
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
  text-align: center;
}

.join-form h4 {
  font-size: 1rem;
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
  background: var(--yellow);
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