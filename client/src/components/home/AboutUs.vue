<template>
    <div id="about-us">  
        <div class="about-us">
            <div class="about-text">
                <h3>O nama</h3>
                <p>
                    <strong>ŠTA JE U KOFERU?</strong><br/><br/>
                    U Koferu se nalaze alati za zaštitu mentalnog zdravlja mladih, koje je brojnim faktorima koje nosi savremeno doba,
                    potencijalno ugroženo, kao i alati za unaprijedjenje mentalno-zdravstvene pismenosti mladih pojedinaca, grupa i zajednice u cjelini.
                    Alati će poslužiti u razvoju psihološke otpornosti i lakšeg suočavanja sa izazovima odrastanja.<br/>
                    „Kofer psiho-alata“ ima dvije pregrade za pakovanje. U prvoj se nalaze radionice, a u drugoj digitalna platforma koju smo kreirali.
                    Ciklus od pet psiholoških radionica u okviru kojih će mladi imati priliku da se upoznaju sa ličnim strategijama brige 
                    o mentalnom zdravlju i budu osnaženi za zdrav dalji razvoj su organizovani po sljedećim temama:<br/>
                    <ul class="list">
                        <li>Psihološki autoportret</li>
                        <li>Drveće mentalnog zdravlja</li>
                        <li>Emocionica</li>
                        <li>Ja i drugi</li>
                    </ul>
                    U drugoj pregradi sa digitalnim sadržajem „Kofera psiho-alata“ se okupljaju mladi ljudi koji 
                    mogu pronaći ili kreirati alate za podršku, edukaciju, angažovanje i
                    komunikaciju na relevantne teme koje se tiču mentalne higijene.
                </p>
                <br/>
                <div class="more-about" v-if="more===true">
                    <p>
                        <strong>KOME TREBA OVAJ KOFER?</strong><br/><br/>
                        Kofer psiho-alata je namijenjen mladima od 15 do 29 godina. Bilo da su izazovi sa mentalnim
                        zdravljem dio ličnog ili dio iskustva iz neposredne okoline, važno je i korisno razviti vještine koje služe
                        kreiranju kvalitetnijeg i boljeg života, ili se mogu koristiti pri pružanju podrške drugima.
                    </p>
                    <br/>
                    <p>
                        <strong>KAKO DA SE UKLjUČIŠ?</strong><br/><br/>
                        <strong>Kreiranje sadržaja:</strong> Bavljenje mentalnim zdravljem može da bude vrlo kreativno. U virtuelnom
                        prostoru je moguće kreirati različite sadržaje: eseje, priče, video ili audio snimke na teme u vezi sa
                        mentalnim zdravljem, bilo da se radi o mentalnoj njezi, podršci ili prepoznavanju izazova.<br/>
                    </p>
                    <br/>
                    <p>
                        <strong>ZAŠTO SMO KREIRALI KOFER PSIHO-ALATA?</strong><br/><br/>
                        Istraživanja, napravljena u protekle tri godine, pokazala su da mladi ljudi predstavljaju ranjivu grupu,
                        te da je 92,2 % od 200 mladih u Baru nezadovoljno svojim životima i prilikama u kojima se nalaze.
                        Situacija izazvana virusom korona je potom doprinijela širenju opsega psihičkih bolesti, a posledično i
                        većoj stopi suicida. Digitalne generacije imaju dodatne izazove u toj situaciji.<br/>
                        S obzirom na takvo stanje, kreiran je “Kofer psiho-alata”, koji mladima pruža direktnu podršku u
                        prevenciji, zaštiti i očuvanju mentalnog zdravlja, kao i razvoju psihološke otpornosti i adekvatnom
                        prelasku u odraslo doba.
                    </p>
                    <br/>
                    <p>
                        <strong>KO SU KREATORI KOFERA PSIHO-ALATA?</strong><br/><br/>
                        Nevladina organizacija “Portret” iz Bara je okupila tim stručnjaka u cilju realizacije projekta “Kofer
                        psiho alata” podržanog kroz program “Odgovorno i solidarno: građani preuzimaju inicijativu, koji
                        realizuje Fond za aktivno građanstvo iz Podgorice - fAKT, u partnerstvu sa NVO Udruženje roditelja
                        djece sa teškoćama u razvoju “Zračak nade” i Aktivna zona, uz finansijsku podršku Evropske unije i
                        kofinansiranje Ministarstva javne uprave.<br/>
                        Koordinatorka projekta je Olja Popović, digitalnu platformu će stvarati softver developer Tatjana
                        Doderović, a radionice će voditi Jovana Strugar i Branka Ćalasan, psihološkinje i psihoterapeutkinje.
                    </p>
                    <br/>
                </div>
                <button @click=toggleMore class="about-toggle">Prikaži više</button>
            </div>
            <div class="about-image">
               <img src="../../assets/about.webp" class="about-desktop" alt="About us"/>
               <img src="../../assets/about-mobile.webp" class="about-mobile" alt="About us">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
       name: 'About-us',
       data: () => ({
            more: false,
       }),
       methods: {
        toggleMore(e) {
            this.more = !this.more
            if(e.target.innerHTML === 'Prikaži više') {
                e.target.innerHTML = 'Prikaži manje'
            } else {
                e.target.innerHTML = 'Prikaži više'
            }
            
        }
       }
    }
</script>

<style scoped>

/* SHOW MORE BUTTON */
.about-toggle {
    display: block;
    text-align: center;
    margin: 0 auto;
    width: 10rem;
    position: relative;
    border-radius: 1rem;
    padding: .5rem 0;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    backdrop-filter: blur(1rem);
    transition: all .5s ease;
}
.more-about a {
    text-decoration: underline;
}
.about-toggle:hover {
    transform: scale(0.97);
}

/* ABOUT US SECTION */
#about-us {
    width: 100%;
    padding: 0 calc(5% + 1rem);
    padding-top: 2rem;
}

#about-us h3 {
    margin: 2rem 0;
}
.about-us {
    margin: 4rem 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

ul.list {
    list-style: circle;
    list-style-type: circle;
}
.list li {
    list-style-type: circle;
    margin: 0 2rem;
}
@media (min-width: 1200px) {
  img.about-mobile {
    display: none;
  }
}

@media (max-width: 1200px) {
  img.about-desktop {
    display: none;
  }
}


@media (max-width: 768px) {
  .about-image {
      display: none;
  }
  .about-text {
      text-align: justify;
  }
}
</style>