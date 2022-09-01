<template>
    <div class="join">
        <header-component/>

      <div class=join-us>
         <div class="join-info">
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus est vitae dolorem sint cumque, quibusdam aut repellendus adipisci animi aliquam.</p>
         </div>
         <div class="contact-image">
            <img src="#"/>
         </div>
        <div class="join-form">
            <input required name="join-name" v-model='contact.name' placeholder="Ime" type="text" autocomplete="off" class="contact-name">
            <input required name="join-email" v-model="contact.email" placeholder="E-mail" type="email" autocomplete="off" class="contact-email">
            <textarea name="join-message" v-model="contact.message" rows="4" placeholder="Poruka" class="contact-message"></textarea>
            <button class="join-submit"  @submit="onSubmit">Pošalji</button>
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
       components: {
      HeaderComponent, ContactForm, FooterComponent
      
  },
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
    
        
   