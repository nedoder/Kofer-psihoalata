<template>
  <div class="contact">
    <div class=contact-us v-if="loading===false && success===false && failed===false">
      <div class="contact-info">
        <h3>Kako ti možemo pomoći?</h3>
        <p>Imaš pitanje, ideju, problem? Pošalji nam poruku i kontaktiraće te neko iz našeg tima. </p>
        <p>Želiš da se prijaviš za volontera? Klikni <a href="/join-us" class="join-contact">ovdje.</a></p>
        <p>Možeš nas pronaći i na društvenim mrežama.</p>
        <div class="social-icons">
          <a href="https://www.facebook.com/people/Kofer-psihoalata/100086882622722/" class="facebook" aria-label="Facebook">
              <svg height="512px" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="_x38_3-facebook"><g><g><path d="M434.949,16.75H77.045c-32.893,0-59.648,26.831-59.648,59.812v358.871     c0,32.985,26.756,59.816,59.648,59.816h357.904c32.898,0,59.654-26.831,59.654-59.816V76.563     C494.604,43.581,467.848,16.75,434.949,16.75L434.949,16.75z M434.949,16.75" style="fill:#1B80E4;"/><path d="M420.039,256h-74.564v-59.813c0-16.51,13.365-14.951,29.824-14.951h29.83v-74.768h-59.654     c-49.42,0-89.473,40.162-89.473,89.719V256h-59.65v74.766h59.65V495.25h89.473V330.766h44.738L420.039,256z M420.039,256" style="fill:#FCFCFC;"/></g></g></g><g id="Layer_1"/></svg>
          </a>
          <a href="https://www.instagram.com/kofer_psihoalata/" class="instagram" aria-label="Instagram">
              <svg enable-background="new 0 0 128 128" id="Social_Icons" version="1.1" viewBox="0 0 128 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="_x37__stroke"><g id="Instagram_1_"><rect clip-rule="evenodd" fill="none" fill-rule="evenodd" height="128" width="128"/><radialGradient cx="19.1111" cy="128.4444" gradientUnits="userSpaceOnUse" id="Instagram_2_" r="163.5519"><stop offset="0" style="stop-color:#FFB140"/><stop offset="0.2559" style="stop-color:#FF5445"/><stop offset="0.599" style="stop-color:#FC2B82"/><stop offset="1" style="stop-color:#8E40B7"/></radialGradient><path clip-rule="evenodd" d="M105.843,29.837    c0,4.242-3.439,7.68-7.68,7.68c-4.241,0-7.68-3.438-7.68-7.68c0-4.242,3.439-7.68,7.68-7.68    C102.405,22.157,105.843,25.595,105.843,29.837z M64,85.333c-11.782,0-21.333-9.551-21.333-21.333    c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333C85.333,75.782,75.782,85.333,64,85.333z M64,31.135    c-18.151,0-32.865,14.714-32.865,32.865c0,18.151,14.714,32.865,32.865,32.865c18.151,0,32.865-14.714,32.865-32.865    C96.865,45.849,82.151,31.135,64,31.135z M64,11.532c17.089,0,19.113,0.065,25.861,0.373c6.24,0.285,9.629,1.327,11.884,2.204    c2.987,1.161,5.119,2.548,7.359,4.788c2.24,2.239,3.627,4.371,4.788,7.359c0.876,2.255,1.919,5.644,2.204,11.884    c0.308,6.749,0.373,8.773,0.373,25.862c0,17.089-0.065,19.113-0.373,25.861c-0.285,6.24-1.327,9.629-2.204,11.884    c-1.161,2.987-2.548,5.119-4.788,7.359c-2.239,2.24-4.371,3.627-7.359,4.788c-2.255,0.876-5.644,1.919-11.884,2.204    c-6.748,0.308-8.772,0.373-25.861,0.373c-17.09,0-19.114-0.065-25.862-0.373c-6.24-0.285-9.629-1.327-11.884-2.204    c-2.987-1.161-5.119-2.548-7.359-4.788c-2.239-2.239-3.627-4.371-4.788-7.359c-0.876-2.255-1.919-5.644-2.204-11.884    c-0.308-6.749-0.373-8.773-0.373-25.861c0-17.089,0.065-19.113,0.373-25.862c0.285-6.24,1.327-9.629,2.204-11.884    c1.161-2.987,2.548-5.119,4.788-7.359c2.239-2.24,4.371-3.627,7.359-4.788c2.255-0.876,5.644-1.919,11.884-2.204    C44.887,11.597,46.911,11.532,64,11.532z M64,0C46.619,0,44.439,0.074,37.613,0.385C30.801,0.696,26.148,1.778,22.078,3.36    c-4.209,1.635-7.778,3.824-11.336,7.382C7.184,14.3,4.995,17.869,3.36,22.078c-1.582,4.071-2.664,8.723-2.975,15.535    C0.074,44.439,0,46.619,0,64c0,17.381,0.074,19.561,0.385,26.387c0.311,6.812,1.393,11.464,2.975,15.535    c1.635,4.209,3.824,7.778,7.382,11.336c3.558,3.558,7.127,5.746,11.336,7.382c4.071,1.582,8.723,2.664,15.535,2.975    C44.439,127.926,46.619,128,64,128c17.381,0,19.561-0.074,26.387-0.385c6.812-0.311,11.464-1.393,15.535-2.975    c4.209-1.636,7.778-3.824,11.336-7.382c3.558-3.558,5.746-7.127,7.382-11.336c1.582-4.071,2.664-8.723,2.975-15.535    C127.926,83.561,128,81.381,128,64c0-17.381-0.074-19.561-0.385-26.387c-0.311-6.812-1.393-11.464-2.975-15.535    c-1.636-4.209-3.824-7.778-7.382-11.336c-3.558-3.558-7.127-5.746-11.336-7.382c-4.071-1.582-8.723-2.664-15.535-2.975    C83.561,0.074,81.381,0,64,0z" fill="url(#Instagram_2_)" fill-rule="evenodd" id="Instagram"/></g></g></svg>
          </a>
          <a href="https://www.tiktok.com/@koferpsihoalata?lang=en" class="tiktok" aria-label="TikTok">
             <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title/><rect height="412.22" rx="55.43" width="412.22" x="49.89" y="49.89"/><path d="M348.31,201V190.9s-22.7-1.43-39.31-19.4C319.78,191.19,337.8,198.44,348.31,201Z" fill="#80c7cf"/><path d="M171.34,274.28c15.3-30.41,42.44-36,56-36.77V226s-43.34-5-64.33,36.72c0,0-21.87,41.89,8.4,76C154,307.38,171.34,274.28,171.34,274.28Z" fill="#80c7cf"/><path d="M235.11,341.37c34-5.8,33.87-34,33.87-34V148.75h27a77,77,0,0,1-2.89-11.59H260.7V295.81s.9,31.23-33.87,34c0,0-15.14,1.19-26.42-8.71C210,343.36,235.11,341.37,235.11,341.37Z" fill="#80c7cf"/><path d="M301.37,148.75H296a60.94,60.94,0,0,0,13,22.75A70.31,70.31,0,0,1,301.37,148.75Z" fill="#e03855"/><path d="M188.45,291.67c.5,14.8,5.63,23.82,12,29.39a48.5,48.5,0,0,1-3.67-17.79s.82-32.86,38.92-31.75v-34a56.49,56.49,0,0,0-8.28-.05v22.41C189.28,258.82,188.45,291.67,188.45,291.67Z" fill="#e03855"/><path d="M348.31,201V227.9c-36.72,3.86-55.22-26.51-55.22-26.51V295c-2.21,32.31-18.77,46.11-18.77,46.11-44.36,41-87.8,10.77-87.8,10.77a81.7,81.7,0,0,1-15.07-13.16c4.79,8.63,12.21,17.12,23.35,24.75,0,0,43.07,31.75,87.8-10.76,0,0,17.34-14.55,18.77-46.11V213s18.5,30.37,55.22,26.5v-37A53.5,53.5,0,0,1,348.31,201Z" fill="#e03855"/><path d="M186.52,351.86s44.13,30.45,87.8-10.77c0,0,17.8-13.44,18.77-46.11V201.39s18.5,30.37,55.22,26.51V201c-10.51-2.6-28.53-9.85-39.31-29.54a60.94,60.94,0,0,1-13-22.75H269V307.41s.09,28.16-33.87,34c0,0-25.09,2-34.7-20.31-6.33-5.57-11.46-14.59-12-29.39,0,0,.83-32.85,38.93-31.75V237.51c-13.6.8-40.74,6.36-56,36.77,0,0-17.3,33.1.11,64.42A81.7,81.7,0,0,0,186.52,351.86Z" fill="#fff"/></svg>
          </a>
          <a href="mailto: koferpsihoalata@gmail.me" class="gmail" aria-label="Gmail">
              <svg enable-background="new 0 0 24 24" id="Layer_1" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M22,3H2C0.8974609,3,0,3.8969727,0,5v14c0,1.1030273,0.8974609,2,2,2h20c1.1025391,0,2-0.8969727,2-2V5   C24,3.8969727,23.1025391,3,22,3z" fill="#F2F2F2"/><path d="M3,21h19c1.1025391,0,2-0.8969727,2-2V5.1254902L3,21z" fill="#F5F5F5"/><linearGradient gradientUnits="userSpaceOnUse" id="SVGID_1_" x1="7.9155107" x2="19.1802444" y1="10.4586535" y2="15.7114859"><stop offset="0" style="stop-color:#FFFFFF;stop-opacity:0.2"/><stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/></linearGradient><polygon fill="url(#SVGID_1_)" points="3,21 3.3306885,21 24,5.3754883 24,5.1254883  "/><path d="M0,5.1176472V19c0,1.1030273,0.8974609,2,2,2h1V7.3350368   C1.319519,6.0929713,0.9091797,5.7896442,0,5.1176472z" fill="#D32F2F"/><path d="M21,7.3434954V21h1c1.1025391,0,2-0.8969727,2-2V5.1254902L21,7.3434954z" fill="#D32F2F"/><linearGradient gradientUnits="userSpaceOnUse" id="SVGID_2_" x1="18.8903751" x2="26.6321716" y1="9.4531202" y2="17.1949158"><stop offset="0" style="stop-color:#000000;stop-opacity:0.1"/><stop offset="1" style="stop-color:#000000;stop-opacity:0"/></linearGradient><path d="M21,7.3434954V21h1c1.1025391,0,2-0.8969727,2-2V5.1254902L21,7.3434954z" fill="url(#SVGID_2_)"/><polygon fill="#F5F5F5" points="21.499939,3 2.500061,3 12,10.3125  "/><path d="M24,5.1304321V5c0-1.1030273-0.8974609-2-2-2h-0.500061L12,10.3125L2.500061,3H2   C0.8974609,3,0,3.8969727,0,5v0.1304932l12,9.0661459L24,5.1304321z" fill="#D32F2F"/><linearGradient gradientUnits="userSpaceOnUse" id="SVGID_3_" x1="1.5279056" x2="21.46105" y1="1.2802522" y2="10.5752296"><stop offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/><stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/></linearGradient><path d="M24,5.1304321V5c0-1.1030273-0.8974609-2-2-2h-0.500061L12,10.3125L2.500061,3H2   C0.8974609,3,0,3.8969727,0,5v0.1304932l12,9.0661459L24,5.1304321z" fill="url(#SVGID_3_)"/><path d="M12,13.9465942L0.0112305,4.8889771C0.0090942,4.9264526,0,4.9619751,0,5v0.1304932l12,9.0661011   l12-9.0661621V5c0-0.0380249-0.0090942-0.0735474-0.0112305-0.111084L12,13.9465942z" opacity="0.1"/><path d="M22,20.75H2c-1.1025391,0-2-0.8969727-2-2V19c0,1.1030273,0.8974609,2,2,2h20c1.1025391,0,2-0.8969727,2-2   v-0.25C24,19.8530273,23.1025391,20.75,22,20.75z" opacity="0.1"/><linearGradient gradientUnits="userSpaceOnUse" id="SVGID_4_" x1="23.7147064" x2="23.9944" y1="4.1656036" y2="4.4452972"><stop offset="0" style="stop-color:#000000;stop-opacity:0.1"/><stop offset="1" style="stop-color:#000000;stop-opacity:0"/></linearGradient><path d="M23.7775879,4.1027222L23.7775879,4.1027222   c0.0650024,0.1281738,0.1158447,0.2643433,0.1539307,0.4054565C23.8951416,4.3657837,23.8427124,4.2310791,23.7775879,4.1027222z" fill="url(#SVGID_4_)"/><linearGradient gradientUnits="userSpaceOnUse" id="SVGID_5_" x1="23.8411255" x2="24.1003418" y1="4.6404419" y2="4.8996582"><stop offset="0" style="stop-color:#000000;stop-opacity:0.1"/><stop offset="1" style="stop-color:#000000;stop-opacity:0"/></linearGradient><path d="M23.9414673,4.5401001C23.9785767,4.6875,24,4.8408813,24,5   C24,4.8410645,23.9766235,4.6884155,23.9414673,4.5401001z" fill="url(#SVGID_5_)"/><linearGradient gradientUnits="userSpaceOnUse" id="SVGID_6_" x1="6.5011444" x2="25.3809357" y1="-0.4336395" y2="18.4461517"><stop offset="0" style="stop-color:#000000;stop-opacity:0.1"/><stop offset="1" style="stop-color:#000000;stop-opacity:0"/></linearGradient><path d="M0.5337524,5.5337524L16,21h6c1.1025391,0,2-0.8969727,2-2V5.1304321l-12,9.0661621   L0.5337524,5.5337524z" fill="url(#SVGID_6_)"/><path d="M22,3H2C0.8974609,3,0,3.8969727,0,5v0.25c0-1.1030273,0.8974609-2,2-2h20   c1.1025391,0,2,0.8969727,2,2V5C24,3.8969727,23.1025391,3,22,3z" fill="#FFFFFF" opacity="0.2"/><linearGradient gradientUnits="userSpaceOnUse" id="SVGID_7_" x1="-0.7076151" x2="24.7076149" y1="6.0743418" y2="17.9256592"><stop offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/><stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/></linearGradient><path d="M22,3H2C0.8974609,3,0,3.8969727,0,5v14c0,1.1030273,0.8974609,2,2,2h20   c1.1025391,0,2-0.8969727,2-2V5C24,3.8969727,23.1025391,3,22,3z" fill="url(#SVGID_7_)"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>
          </a>
        </div>
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

.join-contact {
  text-transform: uppercase;
  text-decoration: underline;
  color: var(--black);
}
.social-icons {
  display: flex;
  flex-direction: row;
  padding: 2rem 0;
}
.social-icons svg {
    padding: 0 1em 0 0;
    height: 2rem;
}

.social-icons a {
  width: 3rem;
  height: 3rem;
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
