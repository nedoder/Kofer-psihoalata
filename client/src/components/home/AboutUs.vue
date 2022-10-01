<template>
    <div id="about-us">  
        <div class="about-us">
            <div class="about-text">
                <h3>O nama</h3>
                <p>Nevladina organizacija “PORTRET” iz Bara sprovodi projekat “KOFER PSIHO-ALATA” podržan kroz
                    program “Odgovorno i solidarno: građani preuzimaju inicijativu, koji realizuje Fond za aktivno
                    građanstvo iz Podgorice - fAKT, u partnerstvu sa nevladinim organizacijama Udruženje roditelja
                    djece sa teškoćama u razvoju “Zračak nade” i Aktivna zona, uz finansijsku podršku Evropske unije i
                    kofinansiranje Ministarstva javne uprave.
                </p>
                <br/>
                <div class="more-about" v-if="more===true">
                    <p>
                        “KOFER PSIHO - ALATA” je program podrške za prelazak u odraslo doba, namijenjen mladima (15 - 29
                        godina) opštine Bar, a zbog svojih digitalnih karakteristika biće dostupan svim mladim stanovnicima
                        Crne Gore. Ima za cilj stvaranje psihološke otpornosti u tranzitnom periodu adolescencije, razvijanje
                        vještina neophodnih za zdrav razvoj u savremenom, postcovid dobu i budjenje aktivizma u oblasti
                        mentalnog zdravlja. Zamišljen je kao dvopla ormni program: Prva pla orma predstavlja ciklus od
                        pet psiholoških radionica u okviru kojih će mladi imati priliku da se upoznaju sa ličnim strategijama
                        brige o mentalnom zdravlju i budu osnaženi za zdrav dalji razvoj. Druga platforma podrazumijeva
                        kreiranje digitalnog prostora na domenu koferpsihoalata.me i ima za cilj da okuplja mlade u
                        virtuelnom prostoru koji treba da posluži kao alat podrške, edukacije, angažovanja i komunikacije na
                        relevantne teme u oblasti mentalne higijene. Ovaj virtuelni prostor će nuditi relevantne informacije iz
                        oblasti mentalnog zdravlja, kroz kontakt i komunikaciju će uticati na suzbijanje stigme u vezi sa
                        temama iz ove oblasti , podsticati mlade da se angažuju u vezi sa ovim temama čime će se na
                        svojevrstan način njegovati ideja mentalnog zdravlja u zajednici. Svaki “alat” pojedinačno ima
                        podciljeve. Podrška: virtuelni prostor ima za cilj da obezbijedi relevantne informacije u oblasti
                        mentalnog zdravlja i higijene i da odgovori na brojna pitanja iz ove oblasti . Takođe, ima za cilj da
                        predstavi relevantnu i provjerenu bazu podataka u vezi sa institucijama koje se bave mentalnim
                        zdravljem, licenciranim psihoterapeutima, grupama podrške. Edukacija: virtuelni prostor ima za cilj
                        da edukuje i odgovori na pitanja mladih iz oblasti mentalnog zdravlja i da pruži informacije i da
                        kreira “abecedu mentalnog zdravlja”. Kroz “abecedu mentalnog zdravlja” na stručan i naučno
                        relevantan način biće odgovoreno na brojna pitanja kao što su npr. Šta je mentalno zdravlje? Koja je
                        razlika između psihologa, psihoterapeuta i psihijatra? Kada je potrebno da se javim za stručnu
                        pomoć ? Šta je stigma? i slično. Angažovanje: virtuelni prostor ima za cilj da angažuje mlade ljude da
                        izraze i podijele stavove o mentalnom zdravlju i higijeni na kreativan način. Ideja nam je da kroz
                        eseje, pitanja, kreiranje video ili audio sadržaja oslušnemo šta je za mlade mentalno zdravlje, na koji
                        način razmišljaju o mentalnom zdravlju u zajednici, kako njeguju mentalno zdravlje, koje probleme
                        vide u zajednici vezano za temu mentalnog zdravlja i higijene. Komunikacija: virtuelni prostor ima za
                        cilj da pokrene komunikaciju između mladih između sebe ali i mladih i stručne zajednice kroz formu
                        foruma u kojem bi se diskutovalo o percepcijama problema sa kojima se mladi najčešće susreću u
                        oblasti mentalnog zdravlja. Na taj način ojačavala bi se mreža podrške i razumijevanje tema od
                        značaja iz oblasti mentalnog zdravlja, ne samo kroz saradnju sa stručnim licima - nego iz kroz peer
                        komunikaciju.
                    </p>
                    <br/>
                    <p>
                        Ono što želimo da dostignemo je stvaranje adekvatnog sistema podrške za razvijanje psihološke
                        otpornosti kod mladih kako bi kao kompetentni pojedinci (samosvjesni, inova +tivni, otvoreni,
                        tolerantni, osnaženi, kreativni, produktivni) prelazili u odraslo doba, samim tim bili zdravi i
                        perspektivni članovi zajednice.
                    </p>
                    <br/>
                    <p>
                        Koordinatorka projekta je Olja Popović, digitalnu platformu će stvarati softwer developer Tatjana
                        Doderović, a radionice će voditi Jovana Strugar i Branka Ćalasan, psihološkinje i psihoterapeutkinje.
                        Mladi zainteresovani da pohađaju radionice i/ili učestvuju u kreiranju sadržaja digitalne platforme,
                        se mogu prijaviti putem mail adrese <a href="mailto: nvoportret@gmail.com">nvoportret@gmail.com</a>.
                    </p>
                    <p>
                        Projekat traje od maja 2022. do juna 2023.godine.
                    </p>
                    <br/>
                </div>
                <button @click=toggleMore class="about-toggle">Prikaži više</button>
            </div>
            <div class="about-image">
               <img src="../../assets/about.webp" alt="About us"/>
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
.about-toggle {
    display: block;
    border: 1px solid var(--dark-pink);
    color: var(--dark-pink);
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
    color: var(--dark-pink)
}
.about-toggle:hover {
    transform: scale(0.97);
}
/* ABOUT US SECTION */
#about-us {
    width: 100%;
    padding: 0 calc(5% + 1rem);
    padding-top: 5rem;
}

#about-us h3 {
    font-family: 'Ribeye Marrow', cursive;
    font-size: 3rem;
    color: var(--light-black);
    margin: 2rem 0;
}
.about-us {
    margin: 4rem 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

@media (max-width: 768px) {
    .about-image {
        display: none;
    }
    #about-us h3 {
        font-size: 2.5rem;
    }
    .about-text {
        text-align: justify;
    }
}
</style>